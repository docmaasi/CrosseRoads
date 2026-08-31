const ROWS = [
  { key: 'interest', label: 'Interest' },
  { key: 'talent', label: 'Talent' },
  { key: 'personality', label: 'Personality' },
  { key: 'education', label: 'Education' },
  { key: 'lifestyle', label: 'Lifestyle' },
];

function ratingLabel(score) {
  if (score >= 80) return 'Strong';
  if (score >= 65) return 'Good';
  if (score >= 50) return 'Fair';
  return 'Low';
}

function barColor(score) {
  if (score >= 80) return 'bg-[#2e7d8c]';
  if (score >= 65) return 'bg-[#e8a33d]';
  if (score >= 50) return 'bg-amber-300';
  return 'bg-rose-300';
}

/** The five-dimension "reality check" bars for one career match. */
export function RealityCheck({ dimensions }) {
  return (
    <div className="space-y-1.5">
      {ROWS.map(({ key, label }) => {
        const score = Math.round(dimensions[key]);
        return (
          <div key={key} className="flex items-center gap-2 text-xs">
            <span className="w-20 shrink-0 text-stone-500">{label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-stone-100">
              <div
                className={`h-full rounded-full ${barColor(score)}`}
                style={{ width: `${score}%` }}
              />
            </div>
            <span className="w-12 shrink-0 text-right font-medium text-stone-600">
              {ratingLabel(score)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
