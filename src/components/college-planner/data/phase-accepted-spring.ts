import type { PhaseGroup } from './types';

// "Accepted — now what?" January through May.
export const acceptedSpringGroups: PhaseGroup[] = [
  {
    id: 'ac-winter',
    title: 'January–March: Compare Offers',
    items: [
      { id: 'ac-offers', text: 'Review acceptance letters and financial-aid offers.' },
      { id: 'ac-cost', text: 'Compare the full cost of each college.' },
      { id: 'ac-events', text: 'Attend admitted-student events.' },
    ],
  },
  {
    id: 'ac-spring',
    title: 'April–May: Make It Official',
    items: [
      { id: 'ac-decide', text: 'Choose your college by the deadline, commonly May 1.' },
      { id: 'ac-deposit', text: 'Submit enrollment and housing deposits.' },
      { id: 'ac-orientation', text: 'Register for orientation and submit health forms.' },
    ],
  },
];
