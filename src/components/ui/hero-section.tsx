
import React from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Motion } from '@/components/ui/motion';
import { PremiumButton } from '@/components/ui/premium-button';
import { PremiumCard } from '@/components/ui/premium-card';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  children
}) => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-charcoal">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] animate-pulse" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Motion variant="fadeIn" delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
        </Motion>
        
        <Motion variant="slideUp" delay={400}>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Motion>

        <Motion variant="scale" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PremiumButton variant="primary" size="lg" glow>
              <Search className="mr-2 h-5 w-5" />
              Find Valets
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-dark">
              Learn More
            </PremiumButton>
          </div>
        </Motion>

        {children && (
          <Motion variant="slideUp" delay={800}>
            {children}
          </Motion>
        )}
      </div>
    </div>
  );
};
