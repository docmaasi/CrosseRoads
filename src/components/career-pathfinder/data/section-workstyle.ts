import type { Section } from './types';

// Section 6 — How do you want to work?
// q31 option ids are WorkWithIds, q32 ids are EnvironmentIds, and q33
// maps to a career's autonomy level (1-4) — all read structurally.
export const sectionWorkstyle: Section = {
  id: 'workstyle',
  title: 'How Do You Want to Work?',
  subtitle: 'The day-to-day working style that suits you.',
  questions: [
    {
      kind: 'single',
      id: 'q31',
      title: 'If you could choose, what would you rather work with most?',
      options: [
        { id: 'people', label: 'People' },
        { id: 'numbers', label: 'Numbers' },
        { id: 'technology', label: 'Technology' },
        { id: 'ideas', label: 'Ideas' },
        { id: 'hands', label: 'My hands' },
        { id: 'machines', label: 'Machines/equipment' },
        { id: 'data', label: 'Information/data' },
        { id: 'art', label: 'Art/design' },
        { id: 'combination', label: 'A combination' },
      ],
    },
    {
      kind: 'multi',
      id: 'q32',
      title: 'What type of environment sounds most appealing?',
      max: 3,
      options: [
        { id: 'office', label: 'Corporate office' },
        { id: 'healthcare', label: 'Hospital/healthcare' },
        { id: 'school', label: 'School/university' },
        { id: 'techCompany', label: 'Technology company' },
        { id: 'lab', label: 'Laboratory' },
        { id: 'jobSite', label: 'Construction/job site' },
        { id: 'outdoors', label: 'Outdoors' },
        { id: 'government', label: 'Government' },
        { id: 'smallBusiness', label: 'Small business' },
        { id: 'startup', label: 'Startup' },
        { id: 'remote', label: 'Remote/home' },
        { id: 'media', label: 'Entertainment/media' },
        { id: 'sports', label: 'Sports' },
        { id: 'noPreference', label: 'No preference' },
      ],
    },
    {
      kind: 'single',
      id: 'q33',
      title: 'Which description sounds most like you?',
      options: [
        { id: '1', label: 'I want clear instructions and structure.' },
        { id: '2', label: 'I like some structure but also independence.' },
        { id: '3', label: 'I prefer freedom to figure things out myself.' },
        { id: '4', label: 'I want to create or lead something new.' },
      ],
    },
  ],
};
