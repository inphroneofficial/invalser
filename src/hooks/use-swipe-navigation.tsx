import { useRef, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHaptic } from '@/hooks/use-haptic';

interface UseSwipeNavigationOptions {
  enabled?: boolean;
  threshold?: number;
  routes?: string[];
}

const DEFAULT_ROUTES = ['/', '/providers', '/how-it-works', '/about', '/contact'];

export function useSwipeNavigation(options: UseSwipeNavigationOptions = {}) {
  const { 
    enabled = true, 
    threshold = 80,
    routes = DEFAULT_ROUTES
  } = options;

  const navigate = useNavigate();
  const location = useLocation();
  const { vibrate } = useHaptic();
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const isScrolling = useRef<boolean | null>(null);

  const getCurrentIndex = useCallback(() => {
    return routes.indexOf(location.pathname);
  }, [location.pathname, routes]);

  const navigateTo = useCallback((direction: 'left' | 'right') => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return;

    let newIndex: number;
    if (direction === 'left') {
      // Swipe left = go forward
      newIndex = Math.min(currentIndex + 1, routes.length - 1);
    } else {
      // Swipe right = go back
      newIndex = Math.max(currentIndex - 1, 0);
    }

    if (newIndex !== currentIndex) {
      // Haptic feedback on successful navigation
      vibrate('medium');
      navigate(routes[newIndex]);
    }
  }, [getCurrentIndex, navigate, routes, vibrate]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enabled) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isScrolling.current = null;
  }, [enabled]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!enabled) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;

    // Determine if user is scrolling vertically
    if (isScrolling.current === null) {
      const deltaX = Math.abs(touchEndX.current - touchStartX.current);
      const deltaY = Math.abs(touchEndY.current - touchStartY.current);
      isScrolling.current = deltaY > deltaX;
    }
  }, [enabled]);

  const handleTouchEnd = useCallback(() => {
    if (!enabled || isScrolling.current) return;

    const deltaX = touchEndX.current - touchStartX.current;
    const absDeltaX = Math.abs(deltaX);

    if (absDeltaX > threshold) {
      if (deltaX > 0) {
        navigateTo('right');
      } else {
        navigateTo('left');
      }
    }
  }, [enabled, threshold, navigateTo]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    currentIndex: getCurrentIndex(),
    totalPages: routes.length,
    canGoBack: getCurrentIndex() > 0,
    canGoForward: getCurrentIndex() < routes.length - 1,
    navigateTo,
  };
}
