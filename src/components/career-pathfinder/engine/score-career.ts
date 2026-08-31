import type { AvoidId, Career } from '../data/types';
import type { UserProfile } from './profile';

// The seven weighted dimensions from the Career Fit algorithm:
// talent 20%, interest 20%, personality 15%, education 15%,
// lifestyle 15%, passion 10%, credentials 5%.
export interface DimensionScores {
  talent: number;
  interest: number;
  personality: number;
  education: number;
  lifestyle: number;
  passion: number;
  credentials: number;
}

export interface CareerScore {
  career: Career;
  dimensions: DimensionScores;
  /** Points deducted by deal breakers (0-30). */
  dealBreakerPenalty: number;
  /** The avoid-item ids that triggered the penalty. */
  dealBreakers: AvoidId[];
  /** Final 0-100 fit score. */
  fit: number;
}

const clamp = (value: number): number => Math.max(0, Math.min(100, value));

function weightedSimilarity(
  careerWeights: Partial<Record<string, number>>,
  userScores: Partial<Record<string, number>>,
  toRatio: (value: number) => number,
): number {
  let total = 0;
  let matched = 0;
  for (const [key, weight] of Object.entries(careerWeights)) {
    const w = weight ?? 0;
    total += w;
    matched += w * toRatio(userScores[key] ?? 0);
  }
  return total === 0 ? 50 : (matched / total) * 100;
}

const traitRatio = (value: number): number => Math.min(value, 3) / 3;
const likertRatio = (value: number): number =>
  value === 0 ? 0.5 : (value - 1) / 4;

export function scoreEducation(career: Career, user: UserProfile): number {
  const neededYears = Math.max(0, career.educationYears - user.attainedYears);
  if (neededYears === 0) return 100;
  if (user.isWillingUnsure || user.willingYears === null) return 65;
  if (user.willingYears >= neededYears) return 100;
  return clamp(100 - (neededYears - user.willingYears) * 15);
}

function scoreLifestyle(career: Career, user: UserProfile): number {
  const valueOverlap = career.values.filter((v) => user.values.has(v)).length;
  const valuesScore = Math.min(1, valueOverlap / Math.min(3, career.values.length));

  const environmentScore = user.hasNoEnvironmentPreference
    ? 1
    : career.environments.some((e) => user.environments.has(e))
      ? 1
      : 0.3;

  const workWithScore =
    user.workWith === null || user.workWith === 'combination'
      ? 1
      : career.workWith.includes(user.workWith)
        ? 1
        : 0.3;

  const autonomyScore =
    user.autonomy === null ? 1 : 1 - Math.abs(career.autonomy - user.autonomy) / 3;

  return (
    (valuesScore * 0.6 + environmentScore * 0.2 + workWithScore * 0.1 + autonomyScore * 0.1) *
    100
  );
}

function scorePassion(career: Career, user: UserProfile): number {
  const hasSignal =
    Object.keys(user.passionInterests).length > 0 ||
    Object.keys(user.passionTraits).length > 0;
  if (!hasSignal) return 50;
  const interestPart = weightedSimilarity(
    career.interests,
    user.passionInterests,
    (v) => Math.min(v, 2) / 2,
  );
  const traitPart = weightedSimilarity(
    career.traits,
    user.passionTraits,
    (v) => Math.min(v, 2) / 2,
  );
  return interestPart * 0.7 + traitPart * 0.3;
}

function scoreCredentials(career: Career, user: UserProfile): number {
  const relevant = career.certs.filter((c) => user.certs.has(c));
  return relevant.length > 0 ? 100 : 50;
}

function findDealBreakers(career: Career, user: UserProfile): AvoidId[] {
  return (Object.keys(career.conflicts) as AvoidId[]).filter((avoid) =>
    user.avoids.has(avoid),
  );
}

export function scoreCareer(career: Career, user: UserProfile): CareerScore {
  const dimensions: DimensionScores = {
    talent: weightedSimilarity(career.traits, user.traits, traitRatio),
    interest: weightedSimilarity(career.interests, user.interests, likertRatio),
    personality: weightedSimilarity(
      career.personality,
      user.personality,
      likertRatio,
    ),
    education: scoreEducation(career, user),
    lifestyle: scoreLifestyle(career, user),
    passion: scorePassion(career, user),
    credentials: scoreCredentials(career, user),
  };

  const dealBreakers = findDealBreakers(career, user);
  const dealBreakerPenalty = Math.min(
    30,
    dealBreakers.reduce((sum, avoid) => sum + (career.conflicts[avoid] ?? 0), 0),
  );

  const weighted =
    dimensions.talent * 0.2 +
    dimensions.interest * 0.2 +
    dimensions.personality * 0.15 +
    dimensions.education * 0.15 +
    dimensions.lifestyle * 0.15 +
    dimensions.passion * 0.1 +
    dimensions.credentials * 0.05;

  return {
    career,
    dimensions,
    dealBreakerPenalty,
    dealBreakers,
    fit: Math.round(clamp(weighted - dealBreakerPenalty)),
  };
}
