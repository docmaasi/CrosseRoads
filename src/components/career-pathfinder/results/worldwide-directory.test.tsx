import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { WorldwideDirectory } from './worldwide-directory';
import { DIRECTORY, filterByCountry } from '@/data/resource-directory';

describe('<WorldwideDirectory />', () => {
  // This project runs vitest without `globals`, so testing-library's automatic
  // afterEach cleanup never registers and renders would pile up in one document.
  afterEach(cleanup);

  it('renders every entry as an external link, safely', () => {
    render(<WorldwideDirectory />);
    const section = screen.getByRole('region', { name: /worldwide resource directory/i });
    const links = within(section).getAllByRole('link');

    // Every resource, plus the "Tell us on GitHub" footer link.
    expect(links.length).toBe(DIRECTORY.length + 1);

    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
      // Without rel=noopener the opened tab can reach back into this one.
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link.getAttribute('target')).toBe('_blank');
    }
  });

  it('shows the caveat and the account warning where the data has them', () => {
    render(<WorldwideDirectory />);

    const withCaveat = DIRECTORY.filter((entry) => entry.caveat);
    const withAccount = DIRECTORY.filter((entry) => entry.requiresAccount);
    expect(withCaveat.length).toBeGreaterThan(0);
    expect(withAccount.length).toBeGreaterThan(0);

    // A caveat that renders nowhere is a warning a family never receives.
    expect(screen.getByText(withCaveat[0].caveat as string)).toBeTruthy();
    expect(screen.getAllByText(/free account required/i).length).toBe(withAccount.length);
  });

  it('offers a country filter covering every country in the data', () => {
    render(<WorldwideDirectory />);
    const select = screen.getByLabelText(/show resources for/i) as HTMLSelectElement;
    const values = [...select.options].map((option) => option.value);

    for (const entry of DIRECTORY) {
      expect(values, entry.country).toContain(entry.country);
    }
    expect(select.value).toBe('');
  });

  it('groups by category without dropping or duplicating a resource', () => {
    render(<WorldwideDirectory />);
    const section = screen.getByRole('region', { name: /worldwide resource directory/i });
    const items = within(section).getAllByRole('listitem');
    expect(items.length).toBe(DIRECTORY.length);
  });

  it('keeps worldwide crisis resources visible when a country is chosen', () => {
    // The filter logic is what guarantees a family in Kenya still sees
    // Befrienders Worldwide; assert on the data the component renders from.
    const kenyan = filterByCountry('KE');
    expect(kenyan.some((entry) => entry.category === 'wellbeing')).toBe(true);
  });
});
