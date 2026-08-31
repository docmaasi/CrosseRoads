import type { GuideArticle } from './types';

export const articleThirtyDay: GuideArticle = {
  slug: '30-day-career-exploration-challenge',
  title: 'The 30-Day Career Exploration Challenge',
  description:
    'Your career does not have to be decided today. Your goal is to identify pathways worth exploring — and one focused month is enough to start.',
  category: 'career',
  readMinutes: 4,
  datePublished: '2026-08-31',
  sections: [
    {
      paragraphs: [
        'Career decisions feel heavy because they are framed as permanent. They are not. The real goal at the start is not to choose a career — it is to identify two or three pathways worth exploring, and then actually explore them.',
        'That is what this challenge does. Pick your top three candidate careers — from an assessment, or your own shortlist — and give each one a month of honest investigation before any bigger commitment.',
      ],
    },
    {
      heading: 'The five steps',
      list: [
        'Research each career. Read its official profile: real tasks, real wages, real growth outlook — not the version in your head.',
        'Watch or interview someone who does the job. A one-minute career video or a 20-minute conversation beats months of guessing.',
        'Identify the education or certifications required — and the shortest legitimate route in.',
        'Find one internship, shadowing, volunteer, or entry-level opportunity and take it.',
        'Compare what you learned against your assessment results. Did the reality match the fit?',
      ],
    },
    {
      heading: 'What a month of exploring buys you',
      paragraphs: [
        'One of three things happens, and all of them are wins. The career survives contact with reality, and you commit with confidence. The career loses its shine, and you just saved yourself years and tuition. Or a person you met points you somewhere better than anything on your original list.',
        'Career success begins with knowing yourself — and then putting yourself in environments where your talents can grow.',
      ],
    },
  ],
  cta: {
    label: 'Get your top 3 careers',
    text: 'The free Career Pathfinder assessment ends with your top three careers to investigate — the exact starting point for this challenge.',
    href: '/CareerPathfinder',
  },
  sources: [
    { name: 'CareerOneStop Career Videos', url: 'https://www.careeronestop.org/Videos/CareerVideos/career-videos.aspx' },
    { name: 'O*NET OnLine', url: 'https://www.onetonline.org/' },
    { name: 'VolunteerMatch', url: 'https://www.volunteermatch.org/' },
  ],
};
