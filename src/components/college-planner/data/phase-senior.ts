import type { PlannerPhase } from './types';

// Senior year, month by month — July through November.
export const seniorPhase: PlannerPhase = {
  id: 'senior',
  name: 'Senior Year: Application Season',
  subtitle: 'Month-by-month milestones from July through the December 1 finish line.',
  groups: [
    {
      id: 'sr-july',
      title: 'July — Get organized',
      intro: 'Build the foundation for application season before school begins.',
      tip:
        'Your Common App personal essay may be revised or replaced between applications — but once an application is submitted, that version becomes final and cannot be edited.',
      items: [
        { id: 'sr-profile', text: 'Complete your Common Application profile.' },
        { id: 'sr-essay', text: 'Draft your Common App personal essay.' },
        {
          id: 'sr-colleges',
          text: 'Add the colleges where you plan to apply to your Common App dashboard.',
        },
        {
          id: 'sr-deadlines',
          text: "Review each college's application deadlines: Early Action, Early Decision, Rolling Admission, and Regular Decision.",
        },
      ],
    },
    {
      id: 'sr-august',
      title: 'August — Finish before school gets busy',
      intro:
        'Completing essays and applications before school starts provides a tremendous advantage.',
      tip:
        'Write every supplemental essay in a Word or Google Docs document before copying it into the application — you can save your work, proofread carefully, and reuse or adapt responses for other colleges and scholarship applications. Many colleges ask similar questions.',
      items: [
        {
          id: 'sr-supplements',
          text: 'Complete supplemental essays and school-specific short-answer questions.',
        },
        {
          id: 'sr-early-submit',
          text: 'Begin submitting rolling-admission and non-binding Early Action applications whenever possible.',
        },
        { id: 'sr-sat-retake', text: 'Retake the SAT if needed.' },
        {
          id: 'sr-honors',
          text: 'Research Honors Colleges and Honors Programs.',
          detail:
            'Many universities require separate applications for honors admission. Acceptance often brings additional academic opportunities, priority registration, smaller class sizes, and merit scholarship consideration.',
        },
      ],
    },
    {
      id: 'sr-september',
      title: 'September — Use counselor availability',
      intro:
        'Counselors and teachers spend September through November completing transcripts and letters for Early Action applicants.',
      tip:
        "Parent tip: Many Early Action deadlines fall between October 15 and November 15. Even if a school is not your student's first choice, submit Early Action applications whenever possible — applying early often brings earlier admission decisions and increased scholarship opportunities, and counselors can complete paperwork while already focused on Early Action. Many counseling offices do not shift to Regular Decision applications until late November or early December.",
      items: [
        {
          id: 'sr-counselor',
          text: 'Meet with your school counselor early in the month to review your application plan.',
        },
        { id: 'sr-teacher-recs', text: 'Request teacher letters of recommendation.' },
        {
          id: 'sr-community-recs',
          text: 'Obtain recommendation letters from community leaders, employers, coaches, clergy, or organizations for scholarship applications.',
        },
        {
          id: 'sr-ea-complete',
          text: 'Complete all Early Action and other non-binding applications.',
        },
        {
          id: 'sr-act',
          text: 'Consider taking or repeating the ACT.',
          detail:
            'Since the transition to the digital SAT, many students have discovered they perform better on the ACT. Taking both exams lets your student submit whichever score best represents their ability.',
        },
      ],
    },
    {
      id: 'sr-october',
      title: 'October — Monitor and apply for financial aid',
      intro: 'October is a month of follow-up rather than waiting!',
      items: [
        {
          id: 'sr-portals',
          text: 'Monitor personal email daily and check every college application portal at least once a week.',
          detail:
            'Colleges frequently request additional documents, missing transcripts, test scores, or other information — respond promptly to avoid delays.',
        },
        {
          id: 'sr-final-visits',
          text: 'Schedule any remaining campus visits for schools still under consideration.',
        },
        {
          id: 'sr-scholarships',
          text: 'Begin researching national, local, employer-sponsored, civic, and community scholarships.',
        },
        {
          id: 'sr-fafsa',
          text: 'Complete the FAFSA as soon as it opens, and submit any additional financial-aid documents each college requires.',
          detail:
            'Some institutions also require the CSS Profile or their own institutional financial-aid forms.',
        },
      ],
    },
    {
      id: 'sr-november',
      title: 'November — Finish strong',
      intro: 'The goal: complete applications before the holiday season.',
      tip:
        'Push hard early. Families who stay ahead of deadlines often begin receiving admission decisions and scholarship offers by December — in this case the early bird truly gets the admission offers, and the money. Finishing early dramatically reduces stress and leaves more time to compare colleges, visit admitted-student events, and make thoughtful enrollment decisions.',
      items: [
        {
          id: 'sr-regular',
          text: 'Submit all remaining Regular Decision applications.',
        },
        {
          id: 'sr-dec1',
          text: 'Recommended goal: complete ALL college applications by December 1.',
        },
      ],
    },
  ],
};
