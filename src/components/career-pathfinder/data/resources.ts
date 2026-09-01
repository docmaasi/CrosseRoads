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
      {
        name: 'OpenLearn (The Open University)',
        url: 'https://www.open.edu/openlearn/',
        description: 'Over 900 free courses with badges and certificates, from the UK',
      },
      {
        name: 'Open Library',
        url: 'https://openlibrary.org/',
        description: 'A free, open catalog of millions of books you can read online',
      },
      {
        name: 'ExamPilot (AI exam prep)',
        url: 'https://exampilot.help/',
        description: 'AI-powered practice questions, flashcards and timed tests — free to start',
      },
    ],
  },
  {
    id: 'worldwide',
    title: 'Career data worldwide',
    links: [
      {
        name: 'International Labour Organization',
        url: 'https://www.ilo.org/',
        description: 'The United Nations agency for the world of work — global labour data',
      },
      {
        name: 'Europass (European Union)',
        url: 'https://europass.europa.eu/',
        description: "The EU's free tools for CVs, skills and careers across Europe",
      },
      {
        name: 'National Careers Service (UK)',
        url: 'https://nationalcareers.service.gov.uk/',
        description: "The UK government's career profiles and skills assessments",
      },
      {
        name: 'Job Bank (Canada)',
        url: 'https://www.jobbank.gc.ca/career-planning',
        description: "The Government of Canada's career quizzes and job profiles",
      },
      {
        name: 'Your Career (Australia)',
        url: 'https://www.yourcareer.gov.au/',
        description: "The Australian government's career explorer and pathways tool",
      },
      {
        name: 'Tahatū Career Navigator (NZ)',
        url: 'https://tahatu.govt.nz/',
        description: "New Zealand's official career planner with 800+ career ideas",
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
