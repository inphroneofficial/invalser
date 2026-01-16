import { useState, useEffect, useCallback } from 'react';

interface PWAUpdateState {
  hasUpdate: boolean;
  isChecking: boolean;
  registration: ServiceWorkerRegistration | null;
}

export function usePWAUpdate() {
  const [state, setState] = useState<PWAUpdateState>({
    hasUpdate: false,
    isChecking: false,
    registration: null,
  });

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const checkForUpdates = async () => {
      setState(prev => ({ ...prev, isChecking: true }));

      try {
        const registration = await navigator.serviceWorker.getRegistration();
        
        if (registration) {
          setState(prev => ({ ...prev, registration }));

          // Check for updates
          registration.update().catch(console.error);

          // Listen for new service worker waiting
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  setState(prev => ({ ...prev, hasUpdate: true }));
                }
              });
            }
          });

          // Check if there's already a waiting worker
          if (registration.waiting) {
            setState(prev => ({ ...prev, hasUpdate: true }));
          }
        }
      } catch (error) {
        console.error('PWA update check failed:', error);
      } finally {
        setState(prev => ({ ...prev, isChecking: false }));
      }
    };

    checkForUpdates();

    // Listen for controller change (when skipWaiting is called)
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

    // Periodic update checks (every 30 minutes)
    const interval = setInterval(() => {
      if (state.registration) {
        state.registration.update().catch(console.error);
      }
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const applyUpdate = useCallback(() => {
    if (state.registration?.waiting) {
      // Tell the waiting service worker to skip waiting
      state.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    } else {
      // Fallback: just reload
      window.location.reload();
    }
  }, [state.registration]);

  const dismissUpdate = useCallback(() => {
    setState(prev => ({ ...prev, hasUpdate: false }));
  }, []);

  return {
    hasUpdate: state.hasUpdate,
    isChecking: state.isChecking,
    applyUpdate,
    dismissUpdate,
  };
}
