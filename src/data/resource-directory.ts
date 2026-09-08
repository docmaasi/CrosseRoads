// The worldwide open resource directory, vendored at build time by
// scripts/sync-resources.mjs from github.com/docmaasi/crosseroads-resources.
//
// Never fetch this at runtime. The site's Content Security Policy allows
// connections to its own origin only, so a browser fetch to GitHub is blocked.
// The prebuild step bakes the JSON into the bundle instead.
//
// Data is CC BY 4.0 — CrosseRoads Open Resource Directory.

import raw from './resources.json';

export type ResourceCategory =
  | 'scholarships'
  | 'financial-aid'
  | 'admissions'
  | 'test-prep'
  | 'careers'
  | 'skills'
  | 'family-support'
  | 'wellbeing'
  | 'open-data'
  | 'open-source';

export interface DirectoryResource {
  id: string;
  name: string;
  category: ResourceCategory;
  /** ISO 3166-1 alpha-2 code, or 'Global'. */
  country: string;
  url: string;
  description: string;
  provider: string;
  providerType: string;
  requiresAccount: boolean;
  /** Something a family should know before they click. */
  caveat?: string;
  verifiedAt: string;
  license?: string;
  clientSideOnly?: boolean;
  tags?: string[];
}

export const DIRECTORY = raw as DirectoryResource[];

/** Display order, most useful to a family in a hurry first. */
export const CATEGORY_ORDER: ResourceCategory[] = [
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

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  scholarships: 'Scholarships',
  'financial-aid': 'Paying for college',
  admissions: 'Applying to college',
  'test-prep': 'Test preparation',
  careers: 'Career exploration',
  skills: 'Free learning',
  'family-support': 'Family support',
  wellbeing: 'Mental health & wellbeing',
  'open-data': 'Open data',
  'open-source': 'Open source',
};

export const CATEGORY_BLURBS: Record<ResourceCategory, string> = {
  scholarships: 'Money you do not pay back, from foundations and governments.',
  'financial-aid': 'Grants, loans and the tools that show what college will really cost.',
  admissions: 'Official application routes and free advising.',
  'test-prep': 'Practice and revision that costs nothing.',
  careers: 'What jobs pay, what they need, and how to get there.',
  skills: 'Courses, textbooks and training, free to use.',
  'family-support': 'Food, housing, childcare, legal help and benefits.',
  wellbeing: 'Someone to talk to, for your teenager and for you.',
  'open-data': 'The public datasets behind the numbers, for anyone building tools.',
  'open-source': 'Openly licensed code a school or nonprofit can reuse.',
};

const COUNTRY_NAMES: Record<string, string> = {
  AR: 'Argentina',
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CL: 'Chile',
  CO: 'Colombia',
  DE: 'Germany',
  GB: 'United Kingdom',
  GH: 'Ghana',
  IE: 'Ireland',
  IN: 'India',
  JM: 'Jamaica',
  KE: 'Kenya',
  MX: 'Mexico',
  NG: 'Nigeria',
  NL: 'Netherlands',
  NO: 'Norway',
  NZ: 'New Zealand',
  US: 'United States',
  Global: 'Worldwide',
};

export function countryName(code: string): string {
  return COUNTRY_NAMES[code] ?? code;
}

/** Every country present in the data, named and counted, US first then A–Z, Worldwide last. */
export function directoryCountries(
  entries: DirectoryResource[] = DIRECTORY,
): { code: string; label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    counts.set(entry.country, (counts.get(entry.country) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([code, count]) => ({ code, label: countryName(code), count }))
    .sort((a, b) => {
      // The audience is Maryland families first, so the US leads; 'Worldwide'
      // is a catch-all and reads better at the end than sorted under W.
      const weight = (code: string) => (code === 'US' ? 0 : code === 'Global' ? 2 : 1);
      const delta = weight(a.code) - weight(b.code);
      return delta !== 0 ? delta : a.label.localeCompare(b.label);
    });
}

/**
 * Entries for one country, plus everything marked Worldwide — a family in Kenya
 * should still see the global crisis-line directory. `null` means no filter.
 */
export function filterByCountry(
  country: string | null,
  entries: DirectoryResource[] = DIRECTORY,
): DirectoryResource[] {
  if (!country) return entries;
  if (country === 'Global') return entries.filter((entry) => entry.country === 'Global');
  return entries.filter(
    (entry) => entry.country === country || entry.country === 'Global',
  );
}

/** Groups entries by category in CATEGORY_ORDER, dropping empty groups. */
export function groupByCategory(
  entries: DirectoryResource[],
): { category: ResourceCategory; label: string; blurb: string; items: DirectoryResource[] }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    blurb: CATEGORY_BLURBS[category],
    items: entries.filter((entry) => entry.category === category),
  })).filter((group) => group.items.length > 0);
}
