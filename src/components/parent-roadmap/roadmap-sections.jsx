import { ArrowRight, CalendarCheck, Heart, Map } from 'lucide-react';
import { PACKAGE_ITEMS, ROADMAP_FAQ } from './data/package';
import { BRAND } from '../career-pathfinder/branding';
import { PhotoBanner } from '../career-pathfinder/photo-banner';
import { HeroLaurels } from '../career-pathfinder/brand-decor';

/** Hero for the First-Time College Parent Roadmap package. */
export function RoadmapHero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[-10%] h-64 w-64 rounded-full bg-[#e8a33d]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-[30%] h-64 w-64 rounded-full bg-[#7a3e9d]/10 blur-3xl"
      />
      <HeroLaurels />
      <div className="relative mx-auto max-w-2xl px-4 pb-2 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#17808d]/25 bg-white/80 px-4 py-1.5 text-sm text-[#4a2373] shadow-sm">
          <Map className="h-4 w-4 text-[#7a3e9d]" aria-hidden="true" />
          For first-time college parents
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight bg-gradient-to-r from-[#4a2373] via-[#6b2f9c] to-[#17808d] bg-clip-text text-transparent">
          The First-Time College Parent Roadmap
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
          Most services stop at essays and applications. This roadmap guides
          your family through the entire journey — junior year through college
          move-in — with tools you can use today and Dr. Crosse beside you for
          the decisions that matter.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">
          {BRAND.byline} — who has navigated admissions and scholarships as a mom, more than once
        </p>

        <PhotoBanner
          name="hero-parents"
          shape="hero"
          className="mt-8"
          alt="A father and his teenage daughter sit together on a porch swing early in the morning, holding mugs and talking."
        />
      </div>
    </div>
  );
}

/** What's in the package. */
export function PackageContents() {
  return (
    <section id="package" aria-labelledby="package-heading" className="scroll-mt-16">
      <h2 id="package-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
        What&apos;s inside
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {PACKAGE_ITEMS.map((item) => {
          const Wrapper = item.href ? 'a' : 'div';
          return (
            <Wrapper
              key={item.title}
              {...(item.href ? { href: item.href } : {})}
              className={`rounded-2xl border border-stone-200 bg-white p-4 shadow-sm ${
                item.href ? 'transition-all hover:-translate-y-0.5 hover:shadow-md' : ''
              }`}
            >
              <p className="flex items-center gap-1.5 font-semibold text-[#4a2373]">
                <CalendarCheck className="h-4 w-4 shrink-0 text-[#7a3e9d]" aria-hidden="true" />
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
              {item.href && (
                <p className="mt-1.5 text-xs font-medium text-[#17808d]">
                  {item.href.startsWith('#') ? 'Use it below ↓' : 'Open it now →'}
                </p>
              )}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Hand-off to the consulting page. The priced packages and the à la
 * carte services live on /WorkWithMe now, so this page carries one
 * pointer instead of a second, unpriced service menu.
 */
export function ServicesMenu() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-16">
      <a
        href="/WorkWithMe"
        className="group flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-[#33184f] via-[#4a2373] to-[#17546b] p-6 text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:flex-row sm:items-center"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8a33d]">
          <Heart className="h-6 w-6 text-[#33184f]" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <h2 id="services-heading" className="font-serif text-2xl font-bold">
            Work with Dr. Crosse
          </h2>
          <p className="mt-1 text-sm text-white/85">
            The tools on this page are free. When your family wants a guide
            beside you — strategy sessions, essay reviews, a full application
            season — see the consulting packages, from $500.
          </p>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#4a2373] transition-colors group-hover:bg-[#e8a33d] group-hover:text-[#33184f]">
          See packages
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}

/** FAQ accordion mirroring the JSON-LD. */
export function RoadmapFaq() {
  return (
    <section id="faq" aria-labelledby="roadmap-faq-heading">
      <h2
        id="roadmap-faq-heading"
        className="text-center font-serif text-2xl font-bold text-[#4a2373]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-5 space-y-2">
        {ROADMAP_FAQ.map((item) => (
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
