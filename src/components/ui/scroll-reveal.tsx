import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'bounce' | 'flip' | 'rotate' | 'blur' | 'spring';
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

const variantClasses: Record<string, string> = {
  fade: 'opacity-0',
  'slide-up': 'opacity-0 translate-y-8',
  'slide-left': 'opacity-0 -translate-x-8',
  'slide-right': 'opacity-0 translate-x-8',
  zoom: 'opacity-0 scale-90',
  bounce: 'opacity-0 scale-95 translate-y-4',
  flip: 'opacity-0 perspective-1000 [transform:rotateX(-15deg)]',
  rotate: 'opacity-0 rotate-6',
  blur: 'opacity-0 blur-sm',
  spring: 'opacity-0 scale-90 translate-y-4',
};

const variantVisibleClasses: Record<string, string> = {
  fade: 'opacity-100',
  'slide-up': 'opacity-100 translate-y-0',
  'slide-left': 'opacity-100 translate-x-0',
  'slide-right': 'opacity-100 translate-x-0',
  zoom: 'opacity-100 scale-100',
  bounce: 'opacity-100 scale-100 translate-y-0',
  flip: 'opacity-100 [transform:rotateX(0deg)]',
  rotate: 'opacity-100 rotate-0',
  blur: 'opacity-100 blur-0',
  spring: 'opacity-100 scale-100 translate-y-0',
};

const variantEasing: Record<string, string> = {
  fade: 'cubic-bezier(0.4, 0, 0.2, 1)',
  'slide-up': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'slide-left': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'slide-right': 'cubic-bezier(0.16, 1, 0.3, 1)',
  zoom: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  flip: 'cubic-bezier(0.4, 0, 0.2, 1)',
  rotate: 'cubic-bezier(0.4, 0, 0.2, 1)',
  blur: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export function ScrollReveal({
  children,
  className,
  variant = 'fade',
  delay = 0,
  duration = 700,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: once });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all will-change-transform',
        variantClasses[variant],
        isVisible && variantVisibleClasses[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay + stagger}ms`,
        transitionTimingFunction: variantEasing[variant] || 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

// Staggered children reveal
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom';
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
}

export function StaggerReveal({
  children,
  className,
  variant = 'slide-up',
  baseDelay = 0,
  staggerDelay = 100,
  duration = 600,
}: StaggerRevealProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          key={index}
          variant={variant}
          delay={baseDelay}
          stagger={index * staggerDelay}
          duration={duration}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
