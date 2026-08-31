import { Lightbulb } from 'lucide-react';
import { ChecklistItemRow } from './checklist-item';

function ParentTip({ children }) {
  return (
    <div className="mt-3 flex gap-2.5 rounded-xl border border-[#e8a33d]/40 bg-[#e8a33d]/10 p-3.5">
      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#b07514]" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-stone-700">{children}</p>
    </div>
  );
}

function GroupCard({ group, checked, onToggle }) {
  const done = group.items.filter((item) => checked.has(item.id)).length;
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="font-semibold text-stone-800">{group.title}</h4>
        <span className="shrink-0 text-xs font-medium text-stone-400">
          {done}/{group.items.length}
        </span>
      </div>
      {group.intro && (
        <p className="mt-1 text-sm text-stone-600">{group.intro}</p>
      )}
      <ul className="mt-2 space-y-0.5">
        {group.items.map((item) => (
          <ChecklistItemRow
            key={item.id}
            item={item}
            isChecked={checked.has(item.id)}
            onToggle={onToggle}
          />
        ))}
      </ul>
      {group.tip && <ParentTip>{group.tip}</ParentTip>}
    </div>
  );
}

/** One planner phase: heading, progress bar, and its checklist groups. */
export function PhaseSection({ phase, index, progress, checked, onToggle }) {
  const percent =
    progress.total === 0 ? 0 : Math.round((progress.done / progress.total) * 100);

  return (
    <section id={phase.id} aria-labelledby={`${phase.id}-heading`} className="scroll-mt-20">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e4d5c] font-serif text-lg font-bold text-white">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h2
            id={`${phase.id}-heading`}
            className="font-serif text-2xl font-bold text-[#1e4d5c]"
          >
            {phase.name}
          </h2>
          <p className="text-sm text-stone-600">{phase.subtitle}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-[#2e7d8c] transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs font-medium text-stone-500">
          {progress.done}/{progress.total} done
        </span>
      </div>

      <div className="mt-4 space-y-4">
        {phase.groups.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            checked={checked}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}
