import React from "react";
import { Car, Shield, Key, UserCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Compact Valet Animation for Cards
export const ValetAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      {/* Car with animated glow */}
      <Car className="w-7 h-7 text-primary animate-bounce-gentle" />
      
      {/* Orbiting key */}
      <div className="absolute animate-orbit" style={{ animationDuration: '4s' }}>
        <Key className="w-3 h-3 text-primary/70" />
      </div>
      
      {/* Sparkle */}
      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary/50 animate-pulse" />
    </div>
  );
};

// Compact Security Animation for Cards  
export const SecurityAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      {/* Shield with pulse */}
      <Shield className="w-7 h-7 text-accent animate-pulse" />
      
      {/* Protective rings */}
      <div className="absolute inset-0 border-2 border-accent/20 rounded-xl animate-ping" style={{ animationDuration: '2s' }} />
      
      {/* Checkmark */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-bounce-gentle">
        <span className="text-white text-[8px] font-bold">✓</span>
      </div>
    </div>
  );
};

// Animated Service Card
export const AnimatedServiceCard = ({ 
  type,
  title,
  description,
  className 
}: { 
  type: 'valet' | 'security';
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl p-6 bg-card border border-border",
      "hover:border-primary/50 hover:shadow-glow transition-all duration-500",
      className
    )}>
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated icon */}
      <div className="relative mb-4">
        {type === 'valet' ? (
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Car className="w-8 h-8 text-primary group-hover:animate-bounce-gentle" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-8 h-8 text-accent group-hover:animate-pulse" />
          </div>
        )}
        
        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float delay-200" />
      </div>
      
      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
      
      {/* Bottom line animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

// Hero Animation Component
export const HeroServiceAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      </div>
      
      {/* Orbiting elements */}
      <div className="relative h-64 animate-spin-slow">
        {/* Valet car */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
          <div className="w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-bounce-gentle">
            <Car className="w-7 h-7 text-primary" />
          </div>
        </div>
        
        {/* Security shield */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-bounce-gentle delay-200">
            <Shield className="w-7 h-7 text-accent" />
          </div>
        </div>
        
        {/* Key */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <div className="w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center animate-float">
            <Key className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        {/* Check */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <div className="w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center animate-float delay-300">
            <UserCheck className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};
