import { AVOID_LABELS, INTEREST_LABELS, TRAIT_SHORT } from '../data/labels';
import type { InterestId, TraitId } from '../data/types';
import type { UserProfile } from './profile';
import type { CareerScore } from './score-career';

function topMatchedTraits(score: CareerScore, user: UserProfile): string[] {
  return (Object.keys(score.career.traits) as TraitId[])
    .filter((trait) => (user.traits[trait] ?? 0) > 0)
    .sort(
      (a, b) =>
        (score.career.traits[b] ?? 0) * (user.traits[b] ?? 0) -
        (score.career.traits[a] ?? 0) * (user.traits[a] ?? 0),
    )
    .slice(0, 2)
    .map((trait) => TRAIT_SHORT[trait]);
}

function topMatchedInterest(score: CareerScore, user: UserProfile): string | null {
  const best = (Object.keys(score.career.interests) as InterestId[])
    .filter((interest) => (user.interests[interest] ?? 0) >= 4)
    .sort((a, b) => (user.interests[b] ?? 0) - (user.interests[a] ?? 0))[0];
  return best ? INTEREST_LABELS[best] : null;
}

/** 2-3 personalized sentences on why this career fits. */
export function whyItFits(score: CareerScore, user: UserProfile): string {
  const traits = topMatchedTraits(score, user);
  const interest = topMatchedInterest(score, user);
  const sentences: string[] = [score.career.blurb];
  if (traits.length > 0) {
    sentences.push(
      `Your strengths in ${traits.join(' and ')} are exactly what this work rewards.`,
    );
  }
  if (interest) {
    sentences.push(
      `Your strong interest in ${interest} means the day-to-day would genuinely hold your attention.`,
    );
  }
  return sentences.join(' ');
}

const DIMENSION_LABELS: Record<string, string> = {
  talent: 'your talents',
  interest: 'your interests',
  personality: 'your personality',
  education: 'your education plans',
  lifestyle: 'your lifestyle goals',
};

/** The dimension this career matches most strongly, as a phrase. */
export function strongestMatch(score: CareerScore): string {
  const entries = Object.entries(score.dimensions).filter(
    ([key]) => key in DIMENSION_LABELS,
  );
  entries.sort((a, b) => b[1] - a[1]);
  return DIMENSION_LABELS[entries[0][0]];
}

/** Honest "potential challenge" line — mismatch first, fallback second. */
export function potentialChallenge(score: CareerScore, user: UserProfile): string {
  if (score.dealBreakers.length > 0) {
    const labels = score.dealBreakers.map((avoid) => AVOID_LABELS[avoid]);
    return `You said you would prefer to avoid ${labels.join(' and ')} — a real part of this career.`;
  }
  if (score.dimensions.education < 60) {
    const needed = Math.max(
      0,
      score.career.educationYears - user.attainedYears,
    );
    return `This path typically requires about ${needed} more years of education — more than you said you would consider.`;
  }
  if (score.dimensions.interest < 50) {
    return 'Your interest ratings in this area were lukewarm — explore it before committing.';
  }
  return score.career.challenge;
}
