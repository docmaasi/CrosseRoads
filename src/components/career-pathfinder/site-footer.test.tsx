import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { SiteFooter } from './site-footer';
import { DISCLAIMERS } from './data/disclaimers';
import { PRIVACY_SECTIONS } from '../legal/data/privacy';
import { TERMS_SECTIONS } from '../legal/data/terms';

// Vitest runs without `globals` here, so testing-library's automatic cleanup
// never registers.
afterEach(cleanup);

/** Routes declared in main.jsx. Kept here so a footer link to a route that
 *  does not exist fails a test rather than a visitor. */
const ROUTES = [
  '/CareerPathfinder',
  '/CollegePlanner',
  '/ParentRoadmap',
  '/Wellness',
  '/Guides',
  '/WorkWithMe',
  '/Privacy',
  '/Terms',
];

/** Section ids the pages actually render, for anchor links. */
const ANCHORS: Record<string, string[]> = {
  '/Terms': TERMS_SECTIONS.map((section) => section.id),
  '/Privacy': PRIVACY_SECTIONS.map((section) => section.id),
  // Rendered by CareerPathfinder's intro screen.
  '/CareerPathfinder': ['resources', 'faq', 'about', 'worldwide-resources'],
};

function footerLinks() {
  const footer = screen.getByRole('contentinfo');
  return within(footer)
    .getAllByRole('link')
    .map((link) => link.getAttribute('href') ?? '');
}

describe('<SiteFooter />', () => {
  it('carries every platform-wide disclaimer, not just the career one', () => {
    render(<SiteFooter />);
    // This footer renders on /Wellness too, so the medical disclaimer has to
    // be here — the Wellness page hero alone does not cover the other pages.
    for (const item of DISCLAIMERS) {
      expect(screen.getByText(item.text), item.id).toBeTruthy();
    }
    const medical = DISCLAIMERS.find((d) => d.id === 'medical');
    expect(medical?.text).toMatch(/doctor–patient relationship/);
  });

  it('shows a crisis notice with 911 and 988', () => {
    render(<SiteFooter />);
    const footer = screen.getByRole('contentinfo');
    // A function matcher, because the notice is split across elements to bold
    // the numbers, and getByText only sees an element's direct text nodes.
    expect(
      within(footer).getByText(
        (_content, node) => node?.textContent?.trim() === 'call 911',
        { selector: 'span' },
      ),
    ).toBeTruthy();
    const lifeline = within(footer).getByRole('link', { name: '988' });
    expect(lifeline.getAttribute('href')).toBe('https://988lifeline.org/');
    expect(within(footer).getByText(/not a crisis service/i)).toBeTruthy();
  });

  it('says plainly that it does not guarantee outcomes', () => {
    render(<SiteFooter />);
    expect(screen.getByText(/do not guarantee admission to any school/i)).toBeTruthy();
  });

  it('disclaims endorsement of the resources it links to', () => {
    render(<SiteFooter />);
    expect(screen.getByText(/a link is not an endorsement/i)).toBeTruthy();
  });

  it('keeps the studio credit and a current copyright year', () => {
    render(<SiteFooter />);
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByRole('link', { name: /SmithAppStudio LLC/ })).toBeTruthy();
    expect(within(footer).getByText(new RegExp(`© ${new Date().getFullYear()}`))).toBeTruthy();
  });

  it('points every internal link at a route that exists', () => {
    render(<SiteFooter />);
    const internal = footerLinks().filter((href) => href.startsWith('/'));
    expect(internal.length).toBeGreaterThan(5);

    for (const href of internal) {
      const [path, hash] = href.split('#');
      expect(ROUTES, href).toContain(path);
      if (hash) {
        // A bare "#faq" or a stale anchor id scrolls nowhere and says nothing.
        expect(ANCHORS[path] ?? [], href).toContain(hash);
      }
    }
  });

  it('never emits a bare hash link, which does nothing off its own page', () => {
    render(<SiteFooter />);
    for (const href of footerLinks()) {
      expect(href.startsWith('#'), href).toBe(false);
    }
  });

  it('opens external links safely', () => {
    render(<SiteFooter />);
    const footer = screen.getByRole('contentinfo');
    for (const link of within(footer).getAllByRole('link')) {
      const href = link.getAttribute('href') ?? '';
      if (!href.startsWith('http')) continue;
      expect(link.getAttribute('rel'), href).toBe('noopener noreferrer');
      expect(link.getAttribute('target'), href).toBe('_blank');
    }
  });
});
