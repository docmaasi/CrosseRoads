#!/usr/bin/env node
/**
 * Runs axe-core over every page, at desktop and phone width, and prints what
 * it finds. Exits non-zero on any serious or critical violation.
 *
 *   npm run build && npm run a11y
 *
 * Why a script rather than a unit test: axe needs a real browser and real
 * layout, because half of what it checks — colour contrast, focus order,
 * whether a control is actually reachable — does not exist in jsdom. Keeping
 * it out of `npm test` also keeps the test suite fast.
 *
 * Dev-only. Neither Playwright nor axe ships in the bundle.
 */

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.env.A11Y_PORT ?? 4402);
const BASE = `http://localhost:${PORT}`;

const PAGES = [
  '/CareerPathfinder',
  '/CollegePlanner',
  '/ParentRoadmap',
  '/Wellness',
  '/Guides',
  '/Guides/senior-year-stress-what-is-normal',
  '/Worksheets',
  '/Worksheets/balanced-college-list',
  '/WorkWithMe',
  '/Search',
  '/Privacy',
  '/Terms',
];

const VIEWPORTS = [
  ['desktop', 1280, 900],
  ['phone', 390, 844],
];

if (!existsSync(join(ROOT, 'dist', 'index.html'))) {
  console.error('dist/ is missing. Run `npm run build` first.');
  process.exit(1);
}

let chromium;
let AxeBuilder;
try {
  ({ chromium } = await import('playwright'));
  AxeBuilder = (await import('@axe-core/playwright')).default;
} catch {
  console.error('Needs dev deps: npm i -D playwright @axe-core/playwright && npx playwright install chromium');
  process.exit(1);
}

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

let up = false;
for (let i = 0; i < 40 && !up; i += 1) {
  await new Promise((r) => setTimeout(r, 500));
  try {
    up = (await fetch(`${BASE}/Search`)).ok;
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
const findings = new Map();
let checked = 0;

for (const [label, width, height] of VIEWPORTS) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();

  for (const path of PAGES) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    checked += 1;
    for (const violation of violations) {
      const key = violation.id;
      const entry = findings.get(key) ?? {
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        where: new Set(),
        sample: violation.nodes[0]?.html ?? '',
      };
      entry.where.add(`${path} (${label})`);
      findings.set(key, entry);
    }
  }
  await context.close();
}

await browser.close();
stop();

const RANK = { critical: 0, serious: 1, moderate: 2, minor: 3 };
const sorted = [...findings.values()].sort(
  (a, b) => (RANK[a.impact] ?? 9) - (RANK[b.impact] ?? 9),
);

console.log(`\naxe-core over ${checked} page renders (${PAGES.length} pages x ${VIEWPORTS.length} widths)\n`);

if (!sorted.length) {
  console.log('  No WCAG 2.2 AA violations found.\n');
} else {
  for (const finding of sorted) {
    console.log(`  [${(finding.impact ?? 'unknown').toUpperCase()}] ${finding.id} — ${finding.help}`);
    console.log(`      on: ${[...finding.where].slice(0, 6).join(', ')}${finding.where.size > 6 ? ` +${finding.where.size - 6} more` : ''}`);
    if (finding.sample) console.log(`      e.g. ${finding.sample.slice(0, 110)}`);
    console.log('');
  }
}

const blocking = sorted.filter((f) => f.impact === 'critical' || f.impact === 'serious');
console.log(`${sorted.length} distinct issue(s); ${blocking.length} serious or critical.\n`);
if (blocking.length) process.exitCode = 1;
