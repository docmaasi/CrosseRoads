// Shared vocabulary and data model for the Career Pathfinder assessment.
// Every answer option and every career profile is tagged with ids from
// these unions, which is what lets the scoring engine compare a person
// against a career without any free-form string matching.

export type TraitId =
  | 'problemSolving' | 'numbers' | 'writing' | 'speaking' | 'people'
  | 'leadership' | 'teaching' | 'selling' | 'building' | 'technology'
  | 'design' | 'organizing' | 'research' | 'caring' | 'handsOn'
  | 'detail' | 'creativity' | 'decisiveness' | 'competitiveness'
  | 'entrepreneurship' | 'empathy' | 'dependability' | 'calm';

export type InterestId =
  | 'health' | 'tech' | 'finance' | 'building' | 'leading'
  | 'selling' | 'teaching' | 'creating' | 'investigating' | 'entrepreneurship';

export type PersonalityId =
  | 'extraversion' | 'socialInitiative' | 'persuasion' | 'leadership'
  | 'problemSolving' | 'detail' | 'innovation' | 'independence'
  | 'stressTolerance' | 'empathy' | 'riskTolerance';

export type ValueId =
  | 'income' | 'security' | 'balance' | 'flexibility' | 'helping'
  | 'prestige' | 'creativity' | 'independence' | 'entrepreneurship'
  | 'remote' | 'travel' | 'advancement' | 'predictable' | 'impact'
  | 'lowStress' | 'leadership';

export type EnvironmentId =
  | 'office' | 'healthcare' | 'school' | 'techCompany' | 'lab'
  | 'jobSite' | 'outdoors' | 'government' | 'smallBusiness' | 'startup'
  | 'remote' | 'media' | 'sports';

export type WorkWithId =
  | 'people' | 'numbers' | 'technology' | 'ideas' | 'hands'
  | 'machines' | 'data' | 'art';

export type AvoidId =
  | 'schooling' | 'math' | 'science' | 'publicSpeaking' | 'selling'
  | 'deskWork' | 'physicalLabor' | 'medical' | 'nightsWeekends'
  | 'pressure' | 'children' | 'public' | 'travel' | 'managing'
  | 'unpredictableIncome';

export type CertId =
  | 'cprFirstAid' | 'cna' | 'emt' | 'healthcare' | 'it'
  | 'microsoftGoogle' | 'trade' | 'realEstate' | 'financial'
  | 'military' | 'professional';

export type ClusterId =
  | 'leader' | 'connector' | 'thinker' | 'creator'
  | 'builder' | 'helper' | 'entrepreneur' | 'organizer';

export type FamilyId =
  | 'healthcare' | 'business' | 'technology' | 'creative'
  | 'trades' | 'education' | 'finance' | 'sales';

export type OptimizeId =
  | 'income' | 'leastSchooling' | 'balance' | 'personality' | 'talents'
  | 'meaning' | 'outlook' | 'entrepreneurship' | 'fastest';

// ---- Questions -----------------------------------------------------------

export interface OptionEffects {
  traits?: Partial<Record<TraitId, number>>;
  interests?: Partial<Record<InterestId, number>>;
}

export interface ChoiceOption extends OptionEffects {
  id: string;
  label: string;
}

export interface SingleChoiceQuestion {
  kind: 'single';
  id: string;
  title: string;
  options: ChoiceOption[];
}

export interface MultiChoiceQuestion {
  kind: 'multi';
  id: string;
  title: string;
  options: ChoiceOption[];
  /** Maximum number of selections; omitted = unlimited ("select all"). */
  max?: number;
  /** Exact number required, e.g. "choose the FIVE things". */
  exact?: number;
}

export interface LikertQuestion {
  kind: 'likert';
  id: string;
  title: string;
  interest?: InterestId;
  personality?: PersonalityId;
}

export type Question = SingleChoiceQuestion | MultiChoiceQuestion | LikertQuestion;

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  /** Labels for the 1 and 5 ends of the rating scale, for likert sections. */
  scale?: { low: string; high: string };
  questions: Question[];
}

/** questionId -> selected option id, option ids, or likert value (1-5). */
export type AnswerMap = Record<string, string | string[] | number>;

// ---- Careers -------------------------------------------------------------

export interface Career {
  id: string;
  name: string;
  family: FamilyId;
  clusters: ClusterId[];
  /** One-sentence description used in the "why it fits" write-up. */
  blurb: string;
  education: string;
  /** Years of post-high-school education/training typically required. */
  educationYears: number;
  path: string;
  /** Talent weights, 1 (helpful) to 3 (essential). */
  traits: Partial<Record<TraitId, number>>;
  /** Interest weights, 1 to 3. */
  interests: Partial<Record<InterestId, number>>;
  /** Personality weights, 1 to 3. Higher likert answers = better fit. */
  personality: Partial<Record<PersonalityId, number>>;
  values: ValueId[];
  environments: EnvironmentId[];
  workWith: WorkWithId[];
  /** 1 = highly structured ... 4 = create/lead something new. */
  autonomy: 1 | 2 | 3 | 4;
  /** Deal breakers: points deducted if the user wants to avoid this. */
  conflicts: Partial<Record<AvoidId, number>>;
  /** Certifications that give a head start in this career. */
  certs: CertId[];
  income: 1 | 2 | 3 | 4 | 5;
  outlook: 1 | 2 | 3 | 4 | 5;
  balance: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  entrepreneurship: 1 | 2 | 3 | 4 | 5;
  /** Three concrete "do this now" actions. */
  actions: [string, string, string];
  /** Fallback "potential challenge" line when no mismatch is detected. */
  challenge: string;
}

export interface ClusterDef {
  id: ClusterId;
  name: string;
  description: string;
  pathways: string;
  traits: Partial<Record<TraitId, number>>;
  personality: Partial<Record<PersonalityId, number>>;
  interests: Partial<Record<InterestId, number>>;
}

export interface FamilyDef {
  id: FamilyId;
  name: string;
}
