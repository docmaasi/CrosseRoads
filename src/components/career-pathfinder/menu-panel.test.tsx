import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { MenuPanel } from './menu-panel';
import { PRIVACY_SECTIONS } from '../legal/data/privacy';
import { TERMS_SECTIONS } from '../legal/data/terms';

afterEach(cleanup);

/** Routes declared in main.jsx. */
const ROUTES = [
  '/CareerPathfinder',
  '/CollegePlanner',
  '/ParentRoadmap',
  '/Wellness',
  '/Guides',
  '/Worksheets',
  '/Search',
  '/About',
  '/Resources',
  '/WorkWithMe',
  '/Privacy',
  '/Terms',
];

/**
 * Section ids each page actually renders.
 *
 * Every one of these was verified against the built site. A link to an id that
 * no page renders scrolls nowhere and looks, to the person clicking it, exactly
 * like a broken site.
 */
const ANCHORS: Record<string, string[]> = {
  '/CareerPathfinder': ['resources', 'worldwide-resources', 'about', 'faq'],
  // These render on a page of their own, so they survive a visitor who has
  // started the assessment — which the CareerPathfinder versions did not.
  '/About': ['about', 'faq'],
  '/Resources': ['resources', 'worldwide-resources'],
  '/CollegePlanner': ['resources'],
  '/Wellness': ['resources'],
  '/WorkWithMe': ['packages', 'power-hour', 'a-la-carte', 'inquire'],
  '/Terms': TERMS_SECTIONS.map((section) => section.id),
  '/Privacy': PRIVACY_SECTIONS.map((section) => section.id),
};

function panelLinks() {
  const panel = screen.getByRole('navigation', { name: 'Tools' }).parentElement!;
  return within(panel)
    .getAllByRole('link')
    .map((link) => link.getAttribute('href') ?? '');
}

describe('<MenuPanel />', () => {
  const noop = () => {};
  const isActive = () => false;

  it('points every internal link at a route that exists', () => {
    render(<MenuPanel isActive={isActive} onClose={noop} />);
    const internal = panelLinks().filter((href) => href.startsWith('/'));
    expect(internal.length).toBeGreaterThan(10);

    for (const href of internal) {
      const [beforeHash, hash] = href.split('#');
      const [path] = beforeHash.split('?');
      expect(ROUTES, href).toContain(path);
      if (hash) expect(ANCHORS[path] ?? [], href).toContain(hash);
    }
  });

  it('never emits a bare hash link, which does nothing off its own page', () => {
    render(<MenuPanel isActive={isActive} onClose={noop} />);
    for (const href of panelLinks()) {
      expect(href.startsWith('#'), href).toBe(false);
    }
  });

  it('never puts a query string inside the fragment', () => {
    // "#inquire?package=vip" is an id containing a question mark, not a query.
    // It matched nothing, and every link written that way was dead.
    render(<MenuPanel isActive={isActive} onClose={noop} />);
    for (const href of panelLinks()) {
      const hash = href.split('#')[1];
      if (hash) expect(hash.includes('?'), href).toBe(false);
    }
  });

  it('opens external links safely', () => {
    render(<MenuPanel isActive={isActive} onClose={noop} />);
    const panel = screen.getByRole('navigation', { name: 'Tools' }).parentElement!;
    for (const link of within(panel).getAllByRole('link')) {
      const href = link.getAttribute('href') ?? '';
      if (!href.startsWith('http')) continue;
      expect(link.getAttribute('rel'), href).toBe('noopener noreferrer');
      expect(link.getAttribute('target'), href).toBe('_blank');
    }
  });

  it('offers every tool the site has', () => {
    render(<MenuPanel isActive={isActive} onClose={noop} />);
    const hrefs = panelLinks();
    for (const route of ['/CareerPathfinder', '/CollegePlanner', '/Worksheets', '/Search', '/Guides']) {
      expect(hrefs.some((href) => href.startsWith(route)), route).toBe(true);
    }
  });
});
