// Data model for the College Admissions Planner checklist. All content
// is transcribed from Dr. Kisa Crosse's College Admissions Planner
// document — keep edits editorial (phrasing), never factual.

export interface ChecklistItem {
  id: string;
  text: string;
  /** Optional expanded guidance shown under the item. */
  detail?: string;
}

export interface PhaseGroup {
  id: string;
  title: string;
  /** Short framing sentence shown under the group title. */
  intro?: string;
  /** "Parent tip" callout rendered after the items. */
  tip?: string;
  items: ChecklistItem[];
}

export interface PlannerPhase {
  id: string;
  name: string;
  subtitle: string;
  groups: PhaseGroup[];
}
