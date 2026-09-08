// The worksheet format.
//
// A worksheet is data, not markup. One renderer turns any of these into a page
// that reads well on a phone and prints cleanly on US Letter, which means a new
// worksheet is a few lines of description rather than a new component — and it
// means the whole library can be published as open data for anyone to reuse.
//
// Licensed CC BY 4.0. See public/worksheets/LICENSE.

/** A single fillable element. */
export type Field =
  /** Ruled lines to write on. */
  | { kind: 'lines'; label?: string; count: number }
  /** A grid with column headers and blank rows. */
  | { kind: 'table'; columns: string[]; rows: number; widths?: number[] }
  /** Tick boxes with printed labels. */
  | { kind: 'checklist'; items: string[] }
  /** Labelled boxes, each with room to write underneath. */
  | { kind: 'boxes'; items: string[]; lines?: number }
  /** Row labels down the side, blank columns across. */
  | { kind: 'grid'; columns: string[]; rows: string[] }
  /** A 1–n rating with anchored ends. */
  | { kind: 'scale'; label: string; low: string; high: string; points: number }
  /** Printed guidance, not a fillable field. */
  | { kind: 'note'; text: string };

export interface WorksheetSection {
  heading?: string;
  /** One line of instruction, printed small under the heading. */
  hint?: string;
  fields: Field[];
}

export type WorksheetCategory =
  | 'college-list'
  | 'applications'
  | 'money'
  | 'career'
  | 'family'
  | 'wellbeing'
  | 'timeline';

/** Who fills it in. Shown as a badge so a parent can hand the right sheet over. */
export type WorksheetAudience = 'student' | 'parent' | 'family';

export interface Worksheet {
  /** Stable kebab-case id. Also the URL and the PDF filename. */
  slug: string;
  title: string;
  category: WorksheetCategory;
  audience: WorksheetAudience;
  /** One or two sentences: what this is for, in a parent's language. */
  purpose: string;
  /** Roughly how many printed pages. Used only to set expectations. */
  pages: number;
  /** When in the journey this is most useful. */
  when?: string;
  sections: WorksheetSection[];
  /** Printed at the foot of the sheet. Keep to three, keep them practical. */
  tips?: string[];
}

export const CATEGORY_LABELS: Record<WorksheetCategory, string> = {
  'college-list': 'Building a college list',
  applications: 'Applications & essays',
  money: 'Paying for college',
  career: 'Career & self-discovery',
  family: 'Family & logistics',
  wellbeing: 'Wellbeing',
  timeline: 'Timelines & checklists',
};

export const CATEGORY_BLURBS: Record<WorksheetCategory, string> = {
  'college-list': 'Deciding where to apply, and why.',
  applications: 'Getting everything in, on time, without losing track.',
  money: 'What it really costs, and what you will really pay.',
  career: 'Working out what your student is actually built for.',
  family: 'The practical side nobody warns you about.',
  wellbeing: 'Keeping the student — and the parent — standing.',
  timeline: 'What to do, and the month to do it in.',
};

export const AUDIENCE_LABELS: Record<WorksheetAudience, string> = {
  student: 'For the student',
  parent: 'For the parent',
  family: 'Fill in together',
};
