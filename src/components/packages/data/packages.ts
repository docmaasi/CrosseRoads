// Consulting packages — transcribed from Dr. Kisa Crosse's pricing
// document. Prices are real and shown publicly; families inquire through
// the form on the page and Dr. Crosse invoices directly. There is no
// checkout on this site.
//
// `poweredBy` is the load-bearing idea here: each tier names the free
// platform tools that deliver part of it. Families see what they get
// immediately, and the packages read as software-backed rather than as
// a list of meetings.

export interface ToolLink {
  label: string;
  href: string;
  /** External links open in a new tab and get rel="noopener noreferrer". */
  external?: boolean;
}

export interface ConsultingTier {
  slug: string;
  name: string;
  price: number;
  /** Rendered price string, e.g. "$1,250". */
  priceLabel: string;
  /** Ribbon copy, e.g. "Founding Family Rate". Null renders no ribbon. */
  badge: string | null;
  summary: string;
  /** Name of the tier this one builds on, for "Everything in X, plus". */
  inheritsFrom: string | null;
  includes: string[];
  /** Her "Best for: the family saying…" line, without the prefix. */
  bestFor: string;
  poweredBy: ToolLink[];
  /** Visually emphasised as the signature offer. */
  featured: boolean;
}

export const CONSULTING_TIERS: ConsultingTier[] = [
  {
    slug: 'kickstart',
    name: 'The College Kickstart',
    price: 500,
    priceLabel: '$500',
    badge: null,
    summary:
      'For families who want professional guidance but plan to manage most of the college process themselves.',
    inheritsFrom: null,
    includes: [
      '60-minute parent + student strategy session',
      'Review of transcript, GPA, coursework, and extracurricular activities',
      'Discussion of potential majors and career interests',
      'SAT/ACT testing strategy',
      'Initial college list review',
      'Junior/Senior Year College Planning Checklist',
      'Personalized recommendations and next steps',
      'One 30-minute follow-up session',
    ],
    bestFor:
      'We can handle this — we just need someone to tell us what we should be doing.',
    poweredBy: [
      { label: 'College Planner', href: '/CollegePlanner' },
      { label: 'Career Pathfinder', href: '/CareerPathfinder' },
      { label: 'ExamPilot test prep', href: 'https://exampilot.help/', external: true },
    ],
    featured: false,
  },
  {
    slug: 'college-plan',
    name: 'The CrosseRoads College Plan',
    price: 1250,
    priceLabel: '$1,250',
    badge: 'Founding Family Rate',
    summary:
      'Our signature college-planning package, for families who want guidance, organization, and support throughout the process.',
    inheritsFrom: null,
    includes: [
      'Comprehensive parent + student strategy session',
      'Academic and extracurricular profile review',
      'Major and career exploration guidance',
      'SAT/ACT testing strategy',
      'Development of a balanced Likely, Target & Reach college list',
      'College visit planning guidance',
      'Student activity résumé development and review',
      'Application timeline and deadline planning',
      'Common App strategy and guidance',
      'Personal statement brainstorming, plus up to 2 reviews',
      'Supplemental essay guidance for up to 4 colleges',
      'Scholarship search strategy',
      'Teacher recommendation planning',
      'Four scheduled parent/student check-ins',
      'Email support for brief questions throughout the package period',
    ],
    bestFor:
      "We don't need someone to do it for us — we need someone to make sure we're doing it right.",
    poweredBy: [
      { label: 'College Planner', href: '/CollegePlanner' },
      { label: 'Career Pathfinder', href: '/CareerPathfinder' },
      { label: 'College list tracker', href: '/ParentRoadmap#college-list' },
      { label: 'ExamPilot test prep', href: 'https://exampilot.help/', external: true },
    ],
    featured: true,
  },
  {
    slug: 'vip',
    name: 'The CrosseRoads VIP Experience',
    price: 2000,
    priceLabel: '$2,000',
    badge: null,
    summary:
      'For families who want more personalized support and regular guidance throughout application season.',
    inheritsFrom: 'The CrosseRoads College Plan',
    includes: [
      'Up to 8 scheduled strategy and check-in sessions',
      'Expanded college list development and refinement',
      'Personal statement brainstorming, plus up to 3 reviews',
      'Supplemental essay guidance for up to 8 colleges',
      'Detailed Common App review before submission',
      'Activities section review and refinement',
      'Honors and awards section review',
      'Scholarship application strategy',
      'Financial aid and college-cost planning discussion',
      'Final application readiness review',
      'Priority email support',
    ],
    bestFor: 'Please help us stay on top of all of this.',
    poweredBy: [
      { label: 'College Planner', href: '/CollegePlanner' },
      { label: 'Career Pathfinder', href: '/CareerPathfinder' },
      { label: 'College list tracker', href: '/ParentRoadmap#college-list' },
      { label: 'Award comparison worksheet', href: '/ParentRoadmap#compare' },
      { label: 'ExamPilot test prep', href: 'https://exampilot.help/', external: true },
    ],
    featured: false,
  },
];

