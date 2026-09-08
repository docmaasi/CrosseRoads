import type { Worksheet } from './types';

export const MONEY_SHEETS: Worksheet[] = [
  {
    slug: 'financial-aid-award-comparison',
    title: 'Financial Aid Award Comparison',
    category: 'money',
    audience: 'family',
    pages: 1,
    when: 'March and April of senior year, as offers arrive',
    purpose:
      'Award letters are written to look generous. This puts them in the same format so you can see what each school actually costs you — the number nobody prints in bold.',
    sections: [
      {
        hint: 'Take every figure from the award letter. Where a school does not state one, write "not stated" — that is itself an answer.',
        fields: [
          {
            kind: 'grid',
            columns: ['College 1', 'College 2', 'College 3', 'College 4'],
            rows: [
              'A. Tuition and fees',
              'B. Housing and meals',
              'C. Books, travel, personal',
              'D. TOTAL COST (A+B+C)',
              'E. Grants (never repaid)',
              'F. Scholarships (never repaid)',
              'G. TOTAL FREE MONEY (E+F)',
              'H. Work-study offered',
              'I. Federal student loans offered',
              'J. Parent PLUS / private loans offered',
              'K. WHAT WE PAY (D − G)',
              'L. Of K, how much is borrowed?',
              'M. K × 4 years',
            ],
          },
        ],
      },
      {
        heading: 'Questions to ask the financial aid office',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Is this scholarship renewable all four years, and what GPA keeps it?',
              'Will my aid change if my sibling starts or finishes college?',
              'Does the cost figure include the health insurance charge?',
              'Is there an appeal process if our circumstances have changed?',
            ],
          },
        ],
      },
      {
        heading: 'Our decision',
        fields: [{ kind: 'lines', count: 3 }],
      },
    ],
    tips: [
      'A loan is not aid. It is a bill that arrives later, with interest.',
      'Row K is the only number that compares schools. Row D is marketing.',
      'You may appeal an award. A short, factual letter about changed circumstances works more often than families expect.',
    ],
  },

  {
    slug: 'true-cost-worksheet',
    title: 'The True Cost Worksheet',
    category: 'money',
    audience: 'family',
    pages: 1,
    when: 'Before you fall in love with a school, not after',
    purpose:
      'Adds up the costs that never appear in the sticker price — flights home, a laptop, the deposit, the winter coat — so the first year holds no expensive surprises.',
    sections: [
      {
        heading: 'What the college charges',
        fields: [
          {
            kind: 'table',
            columns: ['Item', 'Per year'],
            widths: [70, 30],
            rows: 6,
          },
        ],
      },
      {
        heading: 'What the college does not charge you for, but you pay anyway',
        fields: [
          {
            kind: 'table',
            columns: ['Item', 'Per year'],
            widths: [70, 30],
            rows: 12,
          },
          {
            kind: 'note',
            text: 'Commonly missed: enrolment deposit · housing deposit · travel home at breaks (multiply by number of trips) · laptop · textbooks and access codes · lab or studio fees · winter clothing · phone plan · toiletries and laundry · club or Greek dues · health insurance if you cannot waive it · storage over summer · a flight for move-in for you as well.',
          },
        ],
      },
      {
        heading: 'The four-year picture',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Total we pay in year one',
              'Assume 4% more each year — total across four years',
              'Of that, how much is borrowed',
              'Monthly repayment on that debt after graduation',
            ],
            lines: 1,
          },
        ],
      },
    ],
    tips: [
      'A rough rule: do not borrow more in total than the student expects to earn in their first year of work.',
      'Costs rise every year. Budgeting year one four times over is optimistic.',
      'Ask whether the health insurance charge can be waived. It is often over $2,000.',
    ],
  },

  {
    slug: 'scholarship-tracker',
    title: 'Scholarship Tracker',
    category: 'money',
    audience: 'student',
    pages: 1,
    when: 'Junior spring onwards — and keep going after you enrol',
    purpose:
      'Scholarships are won by volume and by deadlines met. This tracks what you applied for, what it needed, and what came back.',
    sections: [
      {
        fields: [
          {
            kind: 'table',
            columns: ['Scholarship', 'Amount', 'Deadline', 'Essay?', 'Recs?', 'Submitted', 'Result'],
            widths: [26, 11, 11, 9, 9, 12, 22],
            rows: 16,
          },
        ],
      },
      {
        heading: 'Where to look that most families never do',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Your own high school’s counselling office list',
              'Your parents’ employers and unions',
              'Your own employer, if you work',
              'Local rotary, elks, lions, church, mosque, temple, community foundation',
              'Your state’s higher education agency',
              'Professional associations in the field you want to enter',
              'The colleges themselves — departmental and merit awards',
              'Community foundations in your county',
            ],
          },
        ],
      },
      {
        heading: 'Running total won',
        fields: [{ kind: 'lines', count: 1 }],
      },
    ],
    tips: [
      'Small local scholarships have far less competition than national ones, and they add up.',
      'Never pay a fee to apply for a scholarship. That is not a scholarship.',
      'Reuse essays. Most prompts are the same question wearing a different hat.',
    ],
  },

  {
    slug: 'fafsa-document-checklist',
    title: 'FAFSA Document Checklist',
    category: 'money',
    audience: 'parent',
    pages: 1,
    when: 'Before you sit down to file — gather first, file second',
    purpose:
      'Everything you need in front of you before opening the form. Families abandon the FAFSA halfway through because a document is upstairs, and then do not come back to it.',
    sections: [
      {
        heading: 'For the student',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Social Security number (or Alien Registration number)',
              'FSA ID — created by the student, in the student’s own email',
              'Driver’s licence, if they have one',
              'Tax return for the relevant year, if they filed',
              'Records of untaxed income',
              'Balances of savings and checking accounts',
              'List of colleges to send it to',
            ],
          },
        ],
      },
      {
        heading: 'For the parent or parents who must report',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Social Security number',
              'FSA ID — separate from the student’s, in the parent’s own email',
              'Tax return and W-2s for the relevant year',
              'Records of child support received',
              'Current balances of cash, savings and checking',
              'Value of investments and any business or farm assets',
            ],
          },
        ],
      },
      {
        heading: 'Which parent reports? — for separated and divorced families',
        fields: [
          {
            kind: 'note',
            text: 'The parent who provided the most financial support during the last 12 months is the one who reports, regardless of who has custody or who claims the student on taxes. If that parent has remarried, the stepparent’s information is required too. Write down who that is before you start, so you are not deciding it mid-form.',
          },
          { kind: 'lines', label: 'The reporting parent in our case is:', count: 2 },
        ],
      },
      {
        heading: 'Dates',
        fields: [
          {
            kind: 'boxes',
            items: ['The day we filed', 'Confirmation number', 'Earliest college deadline', 'State deadline'],
            lines: 1,
          },
        ],
      },
    ],
    tips: [
      'File as early as you can. Some aid is first-come, first-served and simply runs out.',
      'The FAFSA is free. Any site charging you to file it is not the FAFSA.',
      'Filing costs nothing and rules nothing out. File even if you are sure you will not qualify.',
    ],
  },

  {
    slug: 'student-loan-reality-check',
    title: 'Student Loan Reality Check',
    category: 'money',
    audience: 'family',
    pages: 1,
    when: 'Before signing anything',
    purpose:
      'Turns a borrowing figure into a monthly payment and a starting salary, so the decision is made with the real number in view rather than a total that feels abstract.',
    sections: [
      {
        heading: 'What we are actually borrowing',
        fields: [
          {
            kind: 'table',
            columns: ['Loan', 'Whose name', 'Amount per year', 'Interest rate', 'Total over 4 years'],
            widths: [24, 16, 18, 16, 26],
            rows: 5,
          },
        ],
      },
      {
        heading: 'What that means after graduation',
        hint: 'Use the federal Loan Simulator at studentaid.gov to fill these in. It is free and takes ten minutes.',
        fields: [
          {
            kind: 'boxes',
            items: [
              'Total borrowed across four years',
              'Estimated monthly payment on a standard 10-year plan',
              'Typical starting salary in the field my student wants',
              'That monthly payment as a share of that monthly take-home pay',
            ],
            lines: 1,
          },
        ],
      },
      {
        heading: 'The questions worth arguing about now rather than later',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Whose name is on each loan, and who is actually expected to repay it?',
              'What happens to the parent loan if the parent retires or loses work?',
              'Would a cheaper school leave our student in a materially better position?',
              'Have we compared this against two years at community college first?',
            ],
          },
        ],
      },
    ],
    tips: [
      'Federal loans carry protections — income-driven repayment, forbearance, forgiveness. Private loans generally do not.',
      'Parent PLUS loans belong to the parent. They do not transfer to the student, ever.',
      'A degree from a cheaper school and no debt is a real option, not a consolation prize.',
    ],
  },

  {
    slug: 'family-college-budget',
    title: 'Family College Budget',
    category: 'money',
    audience: 'family',
    pages: 1,
    when: 'Junior year, so there is time to change the plan',
    purpose:
      'What your family can contribute each year without borrowing — worked out calmly, in advance, instead of in the week a deposit is due.',
    sections: [
      {
        heading: 'What we can put in each year',
        fields: [
          {
            kind: 'table',
            columns: ['Source', 'Per year', 'Certain or hoped-for?'],
            widths: [50, 22, 28],
            rows: 8,
          },
          {
            kind: 'note',
            text: 'Sources to consider: savings set aside · 529 or education savings account · monthly amount from income · student’s summer earnings · student’s term-time work · grandparents or other family · employer education benefit.',
          },
        ],
      },
      {
        heading: 'What we will not do',
        hint: 'Deciding this now is what protects you in April.',
        fields: [
          {
            kind: 'checklist',
            items: [
              'Borrow against the house',
              'Stop retirement contributions',
              'Take on more than $__________ in parent loans',
              'Let the student borrow more than $__________ in total',
            ],
          },
        ],
      },
      {
        heading: 'Our number',
        hint: 'This is the figure you carry into every conversation with every college.',
        fields: [
          {
            kind: 'boxes',
            items: ['What our family can pay per year, without borrowing', 'The most we are willing to borrow per year'],
            lines: 1,
          },
        ],
      },
    ],
    tips: [
      'You cannot borrow for retirement. Your student can borrow for school — that order matters.',
      'Tell your student the number. A student who knows it makes a better list.',
      'Say it out loud before the acceptances arrive, while it is still a plan and not a disappointment.',
    ],
  },
];
