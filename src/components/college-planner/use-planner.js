import { useCallback, useEffect, useMemo, useState } from 'react';
import { ALL_ITEMS, PHASES, TOTAL_ITEMS, phaseItemIds } from './data/phases';

const STORAGE_KEY = 'college-planner-v1';
const VALID_IDS = new Set(ALL_ITEMS.map((item) => item.id));

function loadChecked() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    // Drop ids that no longer exist in the checklist data, so a content
    // update can never leave the progress counts out of sync.
    return Array.isArray(parsed) ? parsed.filter((id) => VALID_IDS.has(id)) : [];
  } catch {
    return [];
  }
}

/**
 * Checklist state for the College Admissions Planner, persisted to
 * localStorage so progress survives refreshes and return visits.
 */
export function usePlanner() {
  const [checked, setChecked] = useState(() => new Set(loadChecked()));

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      // Storage unavailable (private mode) — the checklist still works,
      // progress just won't survive a refresh.
    }
  }, [checked]);

  const toggle = useCallback((itemId) => {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }, []);

  const reset = useCallback(() => setChecked(new Set()), []);

  const phaseProgress = useMemo(
    () =>
      PHASES.map((phase) => {
        const ids = phaseItemIds(phase);
        const done = ids.filter((id) => checked.has(id)).length;
        return { phaseId: phase.id, done, total: ids.length };
      }),
    [checked],
  );

  return {
    checked,
    toggle,
    reset,
    phaseProgress,
    totalDone: checked.size,
    totalItems: TOTAL_ITEMS,
  };
}
