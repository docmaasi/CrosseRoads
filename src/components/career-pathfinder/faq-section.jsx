import { BRAND } from './branding';

// Written as direct question → direct answer so search engines, answer
// engines (AEO) and AI assistants (GEO) can quote them verbatim. The
// same list feeds the FAQPage structured data in use-pathfinder-seo.
export const FAQ_ITEMS = [
  {
    question: `What is ${BRAND.productName}?`,
    answer:
      `${BRAND.productName} is a free online career assessment that matches you ` +
      'with careers based on seven factors: your education, talents, interests, ' +
      'passions, personality, work preferences, and lifestyle priorities. You get ' +
      'a personalized report with your top 10 career matches and concrete next steps.',
  },
  {
    question: 'How long does the career assessment take?',
    answer:
      'About 10 minutes. There are 36 questions across 7 short sections, and ' +
      'your progress is saved automatically so you can finish later.',
  },
  {
    question: 'Is the career assessment really free?',
    answer:
      'Yes — completely free. No account, no credit card, and no email required. ' +
      'Your answers stay on your device.',
  },
  {
    question: 'Who is the assessment for?',
    answer:
      'High school and college students choosing a direction, recent graduates, ' +
      'and adults considering a career change. There are no right or wrong answers.',
  },
  {
    question: 'How are my career matches calculated?',
    answer:
      'Each career is scored against your answers using weighted factors — talents ' +
      '(20%), interests (20%), personality (15%), education plans (15%), lifestyle ' +
      'goals (15%), passions (10%), and existing credentials (5%) — minus penalties ' +
      'for deal breakers you want to avoid. Scores of 85%+ are strong matches.',
  },
  {
    question: 'What do I get at the end?',
    answer:
      'Your top 5 strengths, your career personality type, your best-fit career ' +
      'families, 10 matched careers with education paths and honest reality checks, ' +
      'three actions you can take this month, and links to free official career data.',
  },
];

/** Accessible FAQ accordion (semantic details/summary for SEO/AEO). */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-2xl px-4 pb-14">
      <h2
        id="faq-heading"
        className="text-center font-serif text-2xl font-bold text-[#1e4d5c]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-5 space-y-2">
        {FAQ_ITEMS.map((item) => (
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
