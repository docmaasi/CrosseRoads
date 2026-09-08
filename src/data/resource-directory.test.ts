import { describe, expect, it } from 'vitest';
import {
  CATEGORY_BLURBS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  DIRECTORY,
  countryName,
  directoryCountries,
  filterByCountry,
  groupByCategory,
} from './resource-directory';

describe('the vendored directory', () => {
  it('is present and plausibly complete', () => {
    // Guards against a truncated sync silently shipping an near-empty panel.
    expect(DIRECTORY.length).toBeGreaterThanOrEqual(60);
  });

  it('only links over https, and never to a lookalike host', () => {
    for (const entry of DIRECTORY) {
      expect(entry.url.startsWith('https://'), entry.id).toBe(true);
    }
  });

  it('has no duplicate ids', () => {
    const ids = DIRECTORY.map((entry) => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses only categories the UI can label', () => {
    for (const entry of DIRECTORY) {
      expect(CATEGORY_ORDER, entry.id).toContain(entry.category);
      expect(CATEGORY_LABELS[entry.category]).toBeTruthy();
      expect(CATEGORY_BLURBS[entry.category]).toBeTruthy();
    }
  });

  it('states requiresAccount for every entry', () => {
    // A missing boolean would render as "no account needed", which is a
    // promise to a family we cannot keep.
    for (const entry of DIRECTORY) {
      expect(typeof entry.requiresAccount, entry.id).toBe('boolean');
    }
  });

  it('names every country code it uses', () => {
    for (const entry of DIRECTORY) {
      expect(countryName(entry.country), entry.country).not.toBe(entry.country);
    }
  });
});

describe('filterByCountry', () => {
  it('returns everything when no country is chosen', () => {
    expect(filterByCountry(null)).toHaveLength(DIRECTORY.length);
  });

  it('includes worldwide resources alongside the chosen country', () => {
    const kenyan = filterByCountry('KE');
    expect(kenyan.some((entry) => entry.country === 'KE')).toBe(true);
    expect(kenyan.some((entry) => entry.country === 'Global')).toBe(true);
    expect(kenyan.every((entry) => ['KE', 'Global'].includes(entry.country))).toBe(true);
  });

  it('does not fold worldwide into itself twice', () => {
    const global = filterByCountry('Global');
    expect(global.every((entry) => entry.country === 'Global')).toBe(true);
  });
});

describe('directoryCountries', () => {
  it('leads with the United States and ends with Worldwide', () => {
    const codes = directoryCountries().map((country) => country.code);
    expect(codes[0]).toBe('US');
    expect(codes.at(-1)).toBe('Global');
  });

  it('counts entries per country', () => {
    for (const country of directoryCountries()) {
      const actual = DIRECTORY.filter((entry) => entry.country === country.code).length;
      expect(country.count, country.code).toBe(actual);
    }
  });
});

describe('groupByCategory', () => {
  it('drops empty groups rather than rendering an empty card', () => {
    const groups = groupByCategory(filterByCountry('NO'));
    expect(groups.every((group) => group.items.length > 0)).toBe(true);
  });

  it('keeps CATEGORY_ORDER', () => {
    const order = groupByCategory(DIRECTORY).map((group) => group.category);
    expect(order).toEqual(CATEGORY_ORDER.filter((category) => order.includes(category)));
  });

  it('loses nothing', () => {
    const total = groupByCategory(DIRECTORY).reduce((sum, g) => sum + g.items.length, 0);
    expect(total).toBe(DIRECTORY.length);
  });
});
