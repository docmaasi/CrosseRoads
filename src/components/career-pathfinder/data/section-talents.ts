import type { Section } from './types';

// Section 2 — What are you good at?
// q5 (self-assessed) and q6 (what others say) both feed talent traits;
// q7 option ids are CertIds the engine matches against career.certs.
export const sectionTalents: Section = {
  id: 'talents',
  title: 'What Are You Good At?',
  subtitle: 'Your natural abilities — as you see them and as others do.',
  questions: [
    {
      kind: 'multi',
      id: 'q5',
      title: 'Which abilities best describe you?',
      max: 5,
      options: [
        { id: 'problems', label: 'Solving problems', traits: { problemSolving: 2 } },
        { id: 'numbers', label: 'Working with numbers', traits: { numbers: 2 } },
        { id: 'writing', label: 'Writing', traits: { writing: 2 } },
        { id: 'speaking', label: 'Public speaking', traits: { speaking: 2 } },
        { id: 'talking', label: 'Talking with people', traits: { people: 2 } },
        { id: 'leading', label: 'Leading others', traits: { leadership: 2 } },
        { id: 'teaching', label: 'Teaching or explaining', traits: { teaching: 2 } },
        { id: 'selling', label: 'Selling or persuading', traits: { selling: 2 } },
        {
          id: 'building',
          label: 'Building or fixing things',
          traits: { building: 2, handsOn: 1 },
        },
        { id: 'tech', label: 'Using technology', traits: { technology: 2 } },
        {
          id: 'designing',
          label: 'Designing or creating',
          traits: { design: 2, creativity: 1 },
        },
        {
          id: 'organizing',
          label: 'Organizing people or projects',
          traits: { organizing: 2 },
        },
        { id: 'research', label: 'Researching information', traits: { research: 2 } },
        { id: 'caring', label: 'Caring for others', traits: { caring: 2 } },
        { id: 'hands', label: 'Working with my hands', traits: { handsOn: 2 } },
        { id: 'details', label: 'Paying attention to details', traits: { detail: 2 } },
        { id: 'creative', label: 'Thinking creatively', traits: { creativity: 2 } },
        {
          id: 'decisions',
          label: 'Making quick decisions',
          traits: { decisiveness: 2 },
        },
        { id: 'competing', label: 'Competing', traits: { competitiveness: 2 } },
        {
          id: 'starting',
          label: 'Starting new ideas or businesses',
          traits: { entrepreneurship: 2 },
        },
      ],
    },
    {
      kind: 'multi',
      id: 'q6',
      title: 'What do other people most often tell you that you are good at?',
      max: 3,
      options: [
        {
          id: 'communicating',
          label: 'Communicating',
          traits: { people: 1, speaking: 1 },
        },
        { id: 'listening', label: 'Listening', traits: { empathy: 2 } },
        { id: 'leading', label: 'Leading', traits: { leadership: 2 } },
        { id: 'helping', label: 'Helping others', traits: { caring: 2 } },
        { id: 'problems', label: 'Solving problems', traits: { problemSolving: 2 } },
        {
          id: 'humor',
          label: 'Making people laugh or feel comfortable',
          traits: { people: 2 },
        },
        { id: 'hardWork', label: 'Working hard', traits: { dependability: 2 } },
        { id: 'organized', label: 'Being organized', traits: { organizing: 2 } },
        { id: 'creative', label: 'Being creative', traits: { creativity: 2 } },
        {
          id: 'tech',
          label: 'Understanding technology',
          traits: { technology: 2 },
        },
        { id: 'numbers', label: 'Working with numbers', traits: { numbers: 2 } },
        {
          id: 'fixing',
          label: 'Fixing things',
          traits: { building: 1, handsOn: 1 },
        },
        { id: 'teaching', label: 'Teaching', traits: { teaching: 2 } },
        {
          id: 'selling',
          label: 'Selling or convincing',
          traits: { selling: 2 },
        },
        { id: 'calm', label: 'Staying calm', traits: { calm: 2 } },
        {
          id: 'dependable',
          label: 'Being dependable',
          traits: { dependability: 2 },
        },
        { id: 'other', label: 'Other' },
      ],
    },
    {
      kind: 'multi',
      id: 'q7',
      title:
        'Do you currently have any licenses, certifications, or specialized training?',
      options: [
        { id: 'cprFirstAid', label: 'CPR/First Aid' },
        { id: 'cna', label: 'CNA' },
        { id: 'emt', label: 'EMT' },
        { id: 'healthcare', label: 'Healthcare certification' },
        { id: 'it', label: 'IT/computer certification' },
        { id: 'microsoftGoogle', label: 'Microsoft/Google certification' },
        { id: 'trade', label: 'Skilled trade certification' },
        { id: 'realEstate', label: 'Real estate license' },
        { id: 'financial', label: 'Financial certification' },
        { id: 'military', label: 'Military training' },
        { id: 'professional', label: 'Professional license' },
        { id: 'driversLicense', label: "Driver's license" },
        { id: 'other', label: 'Other' },
        { id: 'none', label: 'None' },
      ],
    },
  ],
};
