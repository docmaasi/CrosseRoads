import type { Section } from './types';

// Section 1 — Where are you now?
// q1/q2/q3 are read structurally by the engine (education fit); q4's
// subject picks feed small talent-trait weights.
export const sectionEducation: Section = {
  id: 'education',
  title: 'Where Are You Now?',
  subtitle: 'Your current education and how much more you would consider.',
  questions: [
    {
      kind: 'single',
      id: 'q1',
      title: 'What is your current education level?',
      options: [
        { id: 'hsStudent', label: 'High school student' },
        { id: 'hsGrad', label: 'High school graduate/GED' },
        { id: 'trade', label: 'Trade or vocational school' },
        { id: 'collegeStudent', label: 'College student' },
        { id: 'associate', label: 'Associate degree' },
        { id: 'bachelor', label: "Bachelor's degree" },
        { id: 'graduate', label: 'Graduate degree' },
        { id: 'professional', label: 'Professional degree' },
      ],
    },
    {
      kind: 'single',
      id: 'q2',
      title: 'If you are currently in school, what year are you?',
      options: [
        { id: 'hsFreshman', label: 'High school freshman' },
        { id: 'hsSophomore', label: 'High school sophomore' },
        { id: 'hsJunior', label: 'High school junior' },
        { id: 'hsSenior', label: 'High school senior' },
        { id: 'collegeFreshman', label: 'College freshman' },
        { id: 'collegeSophomore', label: 'College sophomore' },
        { id: 'collegeJunior', label: 'College junior' },
        { id: 'collegeSenior', label: 'College senior' },
        { id: 'gradStudent', label: 'Graduate/professional student' },
        { id: 'notInSchool', label: 'Not currently in school' },
      ],
    },
    {
      kind: 'single',
      id: 'q3',
      title: 'How much additional education or training would you consider?',
      options: [
        { id: 'asap', label: 'I want to start working as soon as possible.' },
        { id: 'lt1', label: 'Less than 1 year of additional training.' },
        { id: '1to2', label: '1–2 years.' },
        { id: '4yr', label: 'A 4-year college degree.' },
        { id: 'grad', label: 'Graduate or professional school.' },
        {
          id: 'whatever',
          label:
            'I am willing to pursue whatever education is needed for the right career.',
        },
        { id: 'unsure', label: 'I am not sure.' },
      ],
    },
    {
      kind: 'multi',
      id: 'q4',
      title: 'What subjects have generally been your strongest?',
      max: 4,
      options: [
        { id: 'math', label: 'Math', traits: { numbers: 1 } },
        { id: 'science', label: 'Science', traits: { research: 1 } },
        { id: 'english', label: 'English/writing', traits: { writing: 1 } },
        {
          id: 'history',
          label: 'History/social studies',
          traits: { research: 1, writing: 1 },
        },
        {
          id: 'business',
          label: 'Business/economics',
          traits: { entrepreneurship: 1, numbers: 1 },
        },
        {
          id: 'tech',
          label: 'Technology/computers',
          traits: { technology: 1 },
        },
        {
          id: 'art',
          label: 'Art/design',
          traits: { design: 1, creativity: 1 },
        },
        {
          id: 'music',
          label: 'Music/performing arts',
          traits: { creativity: 1, speaking: 1 },
        },
        {
          id: 'pe',
          label: 'Physical education/sports',
          traits: { competitiveness: 1, handsOn: 1 },
        },
        {
          id: 'shop',
          label: 'Skilled trades/shop',
          traits: { handsOn: 1, building: 1 },
        },
        {
          id: 'languages',
          label: 'Foreign languages',
          traits: { people: 1, writing: 1 },
        },
        { id: 'none', label: 'None stand out' },
      ],
    },
  ],
};
