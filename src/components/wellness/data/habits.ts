// Habit catalog for the Wellness Transformation tracker. Deliberately
// gentle, generic wellness practices — no prescriptions, no numbers
// beyond widely published public-health guidance.

export interface WellnessHabit {
  id: string;
  name: string;
  description: string;
  category: 'move' | 'nourish' | 'restore' | 'reflect';
}

export const HABITS: WellnessHabit[] = [
  {
    id: 'walk',
    name: 'Take a walk',
    description: 'Any pace, any place — consistency matters more than intensity.',
    category: 'move',
  },
  {
    id: 'strength',
    name: 'Strength basics',
    description: 'Bodyweight or light weights — squats, wall push-ups, carries.',
    category: 'move',
  },
  {
    id: 'stretch',
    name: 'Stretch or mobility',
    description: 'A few minutes to loosen hips, shoulders, and back.',
    category: 'move',
  },
  {
    id: 'water',
    name: 'Drink water through the day',
    description: 'Keep a bottle nearby and sip steadily.',
    category: 'nourish',
  },
  {
    id: 'vegetables',
    name: 'Vegetables on the plate',
    description: 'Add a vegetable or fruit to your meals today.',
    category: 'nourish',
  },
  {
    id: 'mindfulMeal',
    name: 'One unhurried meal',
    description: 'Sit down, slow down, and actually taste it.',
    category: 'nourish',
  },
  {
    id: 'sleepRoutine',
    name: 'Wind-down routine',
    description: 'A consistent, screen-light hour before bed.',
    category: 'restore',
  },
  {
    id: 'outdoors',
    name: 'Time outdoors',
    description: 'Daylight and fresh air, even briefly.',
    category: 'restore',
  },
  {
    id: 'pause',
    name: 'A mindful pause',
    description: 'A few slow breaths or quiet minutes, just for you.',
    category: 'restore',
  },
  {
    id: 'journal',
    name: 'Write a reflection',
    description: "A sentence or two in your journal — how you're really doing.",
    category: 'reflect',
  },
];

export const HABIT_CATEGORIES: Record<WellnessHabit['category'], string> = {
  move: 'Move',
  nourish: 'Nourish',
  restore: 'Restore',
  reflect: 'Reflect',
};
