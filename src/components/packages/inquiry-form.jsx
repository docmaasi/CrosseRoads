import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { CONSULTING_TIERS } from './data/packages';
import { BRAND } from '../career-pathfinder/branding';

/** Exported so a test can prove every option the form can submit is one the
  * API actually accepts. These two lists drifting apart means a family fills
  * in the form, presses send, and is told their inquiry is invalid. */
export const PACKAGE_OPTIONS = [
  { value: '', label: 'Not sure yet — help me choose' },
  ...CONSULTING_TIERS.map((tier) => ({ value: tier.slug, label: `${tier.name} (${tier.priceLabel})` })),
  { value: 'power-hour', label: 'Power Hour ($150)' },
  { value: 'a-la-carte', label: 'A single à la carte service' },
];

const GRADE_OPTIONS = [
  '',
  'Middle school',
  '9th grade',
  '10th grade',
  '11th grade (junior)',
  '12th grade (senior)',
  'Gap year / transfer',
];

const INITIAL = { name: '', email: '', grade: '', pkg: '', message: '', website: '' };

const inputClass =
  'mt-1 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-800 shadow-sm transition-colors placeholder:text-stone-500 focus:border-[#17808d] focus:outline-none focus:ring-2 focus:ring-[#17808d]/30';
const labelClass = 'block text-sm font-medium text-stone-700';

/**
 * Inquiry form — the only form on the site. Posts to /api/inquiry, which
 * emails Dr. Crosse. `website` is a honeypot: hidden from people, filled
 * by bots, and the API drops any submission that has it set.
 */
export function InquiryForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [startedAt] = useState(() => Date.now());

  // Honour /WorkWithMe?package=vip so the package CTAs work even when the
  // click handler never runs -- opened in a new tab, or JavaScript failed.
  // Validated against the real options so a crafted URL cannot inject a value.
  const [values, setValues] = useState(() => {
    const requested = searchParams.get('package');
    const known = PACKAGE_OPTIONS.some((option) => option.value === requested);
    return known ? { ...INITIAL, pkg: requested } : INITIAL;
  });

  // Package cards dispatch this to pre-select themselves.
  useEffect(() => {
    const onSelect = (event) => setValues((v) => ({ ...v, pkg: event.detail }));
    window.addEventListener('crosseroads:select-package', onSelect);
    return () => window.removeEventListener('crosseroads:select-package', onSelect);
  }, []);

  const update = (field) => (event) =>
    setValues((v) => ({ ...v, [field]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, elapsedMs: Date.now() - startedAt }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${response.status})`);
      }
      setStatus('sent');
      toast.success('Sent — Dr. Crosse will reply personally.');
    } catch (error) {
      setStatus('idle');
      toast.error(
        error.message === 'Failed to fetch'
          ? 'Could not reach the server. Check your connection and try again.'
          : error.message,
      );
    }
  }

  if (status === 'sent') {
    return (
      <section id="inquire" aria-labelledby="inquire-heading" className="scroll-mt-20">
        <div className="rounded-3xl border border-[#17808d]/30 bg-white p-8 text-center shadow-sm">
          <Mail className="mx-auto h-10 w-10 text-[#17808d]" aria-hidden="true" />
          <h2 id="inquire-heading" className="mt-3 font-serif text-2xl font-bold text-[#4a2373]">
            Thank you — your message is on its way
          </h2>
          <p className="mx-auto mt-2 max-w-md text-stone-600">
            Dr. Crosse reads every inquiry herself and will reply to{' '}
            <span className="font-medium text-stone-800">{values.email}</span> to
            confirm fit and find a time.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquire" aria-labelledby="inquire-heading" className="scroll-mt-20">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg shadow-[#4a2373]/5 sm:p-8">
        <h2 id="inquire-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
          Let&apos;s talk about your family
        </h2>
        <p className="mt-1.5 text-sm text-stone-600">
          Tell Dr. Crosse a little about where you are. She replies personally —
          no automated sales sequence, no pressure.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Your name
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                value={values.name}
                onChange={update('name')}
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={200}
                value={values.email}
                onChange={update('email')}
                className={inputClass}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Student&apos;s grade
              <select
                name="grade"
                value={values.grade}
                onChange={update('grade')}
                className={inputClass}
              >
                {GRADE_OPTIONS.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade || 'Select…'}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              Package of interest
              <select
                name="pkg"
                value={values.pkg}
                onChange={update('pkg')}
                className={inputClass}
              >
                {PACKAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className={labelClass}>
            What&apos;s on your mind?
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={3000}
              placeholder="Where is your student in the process, and what would be most helpful right now?"
              value={values.message}
              onChange={update('message')}
              className={inputClass}
            />
          </label>

          {/* Honeypot — invisible to people; anything here means a bot. */}
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              Leave this field empty
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={update('website')}
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-xs text-stone-500">
              Your message goes only to{' '}
              <a className="underline underline-offset-2" href={`mailto:${BRAND.contactEmail}`}>
                {BRAND.contactEmail}
              </a>
              . See our <a className="underline underline-offset-2" href="/Privacy">Privacy Policy</a>.
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-[#4a2373] px-7 py-3 font-medium text-white shadow-lg shadow-[#4a2373]/25 transition-all hover:scale-[1.02] hover:bg-[#17808d] disabled:pointer-events-none disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === 'sending' ? 'Sending…' : 'Send my inquiry'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
