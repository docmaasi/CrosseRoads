import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'parent-roadmap-v1';

export const COST_FIELDS = [
  { key: 'tuition', label: 'Tuition & fees' },
  { key: 'housing', label: 'Housing & meals' },
  { key: 'books', label: 'Books & supplies' },
  { key: 'transportation', label: 'Transportation' },
  { key: 'personal', label: 'Personal expenses' },
];

export const AID_FIELDS = [
  { key: 'giftAid', label: 'Grants & scholarships (gift aid)' },
  { key: 'workStudy', label: 'Work-study offered' },
  { key: 'loans', label: 'Loans offered' },
];

const newId = () => Math.random().toString(36).slice(2, 10);

export const blankSchool = () => ({
  id: newId(),
  name: '',
  tuition: '', housing: '', books: '', transportation: '', personal: '',
  giftAid: '', workStudy: '', loans: '',
});

export const blankListEntry = () => ({
  id: newId(),
  name: '',
  category: 'target',
  deadlineType: 'regular',
  status: 'researching',
});

const num = (value) => {
  const parsed = parseFloat(String(value).replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
};

/** Cost-of-attendance and net-price math for one school's inputs. */
export function schoolTotals(school) {
  const totalCost = COST_FIELDS.reduce((sum, f) => sum + num(school[f.key]), 0);
  const giftAid = num(school.giftAid);
  const netPrice = Math.max(0, totalCost - giftAid);
  const afterLoans = Math.max(0, netPrice - num(school.loans) - num(school.workStudy));
  return { totalCost, giftAid, netPrice, afterLoans };
}

function load() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null');
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

/** Award-comparison schools + college-list tracker, saved on device. */
export function useRoadmap() {
  const [state, setState] = useState(() => {
    const saved = load();
    return {
      schools:
        Array.isArray(saved.schools) && saved.schools.length > 0
          ? saved.schools
          : [blankSchool(), blankSchool()],
      list: Array.isArray(saved.list) ? saved.list : [],
    };
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Private mode — tools still work, entries just aren't saved.
    }
  }, [state]);

  const updateSchool = useCallback((id, patch) => {
    setState((curr) => ({
      ...curr,
      schools: curr.schools.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }));
  }, []);

  const addSchool = useCallback(() => {
    setState((curr) =>
      curr.schools.length >= 4
        ? curr
        : { ...curr, schools: [...curr.schools, blankSchool()] },
    );
  }, []);

  const removeSchool = useCallback((id) => {
    setState((curr) => ({
      ...curr,
      schools: curr.schools.filter((s) => s.id !== id),
    }));
  }, []);

  const updateEntry = useCallback((id, patch) => {
    setState((curr) => ({
      ...curr,
      list: curr.list.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    }));
  }, []);

  const addEntry = useCallback(() => {
    setState((curr) => ({ ...curr, list: [...curr.list, blankListEntry()] }));
  }, []);

  const removeEntry = useCallback((id) => {
    setState((curr) => ({ ...curr, list: curr.list.filter((e) => e.id !== id) }));
  }, []);

  return {
    schools: state.schools,
    list: state.list,
    updateSchool,
    addSchool,
    removeSchool,
    updateEntry,
    addEntry,
    removeEntry,
  };
}
