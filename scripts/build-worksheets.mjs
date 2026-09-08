#!/usr/bin/env node
/**
 * Renders every worksheet to a PDF in public/worksheets/.
 *
 * The PDFs are committed, so a deploy never needs a browser and a contributor
 * without Playwright can still build the site. Run this only when a worksheet
 * changes:
 *
 *   npm run build            # produces dist/
 *   npm run worksheets       # then this, against the built site
 *
 * Requires Playwright's chromium once:  npx playwright install chromium
 *
 * Why print-to-PDF rather than a PDF library: the sheet already has a print
 * stylesheet, because families print these from the browser. Generating the
 * download from that same stylesheet means the file and the printed page can
 * never drift apart — one layout, one set of rules, two ways out.
 */

import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'worksheets');
const PORT = Number(process.env.WORKSHEET_PORT ?? 4390);
const BASE = `http://localhost:${PORT}`;

if (!existsSync(join(ROOT, 'dist', 'index.html'))) {
  console.error('dist/ is missing. Run `npm run build` first.');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error(
    'Playwright is not installed.\n' +
      '  npm i -D playwright && npx playwright install chromium\n' +
      'The committed PDFs in public/worksheets are still valid; you only need this to regenerate them.',
  );
  process.exit(1);
}

const { WORKSHEETS } = await import('../src/components/worksheets/data/worksheets.ts').catch(
  () => ({}),
);

// The data module is TypeScript, so read the slugs out of the built site
// instead of trying to import it here.
async function slugsFromBuild(page) {
  await page.goto(`${BASE}/Worksheets`, { waitUntil: 'networkidle' });
  return page.evaluate(() =>
    [...document.querySelectorAll('a[href^="/Worksheets/"]')]
      .map((a) => a.getAttribute('href').replace('/Worksheets/', ''))
      .filter((slug, i, all) => slug && all.indexOf(slug) === i),
  );
}

mkdirSync(OUT, { recursive: true });

const server = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['vite', 'preview', '--port', String(PORT)],
  { cwd: ROOT, stdio: 'ignore', shell: process.platform === 'win32' },
);

const stop = () => {
  try {
    server.kill();
  } catch {
    /* already gone */
  }
};
process.on('exit', stop);
process.on('SIGINT', () => {
  stop();
  process.exit(130);
});

// Wait for the preview server rather than sleeping a fixed amount.
let up = false;
for (let i = 0; i < 40 && !up; i += 1) {
  await new Promise((r) => setTimeout(r, 500));
  try {
    const res = await fetch(`${BASE}/Worksheets`);
    up = res.ok;
  } catch {
    /* not yet */
  }
}
if (!up) {
  console.error(`Preview server never answered on ${BASE}.`);
  stop();
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();

const slugs = WORKSHEETS?.length
  ? WORKSHEETS.map((sheet) => sheet.slug)
  : await slugsFromBuild(page);

console.log(`Rendering ${slugs.length} worksheets to PDF...\n`);

let failed = 0;
for (const slug of slugs) {
  try {
    await page.goto(`${BASE}/Worksheets/${slug}`, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    const buffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
      // No browser header or footer: the sheet prints its own credit line, and
      // Chrome's default footer stamps a localhost URL onto every page.
      displayHeaderFooter: false,
      margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' },
    });
    writeFileSync(join(OUT, `${slug}.pdf`), buffer);
    console.log(`  ${slug.padEnd(40)} ${(buffer.length / 1024).toFixed(0)} KB`);
  } catch (err) {
    failed += 1;
    console.error(`  ${slug.padEnd(40)} FAILED: ${err.message}`);
  }
}

await browser.close();
stop();

console.log(`\n${slugs.length - failed} of ${slugs.length} written to public/worksheets/`);
if (failed) process.exitCode = 1;
