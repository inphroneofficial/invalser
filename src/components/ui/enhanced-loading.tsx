
import React from 'react';
import { Motion } from '@/components/ui/motion';

interface EnhancedLoadingProps {
  message?: string;
  showProgress?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = "Loading...",
  showProgress = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-24',
    md: 'h-48',
    lg: 'h-72'
  };

  const spinnerSizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10', 
    lg: 'w-14 h-14'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${sizeClasses[size]} p-6`}>
      <Motion variant="scale" className="mb-4">
        <div className={`${spinnerSizes[size]} border-3 border-muted border-t-primary rounded-full animate-spin`} />
      </Motion>
      
      <Motion variant="fadeIn" delay={100}>
        <p className="text-muted-foreground text-center font-medium">
          {message}
        </p>
      </Motion>

      {showProgress && (
        <Motion variant="fadeIn" delay={200}>
          <div className="w-40 h-1.5 bg-muted rounded-full overflow-hidden mt-3">
            <div className="h-full bg-primary rounded-full animate-pulse" />
          </div>
        </Motion>
      )}
    </div>
  );
};
