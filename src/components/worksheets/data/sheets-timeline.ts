import type { Worksheet } from './types';

export const TIMELINE_SHEETS: Worksheet[] = [
  {
    slug: 'junior-year-timeline',
    title: 'Junior Year Timeline',
    category: 'timeline',
    audience: 'family',
    pages: 1,
    when: 'Print in August before junior year',
    purpose:
      'Month by month through the year that matters most. Junior year is where the transcript, the test scores and the college list are actually built — senior year is mostly paperwork.',
    sections: [
      {
        heading: 'Autumn term',
        fields: [
          {
            kind: 'checklist',
            items: [
              'August — check the schedule is the most rigorous the student can genuinely handle',
              'September — meet the school counsellor and put a face to the name',
              'October — take the PSAT/NMSQT (this is the only route into National Merit)',
              'October — start a rough list of careers or subjects of interest',
              'November — plan an SAT or ACT date and start real practice',
              'December — review first-term grades honestly and adjust',
            ],
          },
        ],
      },
      {
        heading: 'Spring term',
        fields: [
          {
            kind: 'checklist',
            items: [
              'January — build the first version of a college list',
              'February — run net price calculators for three schools to see real numbers',
              'February — agree the family budget figure',
              'March — sit the SAT or ACT',
              'March — ask two teachers for recommendations for the autumn',
              'April — visit two or three campuses, including one you can afford',
              'April — plan next year’s schedule; keep it rigorous',
              'May — take any AP or IB exams',
              'May — start the activity résumé while it is fresh',
            ],
          },
        ],
      },
      {
        heading: 'Summer after junior year',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Draft the personal statement — genuinely, not in your head',
              'Retake the SAT or ACT if a higher score is realistic',
              'Work, volunteer, or shadow someone. Any of the three.',
              'Narrow the list to eight to twelve schools',
              'Create the Common App account when it opens on 1 August',
            ],
          },
        ],
      },
      {
        heading: 'Our own dates',
        fields: [{ kind: 'lines', count: 4 }],
      },
    ],
    tips: [
      'The PSAT in October of junior year is the only way into National Merit. There is no second chance.',
      'A draft essay written in July is worth five written in November.',
      'Run one net price calculator early. It changes the list more than any tour.',
    ],
  },

  {
    slug: 'senior-year-timeline',
    title: 'Senior Year Timeline',
    category: 'timeline',
    audience: 'family',
    pages: 1,
    when: 'Print in August before senior year and keep it visible',
    purpose:
      'Every month of senior year and what must happen in it. Stick it where both of you walk past it.',
    sections: [
      {
        heading: 'August and September',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Finalise the college list — balanced, and affordable',
              'Open the Common App and complete the profile sections',
              'Finish the personal statement',
              'Confirm both teacher recommendations in writing',
              'Request transcripts through the counselling office',
              'Note every Early Action and Early Decision deadline',
              'Take the last SAT or ACT if you are still improving',
            ],
          },
        ],
      },
      {
        heading: 'October and November',
        fields: [
          {
            kind: 'checklist',
            items: [
              'File the FAFSA as soon as it opens',
              'File the CSS Profile if any school on the list requires it',
              'Submit Early Action / Early Decision applications',
              'Write the supplemental essays school by school',
              'Apply to at least five scholarships',
              'Check every portal for missing items — do not assume',
            ],
          },
        ],
      },
      {
        heading: 'December to February',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Submit all remaining applications well before the deadline',
              'Early results arrive — respond to any binding offer properly',
              'Keep the grades up; offers are conditional on the final transcript',
              'Send mid-year reports where required',
              'Keep applying for scholarships — the local ones are still open',
            ],
          },
        ],
      },
      {
        heading: 'March to May',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Decisions and award letters arrive — compare on net price',
              'Appeal an award if circumstances have genuinely changed',
              'Revisit the top two if you can',
              'Decide and deposit by 1 May',
              'Tell the other colleges no, so a place opens for someone else',
              'Take AP or IB exams',
            ],
          },
        ],
      },
      {
        heading: 'Summer',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Send the final transcript',
              'Complete housing, health forms and immunisation records',
              'Attend orientation and register for classes',
              'Set up the tuition payment plan',
              'Sign the FERPA release if you have agreed to it',
            ],
          },
        ],
      },
    ],
    tips: [
      '1 May is the national deposit deadline. Almost nothing moves it.',
      'Offers are conditional. A collapsed final term can and does get them withdrawn.',
      'Declining the offers you will not take is a kindness that costs nothing.',
    ],
  },

  {
    slug: 'ninth-and-tenth-grade-plan',
    title: '9th and 10th Grade Plan',
    category: 'timeline',
    audience: 'family',
    pages: 1,
    when: 'The earlier the better — this is where the options are created',
    purpose:
      'What to do in the two years before anybody starts talking about college. Almost everything that limits a senior’s options was decided in ninth and tenth grade.',
    sections: [
      {
        heading: 'The things that quietly matter most',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Take the maths sequence seriously — it gates more majors than anything else',
              'Start a language and keep going; most colleges want two or three years',
              'Protect the GPA from the first term. It is an average, and early marks never leave it.',
              'Find one activity and stay with it, rather than joining six',
              'Read things that are not assigned',
              'Learn how to email an adult properly',
            ],
          },
        ],
      },
      {
        heading: 'Courses to plan now',
        fields: [
          {
            kind: 'table',
            columns: ['Subject', '9th', '10th', '11th (planned)', '12th (planned)'],
            widths: [24, 19, 19, 19, 19],
            rows: 7,
          },
        ],
      },
      {
        heading: 'Free things worth doing before junior year',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Take a free career interest assessment',
              'Visit any college campus at all, even one nearby, just to see one',
              'Ask three adults what their job is really like',
              'Open a savings account in the student’s name',
              'Find out whether the school offers dual enrolment or free community college credit',
            ],
          },
        ],
      },
      {
        heading: 'Notes',
        fields: [{ kind: 'lines', count: 4 }],
      },
    ],
    tips: [
      'Dual enrolment can knock a term or a year off the bill. Ask in ninth grade, not eleventh.',
      'Depth beats breadth. Three years of one thing says more than one year of five.',
      'A ninth-grade GPA cannot be re-taken. It can only be averaged with.',
    ],
  },

  {
    slug: 'transfer-and-community-college-plan',
    title: 'Community College and Transfer Plan',
    category: 'timeline',
    audience: 'family',
    pages: 1,
    when: 'Whenever the price of a four-year degree stops adding up',
    purpose:
      'The route most families dismiss too early: two years locally, then transfer, for the same final degree at a fraction of the cost. Done properly it works — done casually, credits are lost.',
    sections: [
      {
        heading: 'What to check before enrolling anywhere',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Does my state have a guaranteed transfer agreement (articulation) with public universities?',
              'Which specific courses transfer for my intended major — in writing?',
              'Is there a transfer-admission guarantee with a named university?',
              'What GPA does that guarantee require?',
              'Does the four-year school cap how many credits it will accept?',
              'Are there scholarships reserved for transfer students?',
            ],
          },
        ],
      },
      {
        heading: 'The money, side by side',
        fields: [
          {
            kind: 'grid',
            columns: ['Four years away', '2 + 2 transfer'],
            rows: [
              'Tuition and fees, total',
              'Housing and food, total',
              'Travel, total',
              'Grants and scholarships',
              'What we pay',
              'What we borrow',
            ],
          },
        ],
      },
      {
        heading: 'Course plan for the first two years',
        fields: [
          {
            kind: 'table',
            columns: ['Term', 'Courses', 'Transfers to?', 'Confirmed by whom'],
            widths: [14, 38, 24, 24],
            rows: 8,
          },
        ],
      },
      {
        heading: 'Who confirmed it, and when',
        hint: 'Get it from a named transfer adviser at the four-year school. Not a website.',
        fields: [{ kind: 'lines', count: 3 }],
      },
    ],
    tips: [
      'The degree says the university that awarded it. It does not say where you did the first two years.',
      'Confirm transferability in writing, with a named person, before you register for the class.',
      'The commonest way this goes wrong is taking courses that transfer as electives instead of requirements.',
    ],
  },
];
