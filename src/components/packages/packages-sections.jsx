import { Check, Clock, Heart, Sparkles, Star, Zap } from 'lucide-react';
import {
  CONSULTING_TIERS,
  NOTE_FROM_KISA,
  PACKAGES_FAQ,
  POWER_HOUR,
  A_LA_CARTE,
} from './data/packages';
import { BRAND } from '../career-pathfinder/branding';
import { HeroLaurels } from '../career-pathfinder/brand-decor';
import { PhotoBanner } from '../career-pathfinder/photo-banner';

/** Hero for the Work With Dr. Crosse page. */
export function PackagesHero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[-10%] h-72 w-72 rounded-full bg-[#e8a33d]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-[-5%] h-72 w-72 rounded-full bg-[#17808d]/10 blur-3xl"
      />
      <HeroLaurels />
      <div className="relative mx-auto max-w-2xl px-4 pb-2 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#17808d]/25 bg-white/80 px-4 py-1.5 text-sm text-[#4a2373] shadow-sm">
          <Heart className="h-4 w-4 text-[#7a3e9d]" aria-hidden="true" />
          CrosseRoads College Consulting
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent sm:text-5xl">
          Helping families navigate the road to college — one step at a time
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
          The admissions process can feel overwhelming. My goal is to make it a
          little less stressful, a lot more organized, and to help your student
          take ownership of the process — while making sure parents know what
          should be happening behind the scenes.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">
          {BRAND.byline} — physician, educator &amp; mom
        </p>
        <p className="mx-auto mt-6 max-w-lg rounded-2xl border border-[#e8a33d]/40 bg-gradient-to-r from-[#e8a33d]/10 to-[#17808d]/10 px-5 py-3 text-sm text-stone-700">
          Every tool on this site stays free. What families invest in here is
          time with Dr. Crosse — the strategy, the essays, and the judgment
          that software can&apos;t give you.
        </p>
      </div>
    </div>
  );
}

