import { CLUSTERS } from '../data/clusters';
import { TRAIT_LABELS } from '../data/labels';
import type { ClusterDef, PersonalityId, TraitId } from '../data/types';
import type { UserProfile } from './profile';

export interface ClusterScore {
  cluster: ClusterDef;
  score: number;
}

const traitRatio = (value: number): number => Math.min(value, 3) / 3;
const likertRatio = (value: number): number =>
  value === 0 ? 0.5 : (value - 1) / 4;

function similarity(
  weights: Partial<Record<string, number>>,
  scores: Partial<Record<string, number>>,
  toRatio: (value: number) => number,
): { total: number; matched: number } {
  let total = 0;
  let matched = 0;
  for (const [key, weight] of Object.entries(weights)) {
    const w = weight ?? 0;
    total += w;
    matched += w * toRatio(scores[key] ?? 0);
  }
  return { total, matched };
}

export function scoreClusters(user: UserProfile): ClusterScore[] {
  return CLUSTERS.map((cluster) => {
    const parts = [
      similarity(cluster.traits, user.traits, traitRatio),
      similarity(cluster.personality, user.personality, likertRatio),
      similarity(cluster.interests, user.interests, likertRatio),
    ];
    const total = parts.reduce((sum, p) => sum + p.total, 0);
    const matched = parts.reduce((sum, p) => sum + p.matched, 0);
    return {
      cluster,
      score: total === 0 ? 0 : Math.round((matched / total) * 100),
    };
  }).sort((a, b) => b.score - a.score);
}

// Personality statements that read as standalone strengths when rated 4+.
const PERSONALITY_TRAIT_LABELS: Partial<Record<PersonalityId, string>> = {
  riskTolerance: 'Comfortable with calculated risks',
  innovation: 'Idea generator',
  stressTolerance: 'Calm under stress',
  independence: 'Independent self-starter',
  socialInitiative: 'Strong communicator',
};

/** The user's five strongest characteristics, for the profile summary. */
export function topTraits(user: UserProfile, limit = 5): string[] {
  const fromTraits = Object.entries(user.traits)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
    .map(([id]) => TRAIT_LABELS[id as TraitId]);

  const fromPersonality = Object.entries(user.personality)
    .filter(([, value]) => (value ?? 0) >= 4)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
    .map(([id]) => PERSONALITY_TRAIT_LABELS[id as PersonalityId])
    .filter((label): label is string => Boolean(label));

  const unique: string[] = [];
  for (const label of [...fromTraits, ...fromPersonality]) {
    if (!unique.includes(label)) unique.push(label);
    if (unique.length === limit) break;
  }
  return unique;
}
