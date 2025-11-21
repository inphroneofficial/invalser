
import React from 'react';
import { cn } from '@/lib/utils';

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
          'animate-spin rounded-full border-2 border-gray-300 border-t-ice-blue-600',
          sizes[size]
        )} />
        {text && (
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export const PageLoading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center space-y-6">
        {/* Simple animated logo */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg animate-fade-in">
            <span className="font-bold text-white text-3xl">FV</span>
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">invalser</h1>
          <p className="text-muted-foreground text-sm">Loading your experience...</p>
        </div>

        {/* Simple loading dots */}
        <div className="flex items-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
