import { PLANNER_FAQ } from './use-planner-seo';

/** FAQ accordion (semantic details/summary, mirrors the SEO JSON-LD). */
export function PlannerFaq() {
  return (
    <section id="faq" aria-labelledby="planner-faq-heading">
      <h2
        id="planner-faq-heading"
        className="text-center font-serif text-2xl font-bold text-[#4a2373]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-5 space-y-2">
        {PLANNER_FAQ.map((item) => (
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
