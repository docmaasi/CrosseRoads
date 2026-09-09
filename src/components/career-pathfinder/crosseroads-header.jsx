import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Share2, X } from 'lucide-react';
import { BrandRibbon } from './brand-decor';
import { PathfinderMark } from './pathfinder-logo';
import { shareApp } from './app-actions';
import { MenuPanel } from './menu-panel';

const NAV_LINKS = [
  { href: '/CareerPathfinder', label: 'Career' },
  { href: '/CollegePlanner', label: 'College' },
  { href: '/ParentRoadmap', label: 'Parents' },
  { href: '/Wellness', label: 'Wellness' },
  { href: '/Guides', label: 'Guides' },
  { href: '/WorkWithMe', label: 'Work with me', accent: true },
];

function navLinkClass(isActive, accent) {
  if (accent) {
    return `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-[#e8a33d] text-[#33184f]'
        : 'border border-[#e8a33d]/60 text-[#b07514] hover:bg-[#e8a33d] hover:text-[#33184f]'
    }`;
  }
  return `whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
    isActive
      ? 'bg-[#4a2373] font-medium text-white'
      : 'text-stone-600 hover:bg-[#17808d]/10 hover:text-[#4a2373]'
  }`;
}

/**
 * Shared CrosseRoads header: emblem + wordmark, desktop pill nav, and a
 * hamburger menu (all screen sizes) with app install/share and legal
 * links. `right` renders page-specific content (e.g. a progress bar).
 *
 * The pill nav appears at lg, and the row widens to max-w-5xl to hold it.
 *
 * The row was capped at max-w-3xl (768px) while six nav links, the brand, a
 * progress bar and two icon buttons need about 954px. Because the nav carried
 * min-w-0 it shrank instead of overflowing the row, so its labels spilled
 * silently underneath the progress bar -- "Guides" and "Work with me" printed
 * on top of the step count, at every viewport width, because the cap and not
 * the screen was the constraint.
 *
 * shrink-0 now means the nav keeps its measured width rather than quietly
 * collapsing, so if this ever stops fitting it will overflow visibly instead
 * of overlapping. Nothing is lost below lg: the hamburger is present at every
 * width and lists every page.
 */
export function CrosseRoadsHeader({ right = null }) {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="cp-no-print sticky top-0 z-10 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[#4a2373] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <BrandRibbon />
      <div className="relative mx-auto flex max-w-3xl items-center gap-3 px-4 py-2.5 lg:max-w-5xl">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <PathfinderMark size={30} />
          <span className="font-serif text-lg font-bold text-[#4a2373]">
            Cross<span className="text-[#e8a33d]">e</span>
            <span className="text-[#17808d]">Roads</span>
          </span>
        </a>
        <nav
          aria-label="CrosseRoads platform"
          className="hidden flex-1 shrink-0 items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={navLinkClass(isActive(link.href), link.accent)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 lg:hidden" />
        {right && <div className="shrink-0">{right}</div>}
        <button
          type="button"
          className="rounded-md p-1.5 text-[#4a2373] hover:bg-[#17808d]/10"
          aria-label="Share CrosseRoads"
          onClick={shareApp}
        >
          <Share2 className="h-5 w-5" />
        </button>
        <button
          type="button"
          data-menu-toggle
          className="rounded-md p-1.5 text-[#4a2373] hover:bg-[#17808d]/10"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        {isMenuOpen && (
          <MenuPanel isActive={isActive} onClose={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  );
}
