import type { Worksheet } from './types';

export const APPLICATION_SHEETS: Worksheet[] = [
  {
    slug: 'application-deadline-tracker',
    title: 'Application Deadline Tracker',
    category: 'applications',
    audience: 'family',
    pages: 1,
    when: 'Print in September of senior year and put it on the fridge',
    purpose:
      'Every application, every deadline, every piece still outstanding, on one page. The single most common way a strong application fails is that something was late.',
    sections: [
      {
        hint: 'Tick a box only when the college confirms it received the item, not when you sent it.',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'Type (EA/ED/RD)', 'Deadline', 'App sent', 'Fee / waiver', 'Transcript', 'Recs', 'Test scores', 'Essays', 'Confirmed'],
            widths: [18, 11, 10, 8, 9, 9, 7, 9, 8, 11],
            rows: 12,
          },
        ],
      },
      {
        heading: 'Dates that are not application deadlines but will ruin you anyway',
        fields: [
          {
            kind: 'boxes',
            items: [
              'FAFSA opens / our target filing date',
              'CSS Profile deadline (earliest school)',
              'Scholarship deadlines this month',
              'Deadline to request transcripts from school',
            ],
            lines: 1,
          },
        ],
      },
    ],
    tips: [
      'Early Decision is binding. Early Action is not. Know which one you ticked.',
      'Deadlines are in the college’s timezone, and 11:59pm means 11:59pm.',
      'Ask teachers for recommendations four weeks out, not four days.',
    ],
  },

  {
    slug: 'activity-resume',
    title: 'Activity Résumé Builder',
    category: 'applications',
    audience: 'student',
    pages: 2,
    when: 'Junior year — then keep adding to it',
    purpose:
      'Everything you have done, written down properly, before you have to squeeze it into the Common App’s ten slots and 150 characters. Most students undersell themselves because they cannot remember.',
    sections: [
      {
        heading: 'For each activity',
        hint: 'Do one block per activity. Hours and weeks matter — colleges ask for them.',
        fields: [
          {
            kind: 'table',
            columns: ['Activity', 'Your role', 'Grades involved', 'Hrs/week', 'Weeks/year', 'What you actually did'],
            widths: [18, 14, 12, 9, 10, 37],
            rows: 12,
          },
        ],
      },
      {
        heading: 'Things students forget to count',
        hint: 'Tick anything true, then go back and add it above.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Paid work of any kind, including informal jobs',
              'Caring for a sibling or a relative',
              'Translating for family members',
              'Religious or community service',
              'Teaching yourself something serious (coding, an instrument, a language)',
              'Running a household task nobody else does',
              'Online communities you help run',
              'Family business you work in',
            ],
          },
        ],
      },
      {
        heading: 'The 150-character version',
        hint: 'Rewrite your top five so each fits in the Common App box. Verbs first, results second.',
        fields: [{ kind: 'lines', count: 8 }],
      },
    ],
    tips: [
      'Caring for family is an activity. It shows more than most clubs do.',
      '"Led", "built", "raised", "taught" beat "participated in" every time.',
      'Numbers are free: how many people, how much money, how many hours.',
    ],
  },

  {
    slug: 'personal-statement-brainstorm',
    title: 'Personal Statement Brainstorm',
    category: 'applications',
    audience: 'student',
    pages: 2,
    when: 'Summer before senior year',
    purpose:
      'Gets a real essay out of you without staring at a blank document. None of these questions is the essay — one of the answers will be.',
    sections: [
      {
        heading: 'Ten minutes, no editing',
        hint: 'Write badly on purpose. You cannot revise a blank page.',
        fields: [
          {
            kind: 'boxes',
            items: [
              'A time I was genuinely wrong about something',
              'Something I do that nobody assigned me',
              'A thing my family does that I assumed everyone did',
              'The hardest thing I have had to figure out on my own',
              'Something small I notice that other people walk past',
              'A moment I surprised myself',
            ],
            lines: 3,
          },
        ],
      },
      {
        heading: 'Go deeper on one',
        hint: 'Pick the answer above you would most want to explain to a stranger.',
        fields: [
          {
            kind: 'boxes',
            items: [
              'What actually happened — just the facts, in order',
              'What I was thinking at the time',
              'What I think about it now',
              'What this shows about how I handle things',
            ],
            lines: 4,
          },
        ],
      },
      {
        heading: 'The test',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Could only I have written this? (If a classmate could submit it, start again.)',
              'Does it show me doing or deciding something, not just feeling something?',
              'Does the reader learn something they could not get from my transcript?',
              'Is it about me, rather than about a person I admire?',
            ],
          },
        ],
      },
    ],
    tips: [
      'The topic matters far less than what you notice about it.',
      'Trauma is not required. Plenty of superb essays are about a job, a kitchen, or a bus route.',
      'Read it aloud. If you would not say it, do not write it.',
    ],
  },

  {
    slug: 'supplemental-essay-tracker',
    title: 'Supplemental Essay Tracker',
    category: 'applications',
    audience: 'student',
    pages: 1,
    when: 'October and November of senior year',
    purpose:
      'Ten colleges can mean thirty supplements. This is how you see all of them at once, spot the ones you can adapt, and stop rewriting the same paragraph from scratch.',
    sections: [
      {
        fields: [
          {
            kind: 'table',
            columns: ['College', 'Prompt (short)', 'Word limit', 'Reuse from?', 'Draft', 'Reviewed', 'Final'],
            widths: [18, 30, 10, 14, 9, 10, 9],
            rows: 14,
          },
        ],
      },
      {
        heading: '"Why us?" — the research you need per school',
        hint: 'Two specifics per college. Named courses, named professors, named programmes. Never adjectives.',
        fields: [{ kind: 'lines', count: 6 }],
      },
    ],
    tips: [
      'A "Why us?" essay that works for two colleges works for neither.',
      'Search the course catalogue, not the marketing pages. That is where the specifics live.',
      'Adapting an essay is fine. Find-and-replacing the college name is not — and they can tell.',
    ],
  },

  {
    slug: 'recommendation-request-pack',
    title: 'Recommendation Request Pack',
    category: 'applications',
    audience: 'student',
    pages: 1,
    when: 'Spring of junior year, or the first week of senior year at the latest',
    purpose:
      'What you hand a teacher when you ask them to write for you. A teacher with this writes a specific letter; a teacher without it writes a polite one.',
    sections: [
      {
        heading: 'About me',
        fields: [
          {
            kind: 'boxes',
            items: ['Name and graduating year', 'Your class I took, and when', 'What I plan to study, and why'],
            lines: 1,
          },
        ],
      },
      {
        heading: 'Things you might not remember, but I do',
        hint: 'Remind them of specific moments in their classroom. This is the part that makes the letter good.',
        fields: [
          {
            kind: 'boxes',
            items: [
              'A project or assignment I was proud of in your class',
              'A time I struggled in your class and what I did about it',
              'Something I contributed that was not graded',
            ],
            lines: 3,
          },
        ],
      },
      {
        heading: 'Where it goes and when',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'How it is submitted', 'Due date'],
            widths: [40, 35, 25],
            rows: 6,
          },
        ],
      },
      {
        heading: 'The ask',
        fields: [
          {
            kind: 'checklist',
            items: [
              'I asked in person, or in a real email — not a group text',
              'I asked at least four weeks before the earliest deadline',
              'I gave them this sheet',
              'I waived my right to read it (colleges trust waived letters more)',
              'I said thank you afterwards, in writing',
            ],
          },
        ],
      },
    ],
    tips: [
      'Ask a teacher who saw you improve, not only one who gave you an A.',
      'Two teachers who know you beat four who taught you.',
      'Give them a deadline a week earlier than the real one.',
    ],
  },

  {
    slug: 'application-account-log',
    title: 'Application Account Log',
    category: 'applications',
    audience: 'family',
    pages: 1,
    when: 'The day you start the first application',
    purpose:
      'Every portal, login and confirmation number in one place — kept on paper, deliberately. In April you will need a portal you set up in September and have not opened since.',
    sections: [
      {
        fields: [
          {
            kind: 'note',
            text: 'Write usernames and portal names here. Do NOT write passwords on a sheet that lives on the fridge — use a password manager, or a note kept somewhere private.',
          },
          {
            kind: 'table',
            columns: ['Site / portal', 'Username or email used', 'Set up on', 'Notes (ID numbers, security question)'],
            widths: [24, 26, 12, 38],
            rows: 14,
          },
        ],
      },
      {
        heading: 'The ones everyone needs',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Common App (and the essay saved somewhere outside it)',
              'FSA ID — student’s own',
              'FSA ID — parent’s own, separate from the student’s',
              'CSS Profile, if any school requires it',
              'Each college’s own applicant portal',
              'Testing account (College Board and/or ACT)',
              'Scholarship portals',
            ],
          },
        ],
      },
    ],
    tips: [
      'Parent and student each need their own FSA ID. Sharing one causes weeks of delay.',
      'Use an email address the student will still have after graduation, not the school one.',
      'Keep a copy of every submitted essay outside the portal.',
    ],
  },
];
