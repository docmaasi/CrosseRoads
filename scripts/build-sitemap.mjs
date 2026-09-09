#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml and public/guides.xml (an RSS feed) from the
 * routes and the content that actually exists.
 *
 * The hand-written sitemap had drifted badly: it listed eight URLs while the
 * site had grown to more than fifty, so every worksheet and every guide article
 * was invisible to search engines. A generated file cannot drift, and the
 * accompanying test fails the build if it ever does.
 *
 *   npm run sitemap
 *
 * Slugs are read straight out of the TypeScript data files with a narrow
 * regex rather than by importing them — this script runs in plain node, and a
 * build step that needs a TypeScript loader is a build step that breaks. The
 * test in sitemap.test.ts imports the real modules and asserts the two agree,
 * so the shortcut here can never quietly go wrong.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = process.env.SITE_URL ?? 'https://crosseroads.com';

/** Pulls `slug: 'value'` out of a data file. */
function slugsIn(file) {
  const source = readFileSync(file, 'utf8');
  return [...source.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);
}

const worksheetDir = join(ROOT, 'src', 'components', 'worksheets', 'data');
const worksheetSlugs = readdirSync(worksheetDir)
  .filter((f) => f.startsWith('sheets-') && f.endsWith('.ts'))
  .flatMap((f) => slugsIn(join(worksheetDir, f)))
  .sort();

const guideDir = join(ROOT, 'src', 'components', 'guides', 'data');
const guideFiles = readdirSync(guideDir).filter(
  (f) => /^articles?-/.test(f) && f.endsWith('.ts') && !f.endsWith('.test.ts'),
);

/**
 * Splits a data file into per-article chunks on the `slug:` key, so a file
 * holding six articles yields six entries rather than only the first. Crude on
 * purpose: this runs in plain node with no TypeScript loader, and the test in
 * sitemap.test.ts imports the real modules and fails if the two disagree.
 */
const guides = guideFiles
  .flatMap((f) => {
    const source = readFileSync(join(guideDir, f), 'utf8');
    const chunks = source.split(/\n\s*(?=slug:\s*')/).slice(1);
    return chunks.map((chunk) => {
      const pick = (key) =>
        chunk.match(new RegExp(`\\b${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))?.[1]?.replace(/\\'/g, "'");
      return {
        slug: pick('slug'),
        title: pick('title'),
        description: pick('description'),
        datePublished: pick('datePublished'),
      };
    });
  })
  .filter((g) => g.slug && g.datePublished)
  .sort((a, b) => (a.datePublished ?? '').localeCompare(b.datePublished ?? ''));

/** Static routes, with the priority each deserves. */
const STATIC = [
  ['/', 'weekly', '1.0'],
  ['/CareerPathfinder', 'monthly', '0.9'],
  ['/WorkWithMe', 'monthly', '0.9'],
  ['/Worksheets', 'weekly', '0.9'],
  ['/About', 'monthly', '0.8'],
  ['/Resources', 'weekly', '0.8'],
  ['/CollegePlanner', 'monthly', '0.8'],
  ['/ParentRoadmap', 'monthly', '0.8'],
  ['/Guides', 'weekly', '0.7'],
  ['/Wellness', 'monthly', '0.7'],
  ['/Privacy', 'yearly', '0.2'],
  ['/Terms', 'yearly', '0.2'],
];

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const urls = [
  ...STATIC.map(([path, freq, pri]) => ({ path, freq, pri })),
  ...guides.map((g) => ({ path: `/Guides/${g.slug}`, freq: 'monthly', pri: '0.6' })),
  ...worksheetSlugs.map((slug) => ({
    path: `/Worksheets/${slug}`,
    freq: 'monthly',
    pri: '0.6',
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, freq, pri }) =>
      `  <url><loc>${SITE}${path}</loc><changefreq>${freq}</changefreq><priority>${pri}</priority></url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), sitemap);

/** An RSS feed for the guides — free, standard, and nothing to maintain. */
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CrosseRoads Guides</title>
    <link>${SITE}/Guides</link>
    <description>Practical guides on career discovery and college admissions, from Dr. Kisa Crosse.</description>
    <language>en-us</language>
    <atom:link href="${SITE}/guides.xml" rel="self" type="application/rss+xml" />
${guides
  .slice()
  .reverse()
  .map(
    (g) => `    <item>
      <title>${esc(g.title)}</title>
      <link>${SITE}/Guides/${g.slug}</link>
      <guid isPermaLink="true">${SITE}/Guides/${g.slug}</guid>
      <description>${esc(g.description)}</description>${
        g.datePublished
          ? `\n      <pubDate>${new Date(`${g.datePublished}T09:00:00Z`).toUTCString()}</pubDate>`
          : ''
      }
    </item>`,
  )
  .join('\n')}
  </channel>
</rss>
`;
writeFileSync(join(ROOT, 'public', 'guides.xml'), rss);

console.log(
  `sitemap.xml: ${urls.length} URLs ` +
    `(${STATIC.length} pages, ${guides.length} guides, ${worksheetSlugs.length} worksheets)`,
);
console.log(`guides.xml:  ${guides.length} items`);
