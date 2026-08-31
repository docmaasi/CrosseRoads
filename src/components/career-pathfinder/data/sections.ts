import type { Section, SingleChoiceQuestion } from './types';
import { sectionEducation } from './section-education';
import { sectionTalents } from './section-talents';
import { sectionInterests } from './section-interests';
import { sectionPassions } from './section-passions';
import { sectionPersonality } from './section-personality';
import { sectionWorkstyle } from './section-workstyle';
import { sectionLifestyle } from './section-lifestyle';

export const SECTIONS: Section[] = [
  sectionEducation,
  sectionTalents,
  sectionInterests,
  sectionPassions,
  sectionPersonality,
  sectionWorkstyle,
  sectionLifestyle,
];

export const TOTAL_QUESTIONS: number = SECTIONS.reduce(
  (sum, section) => sum + section.questions.length,
  0,
);

// Asked on the results screen; option ids are OptimizeIds the engine
// uses to rerank the top matches.
export const OPTIMIZE_QUESTION: SingleChoiceQuestion = {
  kind: 'single',
  id: 'optimize',
  title: 'What is most important to you right now?',
  options: [
    { id: 'income', label: 'Highest income' },
    { id: 'leastSchooling', label: 'Least additional schooling' },
    { id: 'balance', label: 'Best work-life balance' },
    { id: 'personality', label: 'Best match for my personality' },
    { id: 'talents', label: 'Best match for my talents' },
    { id: 'meaning', label: 'Most meaningful work' },
    { id: 'outlook', label: 'Strongest future job opportunities' },
    { id: 'entrepreneurship', label: 'Greatest opportunity for entrepreneurship' },
    { id: 'fastest', label: 'Fastest path into the workforce' },
  ],
};