/** The à la carte entry point. Credits toward a package within 7 days. */
export const POWER_HOUR = {
  name: 'Power Hour',
  priceLabel: '$150',
  summary:
    'A focused 60-minute consultation for parents and students who need help with one specific area of the college process.',
  topics: [
    'Where do we even start?',
    'College list review',
    'Junior-year planning',
    'Senior application strategy',
    'SAT/ACT planning',
    'Extracurricular and leadership strategy',
    'College visit planning',
    'Application timeline',
    'Essay brainstorming',
    'Scholarship strategy',
  ],
  creditNote:
    'Purchase a comprehensive package within 7 days of your Power Hour and the $150 consultation fee is applied toward it.',
};

/**
 * Power Mom College Consulting — the à la carte add-on track under the
 * CrosseRoads umbrella. These are the nine advising services that
 * previously sat unpriced on the Parent Roadmap page; they now live here
 * as individual services families can request alongside any package.
 */
export const POWER_MOM = {
  name: 'Power Mom College Consulting',
  tagline: 'Additional options, à la carte',
  summary:
    'Need one specific thing rather than a full package? These are available on their own, or as add-ons to any package above. Pricing is quoted per service.',
  services: [
    'A 60–90-minute Parent College Planning Consultation',
    'Monthly small-group planning sessions',
    'College-list review',
    'Scholarship strategy session',
    'Financial-aid award comparison',
    'Application and deadline audit',
    'Parent-and-student planning meeting',
    'Senior-year text or email reminder membership',
    'College transition and “letting go” workshop for parents',
  ],
};

export const NOTE_FROM_KISA = {
  heading: 'A note from Kisa',
  paragraphs: [
    'I believe the college admissions process should be a partnership between parent and student — not something a parent completely takes over, and not something we simply hand to a 17-year-old and say, “Good luck!”',
    'My approach is to help families stay informed and organized while gradually helping students take greater ownership of their college journey.',
    'Because the goal isn’t simply getting your child into college. It’s helping them find the right college for them — and preparing them to succeed once they get there.',
  ],
  closing: 'Let’s open the door to what’s next.',
};

export const PACKAGES_FAQ = [
  {
    question: 'Are the tools on this site still free?',
    answer:
      'Yes, and they always will be. The Career Pathfinder assessment, the College Admissions Planner, the parent worksheets, the wellness companion, and every guide are free to use with no account and no payment. What families pay for here is time with Dr. Crosse — the strategy, the essay work, and the judgment that software cannot provide.',
  },
  {
    question: 'How do I book a package?',
    answer:
      'Send an inquiry using the form on this page. Dr. Crosse will reply personally to confirm fit, answer questions, and schedule your first session. Payment is arranged directly once you decide to move forward — there is no checkout on this site.',
  },
  {
    question: 'What does “Founding Family Rate” mean?',
    answer:
      'The CrosseRoads College Plan is offered at its founding rate to a limited number of families while the practice builds its inaugural client group. Families who join at this rate keep it for the full package period.',
  },
  {
    question: 'What if I only need help with one thing?',
    answer:
      'Book a Power Hour. It is a single 60-minute session on one specific question, and if you decide to purchase a full package within 7 days, the $150 is applied toward it.',
  },
  {
    question: 'Which package is right for my family?',
    answer:
      'If you are organized and want a roadmap, start with the College Kickstart. If you want someone alongside you through application season, the CrosseRoads College Plan is the signature offering. If you want frequent check-ins and detailed review before you submit, choose the VIP Experience. If you are unsure, ask in the form and Dr. Crosse will tell you honestly which one fits.',
  },
  {
    question: 'Do you guarantee admission?',
    answer:
      'No, and you should be cautious of anyone who does. Admissions decisions belong to the colleges. What this work does is make sure your student applies on time, to a well-built list, with materials that represent them properly.',
  },
];
