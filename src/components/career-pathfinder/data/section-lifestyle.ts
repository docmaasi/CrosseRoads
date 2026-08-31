import type { Section } from './types';

// Section 7 — What kind of life do you want?
// q34 option ids are ValueIds, q35 ids are AvoidIds (deal breakers).
export const sectionLifestyle: Section = {
  id: 'lifestyle',
  title: 'What Kind of Life Do You Want?',
  subtitle: 'The lifestyle a career should support — and what to avoid.',
  questions: [
    {
      kind: 'multi',
      id: 'q34',
      title: 'Choose the FIVE things that matter most to you in a career.',
      exact: 5,
      options: [
        { id: 'income', label: 'High income' },
        { id: 'security', label: 'Job security' },
        { id: 'balance', label: 'Work-life balance' },
        { id: 'flexibility', label: 'Flexible schedule' },
        { id: 'helping', label: 'Helping people' },
        { id: 'prestige', label: 'Prestige' },
        { id: 'creativity', label: 'Creativity' },
        { id: 'independence', label: 'Independence' },
        { id: 'entrepreneurship', label: 'Entrepreneurship' },
        { id: 'remote', label: 'Remote work' },
        { id: 'travel', label: 'Travel' },
        { id: 'advancement', label: 'Fast advancement' },
        { id: 'predictable', label: 'Predictable hours' },
        { id: 'impact', label: 'Making an impact' },
        { id: 'lowStress', label: 'Low stress' },
        { id: 'leadership', label: 'Leadership opportunities' },
      ],
    },
    {
      kind: 'multi',
      id: 'q35',
      title: 'What would you prefer to avoid?',
      options: [
        { id: 'schooling', label: 'Many years of additional schooling' },
        { id: 'math', label: 'Heavy math' },
        { id: 'science', label: 'Heavy science' },
        { id: 'publicSpeaking', label: 'Public speaking' },
        { id: 'selling', label: 'Selling' },
        { id: 'deskWork', label: 'Working at a desk most of the day' },
        { id: 'physicalLabor', label: 'Physical labor' },
        { id: 'medical', label: 'Blood or medical procedures' },
        { id: 'nightsWeekends', label: 'Nights/weekends' },
        { id: 'pressure', label: 'High-pressure environments' },
        { id: 'children', label: 'Working with children' },
        { id: 'public', label: 'Working directly with the public' },
        { id: 'travel', label: 'Frequent travel' },
        { id: 'managing', label: 'Managing employees' },
        { id: 'unpredictableIncome', label: 'Unpredictable income' },
        { id: 'nothing', label: 'Nothing listed' },
      ],
    },
  ],
};
