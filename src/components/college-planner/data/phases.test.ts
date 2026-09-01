import { describe, expect, it } from 'vitest';
import { ALL_ITEMS, PHASES, TOTAL_ITEMS, phaseItemIds } from './phases';
import { INTERNATIONAL_RESOURCES, PLANNER_RESOURCES } from './resources';

describe('planner phase data', () => {
  it('has three phases in journey order', () => {
    expect(PHASES.map((p) => p.id)).toEqual(['junior', 'senior', 'accepted']);
  });

  it('has globally unique item ids', () => {
    const ids = ALL_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(TOTAL_ITEMS).toBe(ids.length);
    expect(TOTAL_ITEMS).toBeGreaterThan(60);
  });

  it('gives every item and group real content', () => {
    for (const phase of PHASES) {
      expect(phase.groups.length).toBeGreaterThan(0);
      for (const group of phase.groups) {
        expect(group.title.length).toBeGreaterThan(3);
        expect(group.items.length).toBeGreaterThan(0);
        for (const item of group.items) {
          expect(item.text.length).toBeGreaterThan(10);
        }
      }
    }
  });

  it('phaseItemIds covers every item exactly once', () => {
    const combined = PHASES.flatMap((phase) => phaseItemIds(phase));
    expect(combined.length).toBe(TOTAL_ITEMS);
  });
});

describe('planner resources', () => {
  it('links only to vetted official https domains', () => {
    const allowedHosts = [
      'www.commonapp.org',
      'studentaid.gov',
      'cssprofile.collegeboard.org',
      'satsuite.collegeboard.org',
      'www.act.org',
      'bigfuture.collegeboard.org',
      'collegescorecard.ed.gov',
      'www.dosomething.org',
      'www.volunteermatch.org',
      'educationusa.state.gov',
      'www.ucas.com',
      'education.ec.europa.eu',
      'www.educanada.ca',
      'www.daad.de',
      'us.fulbrightonline.org',
    ];
    for (const resource of [...PLANNER_RESOURCES, ...INTERNATIONAL_RESOURCES]) {
      const url = new URL(resource.url);
      expect(url.protocol).toBe('https:');
      expect(allowedHosts).toContain(url.host);
      expect(resource.description.length).toBeGreaterThan(10);
    }
  });
});
