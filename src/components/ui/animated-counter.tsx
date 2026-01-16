import React from 'react';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  className,
  children,
}: AnimatedCounterProps) {
  const { ref, displayValue } = useAnimatedCounter({
    end,
    duration,
    delay,
    suffix,
    prefix,
  });

  return (
    <div ref={ref} className={cn('inline-flex items-center gap-1', className)}>
      <span>{displayValue}</span>
      {children}
    </div>
  );
}
