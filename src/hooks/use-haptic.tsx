import { useCallback } from 'react';

type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';

// Check if we're in a native app context (Capacitor)
const isNativeApp = () => {
  return typeof window !== 'undefined' && 
         (window as any).Capacitor !== undefined;
};

export function useHaptic() {
  const vibrate = useCallback((pattern: HapticPattern = 'light') => {
    // Patterns in milliseconds
    const patterns: Record<HapticPattern, number | number[]> = {
      light: 10,
      medium: 25,
      heavy: 50,
      success: [10, 50, 10],
      warning: [30, 30, 30],
      error: [50, 30, 50, 30, 50],
      selection: 5,
    };

    // Try native Capacitor haptics first (for native apps)
    if (isNativeApp()) {
      try {
        const Haptics = (window as any).Capacitor?.Plugins?.Haptics;
        if (Haptics) {
          const impactStyles: Record<HapticPattern, string> = {
            light: 'Light',
            medium: 'Medium', 
            heavy: 'Heavy',
            success: 'Medium',
            warning: 'Medium',
            error: 'Heavy',
            selection: 'Light',
          };
          Haptics.impact({ style: impactStyles[pattern] });
          return;
        }
      } catch (e) {
        // Fall through to web vibration API
      }
    }

    // Fallback to Web Vibration API
    if (!navigator.vibrate) return;

    try {
      navigator.vibrate(patterns[pattern]);
    } catch (e) {
      // Silently fail if vibration not supported
    }
  }, []);

  const tap = useCallback(() => vibrate('light'), [vibrate]);
  const selection = useCallback(() => vibrate('selection'), [vibrate]);
  const success = useCallback(() => vibrate('success'), [vibrate]);
  const warning = useCallback(() => vibrate('warning'), [vibrate]);
  const error = useCallback(() => vibrate('error'), [vibrate]);

  return { vibrate, tap, selection, success, warning, error };
}
