import type { ChecklistItem, PlannerPhase } from './types';
import { juniorPhase } from './phase-junior';
import { seniorPhase } from './phase-senior';
import { acceptedSpringGroups } from './phase-accepted-spring';
import { acceptedSummerGroups } from './phase-accepted-summer';

export const acceptedPhase: PlannerPhase = {
  id: 'accepted',
  name: 'Accepted — Now What?',
  subtitle:
    'An acceptance letter is exciting, but several important steps remain before move-in day.',
  groups: [...acceptedSpringGroups, ...acceptedSummerGroups],
};

export const PHASES: PlannerPhase[] = [juniorPhase, seniorPhase, acceptedPhase];

export const ALL_ITEMS: ChecklistItem[] = PHASES.flatMap((phase) =>
  phase.groups.flatMap((group) => group.items),
);

export const TOTAL_ITEMS: number = ALL_ITEMS.length;

export function phaseItemIds(phase: PlannerPhase): string[] {
  return phase.groups.flatMap((group) => group.items.map((item) => item.id));
}
