import type { Worksheet } from './types';

export const CAREER_SHEETS: Worksheet[] = [
  {
    slug: 'career-research-worksheet',
    title: 'Career Research Worksheet',
    category: 'career',
    audience: 'student',
    pages: 1,
    when: 'Any time a career sounds interesting — one sheet per career',
    purpose:
      'Takes a career from "that sounds cool" to something you actually know about: what the work is, what it pays, what it needs, and whether you would like the day.',
    sections: [
      {
        fields: [{ kind: 'boxes', items: ['Career', 'Where I heard about it'], lines: 1 }],
      },
      {
        heading: 'The facts',
        hint: 'Get these from the Occupational Outlook Handbook or O*NET. Both are free and neither is trying to sell you anything.',
        fields: [
          {
            kind: 'boxes',
            items: [
              'What people in this job actually do all day',
              'Typical pay — starting, and after ten years',
              'Education or licence required',
              'Is the field growing, flat or shrinking?',
              'Where the jobs are — anywhere, or specific places?',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'The honest part',
        fields: [
          {
            kind: 'boxes',
            items: [
              'The part of this job I would genuinely enjoy',
              'The part I would find hard or boring',
              'What kind of person does well at this',
              'Does that sound like me? Why or why not?',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'How you get in',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Majors or programmes that lead here',
              'A cheaper or faster route to the same job (apprenticeship, certificate, community college)',
              'Something I could do this year to test whether I like it',
            ],
            lines: 2,
          },
        ],
      },
    ],
    tips: [
      'Almost every career has more than one route in. Find the second one before assuming the expensive one is required.',
      'Pay ranges vary hugely by region. Look up your own.',
      'The best test is a day of shadowing, not a week of reading.',
    ],
  },

  {
    slug: 'informational-interview-guide',
    title: 'Informational Interview Guide',
    category: 'career',
    audience: 'student',
    pages: 1,
    when: 'Whenever you meet someone doing work you are curious about',
    purpose:
      'How to ask an adult about their job without it being awkward — including the exact message to send, and questions worth their twenty minutes.',
    sections: [
      {
        heading: 'The message',
        fields: [
          {
            kind: 'note',
            text: 'A version that works: "Hello — I am a junior at ______ High School and I am interested in ______. I saw that you work as a ______. Would you be willing to talk for 15 minutes about what your job is really like? I am not asking for a job or an internship, just to hear about the work. I can call whenever suits you."',
          },
          { kind: 'lines', label: 'People I could ask (family, neighbours, my parents’ colleagues, alumni, my dentist):', count: 5 },
        ],
      },
      {
        heading: 'Questions worth asking',
        hint: 'Tick the ones you will use. Do not read all of them — pick six.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'What did you actually do yesterday?',
              'How did you end up in this job?',
              'What do people get wrong about this work?',
              'What is the part nobody warns you about?',
              'What would you tell someone my age who wants to do this?',
              'Is the degree necessary, or is it just the usual route?',
              'What does someone earn starting out, realistically?',
              'Who else should I talk to?',
            ],
          },
        ],
      },
      {
        heading: 'What they said',
        fields: [{ kind: 'lines', count: 8 }],
      },
      {
        heading: 'Afterwards',
        fields: [
          {
            kind: 'checklist',
            items: [
              'I sent a thank-you message within two days',
              'I wrote down what surprised me while it was fresh',
              'I asked who else I should talk to — and I contacted them',
            ],
          },
        ],
      },
    ],
    tips: [
      'People like talking about their work. The ask is far less awkward than it feels.',
      'Fifteen minutes is an easy yes. An hour is not.',
      'Always end by asking who else you should speak to. That is how one conversation becomes five.',
    ],
  },

  {
    slug: 'strengths-and-values-sort',
    title: 'Strengths and Values Sort',
    category: 'career',
    audience: 'student',
    pages: 1,
    when: 'Before choosing a major, or any time "what should I do?" feels impossible',
    purpose:
      'Separates what you are good at from what you care about — because a job that has one but not the other is where people get stuck at 30.',
    sections: [
      {
        heading: 'What I am good at',
        hint: 'Tick honestly. Being good at something you dislike still counts here.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Explaining things so people understand',
              'Fixing or building physical things',
              'Noticing patterns in numbers or data',
              'Persuading people',
              'Staying calm when things go wrong',
              'Organising other people’s chaos',
              'Making things look right',
              'Writing clearly',
              'Learning a system quickly',
              'Being patient with people who are struggling',
            ],
          },
        ],
      },
      {
        heading: 'What I want from work',
        hint: 'Tick your top five only. The restriction is the point.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Good money, honestly',
              'Helping people directly',
              'Time and freedom outside work',
              'Respect and standing',
              'Never doing the same day twice',
              'Working with my hands',
              'Working mostly alone',
              'Being part of a team',
              'Job security',
              'Building something of my own',
              'Living somewhere specific',
              'Being home for my family',
            ],
          },
        ],
      },
      {
        heading: 'Put them together',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Three jobs that use what I am good at',
              'Of those, which also give me what I want from work?',
              'What am I missing — a skill, an experience, or information?',
            ],
            lines: 3,
          },
        ],
      },
    ],
    tips: [
      'Being good at something is not the same as wanting to do it all day.',
      'Money is allowed to be on the list. Pretending otherwise helps nobody.',
      'If nothing overlaps, you need more information, not a different personality.',
    ],
  },

  {
    slug: 'job-shadow-reflection',
    title: 'Job Shadow Reflection',
    category: 'career',
    audience: 'student',
    pages: 1,
    when: 'The same evening as the visit',
    purpose:
      'Turns a day of watching into something you can actually use. Most students come home saying "it was good" and lose everything they noticed.',
    sections: [
      {
        fields: [{ kind: 'boxes', items: ['Where I went', 'Who I shadowed', 'Date'], lines: 1 }],
      },
      {
        heading: 'The day itself',
        fields: [
          {
            kind: 'boxes',
            items: [
              'What they actually spent the most time doing',
              'Something that surprised me',
              'The hardest part of their day',
              'The part I would enjoy',
              'The part I would dread',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'Rate it',
        fields: [
          { kind: 'scale', label: 'Could I do this for years?', low: 'No', high: 'Yes', points: 5 },
          { kind: 'scale', label: 'Did the work look interesting?', low: 'Not at all', high: 'Very', points: 5 },
          { kind: 'scale', label: 'Did the people seem glad to be there?', low: 'No', high: 'Yes', points: 5 },
        ],
      },
      {
        heading: 'What now',
        fields: [
          {
            kind: 'boxes',
            items: ['What I want to try next', 'Who I should talk to next', 'What I have ruled out, and that is useful too'],
            lines: 2,
          },
        ],
      },
    ],
    tips: [
      'Ruling something out is a real result. It costs far less now than after two years of a degree.',
      'Write it the same day. Tomorrow you will only remember the lunch.',
      'Send a thank-you note. It takes four minutes and people remember it for years.',
    ],
  },

  {
    slug: 'first-job-application-log',
    title: 'First Job Application Log',
    category: 'career',
    audience: 'student',
    pages: 1,
    when: 'The first time you look for paid work',
    purpose:
      'Where you applied, who you spoke to, and what to do next — so a first job search is a process rather than a pile of anxiety.',
    sections: [
      {
        fields: [
          {
            kind: 'table',
            columns: ['Employer', 'Role', 'Applied on', 'How (online / in person)', 'Contact name', 'Followed up', 'Outcome'],
            widths: [18, 15, 11, 18, 14, 12, 12],
            rows: 14,
          },
        ],
      },
      {
        heading: 'Before you apply anywhere',
        fields: [
          {
            kind: 'checklist',
            items: [
              'My email address sounds like an adult wrote it',
              'My voicemail is set up and says my name',
              'I know my own Social Security number and have my ID',
              'I know the hours I can actually work, including school nights',
              'I have two people who agreed to be references',
              'I know the youth work rules for my age in my state',
            ],
          },
        ],
      },
      {
        heading: 'What I learned from each rejection',
        hint: 'This is the column that gets you hired eventually.',
        fields: [{ kind: 'lines', count: 4 }],
      },
    ],
    tips: [
      'Following up once, politely, a week later, moves you up the pile more than a better application does.',
      'Going in person still works for local employers.',
      'A first job teaches things no class does. Almost any first job.',
    ],
  },
];
