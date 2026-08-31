import { ExternalLink } from 'lucide-react';
import { WELLNESS_RESOURCES } from './data/resources';
import { WELLNESS_FAQ } from './use-wellness-seo';

/** Official .gov resources grid. */
export function WellnessResources() {
  return (
    <section id="resources" aria-labelledby="wellness-resources-heading">
      <h2
        id="wellness-resources-heading"
        className="font-serif text-2xl font-bold text-[#1e4d5c]"
      >
        Trusted, free resources
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Official U.S. government health guidance — no products, no fads.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {WELLNESS_RESOURCES.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1e4d5c] group-hover:text-[#2e7d8c]">
              {resource.name}
              <ExternalLink
                className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
            <p className="mt-0.5 text-xs text-stone-500">{resource.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/** FAQ accordion mirroring the FAQPage JSON-LD. */
export function WellnessFaq() {
  return (
    <section id="faq" aria-labelledby="wellness-faq-heading">
      <h2
        id="wellness-faq-heading"
        className="text-center font-serif text-2xl font-bold text-[#1e4d5c]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-5 space-y-2">
        {WELLNESS_FAQ.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-stone-200 bg-white px-5 py-3.5 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none font-medium text-stone-800 marker:content-none">
              <span className="mr-2 text-[#e8a33d]">✦</span>
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
