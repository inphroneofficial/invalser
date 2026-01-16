import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { useHaptic } from '@/hooks/use-haptic';

const MAIN_ROUTES = ['/', '/providers', '/how-it-works', '/about', '/contact'];

export const MobileBackHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vibrate } = useHaptic();
  useScrollToTop();

  // Handle browser/device back button
  const handlePopState = useCallback((event: PopStateEvent) => {
    event.preventDefault();
    
    // Haptic feedback on back navigation
    vibrate('light');
    
    // If we're on the home page, allow the default behavior
    if (location.pathname === '/') {
      window.history.back();
      return;
    }
    
    // Navigate back within the app
    navigate(-1);
  }, [navigate, location, vibrate]);

  // Handle keyboard navigation (Backspace, Escape, Arrow keys)
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip if user is typing in an input field
    const target = event.target as HTMLElement;
    const isInputField = target.tagName === 'INPUT' || 
                         target.tagName === 'TEXTAREA' || 
                         target.isContentEditable;
    
    if (isInputField) return;

    const currentIndex = MAIN_ROUTES.indexOf(location.pathname);

    switch (event.key) {
      case 'Backspace':
        // Navigate back with Backspace (only if not in input)
        event.preventDefault();
        vibrate('light');
        if (location.pathname !== '/') {
          navigate(-1);
        }
        break;

      case 'Escape':
        // Close modals or go home with Escape
        vibrate('light');
        if (location.pathname !== '/') {
          navigate('/');
        }
        break;

      case 'ArrowLeft':
        // Navigate to previous page in sequence
        if (currentIndex > 0) {
          event.preventDefault();
          vibrate('light');
          navigate(MAIN_ROUTES[currentIndex - 1]);
        }
        break;

      case 'ArrowRight':
        // Navigate to next page in sequence
        if (currentIndex >= 0 && currentIndex < MAIN_ROUTES.length - 1) {
          event.preventDefault();
          vibrate('light');
          navigate(MAIN_ROUTES[currentIndex + 1]);
        }
        break;

      case 'Home':
        // Go to home page
        if (location.pathname !== '/') {
          event.preventDefault();
          vibrate('light');
          navigate('/');
        }
        break;

      case 'End':
        // Go to last main page (contact)
        if (location.pathname !== '/contact') {
          event.preventDefault();
          vibrate('light');
          navigate('/contact');
        }
        break;
    }
  }, [navigate, location, vibrate]);

  // Handle Android hardware back button via history API
  useEffect(() => {
    // Push a dummy state to enable back button detection
    if (location.pathname === '/') {
      window.history.pushState({ page: 'home' }, '', '/');
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePopState, handleKeyDown]);

  return null;
};
