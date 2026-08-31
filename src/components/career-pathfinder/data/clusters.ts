import type { ClusterDef, FamilyDef } from './types';

// The eight career personality clusters. Trait/personality/interest
// weights define what "belonging" to a cluster looks like; the engine
// scores the user against each profile.
export const CLUSTERS: ClusterDef[] = [
  {
    id: 'leader',
    name: 'The Leader',
    description:
      'Strong communication, decision-making, leadership, influence and responsibility.',
    pathways:
      'Business management, entrepreneurship, law, healthcare administration, consulting, operations and executive leadership.',
    traits: { leadership: 3, speaking: 2, decisiveness: 2, organizing: 1 },
    personality: { leadership: 3, persuasion: 2, stressTolerance: 1, extraversion: 1 },
    interests: { leading: 3, entrepreneurship: 1 },
  },
  {
    id: 'connector',
    name: 'The Connector',
    description:
      'Strong interpersonal skills, empathy, communication and relationship building.',
    pathways:
      'Sales, marketing, human resources, recruiting, public relations, counseling, healthcare and education.',
    traits: { people: 3, empathy: 2, speaking: 1, caring: 1 },
    personality: { extraversion: 2, socialInitiative: 2, empathy: 2 },
    interests: { selling: 1, teaching: 1, health: 1 },
  },
  {
    id: 'thinker',
    name: 'The Thinker',
    description: 'Analytical, curious, logical and problem-oriented.',
    pathways:
      'Engineering, medicine, research, data science, finance, analytics, technology and consulting.',
    traits: { problemSolving: 3, research: 2, numbers: 2, detail: 1 },
    personality: { problemSolving: 3, detail: 1 },
    interests: { investigating: 3, tech: 1, finance: 1 },
  },
  {
    id: 'creator',
    name: 'The Creator',
    description:
      'Creative, innovative and comfortable generating new ideas.',
    pathways:
      'Marketing, design, architecture, media, entertainment, content creation, product development and entrepreneurship.',
    traits: { creativity: 3, design: 2, writing: 1 },
    personality: { innovation: 3, independence: 1 },
    interests: { creating: 3 },
  },
  {
    id: 'builder',
    name: 'The Builder',
    description:
      'Enjoys practical work, tools, systems and seeing tangible results.',
    pathways:
      'Engineering, construction, skilled trades, aviation, manufacturing and technical careers.',
    traits: { building: 3, handsOn: 3, technology: 1 },
    personality: { detail: 1, independence: 1 },
    interests: { building: 3 },
  },
  {
    id: 'helper',
    name: 'The Helper',
    description:
      "Empathetic, service-oriented and motivated by improving people's lives.",
    pathways:
      'Medicine, nursing, psychology, social work, education, physical therapy, counseling and public service.',
    traits: { caring: 3, empathy: 2, teaching: 1, people: 1 },
    personality: { empathy: 3, extraversion: 1 },
    interests: { health: 2, teaching: 2 },
  },
  {
    id: 'entrepreneur',
    name: 'The Entrepreneur',
    description:
      'Independent, persuasive, competitive and comfortable with calculated risk.',
    pathways:
      'Entrepreneurship, sales, real estate, finance, business development and management.',
    traits: { entrepreneurship: 3, selling: 2, competitiveness: 2, decisiveness: 1 },
    personality: { riskTolerance: 3, persuasion: 2, independence: 1, innovation: 1 },
    interests: { entrepreneurship: 3, selling: 2 },
  },
  {
    id: 'organizer',
    name: 'The Organizer',
    description:
      'Structured, dependable, detail-oriented and good at managing processes.',
    pathways:
      'Accounting, project management, operations, logistics, administration, compliance and finance.',
    traits: { organizing: 3, detail: 3, dependability: 2, numbers: 1 },
    personality: { detail: 3, stressTolerance: 1 },
    interests: { finance: 1, leading: 1 },
  },
];

export const FAMILIES: FamilyDef[] = [
  { id: 'healthcare', name: 'Healthcare & Medicine' },
  { id: 'business', name: 'Business & Leadership' },
  { id: 'technology', name: 'Technology & Data' },
  { id: 'creative', name: 'Creative & Media' },
  { id: 'trades', name: 'Skilled Trades & Engineering' },
  { id: 'education', name: 'Education & Human Services' },
  { id: 'finance', name: 'Finance & Analytics' },
  { id: 'sales', name: 'Sales, Marketing & Real Estate' },
];
