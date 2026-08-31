const CHALLENGE_STEPS = [
  'Research each career.',
  'Watch or interview someone who does the job.',
  'Identify the education or certifications required.',
  'Find one internship, shadowing, volunteer or entry-level opportunity.',
  'Compare what you learned with your Career Pathfinder results.',
];

/** Closing section: top 3 careers to investigate + 30-day challenge. */
export function NextMove({ matches }) {
  const topThree = matches.slice(0, 3);

  return (
    <div className="rounded-xl border-2 border-[#e8a33d]/50 bg-[#e8a33d]/5 p-5">
      <h3 className="font-serif text-lg font-bold text-[#1e4d5c]">Your next move</h3>
      <p className="mt-1 text-sm text-stone-600">
        Your career does not have to be decided today. Your goal is to identify
        pathways worth exploring.
      </p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
        Your top 3 careers to investigate
      </p>
      <ol className="mt-1 list-decimal pl-5 text-sm font-medium text-stone-800">
        {topThree.map((match) => (
          <li key={match.career.id}>{match.career.name}</li>
        ))}
      </ol>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
        Your 30-day career exploration challenge
      </p>
      <ul className="mt-1 space-y-1 pl-1 text-sm text-stone-700">
        {CHALLENGE_STEPS.map((step) => (
          <li key={step} className="flex gap-2">
            <span className="text-[#e8a33d]">✦</span>
            {step}
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-[#e8a33d]/30 pt-3 text-sm italic text-stone-600">
        Career success begins with knowing yourself — and then putting yourself
        in environments where your talents can grow.
      </p>
    </div>
  );
}
