#!/usr/bin/env node
/**
 * Turns the source photographs in photos/ into the responsive WebP and AVIF
 * files the site serves from public/images/.
 *
 * Run it after adding or replacing anything in photos/:
 *   npm run images
 *
 * The outputs are committed, so a normal build and a Vercel deploy never need
 * sharp. That also means a contributor without sharp installed can still build.
 *
 * Budgets are enforced, not suggested: a hero over 220 KB or a supporting image
 * over 120 KB fails the run rather than quietly shipping. Quality steps down
 * until the file fits, so a busy photograph loses a little fidelity instead of
 * costing a parent on a phone plan half a megabyte.
 */

import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'photos');
const OUT = join(ROOT, 'public', 'images');

/** name -> role. Heroes get two widths; supporting images are smaller. */
const ROLES = {
  'hero-career': 'hero',
  'hero-college': 'hero',
  'hero-parents': 'hero',
  'hero-wellness': 'hero',
  'hero-guides': 'hero',
  'mission-band': 'hero',
  'acceptance-letter': 'support',
  graduation: 'support',
  'dr-crosse': 'portrait',
};

const PROFILE = {
  hero: { widths: [1600, 800], budgetKb: 220 },
  support: { widths: [1200, 600], budgetKb: 120 },
  // Square headshot. Deliberately small: it renders at roughly 200px and the
  // source is a 400px LinkedIn export, so anything wider is invented detail.
  portrait: { widths: [560, 280], budgetKb: 90 },
};

if (!existsSync(SRC)) {
  console.error('photos/ does not exist — nothing to build.');
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const kb = (bytes) => Math.round(bytes / 1024);
const failures = [];
const built = [];

/** Encodes at descending quality until the result fits the budget. */
async function encode(input, target, format, budgetBytes) {
  // The widest variant carries the budget; narrower ones come in far under it.
  for (const quality of [80, 74, 68, 62, 56, 50, 44]) {
    const pipeline = input.clone();
    const buffer =
      format === 'avif'
        ? await pipeline.avif({ quality: Math.max(30, quality - 12), effort: 4 }).toBuffer()
        : await pipeline.webp({ quality, effort: 5 }).toBuffer();
    if (buffer.length <= budgetBytes || quality === 44) {
      await sharp(buffer).toFile(target);
      return { bytes: buffer.length, quality };
    }
  }
  throw new Error('unreachable');
}

for (const file of readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = file.replace(/\.[^.]+$/, '');
  const role = ROLES[name];
  if (!role) {
    console.warn(`skipping ${file} — no role in ROLES, add one if it belongs on the site.`);
    continue;
  }
  const { widths, budgetKb } = PROFILE[role];
  const source = sharp(join(SRC, file)).rotate();
  const meta = await source.metadata();

  for (const width of widths) {
    const resized = source.clone().resize({ width, withoutEnlargement: true });
    const isWidest = width === widths[0];
    const budget = (isWidest ? budgetKb : Math.round(budgetKb / 2)) * 1024;

    for (const format of ['webp', 'avif']) {
      const target = join(OUT, `${name}-${width}.${format}`);
      const { bytes, quality } = await encode(resized, target, format, budget);
      const over = isWidest && format === 'webp' && bytes > budgetKb * 1024;
      built.push({ name, width, format, kb: kb(bytes), quality, over });
      if (over) failures.push(`${name}-${width}.${format} is ${kb(bytes)} KB, budget ${budgetKb} KB`);
    }
  }

  console.log(
    `${name.padEnd(20)} ${meta.width}x${meta.height} -> ${widths.join(', ')} (${role}, ${meta.width / meta.height < 1.9 ? 'standard' : 'wide'} crop)`,
  );
}

console.log('');
for (const item of built.filter((b) => b.format === 'webp')) {
  console.log(`  ${`${item.name}-${item.width}.webp`.padEnd(34)} ${String(item.kb).padStart(4)} KB  q${item.quality}`);
}
const total = built.reduce((sum, item) => sum + item.kb, 0);
console.log(`\n${built.length} files, ${total} KB total on disk.`);

if (failures.length) {
  console.error('\nOver budget:\n' + failures.map((f) => `  ${f}`).join('\n'));
  process.exit(1);
}
