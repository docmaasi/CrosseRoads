import type { PlannerPhase } from './types';

// Junior year — the groundwork for a successful senior year.
export const juniorPhase: PlannerPhase = {
  id: 'junior',
  name: 'Junior Year: Build the Foundation',
  subtitle:
    'Focus on academics while developing leadership, service, and extracurricular involvement.',
  groups: [
    {
      id: 'jr-year',
      title: 'Throughout the year',
      items: [
        {
          id: 'jr-service',
          text: 'Participate in meaningful community service (10–20 hours for the year).',
          detail:
            'Ideas: stock a local food bank, hand out or deliver holiday food baskets, make or serve meals at a local shelter or group home, walk or run local 5Ks for causes like the American Heart Association or Red Cross, join school-offered activities, volunteer as a camp coach, or find virtual service projects on DoSomething.org.',
        },
        {
          id: 'jr-clubs',
          text: 'Join school clubs, organizations, athletics, or performing arts — and pursue leadership positions whenever possible.',
        },
      ],
    },
    {
      id: 'jr-spring',
      title: 'Testing & the college list',
      items: [
        {
          id: 'jr-prep',
          text: 'Begin SAT and/or ACT preparation in February or March.',
          detail: 'Consider a prep course, a tutor, or a structured self-study plan.',
        },
        {
          id: 'jr-both-tests',
          text: 'Take both the SAT and ACT during the spring (April–May) if possible.',
          detail:
            "Comparing scores helps determine which exam best highlights your student's strengths.",
        },
        {
          id: 'jr-list',
          text: 'Build a balanced college list with Likely (Safety), Target (Match), and Reach schools.',
        },
        {
          id: 'jr-visits',
          text: 'Visit college campuses whenever possible.',
          detail:
            'Campus visits help students discover where they feel most comfortable and can influence the final college list.',
        },
        {
          id: 'jr-recs',
          text: 'Make a list of 2–3 teachers to ask for recommendation letters.',
        },
      ],
    },
  ],
};
