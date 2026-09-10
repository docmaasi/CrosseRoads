/// <reference lib="webworker" />
import { clientsClaim } from 'workbox-core';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

/**
 * The CrosseRoads service worker.
 *
 * Written by hand rather than generated, for one reason: the generated worker
 * always registers its navigation route before any custom rule, so navigations
 * were served cache-first from the precached shell no matter what came after.
 * That is why a returning visitor kept seeing the previous version of the site
 * for a full load after every deploy — new content on the server, old app in
 * the browser.
 *
 * Here the order is ours to choose:
 *
 *   Online  — navigations go to the network first, so the HTML is always
 *             current. Four seconds, then it stops waiting.
 *   Offline — they fall back to the last copy of that page, and failing that
 *             to the precached shell, so every route still works with no
 *             connection at all.
 *
 * Hashed JS, CSS and images stay precached. That is safe: their filenames
 * change whenever their contents do, so they can never go stale.
 */

self.skipWaiting();
clientsClaim();

// directoryIndex: null matters. Without it the precache route resolves a
// request for "/" to the precached index.html and answers it cache-first,
// before the navigation route below is ever consulted.
precacheAndRoute(self.__WB_MANIFEST, { directoryIndex: null });

const HTML_CACHE = 'crosseroads-html';

const networkFirst = new NetworkFirst({
  cacheName: HTML_CACHE,
  networkTimeoutSeconds: 4,
});

const offlineShell = createHandlerBoundToURL('index.html');

registerRoute(
  new NavigationRoute(async (options) => {
    try {
      const response = await networkFirst.handle(options);
      if (response) return response;
    } catch {
      // Offline, or the network took too long. Fall through to the shell.
    }
    // Any route the visitor has not opened before still resolves, because
    // every page in this app is the same shell with a different path.
    return offlineShell(options);
  }),
);
