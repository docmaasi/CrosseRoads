import { CalendarCheck, Mail, Map } from 'lucide-react';
import { PACKAGE_ITEMS, ADDITIONAL_SERVICES, ROADMAP_FAQ } from './data/package';
import { BRAND } from '../career-pathfinder/branding';

/** Hero for the First-Time College Parent Roadmap package. */
export function RoadmapHero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[-10%] h-64 w-64 rounded-full bg-[#e8a33d]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-2xl px-4 pb-2 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2e7d8c]/25 bg-white/80 px-4 py-1.5 text-sm text-[#1e4d5c] shadow-sm">
          <Map className="h-4 w-4 text-[#c2703e]" aria-hidden="true" />
          For first-time college parents
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#1e4d5c]">
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
      </div>
    </div>
  );
}

/** What's in the package. */
export function PackageContents() {
  return (
    <section id="package" aria-labelledby="package-heading" className="scroll-mt-16">
      <h2 id="package-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
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
              <p className="flex items-center gap-1.5 font-semibold text-[#1e4d5c]">
                <CalendarCheck className="h-4 w-4 shrink-0 text-[#c2703e]" aria-hidden="true" />
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
              {item.href && (
                <p className="mt-1.5 text-xs font-medium text-[#2e7d8c]">
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

/** Bookable services + contact. */
export function ServicesMenu() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-16">
      <h2 id="services-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
        Work with Dr. Crosse
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Every family is different — book exactly the help yours needs.
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {ADDITIONAL_SERVICES.map((service) => (
          <li
            key={service}
            className="flex gap-2 rounded-xl border border-stone-200 bg-white p-3.5 text-sm text-stone-700 shadow-sm"
          >
            <span className="text-[#e8a33d]">✦</span>
            {service}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${BRAND.contactEmail}?subject=Parent%20Roadmap%20inquiry`}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1e4d5c] px-7 py-3 font-medium text-white shadow-lg shadow-[#1e4d5c]/25 transition-all hover:scale-[1.02] hover:bg-[#2e7d8c]"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Ask about the Roadmap
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
        className="text-center font-serif text-2xl font-bold text-[#1e4d5c]"
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
