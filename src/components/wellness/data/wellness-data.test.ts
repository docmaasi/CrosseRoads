import { describe, expect, it } from 'vitest';
import { HABITS } from './habits';
import { LEVEL_GUIDES, FOCUS_GUIDES } from './plan-guides';
import { WELLNESS_RESOURCES } from './resources';
import { REFLECTION_PROMPTS, promptForDate } from './prompts';

describe('wellness data', () => {
  it('has unique habit ids with real content', () => {
    const ids = HABITS.map((h) => h.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const habit of HABITS) {
      expect(habit.name.length).toBeGreaterThan(3);
      expect(habit.description.length).toBeGreaterThan(10);
    }
  });

  it('covers all three activity levels with suggestions', () => {
    expect(LEVEL_GUIDES.map((g) => g.id)).toEqual(['gentle', 'building', 'active']);
    for (const guide of LEVEL_GUIDES) {
      expect(guide.suggestions.length).toBeGreaterThanOrEqual(3);
    }
    expect(FOCUS_GUIDES.length).toBeGreaterThanOrEqual(4);
  });

  it('links only to official .gov https health resources', () => {
    for (const resource of WELLNESS_RESOURCES) {
      const url = new URL(resource.url);
      expect(url.protocol).toBe('https:');
      expect(url.host.endsWith('.gov')).toBe(true);
    }
  });

  it('rotates reflection prompts deterministically', () => {
    expect(REFLECTION_PROMPTS.length).toBeGreaterThanOrEqual(10);
    const prompt = promptForDate(new Date('2026-08-31T12:00:00'));
    expect(REFLECTION_PROMPTS).toContain(prompt);
    expect(promptForDate(new Date('2026-08-31T15:00:00'))).toBe(prompt);
  });
});
