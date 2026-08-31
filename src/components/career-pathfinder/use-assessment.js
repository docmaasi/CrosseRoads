import { useCallback, useEffect, useMemo, useState } from 'react';
import { SECTIONS } from './data/sections';

const STORAGE_KEY = 'career-pathfinder-v1';

// Screens: 'intro' → section index 0..6 → 'results'
function loadSaved() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persist(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private browsing or full storage — the assessment still works,
    // progress just won't survive a refresh.
  }
}

export function isQuestionAnswered(question, answers) {
  const value = answers[question.id];
  if (question.kind === 'likert') return typeof value === 'number';
  if (question.kind === 'single') return typeof value === 'string' && value !== '';
  const picks = Array.isArray(value) ? value : [];
  if (question.exact) return picks.length === question.exact;
  return picks.length > 0;
}

/**
 * All assessment state in one hook: answers, current screen, and
 * localStorage persistence so a refresh doesn't lose progress.
 */
export function useAssessment() {
  const [state, setState] = useState(() => {
    const saved = loadSaved();
    return {
      screen: saved?.screen ?? 'intro',
      answers: saved?.answers ?? {},
      optimize: saved?.optimize ?? null,
    };
  });

  useEffect(() => {
    persist(state);
  }, [state]);

  const setAnswer = useCallback((questionId, value) => {
    setState((curr) => ({
      ...curr,
      answers: { ...curr.answers, [questionId]: value },
    }));
  }, []);

  const setScreen = useCallback((screen) => {
    setState((curr) => ({ ...curr, screen }));
    window.scrollTo({ top: 0 });
  }, []);

  const setOptimize = useCallback((optimize) => {
    setState((curr) => ({ ...curr, optimize }));
  }, []);

  const restart = useCallback(() => {
    setState({ screen: 'intro', answers: {}, optimize: null });
    window.scrollTo({ top: 0 });
  }, []);

  const answeredCount = useMemo(
    () =>
      SECTIONS.flatMap((s) => s.questions).filter((q) =>
        isQuestionAnswered(q, state.answers),
      ).length,
    [state.answers],
  );

  return {
    screen: state.screen,
    answers: state.answers,
    optimize: state.optimize,
    answeredCount,
    setAnswer,
    setScreen,
    setOptimize,
    restart,
  };
}
