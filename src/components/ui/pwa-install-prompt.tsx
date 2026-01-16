import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Share, Smartphone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import { useHaptic } from '@/hooks/use-haptic';
import { cn } from '@/lib/utils';

interface PWAInstallPromptProps {
  className?: string;
  showOnLoad?: boolean;
  delay?: number;
}

export function PWAInstallPrompt({ 
  className, 
  showOnLoad = true,
  delay = 3000 
}: PWAInstallPromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const { 
    isInstallable, 
    isInstalled, 
    isIOS, 
    canPrompt, 
    promptInstall,
    getInstallInstructions 
  } = usePWAInstall();
  const { tap, success } = useHaptic();

  useEffect(() => {
    if (!showOnLoad || isInstalled) return;

    // Check if user dismissed recently
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) return; // Don't show for 24 hours
    }

    // Show prompt after delay if installable or on iOS
    const timer = setTimeout(() => {
      if (isInstallable || isIOS) {
        setIsVisible(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [showOnLoad, isInstallable, isInstalled, isIOS, delay]);

  const handleInstall = async () => {
    tap();
    
    if (canPrompt) {
      const installed = await promptInstall();
      if (installed) {
        success();
        setIsVisible(false);
      }
    } else if (isIOS) {
      setShowInstructions(true);
    }
  };

  const handleDismiss = () => {
    tap();
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    setIsVisible(false);
  };

  const instructions = getInstallInstructions();

  if (isInstalled) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={cn(
            "fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50",
            "bg-card/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl",
            "p-4 md:p-5",
            className
          )}
        >
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {!showInstructions ? (
            <>
              {/* Header */}
              <div className="flex items-start gap-3 mb-4 pr-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">
                    Install INVALSER
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Get the app for a better experience
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-4">
                {[
                  'Works offline',
                  'Faster loading',
                  'Easy access from home screen',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="gradient"
                  size="sm"
                  className="flex-1"
                  onClick={handleInstall}
                >
                  {isIOS ? (
                    <>
                      <Share className="w-4 h-4 mr-2" />
                      How to Install
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Install Now
                    </>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDismiss}
                >
                  Later
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* iOS Instructions */}
              <div className="pr-6">
                <h3 className="font-display font-bold text-foreground mb-3">
                  Install on {instructions.platform}
                </h3>
                <ol className="space-y-3">
                  {instructions.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-medium flex items-center justify-center flex-shrink-0 text-xs">
                        {i + 1}
                      </span>
                      <span className="text-foreground/80 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => setShowInstructions(false)}
                >
                  Got it
                </Button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Compact install button for navbar
export function PWAInstallButton({ className }: { className?: string }) {
  const { isInstallable, isInstalled, isIOS, canPrompt, promptInstall } = usePWAInstall();
  const { tap, success } = useHaptic();
  const [showTooltip, setShowTooltip] = useState(false);

  if (isInstalled) return null;
  if (!isInstallable && !isIOS) return null;

  const handleClick = async () => {
    tap();
    if (canPrompt) {
      const installed = await promptInstall();
      if (installed) {
        success();
      }
    } else {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className={cn("relative", className)}
        onClick={handleClick}
        aria-label="Install app"
      >
        <Download className="w-4 h-4" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
      </Button>
      
      <AnimatePresence>
        {showTooltip && isIOS && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-0 mt-2 p-2 sm:p-3 bg-card border border-border rounded-lg shadow-lg text-xs z-50 max-w-[200px] sm:max-w-none"
          >
            <span className="flex items-center flex-wrap gap-1">
              Tap <Share className="w-3 h-3 inline" /> then "Add to Home Screen"
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
