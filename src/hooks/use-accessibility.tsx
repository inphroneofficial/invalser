
import { useEffect } from 'react';

export const useAccessibility = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 font-medium transition-all';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    skipLink.tabIndex = 0;
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main landmark if it doesn't exist
    const main = document.getElementById('main-content');
    if (!main) {
      const mainElement = document.createElement('main');
      mainElement.id = 'main-content';
      mainElement.setAttribute('role', 'main');
      
      // Wrap the app content
      const appContent = document.querySelector('#root > div');
      if (appContent) {
        appContent.parentNode?.insertBefore(mainElement, appContent);
        mainElement.appendChild(appContent);
      }
    }

    // Improve focus management
    const handleFocusVisible = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleFocusVisible);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleFocusVisible);
      document.removeEventListener('mousedown', handleMouseDown);
      
      // Cleanup skip link
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (existingSkipLink && existingSkipLink.parentNode) {
        existingSkipLink.parentNode.removeChild(existingSkipLink);
      }
    };
  }, []);
};
