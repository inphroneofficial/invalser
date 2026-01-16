import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  animation = 'pulse',
  ...props 
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-muted",
        variant === 'text' && 'h-4 rounded',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-none',
        variant === 'rounded' && 'rounded-lg',
        animation === 'pulse' && 'animate-pulse',
        animation === 'wave' && 'animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]',
        className
      )}
      {...props}
    />
  );
}

// Hero Skeleton
export function HeroSkeleton() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Skeleton variant="rounded" className="h-8 w-32 mx-auto" />
        <Skeleton variant="rounded" className="h-12 w-3/4 mx-auto" />
        <Skeleton variant="rounded" className="h-12 w-2/3 mx-auto" />
        <Skeleton variant="rounded" className="h-6 w-1/2 mx-auto" />
        <div className="flex justify-center gap-4 mt-8">
          <Skeleton variant="rounded" className="h-12 w-36" />
          <Skeleton variant="rounded" className="h-12 w-36" />
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <Skeleton variant="rounded" className="h-16 w-24" />
          <Skeleton variant="rounded" className="h-16 w-24" />
          <Skeleton variant="rounded" className="h-16 w-24" />
        </div>
      </div>
    </div>
  );
}

// Provider Card Skeleton
export function ProviderCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border/50 space-y-4">
      <div className="flex items-start gap-3">
        <Skeleton variant="circular" className="w-14 h-14 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="rounded" className="h-5 w-3/4" />
          <Skeleton variant="rounded" className="h-4 w-1/2" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton variant="rounded" className="h-6 w-16" />
        <Skeleton variant="rounded" className="h-6 w-20" />
        <Skeleton variant="rounded" className="h-6 w-14" />
      </div>
      <Skeleton variant="rounded" className="h-4 w-full" />
      <Skeleton variant="rounded" className="h-4 w-4/5" />
      <div className="flex justify-between items-center pt-2">
        <Skeleton variant="rounded" className="h-5 w-20" />
        <Skeleton variant="rounded" className="h-10 w-28" />
      </div>
    </div>
  );
}

// Card Grid Skeleton
export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProviderCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Feature Section Skeleton
export function FeatureSkeleton() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Skeleton variant="rounded" className="h-8 w-48 mx-auto" />
          <Skeleton variant="rounded" className="h-4 w-96 max-w-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center space-y-4">
              <Skeleton variant="circular" className="w-16 h-16 mx-auto" />
              <Skeleton variant="rounded" className="h-6 w-32 mx-auto" />
              <Skeleton variant="rounded" className="h-4 w-full" />
              <Skeleton variant="rounded" className="h-4 w-4/5 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Form Skeleton
export function FormSkeleton() {
  return (
    <div className="space-y-6 max-w-md mx-auto p-6 bg-card rounded-2xl border border-border/50">
      <div className="space-y-2">
        <Skeleton variant="rounded" className="h-4 w-20" />
        <Skeleton variant="rounded" className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="rounded" className="h-4 w-24" />
        <Skeleton variant="rounded" className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="rounded" className="h-4 w-16" />
        <Skeleton variant="rounded" className="h-24 w-full" />
      </div>
      <Skeleton variant="rounded" className="h-12 w-full" />
    </div>
  );
}

// Page Skeleton - Full page loading
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar skeleton */}
      <div className="h-16 sm:h-20 border-b border-border/50 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton variant="rounded" className="w-10 h-10" />
          <Skeleton variant="rounded" className="h-6 w-24" />
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="rounded" className="h-4 w-16" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Skeleton variant="rounded" className="h-9 w-24" />
          <Skeleton variant="rounded" className="h-9 w-24" />
        </div>
      </div>
      
      {/* Content skeleton */}
      <HeroSkeleton />
      <FeatureSkeleton />
    </div>
  );
}

// Testimonial Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" className="w-12 h-12" />
        <div className="space-y-2">
          <Skeleton variant="rounded" className="h-4 w-32" />
          <Skeleton variant="rounded" className="h-3 w-24" />
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="circular" className="w-4 h-4" />
        ))}
      </div>
      <Skeleton variant="rounded" className="h-4 w-full" />
      <Skeleton variant="rounded" className="h-4 w-5/6" />
      <Skeleton variant="rounded" className="h-4 w-4/6" />
    </div>
  );
}
