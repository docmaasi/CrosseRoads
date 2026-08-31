import type {
  AnswerMap,
  AvoidId,
  CertId,
  EnvironmentId,
  InterestId,
  OptionEffects,
  PersonalityId,
  Question,
  TraitId,
  ValueId,
  WorkWithId,
} from '../data/types';
import { SECTIONS } from '../data/sections';

// Everything the scoring engine needs to know about the user, derived
// once from the raw answers.
export interface UserProfile {
  /** Accumulated talent-trait weight (q4 + q5 + q6), roughly 0-5 per trait. */
  traits: Partial<Record<TraitId, number>>;
  /** Likert 1-5 per interest (q8-q17). */
  interests: Partial<Record<InterestId, number>>;
  /** Likert 1-5 per personality dimension (q20-q30). */
  personality: Partial<Record<PersonalityId, number>>;
  /** Interest weights implied by passion picks (q18 + q19). */
  passionInterests: Partial<Record<InterestId, number>>;
  /** Trait weights implied by passion picks (q18 + q19). */
  passionTraits: Partial<Record<TraitId, number>>;
  /** Years of post-HS education already attained (from q1). */
  attainedYears: number;
  /** Additional years the user is willing to train; null = "not sure". */
  willingYears: number | null;
  isWillingUnsure: boolean;
  certs: Set<CertId>;
  values: Set<ValueId>;
  avoids: Set<AvoidId>;
  environments: Set<EnvironmentId>;
  hasNoEnvironmentPreference: boolean;
  workWith: WorkWithId | 'combination' | null;
  /** Preferred autonomy level 1-4 (from q33). */
  autonomy: number | null;
}

const ATTAINED_YEARS: Record<string, number> = {
  hsStudent: 0,
  hsGrad: 0,
  trade: 1,
  collegeStudent: 2,
  associate: 2,
  bachelor: 4,
  graduate: 6,
  professional: 8,
};

const WILLING_YEARS: Record<string, number | null> = {
  asap: 0,
  lt1: 1,
  '1to2': 2,
  '4yr': 4,
  grad: 8,
  whatever: 99,
  unsure: null,
};

const ALL_QUESTIONS: Question[] = SECTIONS.flatMap((s) => s.questions);

function selectedIds(answers: AnswerMap, questionId: string): string[] {
  const value = answers[questionId];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return [value];
  return [];
}

function likertValue(answers: AnswerMap, questionId: string): number | null {
  const value = answers[questionId];
  return typeof value === 'number' ? value : null;
}

function addEffects(
  profile: Pick<UserProfile, 'traits'>,
  passion: { interests: Partial<Record<InterestId, number>>; traits: Partial<Record<TraitId, number>> },
  effects: OptionEffects,
  isPassionQuestion: boolean,
): void {
  for (const [trait, weight] of Object.entries(effects.traits ?? {})) {
    const id = trait as TraitId;
    const target = isPassionQuestion ? passion.traits : profile.traits;
    target[id] = (target[id] ?? 0) + (weight ?? 0);
  }
  for (const [interest, weight] of Object.entries(effects.interests ?? {})) {
    const id = interest as InterestId;
    passion.interests[id] = (passion.interests[id] ?? 0) + (weight ?? 0);
  }
}

function collectOptionEffects(answers: AnswerMap, profile: UserProfile): void {
  const passion = {
    interests: profile.passionInterests,
    traits: profile.passionTraits,
  };
  for (const question of ALL_QUESTIONS) {
    if (question.kind === 'likert') continue;
    const isPassion = question.id === 'q18' || question.id === 'q19';
    const chosen = new Set(selectedIds(answers, question.id));
    for (const option of question.options) {
      if (!chosen.has(option.id)) continue;
      addEffects(profile, passion, option, isPassion);
    }
  }
}

function collectLikerts(answers: AnswerMap, profile: UserProfile): void {
  for (const question of ALL_QUESTIONS) {
    if (question.kind !== 'likert') continue;
    const value = likertValue(answers, question.id);
    if (value === null) continue;
    if (question.interest) profile.interests[question.interest] = value;
    if (question.personality) profile.personality[question.personality] = value;
  }
}

export function buildUserProfile(answers: AnswerMap): UserProfile {
  const educationLevel = selectedIds(answers, 'q1')[0] ?? 'hsGrad';
  const willingness = selectedIds(answers, 'q3')[0] ?? 'unsure';
  const workWithPick = selectedIds(answers, 'q31')[0] ?? null;
  const autonomyPick = selectedIds(answers, 'q33')[0];
  const environmentPicks = selectedIds(answers, 'q32');

  const profile: UserProfile = {
    traits: {},
    interests: {},
    personality: {},
    passionInterests: {},
    passionTraits: {},
    attainedYears: ATTAINED_YEARS[educationLevel] ?? 0,
    willingYears: WILLING_YEARS[willingness] ?? null,
    isWillingUnsure: willingness === 'unsure',
    certs: new Set(selectedIds(answers, 'q7') as CertId[]),
    values: new Set(selectedIds(answers, 'q34') as ValueId[]),
    avoids: new Set(
      selectedIds(answers, 'q35').filter((id) => id !== 'nothing') as AvoidId[],
    ),
    environments: new Set(
      environmentPicks.filter((id) => id !== 'noPreference') as EnvironmentId[],
    ),
    hasNoEnvironmentPreference:
      environmentPicks.length === 0 || environmentPicks.includes('noPreference'),
    workWith: (workWithPick as WorkWithId | 'combination') ?? null,
    autonomy: autonomyPick ? Number(autonomyPick) : null,
  };

  collectOptionEffects(answers, profile);
  collectLikerts(answers, profile);
  return profile;
}
