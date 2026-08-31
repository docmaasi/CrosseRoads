// Starting-point guidance per activity level and focus. Educational
// framing only: the one factual anchor is the published U.S. Physical
// Activity Guidelines for adults (150+ minutes/week of moderate
// activity plus 2 days of muscle-strengthening), cited via CDC.
// Nothing here is a prescription or medical advice.

export interface LevelGuide {
  id: 'gentle' | 'building' | 'active';
  label: string;
  headline: string;
  suggestions: string[];
}

export interface FocusGuide {
  id: 'energy' | 'strength' | 'stress' | 'weight' | 'sleep';
  label: string;
  note: string;
}

export const LEVEL_GUIDES: LevelGuide[] = [
  {
    id: 'gentle',
    label: 'Starting fresh',
    headline: 'Begin gently and let consistency lead.',
    suggestions: [
      'Start with short walks most days — even 10 minutes counts, and it all adds up.',
      'Add one "strength basics" session this week: sit-to-stands, wall push-ups, light carries.',
      'Anchor one habit to something you already do daily (after coffee, after dinner).',
      'Work gradually toward the adult guideline of 150+ minutes of moderate activity a week plus 2 muscle-strengthening days — over months, not weeks.',
    ],
  },
  {
    id: 'building',
    label: 'Building momentum',
    headline: 'Turn your good weeks into your normal weeks.',
    suggestions: [
      'Protect your walking or activity time on the calendar like an appointment.',
      'Make strength work twice a week routine — the guideline for adults — and progress slowly.',
      'Add variety you enjoy: a class, a friend, a new route. Enjoyment is what lasts.',
      'Track energy and mood in your check-ins — progress shows up there before the scale.',
    ],
  },
  {
    id: 'active',
    label: 'Already active',
    headline: 'Protect what works and round out the edges.',
    suggestions: [
      'Keep your base — you likely meet the 150-minute guideline — and audit the gaps: strength twice a week? mobility? rest?',
      'Prioritize recovery: sleep routine, rest days, and stretching are training too.',
      'Use the journal to notice patterns — what weeks feel strong, and what made them so.',
      'Set a new kind of goal: a hike, an event, a skill — something to train toward.',
    ],
  },
];

export const FOCUS_GUIDES: FocusGuide[] = [
  {
    id: 'energy',
    label: 'More energy',
    note: 'Energy usually follows rhythm: regular movement, regular meals, a regular sleep window. Track your 1–5 energy score daily and watch the trend, not any single day.',
  },
  {
    id: 'strength',
    label: 'Strength & bone health',
    note: 'Muscle-strengthening work at least twice a week is part of the adult activity guideline. Start light, progress slowly, and celebrate what your body can do.',
  },
  {
    id: 'stress',
    label: 'Less stress',
    note: 'Walks, time outdoors, and a mindful pause are simple, evidence-aligned pressure valves. The wind-down routine habit protects your evenings.',
  },
  {
    id: 'weight',
    label: 'Weight management',
    note: 'Sustainable change pairs regular activity with an eating pattern you can keep — MyPlate is a free, judgment-free starting point. This is also a great conversation to have with your clinician.',
  },
  {
    id: 'sleep',
    label: 'Better sleep',
    note: 'A consistent wind-down routine and daytime activity are the two levers most people can pull tonight. Log sleep quality in your daily check-in and watch what moves it.',
  },
];
