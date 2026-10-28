import type { PlannerPhase } from './types';

// Junior year — the groundwork for a successful senior year. Kept to the
// big milestones on purpose: the step-by-step detail is part of working
// with Dr. Crosse directly (her request, 2026-10-28).
export const juniorPhase: PlannerPhase = {
  id: 'junior',
  name: 'Junior Year: Build the Foundation',
  subtitle:
    'Focus on academics while developing leadership, service, and extracurricular involvement.',
  groups: [
    {
      id: 'jr-year',
      title: 'Fall–Winter: Get Involved',
      items: [
        { id: 'jr-service', text: 'Take part in meaningful community service.' },
        {
          id: 'jr-clubs',
          text: 'Join clubs, athletics, or the arts, and pursue leadership roles.',
        },
      ],
    },
    {
      id: 'jr-spring',
      title: 'Spring: Test and Explore',
      items: [
        { id: 'jr-tests', text: 'Prepare for and take the SAT and/or ACT.' },
        { id: 'jr-list', text: 'Build a balanced college list.' },
        { id: 'jr-visits', text: 'Visit college campuses.' },
      ],
    },
  ],
};
