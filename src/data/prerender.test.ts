import { describe, expect, it } from 'vitest';
// @ts-expect-error - plain-node build script, no type declarations
import { headFor, routesFor } from '../../scripts/prerender.mjs';
import { ARTICLES } from '@/components/guides/data/articles';
import { WORKSHEETS } from '@/components/worksheets/data/worksheets';
import { DIRECTORY } from './resource-directory';
import * as pageMeta from './page-meta';

/**
 * The build script is the only thing a social crawler ever reads, so it is
 * worth testing directly rather than trusting that a green build means correct
 * markup.
 */

const mod = { ...pageMeta, ARTICLES, WORKSHEETS, DIRECTORY };
const routes = routesFor(mod) as { path: string; meta: pageMeta.PageMeta }[];

describe('prerender', () => {
  it('writes a page for every route, guide and worksheet', () => {
    expect(routes).toHaveLength(
      Object.keys(pageMeta.PAGES).length + 3 + ARTICLES.length + WORKSHEETS.length,
    );
    expect(routes.map((r) => r.path)).toContain('/');
    expect(routes.map((r) => r.path)).toContain('/Guides');
    expect(routes.map((r) => r.path)).toContain('/Resources');
    expect(routes.map((r) => r.path)).toContain('/Worksheets');
  });

  it('never claims the same URL twice', () => {
    const paths = routes.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('gives each page its own title and canonical URL', () => {
    // The bug this whole script exists to fix: every page sharing as the
    // homepage. If two pages ever produce the same head again, fail here.
    const heads = routes.map((r) => headFor(r.path, r.meta, mod) as string);
    expect(new Set(heads).size).toBe(heads.length);

    const guide = routes.find((r) => r.path === `/Guides/${ARTICLES[0].slug}`)!;
    const head = headFor(guide.path, guide.meta, mod) as string;
    expect(head).toContain(
      `<link rel="canonical" href="https://crosseroads.com/Guides/${ARTICLES[0].slug}" />`,
    );
    expect(head).toContain('<meta property="og:type" content="article" />');
    expect(head).toContain('<meta name="author" content="Dr. Kisa Crosse" />');
    expect(head).toContain('<meta property="og:image" content="https://crosseroads.com/og-card.jpg" />');
  });

  it('escapes copy so an apostrophe or ampersand cannot break the markup', () => {
    const head = headFor(
      '/Test',
      {
        title: 'Money & "Aid" <b>now</b>',
        description: "A parent's guide to & < > \" quoting",
      },
      mod,
    ) as string;
    expect(head).toContain('<title>Money &amp; "Aid" &lt;b&gt;now&lt;/b&gt;</title>');
    expect(head).toContain('content="Money &amp; &quot;Aid&quot; &lt;b&gt;now&lt;/b&gt;"');
    expect(head).not.toMatch(/<b>/);
  });

  /** Each line must be one complete, self-closed tag with no stray markup. */
  const WELL_FORMED = /^\s*(<title>[^<>]*<\/title>|<(meta|link)(?: [a-z:-]+="[^"<>]*")+ \/>)$/;

  it('emits nothing but well-formed tags, even for hostile copy', () => {
    const head = headFor(
      '/Test',
      { title: '" onload="alert(1)', description: '</head><script>bad()</script>' },
      mod,
    ) as string;
    for (const line of head.split('\n')) expect(line).toMatch(WELL_FORMED);
    expect(head).not.toContain('<script');
    expect(head).not.toContain('</head>');
  });

  it('produces well-formed tags for every real page', () => {
    for (const route of routes) {
      const head = headFor(route.path, route.meta, mod) as string;
      expect(head).toMatch(/^\s*<title>/);
      expect(head).toContain(`href="https://crosseroads.com${route.path}"`);
      for (const line of head.split('\n')) expect(line).toMatch(WELL_FORMED);
    }
  });
});
