
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  glow = false,
  asChild = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-ice-blue-600 via-ice-blue-500 to-ice-blue-600 hover:from-ice-blue-700 hover:via-ice-blue-600 hover:to-ice-blue-700 text-white shadow-premium hover:shadow-glow-blue dark:from-ice-blue-500 dark:via-ice-blue-400 dark:to-ice-blue-500 dark:hover:from-ice-blue-600 dark:hover:via-ice-blue-500 dark:hover:to-ice-blue-600',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-premium hover:shadow-xl dark:from-slate-500 dark:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-700',
    outline: 'border-2 border-ice-blue-500 text-ice-blue-700 hover:bg-ice-blue-50 hover:border-ice-blue-600 dark:border-ice-blue-400 dark:text-ice-blue-300 dark:hover:bg-ice-blue-900/30 dark:hover:border-ice-blue-300 shadow-soft hover:shadow-premium',
    ghost: 'text-slate-700 dark:text-slate-200 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/20 hover:text-ice-blue-700 dark:hover:text-ice-blue-300',
    gradient: 'bg-gradient-to-br from-ice-blue-600 via-blue-500 to-indigo-500 text-white hover:from-ice-blue-700 hover:via-blue-600 hover:to-indigo-600 shadow-premium hover:shadow-glow-blue'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs h-9 rounded-lg',
    md: 'px-6 py-2.5 text-sm h-11 rounded-xl',
    lg: 'px-8 py-3 text-base h-14 rounded-xl',
    xl: 'px-10 py-4 text-lg h-16 rounded-2xl'
  };

  const glowClass = glow ? 'animate-glow-blue ring-2 ring-ice-blue-400/30 ring-offset-2' : '';

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-ice-blue-500/30 dark:focus:ring-ice-blue-400/30 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none whitespace-nowrap gap-2',
        variants[variant],
        sizes[size],
        glowClass,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
