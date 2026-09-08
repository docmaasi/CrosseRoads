import type { Worksheet } from './types';

export const COLLEGE_LIST_SHEETS: Worksheet[] = [
  {
    slug: 'balanced-college-list',
    title: 'Balanced College List',
    category: 'college-list',
    audience: 'family',
    pages: 1,
    when: 'Spring of junior year, revisited each time you visit a campus',
    purpose:
      'Sorts every school you are considering into Likely, Target and Reach so you can see at a glance whether the list is balanced — or whether it is eight reaches and a prayer.',
    sections: [
      {
        heading: 'Likely — you would very probably be admitted',
        hint: 'Aim for two or three. At least one you would genuinely be happy to attend.',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'Why it fits', 'Est. net price', 'Deadline'],
            widths: [30, 34, 18, 18],
            rows: 3,
          },
        ],
      },
      {
        heading: 'Target — your numbers sit in the middle of their admitted range',
        hint: 'Aim for three or four. This is where most acceptances come from.',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'Why it fits', 'Est. net price', 'Deadline'],
            widths: [30, 34, 18, 18],
            rows: 4,
          },
        ],
      },
      {
        heading: 'Reach — admission would be a genuine stretch',
        hint: 'Two or three is plenty. Every school with an admit rate under 20% is a reach for everyone.',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'Why it fits', 'Est. net price', 'Deadline'],
            widths: [30, 34, 18, 18],
            rows: 3,
          },
        ],
      },
      {
        heading: 'The honest check',
        fields: [
          {
            kind: 'checklist',
            items: [
              'At least one Likely school we can afford without loans',
              'Every school on this list is one my student would actually attend',
              'We have run the net price calculator for every single one',
              'The list has more Targets than Reaches',
            ],
          },
        ],
      },
    ],
    tips: [
      'A school is only a Likely if it is likely on money as well as admission.',
      'Reaches are fine. A list made only of reaches is not a list, it is a lottery ticket.',
      'Rebuild this sheet after every campus visit — opinions change once you stand there.',
    ],
  },

  {
    slug: 'campus-visit-notes',
    title: 'Campus Visit Notes',
    category: 'college-list',
    audience: 'student',
    pages: 1,
    when: 'Take one per campus, filled in before you leave the parking lot',
    purpose:
      'One page per campus, filled in while you are still there. By the fourth visit every college blurs together, and the notes you did not take are the ones you needed.',
    sections: [
      {
        fields: [
          {
            kind: 'boxes',
            items: ['College', 'Date of visit', 'Who came with me'],
            lines: 1,
          },
        ],
      },
      {
        heading: 'First impressions',
        hint: 'Write these before you talk yourself into or out of anything.',
        fields: [
          { kind: 'scale', label: 'Could I picture myself here?', low: 'Not at all', high: 'Absolutely', points: 5 },
          { kind: 'scale', label: 'Did the students seem happy?', low: 'Not really', high: 'Very', points: 5 },
          { kind: 'scale', label: 'Did I feel safe and comfortable?', low: 'No', high: 'Completely', points: 5 },
        ],
      },
      {
        heading: 'What I saw',
        fields: [
          {
            kind: 'boxes',
            items: [
              'The best thing about this place',
              'The thing that worried me',
              'A class, lab or studio I want to be in',
              'Where students actually hang out',
            ],
            lines: 2,
          },
        ],
      },
      {
        heading: 'Questions I asked, and what they said',
        fields: [{ kind: 'lines', count: 5 }],
      },
      {
        heading: 'The car-ride verdict',
        hint: 'Say it out loud before anyone else gives their opinion.',
        fields: [{ kind: 'lines', count: 3 }],
      },
    ],
    tips: [
      'Take a photo of something ordinary — a dorm hallway, the dining hall at noon. Brochure photos all look the same.',
      'Ask a student who is not the tour guide one question. Anything.',
      'Rate it the same day. A week later you are rating your memory, not the school.',
    ],
  },

  {
    slug: 'college-comparison-chart',
    title: 'College Comparison Chart',
    category: 'college-list',
    audience: 'family',
    pages: 1,
    when: 'Once the acceptances are in, before anybody commits',
    purpose:
      'Four schools side by side on the things that actually decide it — cost, distance, size, programme, feel. Puts the decision on one page instead of in six browser tabs.',
    sections: [
      {
        hint: 'Write the four schools across the top, then work down the rows.',
        fields: [
          {
            kind: 'grid',
            columns: ['College 1', 'College 2', 'College 3', 'College 4'],
            rows: [
              'Sticker price (per year)',
              'Our actual net price',
              'Grants & scholarships offered',
              'Loans in the offer',
              'Distance from home',
              'How we would get there',
              'Undergrad size',
              'My programme / major offered?',
              '4-year graduation rate',
              'Housing guaranteed?',
              'What my student liked most',
              'What worried us most',
            ],
          },
        ],
      },
      {
        heading: 'The two questions that decide it',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Which school can we pay for over four years, not just the first one?',
              'Where would our student be happiest and most likely to finish?',
            ],
            lines: 2,
          },
        ],
      },
    ],
    tips: [
      'Compare net price, never sticker price. Sticker price is nobody’s real number.',
      'Multiply the first-year cost by four, then ask the question again.',
      'If two schools are close on money, the one where the student will thrive wins.',
    ],
  },

  {
    slug: 'college-research-log',
    title: 'College Research Log',
    category: 'college-list',
    audience: 'student',
    pages: 1,
    when: 'Junior year, as you start looking',
    purpose:
      'One line per school, so you can look up twenty colleges without opening twenty tabs and forgetting nineteen of them.',
    sections: [
      {
        hint: 'Get the numbers from College Navigator or the school’s own Common Data Set.',
        fields: [
          {
            kind: 'table',
            columns: ['College', 'City / State', 'Size', 'Admit %', 'Mid-50% test range', 'Net price', 'Interested?'],
            widths: [22, 16, 9, 9, 18, 14, 12],
            rows: 16,
          },
        ],
      },
    ],
    tips: [
      'The mid-50% range tells you more than the average. Half of admitted students fall outside it.',
      'Admit rate under 20% means reach, whatever your grades are.',
      'Fill the last column honestly. A long list of maybes helps nobody.',
    ],
  },

  {
    slug: 'what-matters-most-sort',
    title: 'What Matters Most: A Sort',
    category: 'college-list',
    audience: 'family',
    pages: 1,
    when: 'Before you build a list, and again if the list stops making sense',
    purpose:
      'Parent and student each rank what matters in a college, separately, then compare. Most family arguments about college are two people optimising for different things without knowing it.',
    sections: [
      {
        heading: 'Rank these 1 to 12',
        hint: 'Student fills the left column, parent fills the right. No conferring until both are done.',
        fields: [
          {
            kind: 'grid',
            columns: ['Student rank', 'Parent rank'],
            rows: [
              'Total cost to our family',
              'Strength of the specific programme',
              'Distance from home',
              'Size of the school',
              'Campus feel and community',
              'Job or internship placement',
              'Diversity of the student body',
              'Support services (tutoring, counselling, disability)',
              'Athletics, arts or a specific activity',
              'Prestige and name recognition',
              'Safety',
              'Ability to come home easily',
            ],
          },
        ],
      },
      {
        heading: 'Where we disagree most',
        hint: 'Find the two rows with the biggest gap. Talk about those, not about colleges.',
        fields: [{ kind: 'lines', count: 4 }],
      },
      {
        heading: 'What we agree on',
        fields: [{ kind: 'lines', count: 3 }],
      },
    ],
    tips: [
      'Do this before touring anywhere. It changes which tours are worth the petrol.',
      'A gap is not a fight. It is information.',
      'Cost belongs on the list. Pretending it does not is how families end up with debt they never discussed.',
    ],
  },
];
