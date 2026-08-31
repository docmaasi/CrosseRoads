// Free, reputable career-exploration resources. Per-career deep links
// use documented keyword-search URLs (O*NET / My Next Move); the library
// below is grouped for the results page and footer.

export interface ResourceLink {
  name: string;
  url: string;
  description: string;
}

export interface ResourceGroup {
  id: string;
  title: string;
  links: ResourceLink[];
}

/** Deep links to authoritative career profiles for one career name. */
export function careerResourceLinks(careerName: string): ResourceLink[] {
  const query = encodeURIComponent(careerName);
  return [
    {
      name: 'O*NET career profile',
      url: `https://www.onetonline.org/find/quick?s=${query}`,
      description: 'Skills, tasks, wages and outlook from the U.S. Department of Labor',
    },
    {
      name: 'My Next Move',
      url: `https://www.mynextmove.org/find/search?s=${query}`,
      description: 'Student-friendly career snapshot with education and salary info',
    },
    {
      name: 'Career videos',
      url: 'https://www.careeronestop.org/Videos/CareerVideos/career-videos.aspx',
      description: 'Watch a 1-minute video of what this work actually looks like',
    },
  ];
}

export const RESOURCE_LIBRARY: ResourceGroup[] = [
  {
    id: 'explore',
    title: 'Explore careers',
    links: [
      {
        name: 'O*NET OnLine',
        url: 'https://www.onetonline.org/',
        description: 'The U.S. Department of Labor database of 900+ occupations',
      },
      {
        name: 'My Next Move',
        url: 'https://www.mynextmove.org/',
        description: 'Plain-language career profiles plus the O*NET Interest Profiler',
      },
      {
        name: 'Occupational Outlook Handbook',
        url: 'https://www.bls.gov/ooh/',
        description: 'Official salary, growth and education data for every major career',
      },
      {
        name: 'CareerOneStop',
        url: 'https://www.careeronestop.org/',
        description: 'Career videos, local training finder and job-search tools',
      },
    ],
  },
  {
    id: 'learn',
    title: 'Learn for free',
    links: [
      {
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org/',
        description: 'Free courses in math, science, economics and more',
      },
      {
        name: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/',
        description: 'Learn to code with free certifications and real projects',
      },
      {
        name: 'MIT OpenCourseWare',
        url: 'https://ocw.mit.edu/',
        description: 'Free lecture notes and courses from MIT',
      },
      {
        name: 'edX',
        url: 'https://www.edx.org/',
        description: 'University courses you can audit for free',
      },
      {
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        description: 'Professional courses and certificates, many free to audit',
      },
    ],
  },
  {
    id: 'training',
    title: 'Training & education',
    links: [
      {
        name: 'Apprenticeship.gov',
        url: 'https://www.apprenticeship.gov/',
        description: 'Find paid earn-while-you-learn apprenticeships near you',
      },
      {
        name: 'Federal Student Aid (FAFSA)',
        url: 'https://studentaid.gov/',
        description: 'Apply for federal grants, loans and work-study',
      },
      {
        name: 'College Scorecard',
        url: 'https://collegescorecard.ed.gov/',
        description: 'Compare college costs, graduation rates and typical earnings',
      },
      {
        name: 'Grow with Google',
        url: 'https://grow.google/',
        description: 'Career certificates and free digital-skills training',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Get experience',
    links: [
      {
        name: 'VolunteerMatch',
        url: 'https://www.volunteermatch.org/',
        description: 'Find volunteer roles that build real-world experience',
      },
      {
        name: 'DoSomething.org',
        url: 'https://www.dosomething.org/',
        description: 'Youth volunteering campaigns you can join from anywhere',
      },
      {
        name: 'Indeed Career Guide',
        url: 'https://www.indeed.com/career-advice',
        description: 'Free guides on resumes, interviews and first jobs',
      },
    ],
  },
];
