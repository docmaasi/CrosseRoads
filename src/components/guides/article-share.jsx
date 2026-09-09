import { Check, Link2, Mail } from 'lucide-react';
import { useState } from 'react';

/**
 * Share links for an article.
 *
 * These are plain anchors to each network's share endpoint, not embedded
 * widgets. That is the only shape available under this site's CSP — a real
 * share button loads a third-party script and sets a third-party cookie, both
 * of which are blocked — and it is also the better trade: no tracker follows a
 * parent around the internet because they shared a guide about paying for
 * college.
 */

function shareTargets(url, title) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const via = encodeURIComponent(
    `${title} — a free guide from CrosseRoads by Dr. Kisa Crosse`,
  );
  return [
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: 'X', href: `https://twitter.com/intent/tweet?url=${u}&text=${via}` },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    { name: 'WhatsApp', href: `https://api.whatsapp.com/send?text=${via}%20${u}` },
    { name: 'Reddit', href: `https://www.reddit.com/submit?url=${u}&title=${t}` },
  ];
}

export function ArticleShare({ title, path }) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window === 'undefined' ? path : `${window.location.origin}${path}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is blocked in some browsers and every private window. The
      // share links beside this still work, so fail quietly.
    }
  };

  return (
    <div className="cp-no-print mt-10 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="font-serif text-lg font-bold text-[#4a2373]">
        Know a family who needs this?
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-stone-600">
        Every tool and guide on CrosseRoads is free, with no account and no cost.
        Passing one along costs you nothing and might save someone a year.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {shareTargets(url, title).map((target) => (
          <a
            key={target.name}
            href={target.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone-300 px-3.5 py-1.5 text-sm text-stone-600 transition-colors hover:border-[#17808d] hover:text-[#4a2373]"
          >
            {target.name}
          </a>
        ))}
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
            `I thought this might help:\n\n${title}\n${url}\n\nIt is from CrosseRoads, a free platform by Dr. Kisa Crosse.`,
          )}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-3.5 py-1.5 text-sm text-stone-600 transition-colors hover:border-[#17808d] hover:text-[#4a2373]"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          Email
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-3.5 py-1.5 text-sm text-stone-600 transition-colors hover:border-[#17808d] hover:text-[#4a2373]"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-[#116a75]" aria-hidden="true" />
          ) : (
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {copied ? 'Link copied' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}

/** Who wrote this, and why that matters — printed at the foot of every guide. */
export function AuthorBio() {
  return (
    <aside
      aria-label="About the author"
      className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#e8a33d]/30 bg-white p-5 shadow-sm sm:flex-row sm:items-start"
    >
      <picture className="mx-auto w-28 shrink-0 sm:mx-0">
        <source
          type="image/avif"
          srcSet="/images/dr-crosse-280.avif 280w, /images/dr-crosse-560.avif 560w"
          sizes="112px"
        />
        <img
          src="/images/dr-crosse-560.webp"
          srcSet="/images/dr-crosse-280.webp 280w, /images/dr-crosse-560.webp 560w"
          sizes="112px"
          width={560}
          height={560}
          loading="lazy"
          decoding="async"
          alt="Dr. Kisa Crosse, a family physician, in a white coat embroidered with her name and Family Medicine."
          className="w-full rounded-2xl"
        />
      </picture>

      <div>
        <h2 className="font-serif text-lg font-bold text-[#4a2373]">
          About Dr. Kisa Crosse
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-700">
          Kisa Crosse, M.D. is a board-certified family physician in Maryland who
          has spent more than two decades looking after families through
          everything that happens to them — including the year their child
          applies to college. She is also a mother who has navigated admissions,
          essays and financial aid at her own kitchen table, more than once, and
          the founder of CrosseRoads, where she now does for other families what
          she once had to work out alone.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          That combination is the point. The medicine is why these guides take
          the wellbeing of a stressed seventeen-year-old seriously. Being a
          parent is why they take the wellbeing of the adult seriously too.
          Running the practice is why nothing here is sold to you before it has
          been given to you.
        </p>
        <p className="mt-3 text-sm">
          <a
            href="/WorkWithMe"
            className="font-medium text-[#4a2373] underline underline-offset-2 hover:text-[#17808d]"
          >
            Work with Dr. Crosse
          </a>
          <span className="text-stone-500"> · </span>
          <a
            href="/Worksheets"
            className="font-medium text-[#4a2373] underline underline-offset-2 hover:text-[#17808d]"
          >
            Free printable worksheets
          </a>
        </p>
      </div>
    </aside>
  );
}
