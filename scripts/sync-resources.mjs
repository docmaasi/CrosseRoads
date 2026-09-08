#!/usr/bin/env node
/**
 * Vendors the open resource directory into src/data/resources.json.
 *
 * Why vendored and committed rather than fetched in the browser: this site runs
 * under a Content Security Policy that allows scripts and connections from its own
 * origin only. A runtime fetch to raw.githubusercontent.com would be blocked, and
 * even if it weren't, a family on a slow connection would watch an empty panel
 * while GitHub answered. So the data is baked into the bundle at build time.
 *
 * Runs as `prebuild`. If the network is unavailable the existing committed copy is
 * kept and the build continues — a stale directory is infinitely better than a
 * broken deploy, and the file is in git so "stale" means "last known good".
 *
 * Usage:
 *   node scripts/sync-resources.mjs           # fetch, validate, write if changed
 *   node scripts/sync-resources.mjs --check   # fail if the vendored copy is stale
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = join(ROOT, 'src', 'data', 'resources.json');
const SOURCE =
  'https://raw.githubusercontent.com/docmaasi/crosseroads-resources/main/resources.json';

const CATEGORIES = [
  'scholarships',
  'financial-aid',
  'admissions',
  'test-prep',
  'careers',
  'skills',
  'family-support',
  'wellbeing',
  'open-data',
  'open-source',
];

const checkOnly = process.argv.includes('--check');

/** Rejects anything that is not the shape the UI renders, before it is written. */
function assertUsable(data) {
  if (!Array.isArray(data)) throw new Error('payload is not an array');
  if (data.length < 20) throw new Error(`only ${data.length} entries — refusing a truncated payload`);
  for (const entry of data) {
    for (const field of ['id', 'name', 'category', 'country', 'url', 'description']) {
      if (typeof entry?.[field] !== 'string' || !entry[field]) {
        throw new Error(`entry ${entry?.id ?? '?'} is missing ${field}`);
      }
    }
    if (!CATEGORIES.includes(entry.category)) {
      throw new Error(`entry ${entry.id} has unknown category "${entry.category}"`);
    }
    if (!entry.url.startsWith('https://')) {
      throw new Error(`entry ${entry.id} has a non-HTTPS url`);
    }
    if (typeof entry.requiresAccount !== 'boolean') {
      throw new Error(`entry ${entry.id} is missing requiresAccount`);
    }
  }
  return data;
}

const existing = existsSync(TARGET) ? readFileSync(TARGET, 'utf8') : '';

let fetched;
try {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  const response = await fetch(SOURCE, {
    signal: controller.signal,
    headers: { accept: 'application/json' },
  });
  clearTimeout(timer);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  fetched = assertUsable(await response.json());
} catch (err) {
  const reason = err.name === 'AbortError' ? 'timed out' : err.message;
  if (!existing) {
    console.error(`sync-resources: cannot reach the directory (${reason}) and there is no vendored copy.`);
    process.exit(1);
  }
  console.warn(`sync-resources: ${reason} — keeping the committed copy (${JSON.parse(existing).length} entries).`);
  fetched = null;
}

if (fetched) {
  const next = `${JSON.stringify(fetched, null, 2)}\n`;

  if (next === existing) {
    console.log(`sync-resources: up to date (${fetched.length} entries).`);
  } else if (checkOnly) {
    console.error(
      'sync-resources: the vendored copy is stale. Run `npm run sync:resources` and commit the result.',
    );
    process.exitCode = 1;
  } else {
    writeFileSync(TARGET, next);
    const before = existing ? JSON.parse(existing).length : 0;
    console.log(`sync-resources: updated ${before} -> ${fetched.length} entries.`);
  }
}

// Fall off the end rather than calling process.exit(): Node on Windows aborts
// with a libuv assertion if the process exits while the undici socket from the
// fetch above is still closing. Setting exitCode gets the same result safely.
