import type { GuideArticle } from './types';

export const articleCareerFit: GuideArticle = {
  slug: 'how-to-choose-a-career-that-fits',
  title: 'How to Choose a Career That Fits Who You Are: The 7-Factor Method',
  description:
    'Most people pick careers based on one factor — salary, or a subject they liked. A better fit comes from looking at seven factors together.',
  category: 'career',
  readMinutes: 5,
  datePublished: '2026-08-31',
  sections: [
    {
      paragraphs: [
        'Ask someone how they chose their career and you will usually hear a one-factor answer: the money was good, a parent suggested it, or they liked the subject in school. One factor is rarely enough. Work you are good at but not interested in burns you out; work you love but that conflicts with the life you want breeds resentment.',
        'A better approach looks at the whole person. The Career Pathfinder assessment evaluates fit across seven factors at once — and you can use the same framework on paper.',
      ],
    },
    {
      heading: 'The seven factors',
      list: [
        'Education — how much schooling you have, and how much more you would realistically consider.',
        'Talents — what you are naturally good at, including what other people consistently say you are good at.',
        'Interests — the fields and problems that genuinely hold your attention.',
        'Passions — the problems you would enjoy solving and the activities you could do for hours.',
        'Personality — how you naturally operate: with people or independently, structured or creative, calm or fast-moving.',
        'Work preferences — what you want to work with (people, numbers, technology, your hands) and the environment that suits you.',
        'Lifestyle priorities — income, flexibility, security, impact, and the deal breakers you want to avoid.',
      ],
    },
    {
      heading: 'Why deal breakers matter as much as strengths',
      paragraphs: [
        'A career can match your talents and interests and still be wrong for you. If you know you do not want years of additional schooling, unpredictable income, or work involving blood and medical procedures, those deal breakers should actively subtract from a career’s score — not be discovered two years into a program.',
        'That is why a serious career assessment asks what you want to avoid, not just what you want. A strong interest and personality match for medicine paired with a hard limit on schooling points toward related paths — physician assistant, healthcare administration, medical sales, or clinical research — rather than away from healthcare entirely.',
      ],
    },
    {
      heading: 'Check your results against real data',
      paragraphs: [
        'Whatever list you land on, verify it against official career data before committing: real wages, real growth outlooks, and real education requirements. The U.S. Department of Labor publishes all of it for free.',
      ],
    },
  ],
  cta: {
    label: 'Take the free assessment',
    text: 'The Career Pathfinder scores 37 careers against all seven factors in about 10 minutes — free, no sign-up.',
    href: '/CareerPathfinder',
  },
  sources: [
    { name: 'O*NET OnLine (U.S. Department of Labor)', url: 'https://www.onetonline.org/' },
    { name: 'Occupational Outlook Handbook (BLS)', url: 'https://www.bls.gov/ooh/' },
    { name: 'My Next Move', url: 'https://www.mynextmove.org/' },
  ],
};
