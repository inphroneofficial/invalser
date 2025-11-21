
import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }

    // Monitor performance
    if (typeof window !== 'undefined' && 'performance' in window && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            // Log slow operations in development
            if (process.env.NODE_ENV === 'development' && entry.duration > 100) {
              console.warn('Slow operation detected:', entry.name, entry.duration);
            }
          });
        });
        
        observer.observe({ entryTypes: ['navigation', 'measure', 'paint'] });
        
        return () => {
          observer.disconnect();
        };
      } catch (error) {
        // Silently fail if PerformanceObserver is not supported
      }
    }
  }, []);
};
