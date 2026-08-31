import { BookHeart } from 'lucide-react';
import { promptForDate } from './data/prompts';

/** Reflection prompt + past check-in notes and scores (the data table). */
export function WellnessJournal({ entries }) {
  const prompt = promptForDate(new Date());
  const past = [...entries].reverse().slice(0, 14);

  return (
    <section id="journal" aria-labelledby="journal-heading" className="scroll-mt-16">
      <h2 id="journal-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
        Your journal
      </h2>
      <div className="mt-3 flex gap-2.5 rounded-2xl border-2 border-[#e8a33d]/50 bg-[#e8a33d]/5 p-4">
        <BookHeart className="mt-0.5 h-4 w-4 shrink-0 text-[#b07514]" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#b07514]">
            Today&apos;s reflection prompt
          </p>
          <p className="mt-0.5 text-sm italic text-stone-700">{prompt}</p>
          <p className="mt-1 text-xs text-stone-500">
            Answer it in the note of today&apos;s check-in above — it lands here.
          </p>
        </div>
      </div>

      {past.length > 0 && (
        <ul className="mt-4 space-y-2">
          {past.map((entry) => (
            <li
              key={entry.date}
              className="rounded-xl border border-stone-200 bg-white p-3.5 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium text-stone-700">{entry.date}</p>
                <p className="text-xs text-stone-500">
                  Energy {entry.energy}/5 · Mood {entry.mood}/5 · Sleep {entry.sleep}/5
                </p>
              </div>
              {entry.note && (
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {entry.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
