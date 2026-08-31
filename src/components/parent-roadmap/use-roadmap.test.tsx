import { beforeEach, describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { schoolTotals, useRoadmap } from './use-roadmap';

describe('schoolTotals', () => {
  it('computes total cost, net price, and remainder after loans', () => {
    const totals = schoolTotals({
      tuition: '30000', housing: '12,000', books: '1000',
      transportation: '500', personal: '1500',
      giftAid: '20000', workStudy: '2000', loans: '5500',
    });
    expect(totals.totalCost).toBe(45000);
    expect(totals.giftAid).toBe(20000);
    expect(totals.netPrice).toBe(25000);
    expect(totals.afterLoans).toBe(17500);
  });

  it('treats blanks and junk as zero and never goes negative', () => {
    const totals = schoolTotals({
      tuition: '', housing: 'abc', books: '0', transportation: '',
      personal: '', giftAid: '99999', workStudy: '', loans: '',
    });
    expect(totals.totalCost).toBe(0);
    expect(totals.netPrice).toBe(0);
    expect(totals.afterLoans).toBe(0);
  });
});

describe('useRoadmap', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('starts with two blank schools and caps at four', () => {
    const { result } = renderHook(() => useRoadmap());
    expect(result.current.schools).toHaveLength(2);
    act(() => result.current.addSchool());
    act(() => result.current.addSchool());
    act(() => result.current.addSchool());
    expect(result.current.schools).toHaveLength(4);
  });

  it('edits schools and college-list entries and persists both', () => {
    const first = renderHook(() => useRoadmap());
    const schoolId = first.result.current.schools[0].id;
    act(() => first.result.current.updateSchool(schoolId, { name: 'State U', tuition: '9000' }));
    act(() => first.result.current.addEntry());
    const entryId = first.result.current.list[0].id;
    act(() => first.result.current.updateEntry(entryId, { name: 'State U', category: 'likely' }));
    first.unmount();

    const second = renderHook(() => useRoadmap());
    expect(second.result.current.schools[0].name).toBe('State U');
    expect(second.result.current.list[0].category).toBe('likely');

    act(() => second.result.current.removeEntry(entryId));
    expect(second.result.current.list).toHaveLength(0);
  });
});
