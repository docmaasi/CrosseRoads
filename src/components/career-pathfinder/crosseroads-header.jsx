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
];

function navLinkClass(isActive) {
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
 */
export function CrosseRoadsHeader({ right = null }) {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="cp-no-print sticky top-0 z-10 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <BrandRibbon />
      <div className="relative mx-auto flex max-w-3xl items-center gap-3 px-4 py-2.5">
        <a href="/CareerPathfinder" className="flex shrink-0 items-center gap-2">
          <PathfinderMark size={30} />
          <span className="font-serif text-lg font-bold text-[#4a2373]">
            Cross<span className="text-[#e8a33d]">e</span>
            <span className="text-[#17808d]">Roads</span>
          </span>
        </a>
        <nav
          aria-label="CrosseRoads platform"
          className="hidden min-w-0 flex-1 items-center gap-1 sm:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={navLinkClass(isActive(link.href))}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 sm:hidden" />
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
