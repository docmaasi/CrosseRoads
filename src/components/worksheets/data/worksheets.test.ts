import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  CATEGORY_BLURBS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  WORKSHEETS,
  worksheetBySlug,
  worksheetPdfPath,
  worksheetsByCategory,
} from './worksheets';

describe('the worksheet library', () => {
  it('has a substantial number of sheets', () => {
    expect(WORKSHEETS.length).toBeGreaterThanOrEqual(30);
  });

  it('has unique slugs and unique titles', () => {
    const slugs = WORKSHEETS.map((sheet) => sheet.slug);
    const titles = WORKSHEETS.map((sheet) => sheet.title);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('uses kebab-case slugs, which are also URLs and filenames', () => {
    for (const sheet of WORKSHEETS) {
      expect(sheet.slug, sheet.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('only uses categories the UI can label', () => {
    for (const sheet of WORKSHEETS) {
      expect(CATEGORY_ORDER, sheet.slug).toContain(sheet.category);
      expect(CATEGORY_LABELS[sheet.category]).toBeTruthy();
      expect(CATEGORY_BLURBS[sheet.category]).toBeTruthy();
    }
  });

  it('gives every sheet a purpose written for a parent, and real content', () => {
    for (const sheet of WORKSHEETS) {
      expect(sheet.purpose.length, sheet.slug).toBeGreaterThan(40);
      expect(sheet.sections.length, sheet.slug).toBeGreaterThan(0);
      const fields = sheet.sections.flatMap((section) => section.fields);
      expect(fields.length, sheet.slug).toBeGreaterThan(0);
      // A sheet made only of prose is a leaflet, not a worksheet.
      expect(
        fields.some((field) => field.kind !== 'note'),
        `${sheet.slug} has nothing to fill in`,
      ).toBe(true);
    }
  });

  it('describes every field with the vocabulary the renderer understands', () => {
    const kinds = new Set(['lines', 'table', 'checklist', 'boxes', 'grid', 'scale', 'note']);
    for (const sheet of WORKSHEETS) {
      for (const section of sheet.sections) {
        for (const field of section.fields) {
          expect(kinds, `${sheet.slug}: ${field.kind}`).toContain(field.kind);
          if (field.kind === 'table' && field.widths) {
            // Widths are percentages of the printed page; they must add up or
            // the last column runs off the right edge of the paper.
            expect(field.widths.length, sheet.slug).toBe(field.columns.length);
            const total = field.widths.reduce((sum, w) => sum + w, 0);
            expect(Math.abs(total - 100), `${sheet.slug} widths sum to ${total}`).toBeLessThanOrEqual(1);
          }
          if (field.kind === 'table') {
            expect(field.rows, sheet.slug).toBeGreaterThan(0);
            expect(field.columns.length, sheet.slug).toBeGreaterThan(0);
          }
          if (field.kind === 'grid') {
            expect(field.columns.length, sheet.slug).toBeGreaterThan(0);
            expect(field.rows.length, sheet.slug).toBeGreaterThan(0);
          }
          if (field.kind === 'scale') {
            expect(field.points, sheet.slug).toBeGreaterThan(1);
          }
        }
      }
    }
  });

  it('keeps tips short and practical', () => {
    for (const sheet of WORKSHEETS) {
      if (!sheet.tips) continue;
      expect(sheet.tips.length, sheet.slug).toBeLessThanOrEqual(3);
      for (const tip of sheet.tips) expect(tip.length, sheet.slug).toBeGreaterThan(20);
    }
  });

  it('ships a downloadable PDF for every single sheet', () => {
    // The library promises a download on every card. A missing file is a
    // broken promise a family only discovers after clicking.
    const root = join(process.cwd(), 'public', 'worksheets');
    const missing = WORKSHEETS.filter((sheet) => !existsSync(join(root, `${sheet.slug}.pdf`)));
    expect(missing.map((sheet) => sheet.slug)).toEqual([]);
  });

  it('serves PDFs from our own origin, which is all the CSP allows', () => {
    for (const sheet of WORKSHEETS) {
      expect(worksheetPdfPath(sheet.slug)).toBe(`/worksheets/${sheet.slug}.pdf`);
    }
  });
});

describe('lookup helpers', () => {
  it('finds a sheet by slug and returns undefined for an unknown one', () => {
    expect(worksheetBySlug(WORKSHEETS[0].slug)?.title).toBe(WORKSHEETS[0].title);
    expect(worksheetBySlug('no-such-worksheet')).toBeUndefined();
    expect(worksheetBySlug(undefined as unknown as string)).toBeUndefined();
  });

  it('groups without losing or duplicating a sheet', () => {
    const groups = worksheetsByCategory();
    const total = groups.reduce((sum, group) => sum + group.items.length, 0);
    expect(total).toBe(WORKSHEETS.length);
    expect(groups.every((group) => group.items.length > 0)).toBe(true);
  });

  it('covers every category with at least one sheet', () => {
    const covered = new Set(WORKSHEETS.map((sheet) => sheet.category));
    for (const category of CATEGORY_ORDER) {
      expect(covered, category).toContain(category);
    }
  });
});
