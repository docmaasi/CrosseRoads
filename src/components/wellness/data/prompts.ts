// Reflection prompts for the wellness journal. One is featured per day,
// rotating by day-of-year so returning visitors see variety.

export const REFLECTION_PROMPTS: string[] = [
  'What gave you energy today — and what drained it?',
  'Name one small thing your body did well today.',
  'What would "taking care of myself" look like tomorrow, realistically?',
  'What are you proud of this week, however small?',
  'When did you feel most like yourself recently?',
  'What is one expectation you could soften this week?',
  'Who or what helped you stay on track lately?',
  'If your best friend described your week, what would she celebrate?',
  'What is one thing you keep postponing that would take ten minutes?',
  'How did you rest this week — and did it actually restore you?',
  'What food made you feel good this week? What made you feel heavy?',
  'What would make next week 5% easier?',
];

export function promptForDate(date: Date): string {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor(
    (date.getTime() - startOfYear.getTime()) / 86400000,
  );
  return REFLECTION_PROMPTS[dayOfYear % REFLECTION_PROMPTS.length];
}
