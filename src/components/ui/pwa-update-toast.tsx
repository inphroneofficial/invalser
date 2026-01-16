import React, { useEffect, useState } from 'react';
import { RefreshCw, X, Sparkles } from 'lucide-react';
import { usePWAUpdate } from '@/hooks/use-pwa-update';
import { cn } from '@/lib/utils';

interface PWAUpdateToastProps {
  className?: string;
}

export const PWAUpdateToast: React.FC<PWAUpdateToastProps> = ({ className }) => {
  const { hasUpdate, applyUpdate, dismissUpdate } = usePWAUpdate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (hasUpdate) {
      // Delay showing for smoother UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasUpdate]);

  const handleUpdate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      applyUpdate();
    }, 500);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      dismissUpdate();
    }, 300);
  };

  if (!hasUpdate || !isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50',
        'animate-fade-in',
        className
      )}
    >
      <div className="bg-card/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-2xl shadow-primary/10">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm">
              Update Available
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              A new version of INVALSER is ready. Refresh to get the latest features.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleUpdate}
                disabled={isAnimating}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium',
                  'bg-primary text-primary-foreground rounded-lg',
                  'hover:bg-primary/90 transition-all duration-200',
                  'active:scale-95 disabled:opacity-50',
                  isAnimating && 'animate-pulse'
                )}
              >
                <RefreshCw className={cn('w-3.5 h-3.5', isAnimating && 'animate-spin')} />
                {isAnimating ? 'Updating...' : 'Refresh Now'}
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Later
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
