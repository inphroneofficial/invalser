import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PullToRefreshIndicatorProps {
  pullDistance: number;
  isRefreshing: boolean;
  progress: number;
  threshold?: number;
}

export const PullToRefreshIndicator: React.FC<PullToRefreshIndicatorProps> = ({
  pullDistance,
  isRefreshing,
  progress,
  threshold = 80,
}) => {
  const shouldShow = pullDistance > 10 || isRefreshing;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: Math.min(pullDistance, threshold) - 50,
          }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <motion.div
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full",
              "bg-card border border-border shadow-lg backdrop-blur-sm",
              progress >= 1 && "bg-primary/10 border-primary/30"
            )}
            animate={{
              scale: isRefreshing ? 1 : 0.8 + progress * 0.2,
            }}
          >
            <motion.div
              animate={{
                rotate: isRefreshing ? 360 : progress * 180,
              }}
              transition={{
                rotate: isRefreshing 
                  ? { repeat: Infinity, duration: 1, ease: "linear" }
                  : { duration: 0.1 }
              }}
            >
              <RefreshCw 
                className={cn(
                  "w-5 h-5 transition-colors",
                  progress >= 1 || isRefreshing 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )} 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
