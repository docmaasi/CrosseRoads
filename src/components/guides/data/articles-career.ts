import type { GuideArticle } from './types';

export const CAREER_ARTICLES: GuideArticle[] = [
  {
    slug: 'choosing-a-major-without-choosing-a-life',
    title: 'Choosing a Major Without Choosing a Life',
    description:
      'Most people do not work in the field they majored in, and most majors do not lock anyone into anything. What a seventeen-year-old actually needs to decide, and what can wait.',
    category: 'career',
    readMinutes: 4,
    datePublished: '2026-02-18',
    keyTakeaway:
      'A major is a set of courses, not a life sentence. The decisions that genuinely narrow options are the maths sequence and any licensure-bound track. Almost everything else can be chosen or changed in the first two years.',
    keywords: [
      'how to choose a college major',
      'does your major matter',
      'undecided major',
      'changing majors',
      'major and career',
    ],
    sections: [
      {
        paragraphs: [
          'I have sat with a lot of seventeen-year-olds who believe they are about to make the decision that determines the next fifty years of their life. They are not, and telling them so is usually the most useful thing said in the room.',
          'A major is a set of roughly a dozen courses. It shapes what you know. In most fields it does not determine what you do, and a large share of graduates end up working outside the field they studied.',
        ],
      },
      {
        heading: 'What genuinely narrows options',
        list: [
          'The maths sequence. It gates engineering, the physical sciences, economics and most of computing, and it is very hard to catch up on late. This is the decision that matters, and it is made in ninth and tenth grade.',
          'Licensure-bound tracks — nursing, education, architecture, some allied health — where the accredited programme has a fixed sequence and joining late costs a year or more.',
          'Programmes with competitive internal admission, where entry happens in sophomore year and prerequisites must already be done.',
          'Everything else is far more flexible than families assume.',
        ],
      },
      {
        heading: 'The two questions worth asking instead',
        paragraphs: [
          'First: what is this student actually good at? Not what they enjoy consuming, but what they do well and would still do well on a difficult day. Explaining things clearly, fixing physical objects, seeing patterns in numbers, staying calm when something goes wrong, being patient with people who are struggling — these are durable and they transfer.',
          'Second: what do they want from work? Money, honestly counted. Time outside work. Helping people directly. Working with their hands. Security. Building something of their own. Being home for their family. Five priorities, ranked, is more useful than a job title.',
        ],
      },
      {
        heading: 'Where those two overlap',
        paragraphs: [
          'The overlap between what a student is good at and what they want from work is where the realistic options live. If nothing overlaps, that is not a personality problem — it means they need more information, usually about what jobs actually involve day to day.',
          'The cure for that is not more reading. It is one afternoon shadowing somebody, or a fifteen-minute conversation with an adult who does the work. Both are free, and both change more minds than a year of research.',
        ],
      },
      {
        heading: 'Undeclared is a legitimate answer',
        paragraphs: [
          'Entering undeclared and using the first three terms of general requirements to find out is a sound strategy, provided the student keeps the maths sequence open and checks the deadlines for declaring into competitive programmes.',
          'What is not sound is choosing a major to end an uncomfortable conversation at a family gathering. That decision gets unmade in sophomore year, and it costs a term of tuition to unmake.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does your college major determine your career?',
        answer:
          'For most fields, no. A large share of graduates work outside the field they studied. Licensure-bound paths such as nursing or teaching are the main exceptions, along with anything gated by the maths sequence.',
      },
      {
        question: 'Is it bad to start college undecided?',
        answer:
          'No, it is often sensible — provided the student keeps the maths sequence open and knows the deadline for declaring into any competitive programme they might want.',
      },
      {
        question: 'How can a teenager work out what they are suited to?',
        answer:
          'Separate what they are good at from what they want from work, then look at the overlap. Test it with one day of job shadowing or a short conversation with someone doing the job — that beats any amount of reading.',
      },
    ],
    cta: {
      label: 'Take the free Career Pathfinder',
      text: 'A 36-question assessment across seven factors — talents, interests, personality, goals — matched against real careers. No account, no cost.',
      href: '/CareerPathfinder',
    },
    sources: [
      { name: 'O*NET OnLine', url: 'https://www.onetonline.org/' },
      { name: 'Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/' },
    ],
  },

  {
    slug: 'careers-that-do-not-need-a-four-year-degree',
    title: 'Good Careers That Do Not Need a Four-Year Degree',
    description:
      'Skilled trades, allied health, apprenticeships and certificate programmes lead to solid, well-paid work — often faster and with far less debt. Where to look, and what to check.',
    category: 'career',
    readMinutes: 4,
    datePublished: '2026-03-11',
    keyTakeaway:
      'Many well-paid occupations require a certificate, licence or apprenticeship rather than a bachelor’s degree. Check the Occupational Outlook Handbook for the actual entry requirement before assuming a four-year degree is necessary.',
    keywords: [
      'careers without a college degree',
      'skilled trades careers',
      'apprenticeship programs',
      'certificate programs jobs',
      'alternatives to college',
    ],
    sections: [
      {
        paragraphs: [
          'The assumption that every capable student should do a four-year degree has cost a lot of families a lot of money, and it has quietly insulted a great many good careers.',
          'A substantial share of well-paid American occupations are entered through an apprenticeship, a licence, a certificate or an associate degree. Several of them pay better in the first five years than the average bachelor’s degree does, with a fraction of the debt.',
        ],
      },
      {
        heading: 'Where the work actually is',
        list: [
          'Skilled trades — electricians, plumbers, HVAC technicians, welders, lineworkers. Registered apprenticeships pay from day one, and the training is free to the apprentice.',
          'Allied health — radiologic technologists, respiratory therapists, dental hygienists, surgical technologists, paramedics. Typically an associate degree or certificate plus licensure.',
          'Advanced manufacturing and industrial maintenance, where certificates lead directly to work and employers frequently fund further training.',
          'Transport and logistics, including commercial driving and rail, with employer-funded training that is common and rarely advertised at schools.',
          'Information technology support and networking, where vendor certifications carry real weight with employers.',
        ],
      },
      {
        heading: 'Check the actual requirement, not the assumption',
        paragraphs: [
          'The Occupational Outlook Handbook lists, for every occupation, the typical entry-level education, the licence required if any, the median pay and whether the field is growing. It is free, it is published by the US Department of Labor, and it settles most family arguments in about four minutes.',
          'Look up the specific job. Not the field, the job. "Healthcare" tells you nothing; "respiratory therapist" tells you the requirement, the pay and the outlook.',
        ],
      },
      {
        heading: 'Apprenticeships are the underused route',
        paragraphs: [
          'A registered apprenticeship pays a wage while training, raises it as skills progress, and ends in a recognised credential with no debt attached. The student earns from the first week rather than paying for four years and starting at zero.',
          'They are competitive, they are not easy, and they suit students who would rather learn by doing than by lecture. Apprenticeship.gov lists registered programmes by trade and location.',
        ],
      },
      {
        heading: 'The conversation to have at home',
        paragraphs: [
          'None of this is an argument against a degree. It is an argument against assuming one, and against a family taking on sixty thousand dollars of debt for a path nobody examined.',
          'Ask your student to research one trade or allied health role properly alongside their college list. If the degree still wins, it wins on evidence — and that is a better foundation for four hard years than an assumption nobody ever tested.',
        ],
      },
    ],
    faq: [
      {
        question: 'What jobs pay well without a four-year degree?',
        answer:
          'Skilled trades such as electricians and HVAC technicians, allied health roles like radiologic technologists and dental hygienists, industrial maintenance, and IT support all offer solid pay through certificates, licences or apprenticeships.',
      },
      {
        question: 'How do I find an apprenticeship?',
        answer:
          'Apprenticeship.gov lists registered apprenticeships by trade and location. Registered programmes pay a wage from the start and end in a recognised credential.',
      },
      {
        question: 'How do I check what education a job really requires?',
        answer:
          'Look the specific occupation up in the Occupational Outlook Handbook, which states typical entry-level education, licensure requirements, median pay and job outlook for each one.',
      },
    ],
    cta: {
      label: 'Explore careers free',
      text: 'The Career Pathfinder matches 37 careers to who a student actually is — including the ones that do not need four years.',
      href: '/CareerPathfinder',
    },
    sources: [
      { name: 'Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/' },
      { name: 'Apprenticeship.gov', url: 'https://www.apprenticeship.gov/' },
    ],
  },

  {
    slug: 'informational-interviews-for-teenagers',
    title: 'The Fifteen-Minute Conversation That Changes a Career Plan',
    description:
      'Asking an adult about their job is the cheapest, fastest career research there is — and teenagers almost never do it. Here is the message to send and what to ask.',
    category: 'career',
    readMinutes: 3,
    datePublished: '2026-04-01',
    keyTakeaway:
      'Ask for fifteen minutes, not an hour, and say plainly that you are not asking for a job. Most people say yes, because most people like talking about their work.',
    keywords: [
      'informational interview high school',
      'career research for teens',
      'questions to ask about a career',
      'job shadowing',
    ],
    sections: [
      {
        paragraphs: [
          'A student can read about a career for six hours and still not know whether they would like doing it. Fifteen minutes with somebody who does it tells them more than the six hours did.',
          'Teenagers almost never make the ask, because it feels enormous. From the other side it is a small, flattering request that most adults are glad to receive.',
        ],
      },
      {
        heading: 'The message that works',
        paragraphs: [
          'Short, specific, and clear about what you are not asking for. Something like: "I am a junior at Northside High and I am interested in physical therapy. I saw that you work as a physical therapist at County Hospital. Would you be willing to talk for fifteen minutes about what the job is actually like? I am not asking for a job or an internship — just to hear about the work. I can call whenever suits you."',
          'Fifteen minutes is an easy yes. An hour is a favour. Saying "I am not asking for a job" removes the only reason most people hesitate.',
        ],
      },
      {
        heading: 'Who to ask',
        paragraphs: [
          'Start closer than you think. Family, neighbours, parents’ colleagues, your dentist, your coach, people from your faith community, alumni from your high school. Every family knows more working adults than it realises; the list is usually thirty people long once someone sits down and writes it out.',
        ],
      },
      {
        heading: 'What to ask',
        list: [
          'What did you actually do yesterday? — the single best question, because it defeats the polished answer.',
          'How did you end up in this job?',
          'What do people get wrong about this work?',
          'What is the part nobody warns you about?',
          'Is the degree necessary, or is it just the usual route?',
          'What does someone earn starting out, realistically?',
          'Who else should I talk to?',
        ],
      },
      {
        heading: 'The last question is the important one',
        paragraphs: [
          'Always end by asking who else you should speak to. That is how one conversation becomes five, and how a student who knew nobody in a field ends up with a small network before they have applied anywhere.',
          'Then send a thank-you message within two days. It takes four minutes, and people remember it for years — sometimes long enough to matter when that student is looking for work.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is an informational interview?',
        answer:
          'A short conversation with someone doing a job you are curious about, to learn what the work is really like. You are not asking for employment, which is what makes people willing to say yes.',
      },
      {
        question: 'How do you ask someone for an informational interview?',
        answer:
          'Send a short message stating who you are, what you are interested in, that you would like fifteen minutes to hear about their work, and explicitly that you are not asking for a job or internship.',
      },
      {
        question: 'What should you ask in an informational interview?',
        answer:
          'Ask what they actually did yesterday, how they got into the field, what people misunderstand about it, whether the usual qualification is truly required, and who else you should talk to.',
      },
    ],
    cta: {
      label: 'Print the Informational Interview Guide',
      text: 'A free sheet with the exact message to send, the questions worth asking, and space for what they said.',
      href: '/Worksheets/informational-interview-guide',
    },
    sources: [
      { name: 'O*NET OnLine', url: 'https://www.onetonline.org/' },
      { name: 'CareerOneStop', url: 'https://www.careeronestop.org/' },
    ],
  },

  {
    slug: 'what-labor-market-data-tells-you',
    title: 'What Labour Market Data Actually Tells a Family',
    description:
      'Median pay, projected growth and typical entry education are published free for every occupation in America. Most families never look, and decide on anecdote instead.',
    category: 'career',
    readMinutes: 3,
    datePublished: '2026-04-22',
    keyTakeaway:
      'The Occupational Outlook Handbook and O*NET publish pay, growth and entry requirements for around 900 occupations, free. Look up the specific job, use regional pay rather than the national median, and read the entry-level figure rather than the median.',
    keywords: [
      'occupational outlook handbook',
      'career salary data',
      'job growth projections',
      'labor market information',
      'o*net',
    ],
    sections: [
      {
        paragraphs: [
          'Career conversations in most homes run on anecdote. An uncle who did well. A neighbour’s daughter who could not find work. A news story about a field that is either booming or collapsing, depending on the week.',
          'Meanwhile the US Department of Labor publishes, free and without advertising, what roughly 900 occupations pay, what they require, and whether they are growing. Almost nobody opens it.',
        ],
      },
      {
        heading: 'The two sources worth knowing',
        list: [
          'The Occupational Outlook Handbook — for each occupation: what the work involves, typical entry-level education, licence requirements, median pay, and projected growth over ten years.',
          'O*NET OnLine — deeper detail on skills, tasks, tools and work styles, and useful for finding occupations related to one a student already likes.',
        ],
      },
      {
        heading: 'How to read it without being misled',
        paragraphs: [
          'Median pay is the midpoint across everyone in the occupation, including people with thirty years of experience. For a seventeen-year-old, the more relevant figure is the lower percentile — the entry-level end.',
          'Pay also varies enormously by region. A national median for a role can be twenty thousand dollars away from what it pays in your state. Both sources allow you to filter by location; do it.',
          'And read growth as a signal, not a promise. A projection is a model, and models are wrong at the edges — but an occupation projected to shrink by fifteen per cent is still telling you something worth hearing.',
        ],
      },
      {
        heading: 'Look up the job, not the field',
        paragraphs: [
          '"Healthcare" is not an occupation. "Respiratory therapist" is. The field-level conversation produces platitudes; the occupation-level one produces a requirement, a number and an outlook.',
          'Have your student look up three specific jobs they are curious about and write down the entry requirement, the entry-level pay in your state, and the growth figure. Fifteen minutes each. It reliably changes at least one mind in the room.',
        ],
      },
      {
        heading: 'What the data cannot tell you',
        paragraphs: [
          'It will not tell you whether your student would enjoy the work, tolerate the hours, or last five years in it. No dataset will. That is what shadowing and a fifteen-minute conversation are for.',
          'Use the data to narrow the field to things worth investigating, then investigate them with people.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I find reliable salary data for a career?',
        answer:
          'The Occupational Outlook Handbook, published free by the US Bureau of Labor Statistics, gives median pay, entry-level education and job outlook for around 900 occupations, filterable by state.',
      },
      {
        question: 'Is median salary the right number to look at?',
        answer:
          'Not for a student. The median includes people with decades of experience — look at the lower percentile for entry-level pay, and filter to your own region.',
      },
      {
        question: 'How reliable are job growth projections?',
        answer:
          'They are models, so treat them as signals rather than promises. A projection of sharp decline is still meaningful information about the direction of a field.',
      },
    ],
    cta: {
      label: 'Print the Career Research Worksheet',
      text: 'One free page per career: what the work is, what it pays, what it needs, and whether the day would suit you.',
      href: '/Worksheets/career-research-worksheet',
    },
    sources: [
      { name: 'Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/' },
      { name: 'O*NET OnLine', url: 'https://www.onetonline.org/' },
    ],
  },

  {
    slug: 'what-a-first-job-teaches',
    title: 'What a First Job Teaches That No Class Does',
    description:
      'Part-time work in high school is not a distraction from the application. Handled well, it is one of the most revealing things on it.',
    category: 'career',
    readMinutes: 3,
    datePublished: '2026-05-20',
    keyTakeaway:
      'Paid work belongs on a college application and often reads more strongly than another club. It also teaches punctuality, dealing with difficult people and handling money — none of which a classroom reliably does.',
    keywords: [
      'first job for teenagers',
      'should high school students work',
      'part time job college application',
      'teen work rules',
    ],
    sections: [
      {
        paragraphs: [
          'Parents sometimes ask whether a part-time job will hurt an application, as though the hours would be better spent on a fifth club. In my experience the opposite is usually true.',
          'A student who has held down a shift at a supermarket for eighteen months has demonstrated reliability, endurance and the ability to work with people who are not their friends. Those are harder to fake than a committee membership, and admissions officers know it.',
        ],
      },
      {
        heading: 'Put it on the application',
        paragraphs: [
          'Paid work counts as an activity. So does caring for a younger sibling, translating for family members, or running a household task nobody else does. Students routinely leave these off because they do not feel like achievements, and they are frequently the most telling entries on the whole form.',
          'Write them the way you would write any activity: the role, the hours a week, the weeks a year, and what you actually did. "Trained four new staff" says more than "cashier".',
        ],
      },
      {
        heading: 'What it teaches',
        list: [
          'Turning up on time, every time, when you do not feel like it.',
          'Dealing with a difficult customer without taking it home.',
          'That money is hours. A student who has earned $400 thinks differently about a $40,000 loan.',
          'How an organisation actually works, and where the real decisions get made.',
          'That most jobs contain a boring core, and that this is normal rather than a sign of a wrong choice.',
        ],
      },
      {
        heading: 'Keep it within limits',
        paragraphs: [
          'The evidence on hours is reasonably consistent: modest part-time work sits fine alongside school, and long hours start to cost grades and sleep. Somewhere around ten to fifteen hours a week during term is a sensible ceiling for most students.',
          'Federal and state rules also limit what under-eighteens may work and when. State law is often stricter than federal law, so check both before the first shift.',
        ],
      },
      {
        heading: 'Before the first application',
        paragraphs: [
          'Make sure the email address sounds like an adult wrote it, the voicemail is set up and says their name, and they have two people who have agreed to act as references. Then have them follow up once, politely, a week after applying — which moves a candidate up the pile more reliably than a better application does.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does a part-time job look good on a college application?',
        answer:
          'Yes. Paid work demonstrates reliability and responsibility, and admissions officers weigh it seriously — often more than an additional club membership.',
      },
      {
        question: 'How many hours should a high school student work?',
        answer:
          'Around ten to fifteen hours a week during term is a common ceiling. Beyond that, grades and sleep tend to suffer.',
      },
      {
        question: 'Does caring for family count as an activity?',
        answer:
          'Yes. Caring for siblings, translating for relatives, or running significant household responsibilities are legitimate activities and should be listed on the application.',
      },
    ],
    cta: {
      label: 'Print the Activity Résumé Builder',
      text: 'A free worksheet for capturing everything a student has done — including the things they forget to count.',
      href: '/Worksheets/activity-resume',
    },
    sources: [
      { name: 'YouthRules! — U.S. Department of Labor', url: 'https://www.dol.gov/agencies/whd/youthrules' },
      { name: 'CareerOneStop', url: 'https://www.careeronestop.org/' },
    ],
  },
];
