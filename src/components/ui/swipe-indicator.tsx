import React from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SwipeIndicatorProps {
  routes?: string[];
  className?: string;
}

const DEFAULT_ROUTES = ['/', '/providers', '/how-it-works', '/about', '/contact'];

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/providers': 'Providers',
  '/how-it-works': 'How It Works',
  '/about': 'About',
  '/contact': 'Contact',
};

export function SwipeIndicator({ routes = DEFAULT_ROUTES, className }: SwipeIndicatorProps) {
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);
  
  // Only show on valid swipe navigation routes
  if (currentIndex === -1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden",
        "flex items-center gap-2 px-4 py-2.5 rounded-full",
        "bg-card/90 backdrop-blur-xl border border-border/50 shadow-lg",
        className
      )}
    >
      {routes.map((route, index) => {
        const isActive = index === currentIndex;
        const isAdjacent = Math.abs(index - currentIndex) === 1;
        
        return (
          <motion.div
            key={route}
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={cn(
                "rounded-full transition-all duration-300",
                isActive 
                  ? "w-6 h-2.5 bg-primary shadow-glow" 
                  : isAdjacent
                    ? "w-2.5 h-2.5 bg-muted-foreground/40"
                    : "w-2 h-2 bg-muted-foreground/20"
              )}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {isActive && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground bg-card/90 backdrop-blur-sm px-2 py-1 rounded-md border border-border/50 max-w-[100px] truncate text-center"
              >
                {routeLabels[route] || route}
              </motion.span>
            )}
          </motion.div>
        );
      })}
      
      {/* Swipe hint text */}
      <motion.span 
        className="ml-2 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      >
        Swipe
      </motion.span>
    </motion.div>
  );
}
