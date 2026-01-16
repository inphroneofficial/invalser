import React from "react";
import { Car, Key, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = 'md', 
  showText = true,
  className 
}) => {
  const sizeClasses = {
    sm: {
      container: 'gap-1.5',
      icon: 'w-5 h-5',
      iconSmall: 'w-2.5 h-2.5',
      text: 'text-lg',
      iconContainer: 'w-7 h-7'
    },
    md: {
      container: 'gap-2',
      icon: 'w-6 h-6',
      iconSmall: 'w-3 h-3',
      text: 'text-2xl sm:text-3xl',
      iconContainer: 'w-9 h-9'
    },
    lg: {
      container: 'gap-3',
      icon: 'w-8 h-8',
      iconSmall: 'w-4 h-4',
      text: 'text-4xl sm:text-5xl',
      iconContainer: 'w-12 h-12'
    }
  };

  const sizes = sizeClasses[size];

  return (
    <div className={cn("flex items-center", sizes.container, className)}>
      {/* Animated Icon Container */}
      <div className={cn(
        "relative flex items-center justify-center",
        sizes.iconContainer
      )}>
        {/* Background glow */}
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md animate-pulse" />
        
        {/* Main car icon */}
        <Car className={cn(
          "relative text-primary animate-bounce-gentle z-10",
          sizes.icon
        )} />
        
        {/* Orbiting key */}
        <div 
          className="absolute animate-spin-slow" 
          style={{ animationDuration: '6s' }}
        >
          <Key className={cn("text-primary/60", sizes.iconSmall)} />
        </div>
        
        {/* Sparkle effect */}
        <Sparkles 
          className={cn(
            "absolute -top-0.5 -right-0.5 text-primary/50 animate-pulse",
            sizes.iconSmall
          )} 
        />
        
        {/* Shield accent */}
        <div className="absolute -bottom-0.5 -left-0.5">
          <Shield className={cn("text-accent/60 animate-pulse", sizes.iconSmall)} />
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <span className={cn(
          "font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent tracking-tight",
          sizes.text
        )}>
          INVALSER
        </span>
      )}
    </div>
  );
};

// Compact version for loading screens
export const AnimatedLogoCompact: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative inline-flex items-center gap-2", className)}>
      {/* Icon with animation */}
      <div className="relative">
        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20">
          <Car className="w-5 h-5 text-primary animate-bounce-gentle" />
          <Key className="absolute -top-1 -right-1 w-3 h-3 text-primary/60 animate-spin-slow" style={{ animationDuration: '8s' }} />
        </div>
      </div>
      
      {/* Text */}
      <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
        INVALSER
      </span>
    </div>
  );
};
