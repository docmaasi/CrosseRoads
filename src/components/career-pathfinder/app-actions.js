// Install ("Download the app") and Share actions for the PWA.
// The browser fires `beforeinstallprompt` once, often before React
// mounts, so the event is captured at module level.

import { useEffect, useReducer } from 'react';
import { toast } from 'sonner';
import { BRAND } from './branding';

let installEvent = null;
const listeners = new Set();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installEvent = event;
    listeners.forEach((notify) => notify());
  });
}

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

/** Install state + trigger. Falls back to instructions when the
 *  browser offers no install prompt (e.g. iOS Safari). */
export function useInstallApp() {
  const [, forceUpdate] = useReducer((n) => n + 1, 0);

  useEffect(() => {
    listeners.add(forceUpdate);
    return () => listeners.delete(forceUpdate);
  }, []);

  const install = async () => {
    if (installEvent) {
      installEvent.prompt();
      await installEvent.userChoice;
      installEvent = null;
      forceUpdate();
      return;
    }
    toast(
      isIos()
        ? 'On iPhone/iPad: tap the Share button, then "Add to Home Screen".'
        : 'In your browser menu, choose "Install app" or "Add to Home screen".',
    );
  };

  return { canPrompt: Boolean(installEvent), install };
}

/** Share the platform via the native share sheet, with copy fallback. */
export async function shareApp() {
  const shareData = {
    title: `${BRAND.platformName} — ${BRAND.platformTagline}`,
    text: BRAND.mission,
    url: `${window.location.origin}/CareerPathfinder`,
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch {
      return; // user closed the share sheet
    }
  }
  await navigator.clipboard.writeText(shareData.url);
  toast.success('Link copied — paste it anywhere to share CrosseRoads.');
}
