/**
 * Bakes each route's own <head> into a real HTML file, after `vite build`.
 *
 * (No shebang, unlike its sibling scripts: src/data/prerender.test.ts imports
 * the two pure functions below to check the markup they generate, and vite's
 * module transform cannot parse a shebang. It is always run as `node
 * scripts/prerender.mjs`, so nothing needed one.)
 *
 *   npm run build       (runs automatically)
 *   npm run prerender
 *
 * ## Why this exists
 *
 * CrosseRoads is a single-page app: the server hands every URL the same
 * index.html, and React rewrites the title and social tags once it boots. That
 * works for people, whose browsers run the script. It does not work for the
 * crawlers behind link previews — Facebook, LinkedIn, iMessage, Slack,
 * WhatsApp, Bluesky — which fetch the URL, read the markup, and leave without
 * executing anything. Until this script existed, every shared CrosseRoads link
 * previewed as the homepage: same title, same description, same picture,
 * whichever guide or worksheet had actually been shared.
 *
 * So for every route the site has we write dist/<route>/index.html: a copy of
 * the built shell with the head region swapped for that page's own tags.
 * Vercel checks the filesystem before it applies the SPA rewrite in
 * vercel.json, so those files are what a crawler is served, and the rewrite
 * still catches everything else. The app is untouched — the same bundle boots
 * on the same path and takes over exactly as before.
 *
 * ## Where the copy comes from
 *
 * src/data/page-meta.ts, the same module the running app reads, loaded here
 * through esbuild so this script sees the real values rather than a second
 * transcription of them that could quietly fall out of date. The guide and
 * worksheet data load the same way, which is what makes per-article titles
 * possible at all.
 */

import { build } from 'esbuild';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const START = 'prerender:head:start';
const END = '<!-- prerender:head:end -->';

/**
 * Loads the project's own TypeScript modules into this plain node script.
 *
 * One esbuild bundle, one dynamic import. The alternative is scraping the data
 * files with regular expressions, and a regex that silently matches nothing is
 * how a build step starts lying about the site it describes.
 */
async function loadProjectModules() {
  const scratch = mkdtempSync(join(tmpdir(), 'crosseroads-prerender-'));
  const outfile = join(scratch, 'bundle.mjs');
  try {
    await build({
      stdin: {
        contents: [
          "export * from './src/data/page-meta.ts';",
          "export { ARTICLES } from './src/components/guides/data/articles.ts';",
          "export { WORKSHEETS } from './src/components/worksheets/data/worksheets.ts';",
          "export { DIRECTORY } from './src/data/resource-directory.ts';",
        ].join('\n'),
        resolveDir: ROOT,
        sourcefile: 'prerender-entry.ts',
        loader: 'ts',
      },
      bundle: true,
      format: 'esm',
      platform: 'node',
      target: 'node18',
      outfile,
      logLevel: 'warning',
    });
    return await import(pathToFileURL(outfile).href);
  } finally {
    // Best effort: a leftover temp directory is harmless, a throw here is not.
    try {
      rmSync(scratch, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
}

/** Escapes a value for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Escapes a value for use as HTML text content. */
const text = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/**
 * The head markup for one page.
 *
 * Deliberately the same tags `applySeoHead` writes at runtime, in the same
 * order, so that viewing source and inspecting the live DOM tell one story.
 */
export function headFor(path, meta, { SITE_ORIGIN, SITE_NAME, OG_IMAGE_URL }) {
  const canonical = `${SITE_ORIGIN}${path}`;
  const tags = [
    `<title>${text(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<link rel="canonical" href="${attr(canonical)}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:type" content="${attr(meta.type ?? 'website')}" />`,
    `<meta property="og:url" content="${attr(canonical)}" />`,
    `<meta property="og:site_name" content="${attr(SITE_NAME)}" />`,
    `<meta property="og:image" content="${attr(OG_IMAGE_URL)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${attr(OG_IMAGE_URL)}" />`,
  ];
  if (meta.keywords?.length) {
    tags.push(`<meta name="keywords" content="${attr(meta.keywords.join(', '))}" />`);
  }
  if (meta.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${attr(meta.publishedTime)}" />`);
  }
  if (meta.author) {
    tags.push(`<meta property="article:author" content="${attr(meta.author)}" />`);
    tags.push(`<meta name="author" content="${attr(meta.author)}" />`);
  }
  if (meta.section) {
    tags.push(`<meta property="article:section" content="${attr(meta.section)}" />`);
  }
  return tags.map((tag) => `    ${tag}`).join('\n');
}

/** Every route that deserves its own file. */
export function routesFor(mod) {
  const { PAGES, ARTICLES, WORKSHEETS, DIRECTORY } = mod;
  return [
    ...Object.entries(PAGES).map(([path, meta]) => ({ path, meta })),
    { path: '/Resources', meta: mod.resourcesMeta(DIRECTORY.length) },
    { path: '/Guides', meta: mod.guidesIndexMeta(ARTICLES.length) },
    { path: '/Worksheets', meta: mod.worksheetsIndexMeta(WORKSHEETS.length) },
    ...ARTICLES.map((article) => ({
      path: `/Guides/${article.slug}`,
      meta: mod.guideMeta(article),
    })),
    ...WORKSHEETS.map((worksheet) => ({
      path: `/Worksheets/${worksheet.slug}`,
      meta: mod.worksheetMeta(worksheet),
    })),
  ];
}

async function main() {
  const shellPath = join(DIST, 'index.html');
  let shell;
  try {
    shell = readFileSync(shellPath, 'utf8');
  } catch {
    throw new Error(`no build to prerender — ${shellPath} is missing. Run \`vite build\` first.`);
  }

  // The start marker sits inside an HTML comment that opens a few lines above
  // it, so rewind to that comment's opening rather than cutting mid-comment.
  const markerAt = shell.indexOf(START);
  const startAt = markerAt === -1 ? -1 : shell.lastIndexOf('<!--', markerAt);
  const endAt = shell.indexOf(END);
  if (startAt === -1 || endAt === -1) {
    throw new Error(
      'index.html has no prerender:head markers, so there is nothing to replace. ' +
        'They were removed or reformatted — restore them around the title and social tags.',
    );
  }
  const before = shell.slice(0, startAt);
  const after = shell.slice(endAt + END.length);

  const mod = await loadProjectModules();
  const routes = routesFor(mod);

  const seen = new Set();
  for (const { path, meta } of routes) {
    if (!meta?.title || !meta?.description) {
      throw new Error(`${path} has no title or description in page-meta.ts.`);
    }
    if (seen.has(path)) throw new Error(`${path} is prerendered twice — two routes claim it.`);
    seen.add(path);

    const html = `${before}${headFor(path, meta, mod).trimStart()}${after}`;
    // "/" is the shell itself; every other route becomes <route>/index.html,
    // which Vercel serves for both "/Guides" and "/Guides/".
    const outfile = path === '/' ? shellPath : join(DIST, path, 'index.html');
    mkdirSync(dirname(outfile), { recursive: true });
    writeFileSync(outfile, html);
  }

  const guides = routes.filter((r) => r.path.startsWith('/Guides/')).length;
  const sheets = routes.filter((r) => r.path.startsWith('/Worksheets/')).length;
  console.log(
    `prerender: ${routes.length} pages ` +
      `(${routes.length - guides - sheets} routes, ${guides} guides, ${sheets} worksheets)`,
  );
}

// Set exitCode rather than calling process.exit(): node on Windows aborts with
// a libuv assertion if the process is torn down while a handle is still closing.
main().catch((error) => {
  console.error(`prerender failed: ${error.message}`);
  process.exitCode = 1;
});
