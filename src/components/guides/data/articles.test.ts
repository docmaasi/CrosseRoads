import { describe, expect, it } from 'vitest';
import { ARTICLES, ARTICLE_CATEGORY_ORDER, findArticle, relatedArticles } from './articles';
import { CATEGORY_LABELS } from './types';
import { DIRECTORY } from '@/data/resource-directory';
import { RESOURCE_LIBRARY } from '@/components/career-pathfinder/data/resources';
import { WORKSHEETS } from '@/components/worksheets/data/worksheets';

/**
 * An article may cite anything already vetted for the resource directory or the
 * career resource library — both of which are government, university,
 * intergovernmental or established-nonprofit only — plus the short list below.
 *
 * Deriving it this way means the standard for "a source we will point a family
 * at" is defined in one place. A hand-maintained allowlist went stale the first
 * time anyone wrote a new article, which is exactly what happened here.
 */
const EXTRA_VETTED_HOSTS = [
  'www.commonapp.org',
  'cssprofile.collegeboard.org',
  'satsuite.collegeboard.org',
  'www.act.org',
  'bigfuture.collegeboard.org',
  'www.nacacnet.org',
  'www.nimh.nih.gov', // National Institute of Mental Health, NIH
  'www.dosomething.org',
  'www.volunteermatch.org',
];

const VETTED_HOSTS = new Set([
  ...EXTRA_VETTED_HOSTS,
  ...DIRECTORY.map((entry) => new URL(entry.url).host),
  ...RESOURCE_LIBRARY.flatMap((group) =>
    group.links.map((link) => new URL(link.url).host),
  ),
]);

/** Internal destinations an article CTA is allowed to point at. */
const TOOL_ROUTES = [
  '/CareerPathfinder',
  '/CollegePlanner',
  '/ParentRoadmap',
  '/Wellness',
  '/Guides',
  '/Worksheets',
  '/WorkWithMe',
  '/Search',
];

describe('guide articles', () => {
  it('has a substantial library', () => {
    expect(ARTICLES.length).toBeGreaterThanOrEqual(30);
  });

  it('has unique, url-safe slugs and unique titles', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    const titles = ARTICLES.map((a) => a.title);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(titles).size).toBe(titles.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
  });

  it('gives every article real content', () => {
    for (const article of ARTICLES) {
      expect(article.title.length, article.slug).toBeGreaterThan(15);
      expect(article.description.length, article.slug).toBeGreaterThan(40);
      expect(article.sections.length, article.slug).toBeGreaterThanOrEqual(3);
      expect(article.datePublished, article.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const words = article.sections
        .flatMap((s) => [...(s.paragraphs ?? []), ...(s.list ?? [])])
        .join(' ')
        .split(/\s+/).length;
      expect(words, article.slug).toBeGreaterThan(200);
    }
  });

  it('points every CTA at a page that exists', () => {
    for (const article of ARTICLES) {
      const [path] = article.cta.href.split('?');
      expect(path.startsWith('/'), article.slug).toBe(true);
      if (path.startsWith('/Worksheets/')) {
        // A CTA promising a printable sheet that does not exist is worse than
        // no CTA at all.
        const slug = path.replace('/Worksheets/', '');
        expect(
          WORKSHEETS.some((sheet) => sheet.slug === slug),
          `${article.slug} -> missing worksheet ${slug}`,
        ).toBe(true);
      } else {
        expect(TOOL_ROUTES, article.slug).toContain(path);
      }
      expect(article.cta.label.length, article.slug).toBeGreaterThan(5);
      expect(article.cta.text.length, article.slug).toBeGreaterThan(30);
    }
  });

  it('cites only vetted official https sources', () => {
    for (const article of ARTICLES) {
      expect(article.sources.length, article.slug).toBeGreaterThan(0);
      for (const source of article.sources) {
        const url = new URL(source.url);
        expect(url.protocol, source.url).toBe('https:');
        expect([...VETTED_HOSTS], `${article.slug} cites ${url.host}`).toContain(url.host);
      }
    }
  });

  it('uses categories the index can label and filter', () => {
    for (const article of ARTICLES) {
      expect(ARTICLE_CATEGORY_ORDER, article.slug).toContain(article.category);
      expect(CATEGORY_LABELS[article.category]).toBeTruthy();
    }
    // Every filter button should return something.
    for (const category of ARTICLE_CATEGORY_ORDER) {
      expect(
        ARTICLES.some((article) => article.category === category),
        category,
      ).toBe(true);
    }
  });

  it('is ordered newest first', () => {
    for (let i = 1; i < ARTICLES.length; i += 1) {
      expect(
        ARTICLES[i - 1].datePublished >= ARTICLES[i].datePublished,
        `${ARTICLES[i - 1].slug} before ${ARTICLES[i].slug}`,
      ).toBe(true);
    }
  });

  it('was not published in the future', () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const article of ARTICLES) {
      expect(article.datePublished <= today, article.slug).toBe(true);
    }
  });

  describe('answer-engine metadata', () => {
    const withFaq = ARTICLES.filter((a) => a.faq?.length);

    it('is present on the newer library', () => {
      expect(withFaq.length).toBeGreaterThanOrEqual(30);
    });

    it('keeps answers short enough to be quoted whole', () => {
      for (const article of withFaq) {
        for (const item of article.faq ?? []) {
          expect(item.question.endsWith('?'), `${article.slug}: ${item.question}`).toBe(true);
          const words = item.answer.split(/\s+/).length;
          expect(words, `${article.slug}: ${item.question}`).toBeLessThanOrEqual(70);
          expect(words, `${article.slug}: ${item.question}`).toBeGreaterThan(8);
        }
      }
    });

    it('leads with a short answer where one is given', () => {
      for (const article of ARTICLES) {
        if (!article.keyTakeaway) continue;
        const words = article.keyTakeaway.split(/\s+/).length;
        expect(words, article.slug).toBeLessThanOrEqual(60);
      }
    });

    it('labels each article with honest keywords', () => {
      for (const article of ARTICLES) {
        if (!article.keywords) continue;
        expect(article.keywords.length, article.slug).toBeLessThanOrEqual(8);
        for (const keyword of article.keywords) {
          expect(keyword, article.slug).toBe(keyword.toLowerCase());
        }
      }
    });
  });

  it('finds articles by slug and returns undefined otherwise', () => {
    expect(findArticle(ARTICLES[0].slug)?.title).toBe(ARTICLES[0].title);
    expect(findArticle('missing')).toBeUndefined();
    expect(findArticle(undefined)).toBeUndefined();
  });

  it('suggests related reading that is never the article itself', () => {
    for (const article of ARTICLES.slice(0, 10)) {
      const related = relatedArticles(article);
      expect(related.length).toBe(3);
      expect(related.some((r) => r.slug === article.slug)).toBe(false);
    }
  });
});
