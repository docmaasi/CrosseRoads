import { beforeEach, describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { usePlanner } from './use-planner';
import { ALL_ITEMS, TOTAL_ITEMS } from './data/phases';

const firstItemId = ALL_ITEMS[0].id;

describe('usePlanner', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('starts empty and toggles items on and off', () => {
    const { result } = renderHook(() => usePlanner());
    expect(result.current.totalDone).toBe(0);
    expect(result.current.totalItems).toBe(TOTAL_ITEMS);

    act(() => result.current.toggle(firstItemId));
    expect(result.current.checked.has(firstItemId)).toBe(true);
    expect(result.current.totalDone).toBe(1);

    act(() => result.current.toggle(firstItemId));
    expect(result.current.checked.has(firstItemId)).toBe(false);
  });

  it('persists progress to localStorage and restores it', () => {
    const first = renderHook(() => usePlanner());
    act(() => first.result.current.toggle(firstItemId));
    first.unmount();

    const second = renderHook(() => usePlanner());
    expect(second.result.current.checked.has(firstItemId)).toBe(true);
  });

  it('tracks per-phase progress and resets everything', () => {
    const { result } = renderHook(() => usePlanner());
    act(() => result.current.toggle(firstItemId));

    const juniorProgress = result.current.phaseProgress.find(
      (p) => p.phaseId === 'junior',
    );
    expect(juniorProgress?.done).toBe(1);

    act(() => result.current.reset());
    expect(result.current.totalDone).toBe(0);
  });
});
