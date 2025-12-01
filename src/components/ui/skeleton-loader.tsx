import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  animation = 'pulse' 
}: SkeletonProps) {
  const baseClasses = 'bg-muted';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'loading-shimmer',
    none: '',
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <Card className="p-6 space-y-4 animate-fade-in">
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" className="h-12 w-12" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" className="h-4 w-3/4" />
          <Skeleton variant="text" className="h-3 w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="h-3 w-full" />
        <Skeleton variant="text" className="h-3 w-5/6" />
        <Skeleton variant="text" className="h-3 w-4/6" />
      </div>
      <div className="flex justify-between pt-4">
        <Skeleton variant="rounded" className="h-10 w-24" />
        <Skeleton variant="rounded" className="h-10 w-24" />
      </div>
    </Card>
  );
}

export function HeroSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-4">
        <Skeleton variant="text" className="h-12 w-3/4 mx-auto" />
        <Skeleton variant="text" className="h-6 w-1/2 mx-auto" />
      </div>
      <Card className="p-6 space-y-4">
        <Skeleton variant="rounded" className="h-12 w-full" />
        <Skeleton variant="rounded" className="h-12 w-full" />
        <Skeleton variant="rounded" className="h-12 w-full" />
      </Card>
    </div>
  );
}

export function ProviderCardSkeleton() {
  return (
    <Card className="overflow-hidden animate-fade-in">
      <Skeleton variant="rectangular" className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <Skeleton variant="text" className="h-6 w-3/4" />
            <Skeleton variant="text" className="h-4 w-1/2" />
          </div>
          <Skeleton variant="circular" className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" className="h-3 w-full" />
          <Skeleton variant="text" className="h-3 w-5/6" />
        </div>
        <div className="flex gap-2">
          <Skeleton variant="rounded" className="h-8 w-20" />
          <Skeleton variant="rounded" className="h-8 w-20" />
          <Skeleton variant="rounded" className="h-8 w-20" />
        </div>
        <Skeleton variant="rounded" className="h-11 w-full" />
      </div>
    </Card>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3 animate-fade-in">
      <Skeleton variant="rounded" className="h-10 w-full" />
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} variant="rounded" className="h-16 w-full" />
      ))}
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-24" />
        <Skeleton variant="rounded" className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-24" />
        <Skeleton variant="rounded" className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-24" />
        <Skeleton variant="rounded" className="h-24 w-full" />
      </div>
      <Skeleton variant="rounded" className="h-11 w-full" />
    </div>
  );
}
