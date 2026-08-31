import type { Section } from './types';

// Section 5 — How do you naturally operate? (likert 1-5, one per PersonalityId)
export const sectionPersonality: Section = {
  id: 'personality',
  title: 'How Do You Naturally Operate?',
  subtitle: 'Rate how much you agree with each statement.',
  scale: { low: 'Strongly disagree', high: 'Strongly agree' },
  questions: [
    {
      kind: 'likert',
      id: 'q20',
      title: 'I get energy from being around other people.',
      personality: 'extraversion',
    },
    {
      kind: 'likert',
      id: 'q21',
      title:
        'I am comfortable starting conversations with people I do not know.',
      personality: 'socialInitiative',
    },
    {
      kind: 'likert',
      id: 'q22',
      title: 'I enjoy convincing people to consider my ideas.',
      personality: 'persuasion',
    },
    {
      kind: 'likert',
      id: 'q23',
      title: 'I naturally take leadership roles in groups.',
      personality: 'leadership',
    },
    {
      kind: 'likert',
      id: 'q24',
      title: 'I enjoy solving complicated problems.',
      personality: 'problemSolving',
    },
    {
      kind: 'likert',
      id: 'q25',
      title: 'I pay close attention to details.',
      personality: 'detail',
    },
    {
      kind: 'likert',
      id: 'q26',
      title:
        'I enjoy creating new ideas rather than following an established process.',
      personality: 'innovation',
    },
    {
      kind: 'likert',
      id: 'q27',
      title: 'I prefer working independently.',
      personality: 'independence',
    },
    {
      kind: 'likert',
      id: 'q28',
      title: 'I stay calm when situations become stressful.',
      personality: 'stressTolerance',
    },
    {
      kind: 'likert',
      id: 'q29',
      title: 'I am good at recognizing how other people are feeling.',
      personality: 'empathy',
    },
    {
      kind: 'likert',
      id: 'q30',
      title: 'I am comfortable taking calculated risks.',
      personality: 'riskTolerance',
    },
  ],
};
