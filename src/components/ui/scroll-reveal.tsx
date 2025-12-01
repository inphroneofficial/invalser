import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'bounce';
  delay?: number;
  duration?: number;
}

const variantClasses = {
  fade: 'opacity-0 transition-opacity',
  'slide-up': 'opacity-0 translate-y-10 transition-all',
  'slide-left': 'opacity-0 -translate-x-10 transition-all',
  'slide-right': 'opacity-0 translate-x-10 transition-all',
  zoom: 'opacity-0 scale-90 transition-all',
  bounce: 'opacity-0 scale-95 transition-all',
};

const variantVisibleClasses = {
  fade: 'opacity-100',
  'slide-up': 'opacity-100 translate-y-0',
  'slide-left': 'opacity-100 translate-x-0',
  'slide-right': 'opacity-100 translate-x-0',
  zoom: 'opacity-100 scale-100',
  bounce: 'opacity-100 scale-100',
};

export function ScrollReveal({
  children,
  className,
  variant = 'fade',
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        variantClasses[variant],
        isVisible && variantVisibleClasses[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
