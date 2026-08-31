import { describe, expect, it } from 'vitest';
import type { AnswerMap } from '../data/types';
import { buildUserProfile } from './profile';
import { scoreCareer, scoreEducation } from './score-career';
import { buildReport, rerankMatches } from './report';
import { healthcareCareers } from '../data/careers/healthcare';
import { CAREERS } from '../data/careers';

const nurse = healthcareCareers.find((c) => c.id === 'registeredNurse');
const physician = healthcareCareers.find((c) => c.id === 'physician');
if (!nurse || !physician) throw new Error('fixture careers missing');

/** A caring, health-oriented high-school senior open to 4 years of school. */
function helperAnswers(overrides: AnswerMap = {}): AnswerMap {
  return {
    q1: 'hsStudent',
    q2: 'hsSenior',
    q3: '4yr',
    q4: ['science'],
    q5: ['caring', 'talking', 'details'],
    q6: ['helping', 'listening', 'dependable'],
    q7: ['cprFirstAid'],
    q8: 5,
    q9: 1,
    q10: 2,
    q11: 2,
    q12: 3,
    q13: 1,
    q14: 4,
    q15: 2,
    q16: 3,
    q17: 1,
    q18: ['health', 'emotional'],
    q19: ['helping', 'talking'],
    q20: 4,
    q21: 4,
    q22: 2,
    q23: 3,
    q24: 3,
    q25: 4,
    q26: 2,
    q27: 2,
    q28: 4,
    q29: 5,
    q30: 2,
    q31: 'people',
    q32: ['healthcare'],
    q33: '2',
    q34: ['helping', 'security', 'impact', 'balance', 'predictable'],
    q35: ['nothing'],
    ...overrides,
  };
}

describe('buildUserProfile', () => {
  it('accumulates trait weights across q4, q5 and q6', () => {
    const profile = buildUserProfile(helperAnswers());
    // q5 'caring' (2) + q6 'helping' (2) = 4
    expect(profile.traits.caring).toBe(4);
    expect(profile.traits.research).toBe(1);
  });

  it('maps education and treats "nothing" as no avoids', () => {
    const profile = buildUserProfile(helperAnswers());
    expect(profile.attainedYears).toBe(0);
    expect(profile.willingYears).toBe(4);
    expect(profile.avoids.size).toBe(0);
  });
});

describe('scoreCareer', () => {
  it('ranks a caring health-focused profile higher on nursing than on physician', () => {
    const profile = buildUserProfile(helperAnswers());
    const nurseScore = scoreCareer(nurse, profile);
    const physicianScore = scoreCareer(physician, profile);
    expect(nurseScore.fit).toBeGreaterThan(physicianScore.fit);
    expect(nurseScore.fit).toBeGreaterThanOrEqual(70);
  });

  it('applies deal-breaker penalties, capped at 30 points', () => {
    const clean = scoreCareer(nurse, buildUserProfile(helperAnswers()));
    const withAvoids = scoreCareer(
      nurse,
      buildUserProfile(helperAnswers({ q35: ['medical', 'nightsWeekends'] })),
    );
    expect(withAvoids.dealBreakerPenalty).toBe(30);
    expect(withAvoids.fit).toBeLessThan(clean.fit);
    expect(withAvoids.dealBreakers).toContain('medical');
  });

  it('penalizes education requirements beyond the stated willingness', () => {
    const reluctant = buildUserProfile(helperAnswers({ q3: 'asap' }));
    expect(scoreEducation(physician, reluctant)).toBeLessThan(50);
    expect(scoreEducation(nurse, buildUserProfile(helperAnswers()))).toBe(100);
  });
});

describe('buildReport', () => {
  const report = buildReport(helperAnswers());

  it('returns ten top matches sorted best-first', () => {
    expect(report.topMatches).toHaveLength(10);
    const fits = report.topMatches.map((m) => m.fit);
    expect([...fits].sort((a, b) => b - a)).toEqual(fits);
  });

  it('scores every career and surfaces a helper-style profile', () => {
    expect(report.all).toHaveLength(CAREERS.length);
    expect(report.topTraits.length).toBeGreaterThan(0);
    expect(report.topTraits.length).toBeLessThanOrEqual(5);
    expect(report.clusters[0].cluster.id).toBe('helper');
    expect(report.topMatches[0].career.family).toBe('healthcare');
  });

  it('fills report text for each match', () => {
    for (const match of report.topMatches) {
      expect(match.whyItFits.length).toBeGreaterThan(20);
      expect(match.challenge.length).toBeGreaterThan(10);
      expect(match.strongestMatch.length).toBeGreaterThan(0);
    }
  });

  it('reranks by priority without changing the set of careers', () => {
    const reranked = rerankMatches(report.topMatches, 'leastSchooling');
    expect(new Set(reranked.map((m) => m.career.id))).toEqual(
      new Set(report.topMatches.map((m) => m.career.id)),
    );
    const first = reranked[0];
    expect(first.career.educationYears).toBeLessThanOrEqual(4);
  });
});