function PoweredBy({ tools }) {
  return (
    <div className="mt-5 rounded-xl bg-[#f6f0fa] p-3.5">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a3e9d]">
        Powered by free CrosseRoads tools
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <li key={tool.href}>
            <a
              href={tool.href}
              target={tool.external ? '_blank' : undefined}
              rel={tool.external ? 'noopener noreferrer' : undefined}
              className="inline-block rounded-full border border-[#17808d]/30 bg-white px-2.5 py-1 text-xs font-medium text-[#17808d] transition-colors hover:bg-[#17808d] hover:text-white"
            >
              {tool.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TierCard({ tier }) {
  const shell = tier.featured
    ? 'border-2 border-[#4a2373] bg-white shadow-xl shadow-[#4a2373]/15 ring-4 ring-[#4a2373]/5 sm:-my-3'
    : 'border border-stone-200 bg-white shadow-sm';

  return (
    <article
      id={tier.slug}
      className={`relative flex scroll-mt-20 flex-col rounded-3xl p-6 ${shell}`}
    >
      {tier.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#e8a33d] to-[#b07514] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
          <Star className="mr-1 inline h-3 w-3" aria-hidden="true" />
          {tier.badge}
        </span>
      )}
      <h3 className="font-serif text-2xl font-bold text-[#4a2373]">{tier.name}</h3>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="font-serif text-4xl font-bold text-[#17808d]">
          {tier.priceLabel}
        </span>
        <span className="text-sm text-stone-500">per family</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{tier.summary}</p>

      {tier.inheritsFrom && (
        <p className="mt-4 rounded-lg bg-[#17808d]/10 px-3 py-2 text-sm font-medium text-[#17808d]">
          Everything in {tier.inheritsFrom}, plus:
        </p>
      )}

      <ul className="mt-4 space-y-2">
        {tier.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-stone-700">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-[#e8a33d]"
              strokeWidth={3}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      <PoweredBy tools={tier.poweredBy} />

      <blockquote className="mt-5 border-l-2 border-[#e8a33d] pl-3 text-sm italic text-stone-600">
        Best for the family saying, &ldquo;{tier.bestFor}&rdquo;
      </blockquote>

      <a
        href={`#inquire?package=${tier.slug}`}
        onClick={(event) => {
          event.preventDefault();
          selectPackage(tier.slug);
        }}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium shadow-lg transition-all hover:scale-[1.02] ${
          tier.featured
            ? 'bg-[#4a2373] text-white shadow-[#4a2373]/25 hover:bg-[#17808d]'
            : 'border border-[#4a2373] bg-white text-[#4a2373] shadow-stone-200 hover:bg-[#4a2373] hover:text-white'
        }`}
      >
        Ask about this package
      </a>
    </article>
  );
}

/**
 * Pre-select a package in the inquiry form and scroll to it. The form
 * listens for this event so the cards never need a shared state hook.
 */
function selectPackage(slug) {
  window.dispatchEvent(new CustomEvent('crosseroads:select-package', { detail: slug }));
  document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** The three packages. */
export function TierGrid() {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="scroll-mt-16">
      <h2
        id="packages-heading"
        className="text-center font-serif text-3xl font-bold text-[#4a2373]"
      >
        Choose the support that fits your family
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-stone-600">
        Whether you need a little direction or a guide from junior year through
        application season, there&apos;s a package designed to meet you where you are.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {CONSULTING_TIERS.map((tier) => (
          <TierCard key={tier.slug} tier={tier} />
        ))}
      </div>
    </section>
  );
}

/** The $150 single-session entry point. */
export function PowerHourCard() {
  return (
    <section id="power-hour" aria-labelledby="power-hour-heading" className="scroll-mt-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#33184f] via-[#4a2373] to-[#17546b] p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e8a33d]">
              Need a little help without a package?
            </p>
            <h2 id="power-hour-heading" className="mt-2 font-serif text-3xl font-bold">
              <Zap className="mr-1.5 inline h-6 w-6 text-[#e8a33d]" aria-hidden="true" />
              {POWER_HOUR.name}
            </h2>
          </div>
          <p className="font-serif text-4xl font-bold text-[#e8a33d]">
            {POWER_HOUR.priceLabel}
          </p>
        </div>
        <p className="mt-3 max-w-xl text-white/85">{POWER_HOUR.summary}</p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#8fd3dd]">
          Possible topics
        </p>
        <ul className="mt-2 grid gap-1.5 text-sm text-white/90 sm:grid-cols-2">
          {POWER_HOUR.topics.map((topic) => (
            <li key={topic} className="flex gap-2">
              <span className="text-[#e8a33d]">✦</span>
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/15 bg-white/10 p-3.5 text-sm backdrop-blur">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#e8a33d]" aria-hidden="true" />
          {POWER_HOUR.creditNote}
        </p>
        <a
          href="#inquire?package=power-hour"
          onClick={(event) => {
            event.preventDefault();
            selectPackage('power-hour');
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e8a33d] px-6 py-3 font-medium text-[#33184f] shadow-lg transition-all hover:scale-[1.02] hover:bg-white"
        >
          Book a Power Hour
        </a>
      </div>
    </section>
  );
}

/** The à la carte track: single services, alone or alongside a package. */
export function PowerMomSection() {
  return (
    <section id="a-la-carte" aria-labelledby="a-la-carte-heading" className="scroll-mt-16">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8a33d] to-[#b07514] shadow-md">
          <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <div>
          <h2 id="a-la-carte-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
            {A_LA_CARTE.name}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8a33d]">
            {A_LA_CARTE.tagline}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{A_LA_CARTE.summary}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {A_LA_CARTE.services.map((service) => (
          <li
            key={service}
            className="flex gap-2 rounded-xl border border-stone-200 bg-white p-3.5 text-sm text-stone-700 shadow-sm"
          >
            <span className="text-[#e8a33d]">✦</span>
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Her closing note, in her voice. */
export function NoteFromKisa() {
  return (
    <section aria-labelledby="note-heading" className="rounded-3xl border border-[#e8a33d]/30 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <PhotoBanner
          name="dr-crosse"
          shape="portrait"
          rounded="rounded-2xl"
          sizes="(min-width: 640px) 200px, 60vw"
          overlayClassName="from-transparent via-transparent to-[#4a2373]/10"
          className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48"
          alt="Dr. Kisa Crosse, a family physician, in a white coat embroidered with her name and Family Medicine."
        />
        <div>
      <h2 id="note-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
        {NOTE_FROM_KISA.heading}
      </h2>
      <div className="mt-4 space-y-3 text-stone-700">
        {NOTE_FROM_KISA.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-5 font-serif text-xl font-bold bg-gradient-to-r from-[#4a2373] to-[#17808d] bg-clip-text text-transparent">
        {NOTE_FROM_KISA.closing}
      </p>
      <p className="mt-2 text-sm text-stone-500">— Dr. Kisa Crosse</p>
        </div>
      </div>
    </section>
  );
}

/** FAQ accordion mirroring the JSON-LD. */
export function PackagesFaq() {
  return (
    <section id="faq" aria-labelledby="packages-faq-heading">
      <h2
        id="packages-faq-heading"
        className="text-center font-serif text-2xl font-bold text-[#4a2373]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-5 space-y-2">
        {PACKAGES_FAQ.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-stone-200 bg-white px-5 py-3.5 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none font-medium text-stone-800 marker:content-none">
              <span className="mr-2 text-[#e8a33d]">✦</span>
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
