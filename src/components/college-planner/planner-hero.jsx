import { GraduationCap } from 'lucide-react';
import { PHASES } from './data/phases';
import { BRAND } from '../career-pathfinder/branding';

/** Hero + phase overview cards that double as anchor navigation. */
export function PlannerHero({ phaseProgress, totalDone, totalItems }) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-10%] h-64 w-64 rounded-full bg-[#17808d]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 pb-4 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#17808d]/25 bg-white/80 px-4 py-1.5 text-sm text-[#4a2373] shadow-sm">
          <GraduationCap className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
          College Roadmap
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#4a2373]">
          College Admissions Planner
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
          Every milestone from junior year to move-in day — in one checklist
          your family can work through together. Progress saves automatically
          on this device.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">
          {BRAND.byline} — who has navigated admissions and scholarships as a mom, more than once
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {PHASES.map((phase, index) => {
            const progress = phaseProgress[index];
            const percent =
              progress.total === 0
                ? 0
                : Math.round((progress.done / progress.total) * 100);
            return (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className="rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#17808d]">
                  Phase {index + 1}
                </p>
                <p className="mt-0.5 font-serif font-bold leading-snug text-[#4a2373]">
                  {phase.name}
                </p>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <div
                    className="h-full rounded-full bg-[#e8a33d] transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-stone-500">
                  {progress.done} of {progress.total} complete
                </p>
              </a>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-stone-500">
          {totalDone} of {totalItems} steps complete overall
        </p>
      </div>
    </div>
  );
}
