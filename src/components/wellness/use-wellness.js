import { useCallback, useEffect, useMemo, useState } from 'react';
import { HABITS } from './data/habits';

const STORAGE_KEY = 'wellness-transformation-v1';
const VALID_HABIT_IDS = new Set(HABITS.map((habit) => habit.id));

export const todayKey = () => new Date().toISOString().slice(0, 10);

function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (typeof parsed !== 'object' || parsed === null) return {};
    return parsed;
  } catch {
    return {};
  }
}

/**
 * All Wellness Transformation state: profile (level + focus areas),
 * selected habits, per-day habit checks, and daily check-in entries.
 * Everything persists to localStorage on this device only.
 */
export function useWellness() {
  const [state, setState] = useState(() => {
    const saved = load();
    return {
      level: typeof saved.level === 'string' ? saved.level : null,
      focus: Array.isArray(saved.focus) ? saved.focus : [],
      habits: Array.isArray(saved.habits)
        ? saved.habits.filter((id) => VALID_HABIT_IDS.has(id))
        : ['walk', 'water', 'sleepRoutine'],
      checks: typeof saved.checks === 'object' && saved.checks !== null ? saved.checks : {},
      entries: Array.isArray(saved.entries) ? saved.entries : [],
    };
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Private mode — the page still works, progress just isn't saved.
    }
  }, [state]);

  const setProfile = useCallback((level, focus) => {
    setState((curr) => ({ ...curr, level, focus }));
  }, []);

  const toggleHabit = useCallback((habitId) => {
    setState((curr) => ({
      ...curr,
      habits: curr.habits.includes(habitId)
        ? curr.habits.filter((id) => id !== habitId)
        : [...curr.habits, habitId],
    }));
  }, []);

  const toggleCheck = useCallback((dateKey, habitId) => {
    setState((curr) => {
      const day = curr.checks[dateKey] ?? [];
      const next = day.includes(habitId)
        ? day.filter((id) => id !== habitId)
        : [...day, habitId];
      return { ...curr, checks: { ...curr.checks, [dateKey]: next } };
    });
  }, []);

  const saveEntry = useCallback((entry) => {
    setState((curr) => ({
      ...curr,
      entries: [
        ...curr.entries.filter((e) => e.date !== entry.date),
        entry,
      ].sort((a, b) => a.date.localeCompare(b.date)),
    }));
  }, []);

  const weekDone = useMemo(() => {
    const now = new Date();
    let done = 0;
    for (let offset = 0; offset < 7; offset++) {
      const day = new Date(now);
      day.setDate(now.getDate() - offset);
      done += (state.checks[day.toISOString().slice(0, 10)] ?? []).length;
    }
    return done;
  }, [state.checks]);

  return { ...state, setProfile, toggleHabit, toggleCheck, saveEntry, weekDone };
}
