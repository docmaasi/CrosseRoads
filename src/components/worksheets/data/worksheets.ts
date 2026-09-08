// The CrosseRoads worksheet library.
//
// Free, openly licensed (CC BY 4.0), printable. Every sheet is data described
// with the vocabulary in types.ts, so one renderer draws all of them — on
// screen, on paper, and in the PDFs under public/worksheets.

import type { Worksheet, WorksheetCategory } from './types';
import { CATEGORY_LABELS } from './types';
import { COLLEGE_LIST_SHEETS } from './sheets-college-list';
import { APPLICATION_SHEETS } from './sheets-applications';
import { MONEY_SHEETS } from './sheets-money';
import { CAREER_SHEETS } from './sheets-career';
import { FAMILY_SHEETS } from './sheets-family';
import { WELLBEING_SHEETS } from './sheets-wellbeing';
import { TIMELINE_SHEETS } from './sheets-timeline';

export * from './types';

/** Display order: roughly the order a family meets these problems in real life. */
export const CATEGORY_ORDER: WorksheetCategory[] = [
  'timeline',
  'career',
  'college-list',
  'applications',
  'money',
  'family',
  'wellbeing',
];

export const WORKSHEETS: Worksheet[] = [
  ...TIMELINE_SHEETS,
  ...CAREER_SHEETS,
  ...COLLEGE_LIST_SHEETS,
  ...APPLICATION_SHEETS,
  ...MONEY_SHEETS,
  ...FAMILY_SHEETS,
  ...WELLBEING_SHEETS,
];

export function worksheetBySlug(slug: string): Worksheet | undefined {
  return WORKSHEETS.find((sheet) => sheet.slug === slug);
}

export function worksheetsByCategory(): {
  category: WorksheetCategory;
  label: string;
  items: Worksheet[];
}[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    items: WORKSHEETS.filter((sheet) => sheet.category === category),
  })).filter((group) => group.items.length > 0);
}

/** Where the PDF for a worksheet lives. Same origin — the CSP allows nothing else. */
export function worksheetPdfPath(slug: string): string {
  return `/worksheets/${slug}.pdf`;
}

export const LIBRARY_LICENCE = {
  name: 'CC BY 4.0',
  url: 'https://creativecommons.org/licenses/by/4.0/',
  attribution: 'CrosseRoads Worksheet Library — crosseroads.com',
  summary:
    'Free to print, copy, adapt and share — including by schools, counsellors and nonprofits, and including commercially — as long as you credit CrosseRoads.',
};
