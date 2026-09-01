import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Download, Mail, Menu, Share2, X } from 'lucide-react';
import { BrandRibbon } from './brand-decor';
import { PathfinderMark } from './pathfinder-logo';
import { useInstallApp, shareApp } from './app-actions';
import { BRAND } from './branding';

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

const menuItem =
  'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-[#17808d]/10 hover:text-[#4a2373]';

function MenuPanel({ isActive, onClose }) {
  const { install } = useInstallApp();
  return (
    <div className="absolute right-4 top-full z-20 mt-1 w-64 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
      <nav aria-label="CrosseRoads platform">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  isActive(link.href)
                    ? 'bg-[#4a2373] font-medium text-white'
                    : 'text-stone-700 hover:bg-[#17808d]/10'
                }`}
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="my-2 border-t border-stone-200" />
      <button type="button" className={`${menuItem} w-full`} onClick={() => { onClose(); install(); }}>
        <Download className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
        Download the app
      </button>
      <button type="button" className={`${menuItem} w-full`} onClick={() => { onClose(); shareApp(); }}>
        <Share2 className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
        Share CrosseRoads
      </button>
      <div className="my-2 border-t border-stone-200" />
      <a className={menuItem} href={`mailto:${BRAND.contactEmail}`}>
        <Mail className="h-4 w-4 text-[#17808d]" aria-hidden="true" />
        Contact us
      </a>
      <a className={menuItem} href="/Privacy" onClick={onClose}>Privacy Policy</a>
      <a className={menuItem} href="/Terms" onClick={onClose}>Terms of Use</a>
    </div>
  );
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
