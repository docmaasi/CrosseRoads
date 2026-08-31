import { useState } from 'react';
import { Button } from '@/ui/button';
import { toast } from 'sonner';
import { todayKey } from './use-wellness';

const SCALES = [
  { key: 'energy', label: 'Energy' },
  { key: 'mood', label: 'Mood' },
  { key: 'sleep', label: 'Sleep quality' },
];

function ScaleRow({ label, value, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-700">{label}</p>
      <div className="mt-1 flex gap-2" role="radiogroup" aria-label={label}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            role="radio"
            aria-checked={value === rating}
            className={`h-10 flex-1 rounded-lg border text-sm font-medium transition-colors ${
              value === rating
                ? 'border-[#2e7d8c] bg-[#2e7d8c]/10 text-[#1e4d5c] shadow-sm'
                : 'border-stone-200 bg-white text-stone-600 hover:border-[#2e7d8c]'
            }`}
            onClick={() => onChange(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Today's check-in: 1-5 energy/mood/sleep plus an optional note. */
export function DailyCheckin({ entries, saveEntry }) {
  const date = todayKey();
  const existing = entries.find((entry) => entry.date === date);
  const [draft, setDraft] = useState(
    existing ?? { date, energy: 0, mood: 0, sleep: 0, note: '' },
  );

  const handleSave = () => {
    if (!draft.energy || !draft.mood || !draft.sleep) {
      toast.message('Rate energy, mood, and sleep to save your check-in.');
      return;
    }
    saveEntry(draft);
    toast.success('Check-in saved — well done showing up today.');
  };

  return (
    <section id="checkin" aria-labelledby="checkin-heading" className="scroll-mt-16">
      <h2 id="checkin-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
        Today&apos;s check-in
      </h2>
      <p className="mt-1 text-sm text-stone-600">
        Thirty seconds of honesty: 1 = rough, 5 = wonderful.
      </p>
      <div className="mt-4 space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        {SCALES.map((scale) => (
          <ScaleRow
            key={scale.key}
            label={scale.label}
            value={draft[scale.key]}
            onChange={(rating) => setDraft((d) => ({ ...d, [scale.key]: rating }))}
          />
        ))}
        <div>
          <label
            htmlFor="checkin-note"
            className="text-sm font-medium text-stone-700"
          >
            A note to yourself (optional)
          </label>
          <textarea
            id="checkin-note"
            rows={2}
            value={draft.note}
            onChange={(event) => setDraft((d) => ({ ...d, note: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-stone-200 p-3 text-sm focus:border-[#2e7d8c] focus:outline-none"
            placeholder="What helped today? What got in the way?"
          />
        </div>
        <Button
          className="bg-[#1e4d5c] text-white hover:bg-[#2e7d8c]"
          onClick={handleSave}
        >
          {existing ? "Update today's check-in" : 'Save my check-in'}
        </Button>
      </div>
    </section>
  );
}
