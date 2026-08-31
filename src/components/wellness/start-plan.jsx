import { LEVEL_GUIDES, FOCUS_GUIDES } from './data/plan-guides';

const chip = (isActive) =>
  `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
    isActive
      ? 'border-[#1e4d5c] bg-[#1e4d5c] text-white'
      : 'border-stone-200 bg-white text-stone-700 hover:border-[#2e7d8c]'
  }`;

/** "Start where you are": pick a level + focus areas, get a starting plan. */
export function StartPlan({ level, focus, setProfile }) {
  const guide = LEVEL_GUIDES.find((g) => g.id === level);
  const toggleFocus = (id) =>
    setProfile(
      level,
      focus.includes(id) ? focus.filter((f) => f !== id) : [...focus, id],
    );

  return (
    <section id="start" aria-labelledby="start-heading" className="scroll-mt-16">
      <h2 id="start-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
        Start where you are
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Two questions, honest answers — and a realistic starting point appears.
      </p>

      <p className="mt-4 text-sm font-medium text-stone-700">
        How active are you right now?
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {LEVEL_GUIDES.map((g) => (
          <button
            key={g.id}
            type="button"
            aria-pressed={level === g.id}
            className={chip(level === g.id)}
            onClick={() => setProfile(g.id, focus)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm font-medium text-stone-700">
        What matters most right now? (pick any)
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {FOCUS_GUIDES.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={focus.includes(f.id)}
            className={chip(focus.includes(f.id))}
            onClick={() => toggleFocus(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {guide && (
        <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h3 className="font-serif text-lg font-bold text-[#1e4d5c]">
            {guide.headline}
          </h3>
          <ul className="mt-2 space-y-2">
            {guide.suggestions.map((tip) => (
              <li key={tip.slice(0, 30)} className="flex gap-2 text-sm text-stone-700">
                <span className="text-[#e8a33d]">✦</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
          {FOCUS_GUIDES.filter((f) => focus.includes(f.id)).map((f) => (
            <div
              key={f.id}
              className="mt-3 rounded-xl border border-[#e8a33d]/40 bg-[#e8a33d]/10 p-3.5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#b07514]">
                {f.label}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-stone-700">{f.note}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
