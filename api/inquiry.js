// Inquiry endpoint — the only server-side code on crosseroads.com.
//
// Accepts the Work With Me form, applies bot and abuse defenses, and
// forwards the message to Dr. Crosse through Resend's REST API (plain
// fetch; no SDK). Nothing is stored anywhere: the request is validated,
// emailed, and forgotten.
//
// Environment (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY   required — from resend.com
//   INQUIRY_TO       optional — defaults to hello@crosseroads.com
//   INQUIRY_FROM     optional — must be a Resend-verified sender on the
//                    crosseroads.com domain; defaults to
//                    "CrosseRoads <inquiries@crosseroads.com>"

const DEFAULT_TO = 'hello@crosseroads.com';
const DEFAULT_FROM = 'CrosseRoads <inquiries@crosseroads.com>';

// Abuse limits. Generous for a human, hostile to a script.
const MAX_BODY_BYTES = 8 * 1024;
const MIN_FILL_MS = 3000; // a person cannot read and fill the form in 3s
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_PER_IP = 5;

const LIMITS = { name: 100, email: 200, grade: 40, pkg: 40, message: 3000 };
// 'power-mom' is the old id for 'a-la-carte'. It stays accepted because this
// is a PWA: a family whose service worker still holds the previous bundle
// would otherwise have their inquiry silently rejected.
const VALID_PKG = new Set([
  '',
  'kickstart',
  'college-plan',
  'vip',
  'power-hour',
  'a-la-carte',
  'power-mom',
]);
const PKG_LABEL = {
  '': 'Not sure yet',
  kickstart: 'The College Kickstart ($500)',
  'college-plan': 'The CrosseRoads College Plan ($1,250)',
  vip: 'The CrosseRoads VIP Experience ($2,000)',
  'power-hour': 'Power Hour ($150)',
  'a-la-carte': 'A single à la carte service',
  'power-mom': 'A single à la carte service',
};

// Per-instance memory. Vercel functions are short-lived, so this is a
// speed bump rather than a wall — the honeypot and timing checks carry
// most of the weight. Good enough for a single-consultant inquiry form.
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // never let the map grow unbounded
  return recent.length > RATE_MAX_PER_IP;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (Array.isArray(fwd) ? fwd[0] : fwd || '').split(',')[0].trim() || 'unknown';
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;

// Strip ASCII control characters (NUL through US, plus DEL). Written
// with escapes on purpose: literal control bytes in source once made
// this file unreadable to grep.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/g;

function clean(value, max) {
  return String(value ?? '').replace(CONTROL_CHARS, '').trim().slice(0, max);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

/** Returns { fields } or { error }. */
function validate(body) {
  if (!body || typeof body !== 'object') return { error: 'Invalid request.' };

  // Honeypot: real visitors never see this field.
  if (clean(body.website, 50)) return { error: 'Rejected.' };

  // Timing: bots submit instantly. Reject anything too fast, or missing.
  const elapsed = Number(body.elapsedMs);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return { error: 'Rejected.' };

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email).toLowerCase();
  const grade = clean(body.grade, LIMITS.grade);
  const pkg = clean(body.pkg, LIMITS.pkg);
  const message = clean(body.message, LIMITS.message);

  if (name.length < 2) return { error: 'Please enter your name.' };
  if (!EMAIL_RE.test(email)) return { error: 'Please enter a valid email address.' };
  if (!VALID_PKG.has(pkg)) return { error: 'Invalid package selection.' };
  if (message.length < 10) return { error: 'Please tell us a little more.' };
  // Header-injection guard: no newlines in anything that touches a header.
  if (/[\r\n]/.test(name) || /[\r\n]/.test(email)) return { error: 'Invalid characters.' };

  return { fields: { name, email, grade, pkg, message } };
}

async function sendEmail(fields) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured');

  const { name, email, grade, pkg, message } = fields;
  const subject = `CrosseRoads inquiry — ${PKG_LABEL[pkg]} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Student's grade: ${grade || '(not given)'}`,
    `Package: ${PKG_LABEL[pkg]}`,
    '',
    message,
  ].join('\n');
  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:600px">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Student's grade:</strong> ${escapeHtml(grade || '(not given)')}</p>
      <p><strong>Package:</strong> ${escapeHtml(PKG_LABEL[pkg])}</p>
      <hr style="border:0;border-top:1px solid #e7e5e4;margin:16px 0">
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM || DEFAULT_FROM,
      to: [process.env.INQUIRY_TO || DEFAULT_TO],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Resend ${response.status}: ${detail.slice(0, 200)}`);
  }
}

// Exported for tests.
export { validate };

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Same-origin only. Browsers always send Origin on cross-site POSTs.
  const origin = req.headers.origin;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (origin && host && new URL(origin).host !== host) {
    return res.status(403).json({ error: 'Forbidden.' });
  }

  const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {});
  if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
    return res.status(413).json({ error: 'Message too long.' });
  }

  if (rateLimited(clientIp(req))) {
    res.setHeader('Retry-After', '600');
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid request.' });
  }

  const { fields, error } = validate(body);
  // Bot rejections return 200 so scripts learn nothing from the response.
  if (error === 'Rejected.') return res.status(200).json({ ok: true });
  if (error) return res.status(400).json({ error });

  try {
    await sendEmail(fields);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[inquiry] send failed:', err.message);
    return res
      .status(502)
      .json({ error: 'We could not send your message just now. Please email us directly.' });
  }
}
