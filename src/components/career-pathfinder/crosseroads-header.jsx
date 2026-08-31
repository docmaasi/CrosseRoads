import { useLocation } from 'react-router-dom';
import { PathfinderMark } from './pathfinder-logo';

const NAV_LINKS = [
  { href: '/CareerPathfinder', label: 'Career' },
  { href: '/CollegePlanner', label: 'College' },
  { href: '/ParentRoadmap', label: 'Parents' },
  { href: '/Wellness', label: 'Wellness' },
  { href: '/Guides', label: 'Guides' },
];

/**
 * Shared CrosseRoads header: mark + gold-e wordmark + platform nav.
 * `right` renders page-specific content (e.g. a progress bar).
 */
export function CrosseRoadsHeader({ right = null }) {
  const { pathname } = useLocation();

  return (
    <header className="cp-no-print sticky top-0 z-10 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-2.5">
        <a href="/CareerPathfinder" className="flex shrink-0 items-center gap-2">
          <PathfinderMark size={30} />
          <span className="hidden font-serif text-lg font-bold text-[#1e4d5c] sm:inline">
            Cross<span className="text-[#e8a33d]">e</span>Roads
          </span>
        </a>
        <nav
          aria-label="CrosseRoads platform"
          className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-[#1e4d5c] font-medium text-white'
                    : 'text-stone-600 hover:bg-[#2e7d8c]/10 hover:text-[#1e4d5c]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        {right && <div className="shrink-0">{right}</div>}
      </div>
    </header>
  );
}
