import { Plus, X } from 'lucide-react';
import { Button } from '@/ui/button';

const CATEGORIES = [
  { id: 'likely', label: 'Likely (Safety)' },
  { id: 'target', label: 'Target (Match)' },
  { id: 'reach', label: 'Reach' },
];

const DEADLINES = [
  { id: 'ea', label: 'Early Action' },
  { id: 'ed', label: 'Early Decision' },
  { id: 'rolling', label: 'Rolling' },
  { id: 'regular', label: 'Regular Decision' },
];

const STATUSES = [
  { id: 'researching', label: 'Researching' },
  { id: 'visiting', label: 'Visiting' },
  { id: 'applying', label: 'Applying' },
  { id: 'submitted', label: 'Submitted' },
  { id: 'accepted', label: 'Accepted 🎉' },
  { id: 'waitlisted', label: 'Waitlisted' },
  { id: 'declined', label: 'Not this time' },
];

const selectClass =
  'rounded-md border border-stone-200 bg-white px-2 py-1.5 text-sm text-stone-700 focus:border-[#17808d] focus:outline-none';

function EntryRow({ entry, updateEntry, removeEntry }) {
  return (
    <li className="flex flex-wrap items-center gap-2 rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
      <input
        value={entry.name}
        placeholder="College name"
        aria-label="College name"
        onChange={(event) => updateEntry(entry.id, { name: event.target.value })}
        className="min-w-[10rem] flex-1 rounded-md border border-stone-200 px-2 py-1.5 text-sm font-medium focus:border-[#17808d] focus:outline-none"
      />
      <select
        aria-label="List category"
        value={entry.category}
        className={selectClass}
        onChange={(event) => updateEntry(entry.id, { category: event.target.value })}
      >
        {CATEGORIES.map((c) => (
          <option key={c.id} value={c.id}>{c.label}</option>
        ))}
      </select>
      <select
        aria-label="Deadline type"
        value={entry.deadlineType}
        className={selectClass}
        onChange={(event) => updateEntry(entry.id, { deadlineType: event.target.value })}
      >
        {DEADLINES.map((d) => (
          <option key={d.id} value={d.id}>{d.label}</option>
        ))}
      </select>
      <select
        aria-label="Application status"
        value={entry.status}
        className={selectClass}
        onChange={(event) => updateEntry(entry.id, { status: event.target.value })}
      >
        {STATUSES.map((s) => (
          <option key={s.id} value={s.id}>{s.label}</option>
        ))}
      </select>
      <button
        type="button"
        aria-label={`Remove ${entry.name || 'college'}`}
        className="text-stone-400 hover:text-stone-600"
        onClick={() => removeEntry(entry.id)}
      >
        <X className="h-4 w-4" />
      </button>
    </li>
  );
}

/** Editable Likely / Target / Reach tracker with status per school. */
export function CollegeListTracker({ list, updateEntry, addEntry, removeEntry }) {
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: list.filter((e) => e.category === c.id).length,
  }));

  return (
    <section id="college-list" aria-labelledby="list-heading" className="scroll-mt-16">
      <h2 id="list-heading" className="font-serif text-2xl font-bold text-[#4a2373]">
        Your college list
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        A balanced list has Likely, Target, and Reach schools. Track each
        application from research to decision — saved automatically on this device.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {counts.map((c) => (
          <span
            key={c.id}
            className="rounded-full border border-[#17808d]/25 bg-white px-3 py-1 text-xs text-[#4a2373]"
          >
            {c.label}: <strong>{c.count}</strong>
          </span>
        ))}
      </div>

      {list.length > 0 && (
        <ul className="mt-4 space-y-2">
          {list.map((entry) => (
            <EntryRow
              key={entry.id}
              entry={entry}
              updateEntry={updateEntry}
              removeEntry={removeEntry}
            />
          ))}
        </ul>
      )}
      <Button variant="outline" className="mt-3" onClick={addEntry}>
        <Plus className="mr-1.5 h-4 w-4" /> Add a college
      </Button>
    </section>
  );
}
