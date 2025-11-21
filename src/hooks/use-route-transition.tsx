import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteTransition = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add fade-in animation to main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('animate-fade-in');
      // Force reflow
      void mainContent.offsetWidth;
      mainContent.classList.add('animate-fade-in');
    }
  }, [location.pathname]);
};
