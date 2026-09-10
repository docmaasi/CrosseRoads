import { describe, expect, it } from 'vitest';
import { ARTICLES } from '@/components/guides/data/articles';
import { WORKSHEETS } from '@/components/worksheets/data/worksheets';
import { DIRECTORY } from './resource-directory';
import {
  DEFAULT_META,
  OG_IMAGE_URL,
  PAGES,
  SITE_ORIGIN,
  guideMeta,
  guidesIndexMeta,
  resourcesMeta,
  worksheetMeta,
  worksheetsIndexMeta,
} from './page-meta';

/**
 * These guard the thing that actually broke: a shared link previewing as the
 * wrong page. The prerender script reads this same module, so anything asserted
 * here is what a social crawler ends up being served.
 */

/** Every route in src/main.jsx that a person could share. */
const ROUTES = [
  '/',
  '/CareerPathfinder',
  '/CollegePlanner',
  '/ParentRoadmap',
  '/Wellness',
  '/WorkWithMe',
  '/About',
  '/Search',
  '/Privacy',
  '/Terms',
];

describe('page metadata', () => {
  it('covers every static route', () => {
    expect(Object.keys(PAGES).sort()).toEqual([...ROUTES].sort());
  });

  it('gives every page a distinct title', () => {
    const all = [
      ...Object.values(PAGES).map((m) => m.title),
      guidesIndexMeta(ARTICLES.length).title,
      worksheetsIndexMeta(WORKSHEETS.length).title,
      resourcesMeta(DIRECTORY.length).title,
      ...ARTICLES.map((a) => guideMeta(a).title),
      ...WORKSHEETS.map((w) => worksheetMeta(w).title),
    ];
    expect(new Set(all).size).toBe(all.length);
  });

  it('gives every page a description a crawler will actually show', () => {
    const metas = [
      ...Object.values(PAGES),
      guidesIndexMeta(ARTICLES.length),
      worksheetsIndexMeta(WORKSHEETS.length),
      resourcesMeta(DIRECTORY.length),
      ...ARTICLES.map(guideMeta),
      ...WORKSHEETS.map(worksheetMeta),
    ];
    for (const meta of metas) {
      expect(meta.title.length).toBeGreaterThan(10);
      // Facebook and LinkedIn truncate hard; Google shows about 160 characters.
      expect(meta.description.length).toBeGreaterThan(50);
      expect(meta.description.length).toBeLessThan(320);
      expect(meta.title).not.toMatch(/undefined|NaN/);
      expect(meta.description).not.toMatch(/undefined|NaN/);
    }
  });

  it('names the live domain, not the deployment URL', () => {
    // crosse-roads.vercel.app still answers. Publishing it in a canonical or a
    // card splits the site across two origins.
    expect(SITE_ORIGIN).toBe('https://crosseroads.com');
    expect(OG_IMAGE_URL).toBe('https://crosseroads.com/og-card.jpg');
  });

  it('counts the content that actually exists', () => {
    expect(guidesIndexMeta(ARTICLES.length).description).toContain(`${ARTICLES.length} free`);
    expect(worksheetsIndexMeta(WORKSHEETS.length).description).toContain(`${WORKSHEETS.length} free`);
    expect(resourcesMeta(DIRECTORY.length).description).toContain(`${DIRECTORY.length} free`);
  });

  it('marks guides as articles, with the byline and date crawlers look for', () => {
    for (const article of ARTICLES) {
      const meta = guideMeta(article);
      expect(meta.type).toBe('article');
      expect(meta.title).toContain(article.title);
      expect(meta.author).toBe('Dr. Kisa Crosse');
      expect(meta.publishedTime).toBe(article.datePublished);
      expect(meta.section).toBe(article.category);
    }
  });

  it('falls back to the homepage card', () => {
    expect(DEFAULT_META).toBe(PAGES['/']);
  });
});
