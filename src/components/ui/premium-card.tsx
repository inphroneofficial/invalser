
import React from 'react';
import { cn } from '@/lib/utils';

interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  glow?: boolean;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  className,
  variant = 'default',
  glow = false,
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700',
    glass: 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-ice-blue-200/30 dark:border-ice-blue-700/30 shadow-premium dark:shadow-premium-dark',
    gradient: 'bg-gradient-to-br from-white via-ice-blue-50/30 to-ice-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-ice-blue-200/50 dark:border-ice-blue-700/40',
    elevated: 'bg-white dark:bg-slate-900 border border-ice-blue-200 dark:border-slate-700 shadow-premium dark:shadow-premium-dark'
  };

  const glowClass = glow ? 'shadow-glow-blue ring-1 ring-ice-blue-500/20 dark:ring-ice-blue-400/30' : '';

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-3xl',
        variants[variant],
        glowClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
