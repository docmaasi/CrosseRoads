import type { PhaseGroup } from './types';

// "Accepted — now what?" January through May.
export const acceptedSpringGroups: PhaseGroup[] = [
  {
    id: 'ac-winter',
    title: 'January–March — Review, compare and plan',
    items: [
      {
        id: 'ac-letters',
        text: 'Review each acceptance letter and confirm all conditions of admission.',
      },
      {
        id: 'ac-offers',
        text: 'Review merit scholarship and financial-aid offers carefully.',
      },
      {
        id: 'ac-cost',
        text: 'Compare the total cost of attendance for each college.',
        detail:
          'Include tuition, fees, housing, meal plans, books, transportation, and personal expenses.',
      },
      {
        id: 'ac-appeal',
        text: 'Contact the financial-aid office with questions — or to appeal.',
        detail:
          "An appeal is appropriate when your family's financial circumstances have changed or your student received a stronger offer from another institution.",
      },
      {
        id: 'ac-renewal',
        text: 'Verify scholarship renewal requirements.',
        detail: 'Minimum GPA, credit-hour, and enrollment requirements.',
      },
      { id: 'ac-outside', text: 'Continue applying for outside scholarships.' },
      {
        id: 'ac-events',
        text: 'Register for admitted-student events and schedule final campus visits.',
      },
      {
        id: 'ac-deadlines',
        text: 'Review deadlines for enrollment, housing, and scholarship acceptance.',
      },
      {
        id: 'ac-housing-app',
        text: 'Complete housing applications and roommate questionnaires when available.',
      },
      {
        id: 'ac-placement',
        text: 'Research placement-testing requirements and whether AP, IB, or dual-enrollment credits will be accepted.',
      },
      {
        id: 'ac-accommodations',
        text: 'Review disability and academic-accommodation procedures, if applicable.',
      },
    ],
  },
  {
    id: 'ac-spring',
    title: 'April–May — Make it official',
    items: [
      {
        id: 'ac-compare',
        text: 'Compare final college options as a family.',
        detail:
          'Consider academic fit, campus environment, support services, career opportunities, and affordability.',
      },
      {
        id: 'ac-decide',
        text: "Make the final college decision by the institution's enrollment deadline — commonly May 1.",
      },
      { id: 'ac-deposit', text: 'Submit the enrollment deposit.' },
      {
        id: 'ac-accept-aid',
        text: 'Accept the financial-aid package and complete any required loan documents.',
      },
      {
        id: 'ac-decline',
        text: 'Decline admission offers from colleges your student will not attend.',
      },
      {
        id: 'ac-housing-deposit',
        text: 'Submit the housing deposit and select a meal plan.',
      },
      { id: 'ac-orientation', text: 'Register for new-student orientation.' },
      { id: 'ac-testing', text: 'Complete required placement testing.' },
      {
        id: 'ac-health-forms',
        text: 'Submit health forms, immunization records, and health-insurance information.',
      },
      {
        id: 'ac-insurance',
        text: "Review the college's student health-insurance plan — and the waiver deadline if your student stays on the family plan.",
      },
      {
        id: 'ac-transcript',
        text: 'Request that the high school send the final transcript after graduation.',
      },
      {
        id: 'ac-dual-transcripts',
        text: 'Request official transcripts for dual-enrollment courses.',
      },
    ],
  },
];
