import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Makes `/Page#section` links actually land on the section.
 *
 * In a single-page app the browser looks for the hash target while the document
 * is still an empty <div id="root">, finds nothing, and gives up. React then
 * renders the page and nobody ever scrolls. Every anchor link on this site was
 * quietly dumping people at the top of a long page and letting them assume the
 * link was broken.
 *
 * Routes are lazy-loaded behind Suspense, so the target can appear several
 * frames after the location changes. Rather than guess a delay, poll for the
 * element for a short window and stop as soon as it exists.
 *
 * Also resets scroll to the top on a normal route change, which react-router
 * does not do — otherwise following a link from halfway down one page opens the
 * next one halfway down.
 */

/** Clearance for the sticky header, so the heading is not hidden under it. */
const HEADER_OFFSET = 76;
const GIVE_UP_AFTER_MS = 2000;

export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    const deadline = Date.now() + GIVE_UP_AFTER_MS;

    const attempt = () => {
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior });

        // Send keyboard and screen-reader users to the section too, not just
        // the viewport. Without tabindex a heading or section cannot take focus.
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
          target.dataset.tempTabindex = 'true';
        }
        target.focus({ preventScroll: true });
        if (target.dataset.tempTabindex) {
          target.removeAttribute('tabindex');
          delete target.dataset.tempTabindex;
        }
        return;
      }
      if (Date.now() < deadline) frame = requestAnimationFrame(attempt);
    };

    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
