import type { GuideArticle } from './types';

export const MONEY_ARTICLES: GuideArticle[] = [
  {
    slug: 'net-price-versus-sticker-price',
    title: 'Sticker Price Is Nobody’s Real Number',
    description:
      'The published cost of a college is a starting figure most families never pay. Here is how to find what you would actually be charged — before you rule a school in or out.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-02-24',
    keyTakeaway:
      'Every US college must publish a net price calculator. It takes about fifteen minutes and tells you roughly what your family would pay after grants — a number that is often far below the advertised cost, and occasionally far above what you assumed.',
    keywords: [
      'net price calculator',
      'college sticker price vs net price',
      'how much does college really cost',
      'college cost estimate',
    ],
    sections: [
      {
        paragraphs: [
          'Families cross expensive colleges off the list in January and add cheap ones in April, and both decisions are usually made on the wrong number.',
          'The published cost of attendance is a list price. What a family actually pays is the net price: cost minus grants and scholarships that never have to be repaid. At a well-endowed private college, the gap between those two figures can exceed forty thousand dollars a year. At some state schools, it barely exists.',
        ],
      },
      {
        heading: 'The tool nobody uses',
        paragraphs: [
          'Since 2011, every college in the United States that receives federal funding has been legally required to publish a net price calculator on its own website. You enter household income, family size, assets and a few academic details, and it estimates what your family would pay.',
          'It is free, it is anonymous, it takes about fifteen minutes, and almost nobody does it until April of senior year. Doing it in junior year is the single highest-value hour a family can spend on this process.',
        ],
      },
      {
        heading: 'What the number includes, and what it hides',
        list: [
          'It usually covers tuition, fees, housing and meals — check whether it includes books, travel and personal costs, which add several thousand dollars.',
          'It is an estimate based on the previous year’s aid patterns, not an offer. The real figure arrives with the award letter.',
          'It generally assumes a first-year student. Aid can change in later years, particularly if a sibling starts or finishes college.',
          'It rarely includes the health insurance charge, which many colleges add automatically and which can often be waived if your family already has cover.',
        ],
      },
      {
        heading: 'The multiplication families forget',
        paragraphs: [
          'Whatever number the calculator gives you, multiply it by four — then add a little, because costs rise every year. A first-year figure that feels manageable can look very different across a whole degree.',
          'If a student may need a fifth year, which is more common than families expect, run that too. The four-year graduation rate is published for every college, and it is a more useful number than almost anything on the tour.',
        ],
      },
      {
        heading: 'Use it to widen the list, not only to narrow it',
        paragraphs: [
          'The calculator’s real gift is the school you assumed was impossible. A private college with a large endowment and a strong commitment to need-based aid can end up cheaper than the state flagship for a family with modest income.',
          'You cannot know which without doing the arithmetic. Fifteen minutes per school, in junior year, before anyone falls in love with anywhere.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is a net price calculator?',
        answer:
          'A free tool every US college is required to publish that estimates what your family would actually pay after grants and scholarships, rather than the advertised sticker price.',
      },
      {
        question: 'Is the net price calculator accurate?',
        answer:
          'It is a good estimate for first-year students, based on the previous year’s aid patterns. It is not an offer — the binding figure arrives in the financial aid award letter.',
      },
      {
        question: 'Can an expensive private college cost less than a state school?',
        answer:
          'Yes, and it frequently does for lower-income families. Well-endowed private colleges often meet a high proportion of demonstrated need with grants, which state schools may not.',
      },
    ],
    cta: {
      label: 'Print the True Cost Worksheet',
      text: 'A free sheet for adding up what the college charges and the costs it never mentions — travel home, the laptop, the deposit.',
      href: '/Worksheets/true-cost-worksheet',
    },
    sources: [
      {
        name: 'College Affordability and Transparency Center',
        url: 'https://collegecost.ed.gov/',
      },
      { name: 'College Scorecard', url: 'https://collegescorecard.ed.gov/' },
    ],
  },

  {
    slug: 'how-to-read-a-financial-aid-award-letter',
    title: 'How to Read a Financial Aid Award Letter',
    description:
      'Award letters are written to look generous. Line up four of them in the same format and one number tells you what each college actually costs your family.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-03-17',
    keyTakeaway:
      'Separate the letter into money you never repay (grants and scholarships) and money you do (loans). Total cost minus free money is what you pay. Loans are not aid, however the letter presents them.',
    keywords: [
      'financial aid award letter',
      'compare college financial aid offers',
      'how to read award letter',
      'college aid comparison',
    ],
    sections: [
      {
        paragraphs: [
          'Award letters are not standardised. Two colleges can present the same financial reality in ways that look nothing alike — one listing a large "total aid package" that is mostly loans, another quietly showing a smaller grant that costs your family far less.',
          'The only way to compare them is to rewrite all of them into the same shape.',
        ],
      },
      {
        heading: 'Sort every line into two piles',
        list: [
          'Money you never repay: grants, scholarships, and any tuition waiver. This is real aid.',
          'Money you repay, with interest: federal student loans, Parent PLUS loans, private loans. This is a bill arriving later.',
          'Work-study sits between the two. It is money your student earns by working, usually a few thousand dollars a year, and it only exists if they get and keep the job.',
        ],
      },
      {
        heading: 'Then do one subtraction',
        paragraphs: [
          'Take the total cost of attendance — tuition, fees, housing, meals, books, travel, personal expenses. Subtract only the grants and scholarships. What remains is what your family pays, whether from savings, income, or borrowing.',
          'That figure is the only one that compares colleges. Multiply it by four. Then ask how much of it you would be borrowing, and what the monthly repayment on that would be after graduation.',
        ],
      },
      {
        heading: 'Questions to ask the aid office',
        list: [
          'Is this scholarship renewable for all four years, and what GPA is required to keep it?',
          'Will my award change if a sibling starts or finishes college?',
          'Does the cost figure include the health insurance charge, and can we waive it?',
          'Is this a one-year enrolment incentive, or is the aid stable across the degree?',
        ],
      },
      {
        heading: 'You are allowed to appeal',
        paragraphs: [
          'Families rarely do this, and it works more often than you would expect. If your circumstances have changed since the tax year the aid was based on — a job lost, a parent’s hours cut, a medical event, a divorce, a death — write to the financial aid office and say so plainly.',
          'Keep it short and factual. Explain what changed, when, and what it means for what your family can contribute. Attach documentation. Ask for a professional judgement review. The worst outcome is that the answer is no, and the letter took you an hour.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are student loans part of financial aid?',
        answer:
          'They appear in aid packages, but a loan is not aid in any meaningful sense — it is borrowed money you repay with interest. Only grants and scholarships reduce what college actually costs your family.',
      },
      {
        question: 'How do you compare two financial aid offers?',
        answer:
          'Rewrite both in the same format: total cost of attendance minus grants and scholarships only. The remainder is what you pay. Compare those two remainders, and multiply each by four.',
      },
      {
        question: 'Can you negotiate a financial aid offer?',
        answer:
          'You can appeal it. If your family’s circumstances have changed since the tax year used, write to the aid office with documentation and request a professional judgement review.',
      },
    ],
    cta: {
      label: 'Print the Award Comparison worksheet',
      text: 'Four colleges side by side in one format, with the row that actually decides it highlighted.',
      href: '/Worksheets/financial-aid-award-comparison',
    },
    sources: [
      {
        name: 'Consumer Financial Protection Bureau — Paying for College',
        url: 'https://www.consumerfinance.gov/paying-for-college/',
      },
      { name: 'Federal Loan Simulator', url: 'https://studentaid.gov/loan-simulator/' },
    ],
  },

  {
    slug: 'appealing-a-financial-aid-offer',
    title: 'How to Appeal a Financial Aid Offer (and Why Most Families Never Try)',
    description:
      'Financial aid is calculated from a tax year that may no longer describe your life. A short, factual letter asking for a professional judgement review is free, and it works more often than families expect.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-04-07',
    keyTakeaway:
      'If your circumstances have changed since the tax year your aid was based on, you can request a professional judgement review. Write briefly, state what changed and when, attach documentation, and ask plainly.',
    keywords: [
      'financial aid appeal letter',
      'professional judgement review',
      'appeal college financial aid',
      'special circumstances fafsa',
    ],
    sections: [
      {
        paragraphs: [
          'Federal aid is calculated from a tax year that ended well before your student enrols. If your household earned more that year than it does now, the formula does not know. It simply assumes the old number still describes you.',
          'Financial aid administrators have legal authority to override that — it is called professional judgement — and most families never ask them to.',
        ],
      },
      {
        heading: 'What counts as a change worth reporting',
        list: [
          'A job lost, hours cut, or a business that failed since the tax year used.',
          'A parent’s death, serious illness, or disability.',
          'A separation or divorce that has changed household income.',
          'Unusually high medical or dental costs not covered by insurance.',
          'A one-off event in the tax year — a redundancy payout, a retirement account withdrawal, the sale of a house — that inflated income which no longer exists.',
          'A sibling starting college, changing what the family can contribute.',
        ],
      },
      {
        heading: 'How to write it',
        paragraphs: [
          'Keep it to one page. Open by naming the student and their applicant ID. State what changed, on what date, and what the household’s situation is now. Give the numbers. Say what your family can realistically contribute. Close by asking directly for a professional judgement review of the aid offer.',
          'Do not plead, do not compare to another college’s offer as leverage, and do not send it to the admissions office — it goes to financial aid. Attach documentation: a redundancy letter, medical bills, a death certificate, recent payslips.',
        ],
      },
      {
        heading: 'Timing matters more than eloquence',
        paragraphs: [
          'Institutional aid is finite and it is allocated through the spring. An appeal in March is considered against a fuller pot than the same appeal in late May. If something has changed, write as soon as the award letter arrives.',
          'If nothing has changed but the offer is simply lower than a comparable college’s, that is a different conversation. Some colleges will review a competing offer, many will not, and it is not an appeal — it is a request. Ask politely and expect nothing.',
        ],
      },
      {
        heading: 'What to expect',
        paragraphs: [
          'The answer may be no. Aid offices are bound by federal rules and their own budgets, and professional judgement is discretionary. But the request costs an hour and a stamp, it cannot reduce the existing offer, and I have seen it change a family’s decision entirely.',
          'A parent who has just lost work often assumes the system already knows. It does not. Nobody will act on information you have not sent them.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can you appeal a college financial aid offer?',
        answer:
          'Yes. Financial aid administrators have legal authority to adjust an award through professional judgement when a family’s circumstances differ from the tax year the calculation used.',
      },
      {
        question: 'What should a financial aid appeal letter include?',
        answer:
          'One page: the student’s name and ID, what changed and when, the current financial situation with numbers, what the family can contribute, a direct request for a professional judgement review, and documentation.',
      },
      {
        question: 'Does appealing risk losing the original offer?',
        answer:
          'No. An appeal cannot reduce an existing award. The realistic outcomes are an improved offer or no change.',
      },
    ],
    cta: {
      label: 'Compare your offers first',
      text: 'The free Award Comparison worksheet shows which offer is genuinely strongest before you decide where to appeal.',
      href: '/Worksheets/financial-aid-award-comparison',
    },
    sources: [
      {
        name: 'Consumer Financial Protection Bureau — Paying for College',
        url: 'https://www.consumerfinance.gov/paying-for-college/',
      },
      { name: 'Federal Student Aid', url: 'https://studentaid.gov/' },
    ],
  },

  {
    slug: 'local-scholarships-nobody-applies-for',
    title: 'The Scholarships Almost Nobody Applies For',
    description:
      'National scholarships draw tens of thousands of applicants. The $500 award from a local community foundation sometimes draws four. Here is where to look.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-05-05',
    keyTakeaway:
      'Local scholarships have a fraction of the competition of national ones and add up quickly. Look at your school counselling office, your employer, your parents’ employers and unions, and your county community foundation.',
    keywords: [
      'local scholarships',
      'how to find scholarships',
      'scholarship search strategy',
      'community foundation scholarships',
      'free college money',
    ],
    sections: [
      {
        paragraphs: [
          'Families type "scholarships" into a search engine, land on a database with two million dollars of national awards, and apply for the ones with the biggest numbers. So does everybody else.',
          'The awards that go unclaimed are small, local, and unglamorous. A rotary club offering $1,000. A county community foundation with eleven separate funds and a single combined application. A credit union that awards $500 to two members’ children a year and, in a bad year, receives six applications.',
        ],
      },
      {
        heading: 'Where to actually look',
        list: [
          'Your high school’s counselling office. Almost every school keeps a list of local awards, and it is the single most under-used document in the building.',
          'Your parents’ employers and trade unions. Many run education benefits for employees’ children that are simply never advertised.',
          'Your own employer, if your student works — several national retail and fast-food chains fund scholarships for their staff.',
          'Community foundations in your county. They administer dozens of small funds and usually have one application for all of them.',
          'Civic organisations: rotary, elks, lions, veterans’ associations, and faith communities of every kind.',
          'Professional associations in the field your student wants to enter — nursing, engineering, teaching, the trades.',
          'The colleges themselves. Departmental and merit awards are often separate from the main aid application and require a specific form.',
        ],
      },
      {
        heading: 'The arithmetic is better than it looks',
        paragraphs: [
          'A national scholarship worth $20,000 with 40,000 applicants is worth, in expectation, fifty cents an hour of effort. Six local scholarships worth $750 each with thirty applicants apiece are worth vastly more per hour, and they stack.',
          'Four thousand dollars in small local awards is a year of textbooks and a laptop, and it is achievable by a student who works at it for a few weekends.',
        ],
      },
      {
        heading: 'Two rules that never change',
        paragraphs: [
          'Never pay a fee to apply for a scholarship. A scholarship that charges you is not a scholarship. Neither is a "scholarship search service" that wants a subscription — every legitimate database is free.',
          'And be careful what you hand over. If a site’s real business is collecting family contact details to sell to lenders and colleges, the scholarship is the bait. Government, school, employer and community foundation sources do not work that way.',
        ],
      },
      {
        heading: 'Keep going after enrolment',
        paragraphs: [
          'Most families stop in the spring of senior year. Many awards are open to continuing students, and competition drops sharply once the graduating cohort has moved on. Keep the tracker running through sophomore year.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I find local scholarships?',
        answer:
          'Start with your high school counselling office, then your county community foundation, your parents’ employers and unions, local civic organisations, and the colleges’ own departmental awards.',
      },
      {
        question: 'Are scholarship search websites safe?',
        answer:
          'Legitimate ones are free and never charge to apply. Be cautious with any site whose business model is collecting family contact details — that data is often sold to lenders and marketers.',
      },
      {
        question: 'Are small scholarships worth the effort?',
        answer:
          'Usually more than large ones. Local awards have far fewer applicants, the essays can often be reused, and several small awards together cover real costs like books and a laptop.',
      },
    ],
    cta: {
      label: 'Print the Scholarship Tracker',
      text: 'A free sheet for tracking what you applied for, what it needed, and what came back — plus the list of places to look.',
      href: '/Worksheets/scholarship-tracker',
    },
    sources: [
      { name: 'Federal Student Aid', url: 'https://studentaid.gov/' },
      {
        name: 'Consumer Financial Protection Bureau — Paying for College',
        url: 'https://www.consumerfinance.gov/paying-for-college/',
      },
    ],
  },

  {
    slug: 'how-much-student-debt-is-too-much',
    title: 'How Much Student Debt Is Too Much?',
    description:
      'A borrowing total is an abstraction. A monthly payment against a starting salary is a decision. Here is how to turn one into the other before anyone signs.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-05-27',
    keyTakeaway:
      'A workable rule: total student borrowing should not exceed what the student expects to earn in their first year of work. Use the federal Loan Simulator to turn the total into a monthly payment before deciding.',
    keywords: [
      'how much student loan debt is too much',
      'student loan rule of thumb',
      'college debt calculator',
      'parent plus loan',
      'student loan repayment',
    ],
    sections: [
      {
        paragraphs: [
          'Nobody decides to take on unmanageable debt. It accumulates in increments that each feel reasonable — an extra eight thousand this year, a Parent PLUS loan to close a gap, a private loan for the final term — and the total is never looked at until repayment begins.',
          'The fix is unglamorous. Convert the total into a monthly number, put it beside a realistic starting salary, and look at the two together before signing anything.',
        ],
      },
      {
        heading: 'The rule worth using',
        paragraphs: [
          'Total student borrowing across the whole degree should not exceed what the student can reasonably expect to earn in their first year of work.',
          'At roughly that ratio, a standard ten-year repayment takes a manageable share of take-home pay and the debt does not dictate the first decade of adult life. Above it, the loan starts making decisions: which job, which city, whether to take the lower-paid role that leads somewhere.',
        ],
      },
      {
        heading: 'Find the two numbers',
        list: [
          'The total: add up every year of borrowing across four years, including any expected increases. Do not count only the first year.',
          'The monthly payment: use the federal Loan Simulator at studentaid.gov. It is free, takes ten minutes, and shows the payment under every repayment plan.',
          'The salary: look up the occupation in the Occupational Outlook Handbook, and use the entry-level figure for your region rather than the national median.',
          'Then divide. If the monthly payment is more than about a tenth of expected monthly take-home pay, the plan needs revisiting.',
        ],
      },
      {
        heading: 'Whose name is on it',
        paragraphs: [
          'This is the question families skip. Federal student loans belong to the student. Parent PLUS loans belong to the parent, permanently — they do not transfer to the student later, whatever anyone intends at the time.',
          'A parent nearing retirement taking on substantial PLUS debt is making a decision about their own old age, not only about their child’s education. That deserves to be said out loud in the kitchen before it is signed in a portal.',
        ],
      },
      {
        heading: 'Federal before private, always',
        paragraphs: [
          'Federal loans carry income-driven repayment, forbearance during hardship, discharge on death or disability, and forgiveness pathways for public service. Private loans generally carry none of that. The interest rate is not the main difference; the protections are.',
          'And if the numbers do not work, the answer is not to borrow the gap. It is a different school, a transfer route, or a year working first. A degree with no debt from a less famous college beats the same degree with sixty thousand dollars attached, in almost every life that follows.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much student loan debt is reasonable?',
        answer:
          'A common guideline is that total borrowing across the degree should not exceed the student’s expected first-year salary. At about that level, standard repayment stays a manageable share of income.',
      },
      {
        question: 'Do Parent PLUS loans transfer to the student?',
        answer:
          'No. A Parent PLUS loan is legally the parent’s debt for its full life and cannot be transferred to the student, regardless of any family agreement.',
      },
      {
        question: 'Are federal loans better than private ones?',
        answer:
          'Generally yes. Federal loans include income-driven repayment, hardship forbearance, discharge provisions and forgiveness programmes that private lenders typically do not offer.',
      },
    ],
    cta: {
      label: 'Print the Student Loan Reality Check',
      text: 'A free worksheet that turns a borrowing total into a monthly payment beside a realistic starting salary.',
      href: '/Worksheets/student-loan-reality-check',
    },
    sources: [
      { name: 'Federal Loan Simulator', url: 'https://studentaid.gov/loan-simulator/' },
      { name: 'Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/' },
    ],
  },

  {
    slug: 'fafsa-for-separated-and-divorced-parents',
    title: 'The FAFSA When Parents Are Separated or Divorced',
    description:
      'The parent who reports on the FAFSA is not necessarily the one with custody, or the one who claims the student on taxes. Getting this wrong delays aid for months.',
    category: 'money',
    readMinutes: 4,
    datePublished: '2026-06-10',
    keyTakeaway:
      'The reporting parent is the one who provided the most financial support during the last twelve months — regardless of custody or who claims the student on taxes. If that parent has remarried, the stepparent’s information is required too.',
    keywords: [
      'fafsa divorced parents',
      'which parent files fafsa',
      'fafsa separated parents',
      'single parent financial aid',
      'fsa id parent',
    ],
    sections: [
      {
        paragraphs: [
          'This is the question I am asked most often by the single parents I work with, and the answer surprises almost all of them.',
          'The parent who reports on the FAFSA is the one who provided the greater amount of financial support to the student over the last twelve months. Not the parent with legal custody. Not the parent the student lives with. Not the parent who claims them on a tax return. Financial support, over twelve months.',
        ],
      },
      {
        heading: 'Work it out before you open the form',
        paragraphs: [
          'Add up what each parent actually contributed over the past year: housing, food, clothing, medical costs, school expenses, transport, child support paid. Whichever total is larger identifies the reporting parent.',
          'If the two are genuinely equal, the rule falls back to whichever parent has the greater income. Write the conclusion down before you start, so you are not deciding it halfway through a form at eleven at night.',
        ],
      },
      {
        heading: 'The stepparent rule catches people out',
        paragraphs: [
          'If the reporting parent has remarried, the stepparent’s income and assets must be reported as well — even where the stepparent contributes nothing towards the student, and even where a divorce agreement says otherwise.',
          'Federal methodology does not recognise private agreements between parents about who pays for college. It asks who supported the student, and it asks about the household that parent now lives in. Families find this unfair with some regularity; it remains the rule.',
        ],
      },
      {
        heading: 'Two separate accounts, always',
        list: [
          'The student creates their own FSA ID, in their own email address, with their own mobile number.',
          'The reporting parent creates a separate FSA ID, in a different email address.',
          'Never share one. A shared or misattributed FSA ID is the single most common cause of multi-week delays, and untangling it with the federal help desk is slow.',
          'Keep both sets of details somewhere you can find them in April, not only in October.',
        ],
      },
      {
        heading: 'When the situation is worse than complicated',
        paragraphs: [
          'If the reporting parent is unreachable, or contact would be unsafe, the student may be able to file with a dependency override or a provisional application. This is exactly what financial aid administrators are there to handle, and they handle it more often than you would think.',
          'Contact the aid office at the student’s first-choice college directly and explain the situation. Do not simply leave the form incomplete and hope. And do not guess at the answer to a question the federal help desk will answer for free.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which parent files the FAFSA after a divorce?',
        answer:
          'The parent who provided the most financial support to the student in the last twelve months — not necessarily the custodial parent, and not necessarily whoever claims the student on their taxes.',
      },
      {
        question: 'Does a stepparent’s income count on the FAFSA?',
        answer:
          'Yes. If the reporting parent has remarried, the stepparent’s income and assets must be included, even if they contribute nothing to the student’s education.',
      },
      {
        question: 'Do the student and parent need separate FSA IDs?',
        answer:
          'Yes, each needs their own with a different email address. Sharing an FSA ID is one of the most common causes of long delays in processing aid.',
      },
    ],
    cta: {
      label: 'Print the FAFSA Document Checklist',
      text: 'Everything to gather before you open the form, including a space to record which parent reports and why.',
      href: '/Worksheets/fafsa-document-checklist',
    },
    sources: [
      { name: 'Federal Student Aid', url: 'https://studentaid.gov/' },
      {
        name: 'Consumer Financial Protection Bureau — Paying for College',
        url: 'https://www.consumerfinance.gov/paying-for-college/',
      },
    ],
  },
];
