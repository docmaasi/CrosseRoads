import { Check, Flame } from 'lucide-react';
import { HABITS, HABIT_CATEGORIES } from './data/habits';

function lastSevenDays() {
  const days = [];
  for (let offset = 6; offset >= 0; offset--) {
    const day = new Date();
    day.setDate(day.getDate() - offset);
    days.push({
      key: day.toISOString().slice(0, 10),
      label: day.toLocaleDateString(undefined, { weekday: 'narrow' }),
      isToday: offset === 0,
    });
  }
  return days;
}

/** Weekly habit grid: pick habits, check them off day by day. */
export function HabitTracker({ habits, checks, weekDone, toggleHabit, toggleCheck }) {
  const days = lastSevenDays();
  const selected = HABITS.filter((habit) => habits.includes(habit.id));

  return (
    <section id="habits" aria-labelledby="habits-heading" className="scroll-mt-16">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="habits-heading" className="font-serif text-2xl font-bold text-[#1e4d5c]">
          Your weekly habits
        </h2>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#b07514]">
          <Flame className="h-4 w-4" aria-hidden="true" />
          {weekDone} check-offs this week
        </span>
      </div>
      <p className="mt-1 text-sm text-stone-600">
        Choose a few habits — three is plenty to start — and tap a circle to
        check off a day.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {HABITS.map((habit) => (
          <button
            key={habit.id}
            type="button"
            aria-pressed={habits.includes(habit.id)}
            title={habit.description}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              habits.includes(habit.id)
                ? 'border-[#2e7d8c] bg-[#2e7d8c]/10 font-medium text-[#1e4d5c]'
                : 'border-stone-200 bg-white text-stone-500 hover:border-[#2e7d8c]'
            }`}
            onClick={() => toggleHabit(habit.id)}
          >
            {HABIT_CATEGORIES[habit.category]} · {habit.name}
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-40 pb-2 text-left text-xs font-semibold uppercase tracking-wide text-[#2e7d8c]">
                  Habit
                </th>
                {days.map((day) => (
                  <th
                    key={day.key}
                    scope="col"
                    className={`pb-2 text-center text-xs font-medium ${
                      day.isToday ? 'text-[#1e4d5c]' : 'text-stone-400'
                    }`}
                  >
                    {day.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selected.map((habit) => (
                <tr key={habit.id} className="border-t border-stone-100">
                  <td className="py-2 pr-2 text-sm text-stone-700">{habit.name}</td>
                  {days.map((day) => {
                    const isDone = (checks[day.key] ?? []).includes(habit.id);
                    return (
                      <td key={day.key} className="py-1.5 text-center">
                        <button
                          type="button"
                          aria-pressed={isDone}
                          aria-label={`${habit.name} on ${day.key}`}
                          className={`h-7 w-7 rounded-full border transition-colors ${
                            isDone
                              ? 'border-[#2e7d8c] bg-[#2e7d8c] text-white'
                              : 'border-stone-200 bg-white hover:border-[#2e7d8c]'
                          }`}
                          onClick={() => toggleCheck(day.key, habit.id)}
                        >
                          {isDone && <Check className="mx-auto h-4 w-4" strokeWidth={3} />}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
