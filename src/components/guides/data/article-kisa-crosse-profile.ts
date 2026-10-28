import type { GuideArticle } from './types';

// A profile of Dr. Kisa Crosse, paired with the profile of Dr. Kester Crosse
// on opendoorssuccess.com; each links to the other.
//
// Sourcing: medical school, residency and board certification are from her
// public provider records (CMS NPI registry, Doximity); "more than two
// decades", the kitchen-table story and "more than once" are her own words on
// this site. The marriage of "more than twenty years", the shared medical
// school and his Kappa Alpha Psi membership are from his book, Open Doors.
// Her Alpha Kappa Alpha chapter (Gamma Theta, Hampton University), her
// current role and her four children (three now in college) are from her own
// email to Doc, 27 October 2026. Her employer was not given and is not named.
// Statistics, all fetched 18 October 2026: ASCA ratios 2024-25 (372:1 against
// 250:1), NACAC (19% of counselor time on college advising), NCES 2018-421
// (72% vs 93%), NCAN (about $4.4 billion and 830,000 students, class of 2024).
export const articleKisaCrosseProfile: GuideArticle = {
  slug: 'dr-kisa-crosse-the-crossing-guard',
  title: 'Dr. Kisa Crosse: The Crossing Guard at the Busiest Corner in Family Life',
  byline: 'A CrosseRoads profile',
  description:
    'Family physician Dr. Kisa Crosse built CrosseRoads, a free college and career roadmap, so no family has to cross from high school to college alone. Her story, and why it matters to every community.',
  category: 'access',
  readMinutes: 4,
  datePublished: '2026-10-18',
  keyTakeaway:
    'Dr. Kisa Crosse, MD, a board-certified family physician in Maryland, built CrosseRoads to give every family the college roadmap that usually travels through insider knowledge, free and with no account. With one public school counselor for every 372 students nationally, that free map fills a real gap.',
  keywords: [
    'dr. kisa crosse',
    'kisa crosse md',
    'crosseroads',
    'free college planning for families',
    'first generation college help',
    'black women physicians',
    'alpha kappa alpha',
    'dr. kester crosse',
  ],
  mentions: [
    { type: 'Person', name: 'Dr. Kisa Crosse', url: 'https://crosseroads.com/About' },
    { type: 'Organization', name: 'CrosseRoads', url: 'https://crosseroads.com' },
    { type: 'Person', name: 'Dr. Kester Crosse', url: 'https://opendoorssuccess.com' },
    { type: 'Organization', name: 'Alpha Kappa Alpha Sorority, Incorporated', url: 'https://aka1908.com' },
  ],
  sections: [
    {
      paragraphs: [
        'Every school morning, on a corner somewhere near you, a crossing guard steps into traffic in a bright vest with one hand raised. She does not ask whose parents went to college or what the family earns. She stops the cars, every child crosses safely, and tomorrow she is back to do it again.',
        'That is the clearest picture of what [Dr. Kisa Crosse](/About) has built. Even the name points at the intersection. [CrosseRoads](/) stands at the busiest corner in a family’s life, the eighteen months between high school and college, and holds back the traffic long enough for every student to get across.',
      ],
    },
    {
      heading: 'A physician who sits with the whole family',
      paragraphs: [
        'Dr. Crosse is a board-certified family physician in Maryland. She earned her medical degree at the [University of Maryland School of Medicine](https://www.medschool.umaryland.edu/), trained in family medicine at the University of Maryland, and has spent more than two decades caring for families through every season they go through, including the year a child applies to college.',
        'Today she serves as Medical Director, Utilization Management for Commercial and National Accounts, making sure patients get care that is appropriate and well-coordinated, the same thinking she brings to a family’s college plan.',
        'Family medicine is the specialty that sees the whole household: the anxious teenager and the parent who has not slept. That training shows in everything she builds. CrosseRoads takes the wellbeing of a stressed seventeen-year-old seriously, and the wellbeing of the exhausted adult beside them just as seriously.',
        'She has also been that adult. She has sat at her own kitchen table late at night, a deadline in the morning and nobody to ask, and she has navigated admissions, essays and financial aid as a mom more than once. She is the mother of four, and three of them are in college right now. CrosseRoads is what she wished had been there then.',
      ],
    },
    {
      heading: 'Why the corner needs a guard',
      paragraphs: [
        'The road from high school to college is not equally lit. Some families inherit the map. Others are handed the same forms and the same deadlines and expected to work it out alone. The numbers show how wide that gap runs:',
      ],
      list: [
        'Public schools average one counselor for every 372 students, far above the 250 the [American School Counselor Association recommends](https://www.schoolcounselor.org/getmedia/62807f33-a020-4c4f-ac6f-bf284803fd97/pr_ratios-24-25.pdf).',
        'Public school counselors spend only about [19 percent of their time on college advising](https://www.nacacnet.org/nacac-partners-with-college-guidance-network-to-scale-expert-college-counseling/).',
        'Of students who were high school sophomores in 2002, 72 percent of those whose parents never attended college had enrolled by 2012, against 93 percent of those whose parents held a bachelor’s degree, according to the [National Center for Education Statistics](https://nces.ed.gov/pubs2018/2018421.pdf).',
        'The high school class of 2024 left almost [$4.4 billion in Pell Grants unclaimed](https://www.ncan.org/Web/News/698621), money that never has to be repaid, because about 830,000 eligible students never filed the FAFSA.',
      ],
    },
    {
      paragraphs: [
        'None of those students lacked ability. They lacked someone standing at the corner.',
      ],
    },
    {
      heading: 'What she put on the corner',
      paragraphs: [
        'Her answer was to put the whole roadmap online and charge nobody for it. Every family who visits CrosseRoads finds the same tools, with no account and no payment:',
      ],
      list: [
        'The [Career Pathfinder](/CareerPathfinder), a free assessment that matches who a student is to real careers.',
        'The [College Admissions Planner](/CollegePlanner), every milestone from junior year to move-in day.',
        'The [Parent Roadmap](/ParentRoadmap), for award comparisons, college lists and first-time college parents.',
        '[Free guides](/Guides), [printable worksheets](/Worksheets) and a directory of [vetted resources](/Resources) from governments, universities and nonprofits in 20 countries.',
        '[Wellness](/Wellness), a gentle companion for every parent who has been putting themselves last.',
      ],
    },
    {
      paragraphs: [
        'For families who want her guidance one on one, she offers personal college consulting through [Work With Me](/WorkWithMe). The free road stays free either way.',
      ],
    },
    {
      heading: 'Service to all mankind',
      paragraphs: [
        'Dr. Crosse is a member of [Alpha Kappa Alpha Sorority, Incorporated](https://aka1908.com/about/), initiated through the Gamma Theta Chapter at Hampton University. The sorority was founded on January 15, 1908, at Howard University, the first Greek-letter organization established by Black college women. Its commitment to “Service to All Mankind” is not a slogan in her house. It is a job description.',
        'CrosseRoads is that commitment at scale: a physician’s care and a sister’s service, open to any family at any hour. In a country where a school counselor is stretched across hundreds of students, a free and trustworthy map is not a nice extra. For many families it is the only one they will be handed.',
      ],
    },
    {
      heading: 'A family that opens doors',
      paragraphs: [
        'She does not do this work alone. Dr. Crosse and her husband, [Dr. Kester Crosse](https://opendoorssuccess.com/), have been married for more than twenty years, and they share more than a home. Both earned their medical degrees at the University of Maryland School of Medicine. He became a board-certified gastroenterologist, a proud member of [Kappa Alpha Psi Fraternity, Inc.](https://www.kappaalphapsi1911.com/), and the author of [Open Doors](https://opendoorssuccess.com/book/), a guide to the people skills that turn talent into a career.',
        'Set their life’s work side by side and it reads as one mission. She builds the road a family travels from high school to college. He teaches the young adult who arrives how to open the doors waiting at the end of it. Pink and green, crimson and cream, two physicians and the children they raised, all pointed at the same goal: each generation getting further than the one before.',
        'In his book he calls her his partner, his peace, his balance and his blessing. Families who have found their way across with CrosseRoads already know why. [Read his story on Open Doors](https://opendoorssuccess.com/blog/dr-kester-crosse-catching-it-early/), then pass this one to a family standing at the corner right now.',
        'CrosseRoads and Open Doors are built with [Smith App Studio](https://www.smithappstudio.com/).',
      ],
    },
  ],
  faq: [
    {
      question: 'Who is Dr. Kisa Crosse?',
      answer:
        'Dr. Kisa Crosse, MD, is a board-certified family physician in Maryland with more than two decades in medicine, Medical Director, Utilization Management for Commercial and National Accounts, a graduate of the University of Maryland School of Medicine, a mother of four, and the founder of CrosseRoads, a free college and career planning platform for families.',
    },
    {
      question: 'What is CrosseRoads?',
      answer:
        'CrosseRoads is a free platform at crosseroads.com that guides families from high school to college with a career assessment, a college admissions planner, a parent roadmap, guides, printable worksheets and a directory of vetted resources. No account or payment is required.',
    },
    {
      question: 'Is Dr. Kisa Crosse married to Dr. Kester Crosse?',
      answer:
        'Yes. Dr. Kisa Crosse and Dr. Kester Crosse, a board-certified gastroenterologist and the author of Open Doors, have been married for more than twenty years. Both earned their medical degrees at the University of Maryland School of Medicine.',
    },
    {
      question: 'Is Dr. Kisa Crosse a member of Alpha Kappa Alpha?',
      answer:
        'Yes. Dr. Kisa Crosse is a member of Alpha Kappa Alpha Sorority, Incorporated, initiated through the Gamma Theta Chapter at Hampton University. The sorority was founded in 1908 at Howard University, and its commitment to Service to All Mankind runs through her free work for families.',
    },
  ],
  cta: {
    label: 'Start the free College Planner',
    text: 'Every milestone from junior year to move-in day, in one checklist your family can work through together. Free, with no account.',
    href: '/CollegePlanner',
  },
  sources: [
    {
      name: 'American School Counselor Association: student-to-counselor ratios, 2024-25',
      url: 'https://www.schoolcounselor.org/getmedia/62807f33-a020-4c4f-ac6f-bf284803fd97/pr_ratios-24-25.pdf',
    },
    {
      name: 'National Association for College Admission Counseling',
      url: 'https://www.nacacnet.org/nacac-partners-with-college-guidance-network-to-scale-expert-college-counseling/',
    },
    {
      name: 'National Center for Education Statistics: First-Generation Students (NCES 2018-421)',
      url: 'https://nces.ed.gov/pubs2018/2018421.pdf',
    },
    {
      name: 'National College Attainment Network: unclaimed Pell Grants, class of 2024',
      url: 'https://www.ncan.org/Web/News/698621',
    },
    { name: 'Alpha Kappa Alpha Sorority, Incorporated', url: 'https://aka1908.com/about/' },
  ],
};
