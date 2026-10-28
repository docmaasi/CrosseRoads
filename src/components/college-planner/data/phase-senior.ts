import type { PlannerPhase } from './types';

// Senior year, month by month — July through November. July and August
// are Dr. Crosse's own wording (email, 2026-10-28); the other months
// follow the same pattern.
export const seniorPhase: PlannerPhase = {
  id: 'senior',
  name: 'Senior Year: Application Season',
  subtitle: 'Month-by-month milestones from July through the December 1 finish line.',
  groups: [
    {
      id: 'sr-july',
      title: 'July: Get Organized',
      items: [
        { id: 'sr-profile-essay', text: 'Complete Common App profile and personal essay.' },
        { id: 'sr-colleges', text: 'Add colleges and review application deadlines.' },
        { id: 'sr-tracker', text: 'Create your college application tracker.' },
      ],
    },
    {
      id: 'sr-august',
      title: 'August: Get Ahead',
      items: [
        { id: 'sr-supplements', text: 'Complete supplemental essays.' },
        {
          id: 'sr-early-submit',
          text: 'Submit rolling admission and Early Action applications when ready.',
        },
      ],
    },
    {
      id: 'sr-september',
      title: 'September: Line Up Support',
      items: [
        { id: 'sr-counselor', text: 'Meet with your school counselor.' },
        { id: 'sr-recs', text: 'Request letters of recommendation.' },
        { id: 'sr-ea-complete', text: 'Complete Early Action applications.' },
      ],
    },
    {
      id: 'sr-october',
      title: 'October: Apply for Aid',
      items: [
        { id: 'sr-fafsa', text: 'Complete the FAFSA as soon as it opens.' },
        { id: 'sr-portals', text: 'Check email and application portals every week.' },
        { id: 'sr-scholarships', text: 'Start applying for scholarships.' },
      ],
    },
    {
      id: 'sr-november',
      title: 'November: Finish Strong',
      items: [
        { id: 'sr-regular', text: 'Submit remaining Regular Decision applications.' },
        { id: 'sr-dec1', text: 'Goal: complete all applications by December 1.' },
      ],
    },
  ],
};
