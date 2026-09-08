// Platform-wide disclaimers shown in the footer on every page.
//
// These are summaries. The binding text lives in the Terms of Use, and the
// wording here deliberately mirrors the "Educational use only" section there —
// if you change one, change both, or the site says two different things about
// what it is.
//
// The footer appears on the Wellness page as well as the career pages, so a
// disclaimer that only mentions the career assessment does not cover the site
// it is printed on. That is why these are scoped by subject, not by page.

export interface Disclaimer {
  id: string;
  /** Short label, so a reader scanning can find the one that applies to them. */
  label: string;
  text: string;
}

export const DISCLAIMERS: Disclaimer[] = [
  {
    id: 'educational',
    label: 'Educational use only',
    text:
      'Everything on CrosseRoads is provided for education and self-reflection. It is not professional career, academic, financial, legal, or immigration advice, and it is not a substitute for guidance from a qualified adviser who knows your family’s situation.',
  },
  {
    id: 'medical',
    label: 'Not medical advice',
    text:
      'The wellness tools are not medical advice, diagnosis, or treatment. Using this site does not create a doctor–patient relationship with Dr. Crosse or anyone else. Talk with your own clinician before changing your exercise, eating, or medications.',
  },
  {
    id: 'outcomes',
    label: 'No guaranteed outcomes',
    text:
      'Career matches, checklists, and planning tools are self-discovery aids. They do not guarantee admission to any school, any amount of financial aid, employment, or income.',
  },
  {
    id: 'verify',
    label: 'Always verify with the source',
    text:
      'Deadlines, costs, eligibility rules, and requirements change without notice. Confirm every one of them directly with the school, agency, or official programme before you rely on it.',
  },
  {
    id: 'third-party',
    label: 'Third-party links',
    text:
      'We link to government, university, and nonprofit resources we believe are free and trustworthy. We do not control them, we are not responsible for their content or privacy practices, and a link is not an endorsement — nor are we endorsed by, affiliated with, or sponsored by any organisation listed.',
  },
];

/** Shown as its own line, not folded into the paragraph above it. */
export const CRISIS_NOTICE = {
  lead: 'If you or someone you love is in danger right now,',
  emergency: 'call 911',
  middle: '. For mental-health or suicidal crisis in the US, call or text',
  lifeline: '988',
  lifelineHref: 'https://988lifeline.org/',
  tail:
    ' any time. CrosseRoads is not a crisis service and nobody here monitors what you type.',
};

export const ACCESSIBILITY_NOTICE =
  'We aim to meet WCAG 2.2 AA. If any part of this site is hard to use, email us and we will fix it and help you get what you needed in the meantime.';
