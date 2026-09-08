import { describe, expect, it } from 'vitest';
import { groupResults, search, searchCorpusSize } from './search-index';
import { WORKSHEETS } from '../worksheets/data/worksheets';
import { DIRECTORY } from '@/data/resource-directory';
import { ARTICLES } from '../guides/data/articles';

describe('site search', () => {
  it('indexes everything a family might look for', () => {
    expect(searchCorpusSize()).toBe(
      WORKSHEETS.length + DIRECTORY.length + ARTICLES.length,
    );
    expect(searchCorpusSize()).toBeGreaterThan(150);
  });

  it('stays quiet until there is something to search for', () => {
    expect(search('')).toEqual([]);
    expect(search(' ')).toEqual([]);
    expect(search('a')).toEqual([]);
  });

  it('finds the obvious things', () => {
    for (const term of ['scholarship', 'financial aid', 'deadline', 'essay', 'food']) {
      expect(search(term).length, term).toBeGreaterThan(0);
    }
  });

  it('forgives a misspelling, which is the whole point of fuzzy search', () => {
    // A parent typing quickly on a phone should still land somewhere useful.
    expect(search('scholarshp').length).toBeGreaterThan(0);
    expect(search('finantial').length).toBeGreaterThan(0);
  });

  it('matches on a prefix, so results appear while you are still typing', () => {
    expect(search('schol').length).toBeGreaterThan(0);
  });

  it('reaches all three kinds of content', () => {
    const kinds = new Set(
      ['scholarship', 'college', 'essay', 'money', 'parent', 'career']
        .flatMap((term) => search(term))
        .map((doc) => doc.kind),
    );
    expect(kinds.has('worksheet')).toBe(true);
    expect(kinds.has('resource')).toBe(true);
    expect(kinds.has('guide')).toBe(true);
  });

  it('returns links that are safe to render', () => {
    for (const doc of search('college', 100)) {
      if (doc.external) {
        expect(doc.href.startsWith('https://'), doc.id).toBe(true);
      } else {
        expect(doc.href.startsWith('/'), doc.id).toBe(true);
      }
      expect(doc.title.length, doc.id).toBeGreaterThan(0);
      expect(doc.summary.length, doc.id).toBeGreaterThan(0);
    }
  });

  it('respects the result limit', () => {
    expect(search('college', 5).length).toBeLessThanOrEqual(5);
  });

  it('groups without losing a result', () => {
    const results = search('college', 100);
    const grouped = groupResults(results).reduce((sum, g) => sum + g.items.length, 0);
    expect(grouped).toBe(results.length);
  });

  it('finds a specific worksheet by its title', () => {
    const hits = search('balanced college list');
    expect(hits.some((doc) => doc.href === '/Worksheets/balanced-college-list')).toBe(true);
  });

  it('finds a crisis resource, which is the search that matters most', () => {
    const hits = search('crisis', 100);
    expect(hits.some((doc) => doc.kind === 'resource')).toBe(true);
  });
});
