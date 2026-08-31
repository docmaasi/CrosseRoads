import { describe, expect, it } from 'vitest';
import { ARTICLES, findArticle } from './articles';

const VETTED_HOSTS = [
  'www.onetonline.org',
  'www.mynextmove.org',
  'www.bls.gov',
  'www.careeronestop.org',
  'www.commonapp.org',
  'studentaid.gov',
  'cssprofile.collegeboard.org',
  'satsuite.collegeboard.org',
  'www.act.org',
  'bigfuture.collegeboard.org',
  'collegescorecard.ed.gov',
  'www.dosomething.org',
  'www.volunteermatch.org',
];

describe('guide articles', () => {
  it('has unique, url-safe slugs', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
  });

  it('gives every article real content and an internal CTA', () => {
    for (const article of ARTICLES) {
      expect(article.title.length).toBeGreaterThan(15);
      expect(article.description.length).toBeGreaterThan(40);
      expect(article.sections.length).toBeGreaterThanOrEqual(3);
      expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(['/CareerPathfinder', '/CollegePlanner']).toContain(article.cta.href);
      const words = article.sections
        .flatMap((s) => [...(s.paragraphs ?? []), ...(s.list ?? [])])
        .join(' ')
        .split(/\s+/).length;
      expect(words).toBeGreaterThan(200);
    }
  });

  it('cites only vetted official https sources', () => {
    for (const article of ARTICLES) {
      expect(article.sources.length).toBeGreaterThan(0);
      for (const source of article.sources) {
        const url = new URL(source.url);
        expect(url.protocol).toBe('https:');
        expect(VETTED_HOSTS).toContain(url.host);
      }
    }
  });

  it('finds articles by slug and returns undefined otherwise', () => {
    expect(findArticle(ARTICLES[0].slug)?.title).toBe(ARTICLES[0].title);
    expect(findArticle('missing')).toBeUndefined();
    expect(findArticle(undefined)).toBeUndefined();
  });
});
