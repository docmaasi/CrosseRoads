import type { Section } from './types';

// Section 3 — What interests you? (likert 1-5, one per InterestId)
export const sectionInterests: Section = {
  id: 'interests',
  title: 'What Interests You?',
  subtitle: 'Rate how interested you are in each of these.',
  scale: { low: 'Not interested', high: 'Very interested' },
  questions: [
    {
      kind: 'likert',
      id: 'q8',
      title: "Helping people improve their health or quality of life.",
      interest: 'health',
    },
    {
      kind: 'likert',
      id: 'q9',
      title: 'Working with computers, technology, or artificial intelligence.',
      interest: 'tech',
    },
    {
      kind: 'likert',
      id: 'q10',
      title: 'Understanding money, investing, business, or finance.',
      interest: 'finance',
    },
    {
      kind: 'likert',
      id: 'q11',
      title: 'Building, repairing, designing, or creating physical things.',
      interest: 'building',
    },
    {
      kind: 'likert',
      id: 'q12',
      title: 'Leading teams and making important decisions.',
      interest: 'leading',
    },
    {
      kind: 'likert',
      id: 'q13',
      title: 'Selling, negotiating, persuading, or influencing people.',
      interest: 'selling',
    },
    {
      kind: 'likert',
      id: 'q14',
      title: 'Teaching, coaching, or mentoring others.',
      interest: 'teaching',
    },
    {
      kind: 'likert',
      id: 'q15',
      title:
        'Creating art, music, videos, writing, fashion, or other content.',
      interest: 'creating',
    },
    {
      kind: 'likert',
      id: 'q16',
      title: 'Investigating problems and discovering why things happen.',
      interest: 'investigating',
    },
    {
      kind: 'likert',
      id: 'q17',
      title: 'Starting or owning a business.',
      interest: 'entrepreneurship',
    },
  ],
};
