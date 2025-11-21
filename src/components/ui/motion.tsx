
import React from 'react';
import { cn } from '@/lib/utils';

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scale' | 'float' | 'glow' | 'spin';
}

export const Motion: React.FC<MotionProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  variant = 'fadeIn',
  ...props
}) => {
  const variants = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-fade-in-up',
    slideInLeft: 'animate-slide-in-left', 
    slideInRight: 'animate-slide-in-right',
    scale: 'animate-scale-in',
    float: 'animate-float',
    glow: 'animate-glow',
    spin: 'animate-spin-slow'
  };

  return (
    <div
      className={cn(variants[variant], className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Enhanced Motion Wrapper for Complex Animations
interface AdvancedMotionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  click?: boolean;
  stagger?: boolean;
  parallax?: boolean;
}

export const AdvancedMotion: React.FC<AdvancedMotionProps> = ({
  children,
  className,
  hover = false,
  click = false,
  stagger = false,
  parallax = false,
  ...props
}) => {
  const baseClasses = cn(
    'transition-all duration-300 ease-out',
    hover && 'hover:scale-105 hover:shadow-xl hover:-translate-y-1',
    click && 'active:scale-95 active:transition-transform active:duration-75',
    stagger && 'animate-fade-in',
    parallax && 'transform-gpu',
    className
  );

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

// Staggered Animation Container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  delay = 100
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * delay}ms`,
            animationFillMode: 'both'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
