import { CAREERS } from '../data/careers';
import { FAMILIES } from '../data/clusters';
import type { AnswerMap, FamilyId, OptimizeId } from '../data/types';
import { buildUserProfile, type UserProfile } from './profile';
import { scoreCareer, type CareerScore } from './score-career';
import { scoreClusters, topTraits, type ClusterScore } from './cluster-profile';
import { potentialChallenge, strongestMatch, whyItFits } from './report-text';

export interface CareerMatch extends CareerScore {
  whyItFits: string;
  strongestMatch: string;
  challenge: string;
}

export interface FamilyMatch {
  id: FamilyId;
  name: string;
  score: number;
}

export interface CareerReport {
  profile: UserProfile;
  topTraits: string[];
  clusters: ClusterScore[];
  families: FamilyMatch[];
  /** All careers, scored, best first. */
  all: CareerScore[];
  topMatches: CareerMatch[];
  bestMatches: CareerMatch[];
  worthExploring: CareerMatch[];
  /** Strong predicted fits the user likely hasn't considered. */
  hiddenGems: CareerMatch[];
}

function toMatch(score: CareerScore, user: UserProfile): CareerMatch {
  return {
    ...score,
    whyItFits: whyItFits(score, user),
    strongestMatch: strongestMatch(score),
    challenge: potentialChallenge(score, user),
  };
}

function familyMatches(all: CareerScore[]): FamilyMatch[] {
  return FAMILIES.map((family) => {
    const top = all
      .filter((s) => s.career.family === family.id)
      .slice(0, 2)
      .map((s) => s.fit);
    const score =
      top.length === 0
        ? 0
        : Math.round(top.reduce((sum, f) => sum + f, 0) / top.length);
    return { id: family.id, name: family.name, score };
  }).sort((a, b) => b.score - a.score);
}

function hiddenGems(
  all: CareerScore[],
  topMatches: CareerMatch[],
  user: UserProfile,
): CareerMatch[] {
  const shown = new Set(topMatches.map((m) => m.career.id));
  return all
    .filter(
      (s) =>
        !shown.has(s.career.id) &&
        s.fit >= 60 &&
        (s.dimensions.talent + s.dimensions.personality) / 2 >= 65,
    )
    .slice(0, 3)
    .map((s) => toMatch(s, user));
}

export function buildReport(answers: AnswerMap): CareerReport {
  const profile = buildUserProfile(answers);
  const all = CAREERS.map((career) => scoreCareer(career, profile)).sort(
    (a, b) => b.fit - a.fit,
  );
  const topMatches = all.slice(0, 10).map((s) => toMatch(s, profile));

  return {
    profile,
    topTraits: topTraits(profile),
    clusters: scoreClusters(profile),
    families: familyMatches(all).slice(0, 5),
    all,
    topMatches,
    bestMatches: topMatches.filter((m) => m.fit >= 85),
    worthExploring: topMatches.filter((m) => m.fit >= 70 && m.fit < 85),
    hiddenGems: hiddenGems(all, topMatches, profile),
  };
}

// ---- Optimize rerank -----------------------------------------------------

const educationSpeed = (years: number): number => (8 - Math.min(years, 8)) / 8;

function priorityMetric(match: CareerMatch, priority: OptimizeId): number {
  switch (priority) {
    case 'income':
      return match.career.income / 5;
    case 'leastSchooling':
    case 'fastest':
      return educationSpeed(match.career.educationYears);
    case 'balance':
      return match.career.balance / 5;
    case 'personality':
      return match.dimensions.personality / 100;
    case 'talents':
      return match.dimensions.talent / 100;
    case 'meaning':
      return match.career.impact / 5;
    case 'outlook':
      return match.career.outlook / 5;
    case 'entrepreneurship':
      return match.career.entrepreneurship / 5;
  }
}

/** Rerank the top matches around what the user wants to optimize for. */
export function rerankMatches(
  matches: CareerMatch[],
  priority: OptimizeId | null,
): CareerMatch[] {
  if (!priority) return matches;
  return [...matches].sort(
    (a, b) =>
      b.fit * 0.65 +
      priorityMetric(b, priority) * 35 -
      (a.fit * 0.65 + priorityMetric(a, priority) * 35),
  );
}
