import type { Worksheet } from './types';

export const WELLBEING_SHEETS: Worksheet[] = [
  {
    slug: 'weekly-habit-tracker',
    title: 'Weekly Habit Tracker',
    category: 'wellbeing',
    audience: 'family',
    pages: 1,
    when: 'Any week. Print a stack.',
    purpose:
      'Five habits, seven days, one page. Deliberately small — the point is to notice a pattern, not to score yourself.',
    sections: [
      {
        heading: 'Pick up to five habits',
        hint: 'Write them in the rows. Small and specific beats ambitious: "walk 10 minutes" not "exercise".',
        fields: [
          {
            kind: 'grid',
            columns: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            rows: ['', '', '', '', ''],
          },
        ],
      },
      {
        heading: 'How the week felt',
        fields: [
          { kind: 'scale', label: 'Energy', low: 'Empty', high: 'Good', points: 5 },
          { kind: 'scale', label: 'Sleep', low: 'Poor', high: 'Rested', points: 5 },
          { kind: 'scale', label: 'Stress', low: 'Overwhelmed', high: 'Manageable', points: 5 },
        ],
      },
      {
        heading: 'What helped, and what got in the way',
        fields: [{ kind: 'lines', count: 3 }],
      },
      {
        heading: 'One thing I am changing next week',
        fields: [{ kind: 'lines', count: 1 }],
      },
    ],
    tips: [
      'Three habits done beats seven habits attempted.',
      'A missed day is data, not failure. Start the next row.',
      'Track the week you feel worst. That is the week the pattern shows up.',
    ],
  },

  {
    slug: 'parent-support-map',
    title: 'Parent Support Map',
    category: 'wellbeing',
    audience: 'parent',
    pages: 1,
    when: 'Whenever you are carrying this alone',
    purpose:
      'Writes down who is actually in your corner and what each person can realistically do. Single parents in particular hold far more than they name, and naming it is where asking becomes possible.',
    sections: [
      {
        heading: 'What I am carrying right now',
        hint: 'All of it. Work, money, this child, other children, your own parents, your health.',
        fields: [{ kind: 'lines', count: 6 }],
      },
      {
        heading: 'Who is actually available',
        hint: 'Be specific about what each person can genuinely do. "Anything" is not a plan.',
        fields: [
          {
            kind: 'table',
            columns: ['Person', 'What they could realistically help with', 'Have I asked?'],
            widths: [24, 56, 20],
            rows: 7,
          },
        ],
      },
      {
        heading: 'Help that is not a person',
        fields: [
          {
            kind: 'checklist',
            items: [
              'The school counsellor — theirs, and mine to call',
              '211 — free, any hour, finds local help of any kind',
              'My employer’s assistance programme, if there is one',
              'A parent group, online or in person',
              'My own doctor',
              'A faith or community organisation',
            ],
          },
        ],
      },
      {
        heading: 'The one thing I will ask for this week',
        hint: 'One. Named person, specific ask, by a specific day.',
        fields: [{ kind: 'lines', count: 2 }],
      },
      {
        heading: 'If it is heavier than this sheet',
        fields: [
          {
            kind: 'note',
            text: 'If you are in crisis, call or text 988 in the US, any hour, free and confidential. If you are in immediate danger, call 911. Needing help with this is not a failure of parenting; it is the most common thing in the world.',
          },
        ],
      },
    ],
    tips: [
      'People say no to "can you help?" and yes to "could you collect her on Thursday?"',
      'Write the list before you need it. Nobody thinks clearly at 2am.',
      'Your own doctor is on this list for a reason.',
    ],
  },

  {
    slug: 'stress-and-reset-plan',
    title: 'Stress and Reset Plan',
    category: 'wellbeing',
    audience: 'student',
    pages: 1,
    when: 'Fill it in on a calm day, so it is ready on a bad one',
    purpose:
      'Your own early-warning signs and the things that actually help you — written down while you are fine, because on a bad day nobody can think of them.',
    sections: [
      {
        heading: 'How I can tell I am not coping',
        hint: 'Body, sleep, mood, behaviour. Be specific and unflattering.',
        fields: [{ kind: 'lines', count: 5 }],
      },
      {
        heading: 'What reliably helps me',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Takes 5 minutes',
              'Takes an hour',
              'Takes a whole day',
              'A person I can text without explaining myself',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'What makes it worse',
        hint: 'Everyone has two or three. Write them down and you will catch yourself doing them.',
        fields: [{ kind: 'lines', count: 3 }],
      },
      {
        heading: 'My people and numbers',
        fields: [
          {
            kind: 'table',
            columns: ['Who', 'How to reach them', 'For what'],
            widths: [28, 34, 38],
            rows: 4,
          },
          {
            kind: 'note',
            text: 'Crisis, any hour, free: call or text 988 (US). Text HOME to 741741 for the Crisis Text Line. Immediate danger: 911. Your college counselling centre and campus security numbers belong on this sheet too — add them the first week.',
          },
        ],
      },
    ],
    tips: [
      'Write this on a good day. That is the whole point of it.',
      'Keep a photo of it in your phone as well as the paper copy.',
      'Telling one person early is the thing that most reliably works.',
    ],
  },

  {
    slug: 'senior-year-pressure-check',
    title: 'Senior Year Pressure Check',
    category: 'wellbeing',
    audience: 'family',
    pages: 1,
    when: 'Once a month through senior year',
    purpose:
      'A short monthly honesty check for both of you. Senior year quietly becomes the most stressful year a family has had, and nobody says so until March.',
    sections: [
      {
        heading: 'This month, rate it separately',
        hint: 'Student fills one column, parent the other. Compare afterwards.',
        fields: [
          {
            kind: 'grid',
            columns: ['Student', 'Parent'],
            rows: [
              'How stressed have I been about college?',
              'How much have we argued about it?',
              'How well am I sleeping?',
              'Do I feel behind?',
              'Am I enjoying any of senior year?',
              'Do I feel like the other person is listening?',
            ],
          },
        ],
      },
      {
        heading: 'Where our numbers differ most',
        fields: [{ kind: 'lines', count: 3 }],
      },
      {
        heading: 'One thing each of us will do differently',
        fields: [{ kind: 'boxes', items: ['Student', 'Parent'], lines: 2 }],
      },
      {
        heading: 'Something good that happened this month',
        hint: 'Do not skip this one.',
        fields: [{ kind: 'lines', count: 2 }],
      },
    ],
    tips: [
      'A parent who is anxious about money and a student who is anxious about rejection sound identical from the outside. They need different responses.',
      'Senior year is also the last year at home. Protect a little of it for that.',
      'If either of you is consistently at the bad end, talk to someone. It is not a phase you have to ride out.',
    ],
  },
];
