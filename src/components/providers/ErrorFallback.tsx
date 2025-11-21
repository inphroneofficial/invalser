
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { PremiumButton } from '@/components/ui/premium-button';
import { PremiumCard } from '@/components/ui/premium-card';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-ice-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <PremiumCard variant="glass" className="max-w-md w-full text-center p-8">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We encountered an unexpected error. Please try refreshing the page or go back to the home page.
        </p>
        
        {error && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer mb-2">
              Error Details
            </summary>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs text-gray-700 dark:text-gray-300 font-mono overflow-auto">
              {error.message}
            </div>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          {resetErrorBoundary && (
            <PremiumButton
              onClick={resetErrorBoundary}
              variant="primary"
              className="flex-1"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </PremiumButton>
          )}
          
          <PremiumButton
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="flex-1"
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </PremiumButton>
        </div>
      </PremiumCard>
    </div>
  );
};
