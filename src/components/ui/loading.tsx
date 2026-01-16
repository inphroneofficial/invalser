import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Car, Key, Shield, Sparkles } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  className,
  text = 'Loading...'
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="flex flex-col items-center gap-3">
        <div className={cn(
          'animate-spin rounded-full border-2 border-muted border-t-primary',
          sizes[size]
        )} />
        {text && (
          <span className="text-sm text-muted-foreground">
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export const PageLoading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-8 px-4">
        {/* Logo with glow effect and animated icons */}
        <div className="relative group animate-fade-in">
          {/* Outer glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-3xl animate-pulse opacity-60"></div>
          
          {/* Animated Logo Container */}
          <div className="relative flex items-center gap-3">
            {/* Animated Icon */}
            <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 flex items-center justify-center">
                <Car className="w-7 h-7 sm:w-8 sm:h-8 text-primary animate-bounce-gentle" />
                <Key className="absolute -top-1 -right-1 w-4 h-4 text-primary/70 animate-spin-slow" style={{ animationDuration: '6s' }} />
                <Shield className="absolute -bottom-1 -left-1 w-3.5 h-3.5 text-accent/70 animate-pulse" />
                <Sparkles className="absolute top-0 right-0 w-3 h-3 text-primary/50 animate-pulse" style={{ animationDelay: '500ms' }} />
              </div>
            </div>
            
            {/* Brand text logo */}
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent tracking-tight">
              INVALSER
            </h1>
          </div>
          
          {/* Animated underline */}
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Tagline */}
        <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            Loading your experience...
          </p>
        </div>

        {/* Premium loading indicator */}
        <div className="flex items-center gap-2" style={{ animationDelay: '400ms' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-bounce shadow-lg shadow-primary/30"
              style={{ 
                animationDelay: `${i * 100}ms`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>

        {/* Subtle tagline */}
        <p className="text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '600ms' }}>
          Premium Valet Services
        </p>
      </div>
    </div>
  );
};

// App initialization loading screen
export const AppLoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-6 px-4 w-full max-w-xs">
        {/* Logo with animated icons */}
        <div className="relative flex items-center gap-2">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Animated icon */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/20">
            <Car className="w-5 h-5 text-primary animate-bounce-gentle" />
            <Key className="absolute -top-1 -right-1 w-3 h-3 text-primary/60 animate-spin-slow" style={{ animationDuration: '8s' }} />
          </div>
          
          <h1 className="relative text-2xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent tracking-tight">
            INVALSER
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            {progress < 100 ? 'Initializing...' : 'Ready!'}
          </p>
        </div>
      </div>
    </div>
  );
};
