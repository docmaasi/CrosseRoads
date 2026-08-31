import type { GuideArticle } from './types';

export const articleJuniorYear: GuideArticle = {
  slug: 'junior-year-college-head-start',
  title: 'Junior Year: The Head Start That Makes Senior Year Easy',
  description:
    'The work completed during junior year lays the groundwork for a successful senior year — service, leadership, testing strategy, and a balanced college list.',
  category: 'college',
  readMinutes: 4,
  datePublished: '2026-08-31',
  sections: [
    {
      paragraphs: [
        'Senior year gets all the attention, but the families who feel calm in October of senior year are the ones who did the quiet work a year earlier. Junior year is where the foundation gets built — academics first, with leadership, service, and extracurricular depth alongside.',
      ],
    },
    {
      heading: 'Service and leadership, done meaningfully',
      paragraphs: [
        'Aim for 10–20 hours of meaningful community service across the year: stocking a food bank, delivering holiday food baskets, serving meals at a shelter, walking a charity 5K, or coaching at a camp. Virtual options count too. In school activities, depth beats breadth — join what you care about and pursue leadership positions whenever possible.',
      ],
    },
    {
      heading: 'The two-test strategy',
      paragraphs: [
        'Begin SAT and/or ACT preparation in February or March — a prep course, a tutor, or a structured self-study plan all work. Then take both the SAT and the ACT in the spring if possible. Comparing real scores shows which exam best highlights your student’s strengths, and since the transition to the digital SAT, many students have discovered they perform better on the ACT. Submit whichever score represents your student best.',
      ],
    },
    {
      heading: 'Build a balanced list — and walk the campuses',
      list: [
        'Likely (Safety) schools — admission is probable and the family would be happy to attend.',
        'Target (Match) schools — credentials line up with the typical admitted student.',
        'Reach schools — a stretch, but worth the application.',
        'Visit campuses whenever possible; where a student feels comfortable often reshapes the list.',
        'Before the year ends, note 2–3 teachers to ask for recommendation letters in the fall.',
      ],
    },
  ],
  cta: {
    label: 'Start the checklist',
    text: 'The free College Admissions Planner turns junior year — and everything after it — into a checklist your family works through together.',
    href: '/CollegePlanner',
  },
  sources: [
    { name: 'SAT (College Board)', url: 'https://satsuite.collegeboard.org/' },
    { name: 'ACT', url: 'https://www.act.org/' },
    { name: 'DoSomething.org', url: 'https://www.dosomething.org/' },
  ],
};
