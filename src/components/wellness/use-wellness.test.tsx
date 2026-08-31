import { beforeEach, describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { todayKey, useWellness } from './use-wellness';

describe('useWellness', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('starts with a gentle default habit set and toggles habits', () => {
    const { result } = renderHook(() => useWellness());
    expect(result.current.habits).toContain('walk');

    act(() => result.current.toggleHabit('journal'));
    expect(result.current.habits).toContain('journal');
    act(() => result.current.toggleHabit('journal'));
    expect(result.current.habits).not.toContain('journal');
  });

  it('checks habits per day and counts the week', () => {
    const { result } = renderHook(() => useWellness());
    act(() => result.current.toggleCheck(todayKey(), 'walk'));
    act(() => result.current.toggleCheck(todayKey(), 'water'));
    expect(result.current.weekDone).toBe(2);
    act(() => result.current.toggleCheck(todayKey(), 'water'));
    expect(result.current.weekDone).toBe(1);
  });

  it('saves one entry per date, replacing on re-save, and persists', () => {
    const first = renderHook(() => useWellness());
    const date = todayKey();
    act(() =>
      first.result.current.saveEntry({ date, energy: 3, mood: 4, sleep: 2, note: 'a' }),
    );
    act(() =>
      first.result.current.saveEntry({ date, energy: 5, mood: 4, sleep: 3, note: 'b' }),
    );
    expect(first.result.current.entries).toHaveLength(1);
    expect(first.result.current.entries[0].energy).toBe(5);
    first.unmount();

    const second = renderHook(() => useWellness());
    expect(second.result.current.entries).toHaveLength(1);
    expect(second.result.current.entries[0].note).toBe('b');
  });

  it('drops unknown habit ids from storage', () => {
    window.localStorage.setItem(
      'wellness-transformation-v1',
      JSON.stringify({ habits: ['walk', 'notARealHabit'] }),
    );
    const { result } = renderHook(() => useWellness());
    expect(result.current.habits).toEqual(['walk']);
  });
});
