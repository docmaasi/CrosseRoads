import type { GuideArticle } from './types';

export const articleFinancialAid: GuideArticle = {
  slug: 'fafsa-css-profile-scholarships-guide',
  title: "FAFSA, CSS Profile, and Scholarships: A Parent's Quick-Start Guide",
  description:
    'The three lanes of college money — federal aid, institutional aid, and outside scholarships — and the follow-up habits that keep offers from slipping away.',
  category: 'college',
  readMinutes: 5,
  datePublished: '2026-08-31',
  sections: [
    {
      paragraphs: [
        'Financial aid feels complicated because it is really three separate systems. Once you see the lanes, the to-do list gets much shorter.',
      ],
    },
    {
      heading: 'Lane 1: The FAFSA (federal aid)',
      paragraphs: [
        'The Free Application for Federal Student Aid is the gateway to federal grants, loans, and work-study — and many colleges and states use it for their own aid too. It is genuinely free: complete it at the official Federal Student Aid site, never through a site that charges a fee.',
        'Complete the FAFSA as soon as it opens for your student’s year, and submit any additional financial-aid documents each college requires. Then keep watching the portals — colleges frequently request follow-up documents, and unanswered requests delay offers.',
      ],
    },
    {
      heading: 'Lane 2: The CSS Profile (institutional aid)',
      paragraphs: [
        'Some institutions — often private colleges — require the CSS Profile or their own institutional forms in addition to the FAFSA to award their own grant money. Check each college’s financial-aid page so a missing form never costs your family an offer.',
      ],
    },
    {
      heading: 'Lane 3: Outside scholarships',
      paragraphs: [
        'Beyond the colleges themselves, research national, local, employer-sponsored, civic, and community scholarships — and keep applying even after acceptances arrive. Recommendation letters from community leaders, employers, coaches, or clergy are worth gathering in the fall, when writers have time.',
      ],
    },
    {
      heading: 'After the offers arrive',
      list: [
        'Compare the total cost of attendance — tuition, fees, housing, meal plans, books, transportation, and personal expenses — not just the headline scholarship number.',
        'Verify scholarship renewal requirements: minimum GPA, credit hours, and enrollment status.',
        'Ask about appeals. If your family’s circumstances have changed, or another institution made a stronger offer, contact the financial-aid office — offers are sometimes revisited.',
        'Watch the deadlines for accepting aid, enrollment deposits, and housing.',
      ],
    },
  ],
  cta: {
    label: 'Open the College Planner',
    text: 'Every financial-aid step above is a checkbox in the free College Admissions Planner — with the deadlines that surround it.',
    href: '/CollegePlanner',
  },
  sources: [
    { name: 'FAFSA — Federal Student Aid', url: 'https://studentaid.gov/h/apply-for-aid/fafsa' },
    { name: 'CSS Profile (College Board)', url: 'https://cssprofile.collegeboard.org/' },
    { name: 'BigFuture Scholarship Search', url: 'https://bigfuture.collegeboard.org/scholarship-search' },
    { name: 'College Scorecard (U.S. Dept. of Education)', url: 'https://collegescorecard.ed.gov/' },
  ],
};
