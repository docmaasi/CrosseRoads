import type { Worksheet } from './types';

export const FAMILY_SHEETS: Worksheet[] = [
  {
    slug: 'who-does-what',
    title: 'Who Does What: Parent and Student',
    category: 'family',
    audience: 'family',
    pages: 1,
    when: 'The start of junior year, revisited each term',
    purpose:
      'Writes down who owns each task, so the process is a partnership rather than a parent doing it all or a 17-year-old left alone with it. Sign it. It settles arguments before they start.',
    sections: [
      {
        heading: 'Mark each task S (student), P (parent) or B (both)',
        fields: [
          {
            kind: 'grid',
            columns: ['S / P / B', 'By when'],
            rows: [
              'Researching colleges',
              'Booking campus visits',
              'Keeping the deadline calendar',
              'Writing the essays',
              'Proofreading the essays',
              'Asking teachers for recommendations',
              'Requesting transcripts',
              'Registering for the SAT/ACT',
              'Filling in the FAFSA',
              'Gathering tax documents',
              'Talking to financial aid offices',
              'Searching and applying for scholarships',
              'Opening and reading college emails',
              'Replying to colleges',
              'Making the final decision',
            ],
          },
        ],
      },
      {
        heading: 'Ground rules we agree on',
        fields: [
          {
            kind: 'boxes',
            items: [
              'How often we talk about college (and when we do not)',
              'What the student handles alone, even if it is done imperfectly',
              'What the parent handles because it is genuinely theirs',
              'What we do when one of us is stressed about it',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'Signed',
        fields: [{ kind: 'boxes', items: ['Student', 'Parent', 'Date'], lines: 1 }],
      },
    ],
    tips: [
      'The student should own the essays and the emails. Colleges notice when a parent writes.',
      'Money tasks are the parent’s. Do not hand a teenager the tax return.',
      'Agreeing when NOT to discuss college is as useful as agreeing when to.',
    ],
  },

  {
    slug: 'family-conversation-starters',
    title: 'Family Conversation Starters',
    category: 'family',
    audience: 'family',
    pages: 1,
    when: 'Any car journey longer than twenty minutes',
    purpose:
      'Twenty questions that open a real conversation about the future, for families where "so, have you thought about college?" has stopped working.',
    sections: [
      {
        heading: 'For the student',
        fields: [
          {
            kind: 'checklist',
            items: [
              'What part of this whole thing are you most worried about?',
              'What do you wish I would stop asking you?',
              'If college were free, what would you study?',
              'What do you think you would be good at that nobody has suggested?',
              'Do you want to be near home, or far away? Be honest.',
              'What would make next year feel like a good year?',
              'Is there anything you have decided but not told me?',
            ],
          },
        ],
      },
      {
        heading: 'For the parent',
        hint: 'The student asks these. It matters that it goes both ways.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'What are you actually afraid of here?',
              'What did you want to do at my age?',
              'How much can we really spend? I would rather know.',
              'What would you do if I did not go to college at all?',
              'What are you going to do when I leave?',
            ],
          },
        ],
      },
      {
        heading: 'Things we said we would come back to',
        fields: [{ kind: 'lines', count: 5 }],
      },
    ],
    tips: [
      'Side by side in a car beats face to face at a table for these conversations.',
      'If the answer is "I do not know", that is an answer. Do not fill the silence.',
      'Ask one question, not seven.',
    ],
  },

  {
    slug: 'senior-year-move-in-checklist',
    title: 'Move-In Checklist',
    category: 'family',
    audience: 'family',
    pages: 1,
    when: 'July and August before first term',
    purpose:
      'What to buy, what to bring, what to leave at home, and the paperwork that must be done before move-in day — separated so you do not buy a printer nobody uses.',
    sections: [
      {
        heading: 'Do this before you buy anything',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Read the college’s own list of what is banned in the room',
              'Message the roommate about who brings what big item',
              'Check what the room already has (fridge, microwave, lamp, bedding size)',
              'Confirm the bed size — many are extra-long twin, not twin',
            ],
          },
        ],
      },
      {
        heading: 'Paperwork that stops move-in if it is missing',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Immunisation records submitted',
              'Health form completed by a doctor',
              'Health insurance card, or waiver filed if using a family plan',
              'Housing contract signed and deposit paid',
              'Meal plan chosen',
              'Tuition bill paid or payment plan set up',
              'Student ID photo uploaded',
              'FERPA release signed, if you have agreed the parent may see records',
            ],
          },
        ],
      },
      {
        heading: 'To buy',
        fields: [
          {
            kind: 'table',
            columns: ['Item', 'Have it', 'Buy it', 'Cost'],
            widths: [58, 12, 12, 18],
            rows: 14,
          },
        ],
      },
      {
        heading: 'Leave at home',
        hint: 'Every family over-packs. Write what stays, and mean it.',
        fields: [{ kind: 'lines', count: 3 }],
      },
    ],
    tips: [
      'Buy half of what you think. The campus shop and a first-week trip cover the rest.',
      'Nothing important should be bought before the roommate conversation.',
      'Without a signed FERPA release, the college legally cannot discuss grades or bills with a parent.',
    ],
  },

  {
    slug: 'emergency-and-health-sheet',
    title: 'Emergency and Health Information',
    category: 'family',
    audience: 'family',
    pages: 1,
    when: 'Before move-in. Give one copy to the student, keep one at home.',
    purpose:
      'The information your student will need in an emergency and will not be able to recall — insurance numbers, prescriptions, allergies, who to call. On paper, because phones die.',
    sections: [
      {
        heading: 'Student',
        fields: [
          {
            kind: 'boxes',
            items: ['Full legal name and date of birth', 'Blood type, if known', 'Allergies — food, drug, environmental', 'Existing conditions'],
            lines: 1,
          },
        ],
      },
      {
        heading: 'Medication',
        fields: [
          {
            kind: 'table',
            columns: ['Medication', 'Dose', 'For what', 'Prescriber and phone'],
            widths: [26, 14, 24, 36],
            rows: 5,
          },
        ],
      },
      {
        heading: 'Insurance',
        fields: [
          {
            kind: 'boxes',
            items: ['Insurer and plan name', 'Member ID and group number', 'Phone number on the card', 'Pharmacy near campus'],
            lines: 1,
          },
        ],
      },
      {
        heading: 'Who to call',
        fields: [
          {
            kind: 'table',
            columns: ['Name', 'Relationship', 'Phone', 'Call them for'],
            widths: [24, 20, 22, 34],
            rows: 5,
          },
        ],
      },
      {
        heading: 'On campus',
        fields: [
          {
            kind: 'boxes',
            items: ['Campus security number', 'Student health centre', 'Counselling centre', 'Resident adviser'],
            lines: 1,
          },
        ],
      },
      {
        heading: 'Always',
        fields: [
          {
            kind: 'note',
            text: 'In an emergency, call 911. For a mental-health or suicidal crisis anywhere in the US, call or text 988, any hour, free.',
          },
        ],
      },
    ],
    tips: [
      'Photograph both sides of the insurance card and keep the photo in the student’s phone as well.',
      'A student over 18 must sign a release before a hospital may speak to a parent. Ask about that now, not in a waiting room.',
      'Put the counselling centre number in the phone before it is needed.',
    ],
  },

  {
    slug: 'first-semester-check-in',
    title: 'First Semester Check-In',
    category: 'family',
    audience: 'family',
    pages: 1,
    when: 'Week 4, week 8 and week 12 of the first term',
    purpose:
      'Five minutes of structured questions that catch the problems students hide — money running out, a class going badly, not eating, not sleeping, no friends yet — while there is still time to fix them.',
    sections: [
      {
        heading: 'The check-in',
        hint: 'Ask these gently, three times a term. Not all at once.',
        fields: [
          { kind: 'scale', label: 'How is the sleep?', low: 'Terrible', high: 'Fine', points: 5 },
          { kind: 'scale', label: 'Are you eating properly?', low: 'No', high: 'Yes', points: 5 },
          { kind: 'scale', label: 'Do you have people there?', low: 'Nobody yet', high: 'Good friends', points: 5 },
          { kind: 'scale', label: 'How are the classes going, really?', low: 'Badly', high: 'Well', points: 5 },
          { kind: 'scale', label: 'Is the money holding out?', low: 'No', high: 'Yes', points: 5 },
        ],
      },
      {
        heading: 'Questions that get a real answer',
        fields: [
          {
            kind: 'checklist',
            items: [
              'What is the hardest class, and have you been to office hours?',
              'Who did you eat with this week?',
              'Is there anything you have not told me because you thought I would worry?',
              'What do you need that you have not asked for?',
              'Have you been to the health centre or counselling for anything?',
            ],
          },
        ],
      },
      {
        heading: 'Things to act on',
        fields: [{ kind: 'lines', count: 4 }],
      },
      {
        heading: 'Deadlines that matter this term',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Last day to drop a class without penalty',
              'Housing application for next year',
              'FAFSA renewal for next year',
              'Registration for next term’s classes',
            ],
          },
        ],
      },
    ],
    tips: [
      'A student who never mentions a problem is not necessarily a student without one.',
      'Going to office hours is the single most under-used thing in college. Ask about it every time.',
      'The drop deadline is the one that quietly saves a GPA. Know the date.',
    ],
  },
];
