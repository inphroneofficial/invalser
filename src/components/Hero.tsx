
import React from "react";
import { Motion } from "@/components/ui/motion";
import { ChevronDown, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBackground from "./hero/HeroBackground";
import HeroHeader from "./hero/HeroHeader";
import HeroUSP from "./hero/HeroUSP";
import HeroSearchForm from "./hero/HeroSearchForm";
import HeroWhyChooseUs from "./hero/HeroWhyChooseUs";
import HeroSocialProof from "./hero/HeroSocialProof";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <HeroBackground />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <HeroHeader />
          
          {/* Enhanced Service Provider Registration CTA - Positioned after title */}
          <Motion variant="fadeIn" delay={800}>
            <div className="flex justify-center mb-8">
              <Link to="/registration">
                <Button 
                  className="bg-gradient-to-r from-ice-blue-500 to-blue-600 hover:from-ice-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse group"
                >
                  <UserPlus className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  <span className="text-sm">Register Your Service</span>
                </Button>
              </Link>
            </div>
          </Motion>
          
          <HeroUSP />
          <HeroSearchForm />
          <HeroWhyChooseUs />
          <HeroSocialProof />
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <Motion variant="fadeIn" delay={1200}>
          <div className="flex flex-col items-center gap-4 text-white/80">
            {/* Service Provider Registration Prompt */}
            <div 
              onClick={() => scrollToSection('service-provider-cta')}
              className="cursor-pointer group animate-bounce-gentle hover:animate-pulse"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-center px-3 py-2 bg-gradient-to-r from-ice-blue-600/80 to-blue-600/80 rounded-full backdrop-blur-sm hover:from-ice-blue-500/90 hover:to-blue-500/90 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  Want to offer your services?
                </span>
                <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-ice-blue-400 animate-bounce-gentle group-hover:animate-pulse group-hover:text-ice-blue-300 transition-colors duration-300" />
              </div>
            </div>
            
            {/* General Scroll Indicator */}
            <div className="flex items-center gap-3 text-white/60 text-xs sm:text-sm animate-fade-in" style={{ animationDelay: '1500ms' }}>
              <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-shimmer"></div>
              <span className="animate-pulse hidden sm:inline">Scroll to explore our services</span>
              <span className="animate-pulse sm:hidden">Explore services</span>
              <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
