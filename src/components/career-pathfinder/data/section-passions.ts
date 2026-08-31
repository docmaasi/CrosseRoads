import type { Section } from './types';

// Section 4 — What matters to you? Feeds the passion/values dimension:
// each pick adds interest and trait weights the engine compares against
// a career's profile.
export const sectionPassions: Section = {
  id: 'passions',
  title: 'What Matters to You?',
  subtitle: 'The problems and activities that pull you in.',
  questions: [
    {
      kind: 'multi',
      id: 'q18',
      title: 'Which problems would you most enjoy helping solve?',
      max: 3,
      options: [
        { id: 'health', label: "Improving people's health", interests: { health: 2 } },
        { id: 'wealth', label: 'Helping people build wealth', interests: { finance: 2 } },
        { id: 'educating', label: 'Educating young people', interests: { teaching: 2 } },
        { id: 'newTech', label: 'Creating new technology', interests: { tech: 2 } },
        {
          id: 'businesses',
          label: 'Building businesses',
          interests: { entrepreneurship: 2, leading: 1 },
        },
        {
          id: 'communities',
          label: 'Improving communities',
          interests: { leading: 1, teaching: 1 },
        },
        {
          id: 'protecting',
          label: 'Protecting people',
          interests: { health: 1, investigating: 1 },
        },
        {
          id: 'justice',
          label: 'Improving the justice system',
          interests: { investigating: 2 },
        },
        {
          id: 'entertainment',
          label: 'Creating entertainment',
          interests: { creating: 2 },
        },
        {
          id: 'environment',
          label: 'Improving the environment',
          interests: { investigating: 1, building: 1 },
        },
        {
          id: 'science',
          label: 'Solving scientific problems',
          interests: { investigating: 2 },
        },
        {
          id: 'products',
          label: 'Designing better products',
          interests: { creating: 1, building: 1, tech: 1 },
        },
        {
          id: 'organizations',
          label: 'Helping organizations perform better',
          interests: { leading: 2, finance: 1 },
        },
        {
          id: 'emotional',
          label: 'Helping people emotionally',
          interests: { health: 1, teaching: 1 },
          traits: { empathy: 1 },
        },
        {
          id: 'fitness',
          label: 'Improving sports or fitness',
          interests: { health: 1 },
          traits: { competitiveness: 1 },
        },
        { id: 'unknown', label: 'I do not know yet' },
      ],
    },
    {
      kind: 'multi',
      id: 'q19',
      title: 'Which activities could you do for hours without getting bored?',
      max: 3,
      options: [
        { id: 'talking', label: 'Talking with people', traits: { people: 1 } },
        {
          id: 'reading',
          label: 'Reading/researching',
          traits: { research: 1 },
          interests: { investigating: 1 },
        },
        { id: 'gaming', label: 'Gaming/technology', interests: { tech: 2 } },
        {
          id: 'sports',
          label: 'Sports/fitness',
          traits: { competitiveness: 1 },
          interests: { health: 1 },
        },
        { id: 'building', label: 'Building/fixing', interests: { building: 2 } },
        { id: 'content', label: 'Creating content', interests: { creating: 2 } },
        {
          id: 'drawing',
          label: 'Drawing/design',
          traits: { design: 1 },
          interests: { creating: 1 },
        },
        {
          id: 'writing',
          label: 'Writing',
          traits: { writing: 1 },
          interests: { creating: 1 },
        },
        { id: 'teaching', label: 'Teaching', interests: { teaching: 2 } },
        {
          id: 'planning',
          label: 'Planning events/projects',
          traits: { organizing: 2 },
        },
        {
          id: 'puzzles',
          label: 'Solving puzzles/problems',
          traits: { problemSolving: 2 },
        },
        {
          id: 'numbers',
          label: 'Working with numbers',
          traits: { numbers: 2 },
          interests: { finance: 1 },
        },
        {
          id: 'helping',
          label: 'Helping others',
          traits: { caring: 2 },
          interests: { health: 1 },
        },
        {
          id: 'selling',
          label: 'Selling/trading/business',
          interests: { selling: 2, entrepreneurship: 1 },
        },
        {
          id: 'performing',
          label: 'Performing',
          traits: { speaking: 1 },
          interests: { creating: 2 },
        },
        { id: 'other', label: 'Other' },
      ],
    },
  ],
};
