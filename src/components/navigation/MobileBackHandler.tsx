import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

export const MobileBackHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Prevent the default behavior of closing the app
      event.preventDefault();
      
      // If we're on the home page, allow the default behavior (close app)
      if (location.pathname === '/') {
        window.history.back();
        return;
      }
      
      // Otherwise, navigate back within the app
      navigate(-1);
    };

    // Add event listener for popstate (back button)
    window.addEventListener('popstate', handlePopState);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, location]);

  return null;
};
