// Three small-multiple line charts (energy, mood, sleep), one series
// each on a single 1-5 axis — 2px line, 8px markers, latest value
// direct-labeled, native hover tooltips, entries table alongside.

const WIDTH = 260;
const HEIGHT = 90;
const PAD = { top: 12, right: 30, bottom: 8, left: 8 };

function TrendChart({ title, points }) {
  const plotW = WIDTH - PAD.left - PAD.right;
  const plotH = HEIGHT - PAD.top - PAD.bottom;
  const x = (i) =>
    PAD.left + (points.length === 1 ? plotW / 2 : (i / (points.length - 1)) * plotW);
  const y = (v) => PAD.top + ((5 - v) / 4) * plotH;
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i)} ${y(p.value)}`).join(' ');
  const last = points[points.length - 1];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#17808d]">
        {title}
      </p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mt-1 w-full"
        role="img"
        aria-label={`${title} trend, latest ${last.value} out of 5`}
      >
        <line
          x1={PAD.left}
          y1={y(1)}
          x2={WIDTH - PAD.right}
          y2={y(1)}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <path d={path} fill="none" stroke="#17808d" strokeWidth="2" strokeLinecap="round" />
        {points.map((p, i) => (
          <circle key={p.date} cx={x(i)} cy={y(p.value)} r="4" fill="#17808d" stroke="#ffffff" strokeWidth="2">
            <title>{`${p.date}: ${p.value}/5`}</title>
          </circle>
        ))}
        <text
          x={x(points.length - 1) + 8}
          y={y(last.value) + 4}
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          {last.value}
        </text>
      </svg>
    </div>
  );
}

/** Progress section: charts of the last 14 check-ins + the data itself. */
export function TrendCharts({ entries }) {
  const recent = entries.slice(-14);

  return (
    <section id="progress" aria-labelledby="progress-heading" className="scroll-mt-16">
      <h2 id="progress-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
        Your trends
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        {recent.length < 2
          ? 'Save at least two daily check-ins and your trend lines appear here.'
          : 'The direction matters more than any single day.'}
      </p>
      {recent.length >= 2 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {['energy', 'mood', 'sleep'].map((key) => (
            <TrendChart
              key={key}
              title={key === 'sleep' ? 'Sleep quality' : key}
              points={recent.map((e) => ({ date: e.date, value: e[key] }))}
            />
          ))}
        </div>
      )}
    </section>
  );
}
