
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Car, Shield } from "lucide-react";

const HeroHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
      <div className="flex justify-center mb-4 sm:mb-6">
        <Badge 
          variant="outline" 
          className="px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium border-ice-blue-400/30 text-ice-blue-600 dark:border-blue-400/30 dark:text-blue-400 bg-white/80 dark:bg-navy-light/80 backdrop-blur-sm animate-pulse"
        >
          <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Premium Valet Services</span>
          <span className="sm:hidden">Valet</span>
          <span className="mx-1 sm:mx-2">•</span>
          <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Professional Security</span>
          <span className="sm:hidden">Security</span>
        </Badge>
      </div>
      
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight animate-fade-in drop-shadow-lg">
        Premium <span className="text-ice-blue-600 dark:text-ice-blue-400 animate-pulse">Valet</span> & 
        <span className="text-blue-700 dark:text-blue-400"> Security</span> Services
      </h1>
      
      <p className="text-base sm:text-xl md:text-2xl text-slate-800 dark:text-blue-200/80 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up px-2 font-semibold drop-shadow-md" style={{ animationDelay: '0.2s' }}>
        India's premier platform connecting you with professional valet parking and security services. 
        From luxury events to personal protection - we've got you covered.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white/90 dark:bg-navy-light/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-ice-blue-400/20 hover:border-ice-blue-400/40 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Car className="w-6 h-6 sm:w-8 sm:h-8 text-ice-blue-600 dark:text-ice-blue-400 mr-2 sm:mr-3 group-hover:animate-bounce" />
            <h3 className="text-base sm:text-lg font-semibold text-navy-dark dark:text-white">Valet Services</h3>
          </div>
          <p className="text-navy/70 dark:text-blue-200/70 text-sm sm:text-base">
            Professional valet parking for personal use, events, and commercial venues across India
          </p>
        </div>
        
        <div className="bg-white/90 dark:bg-navy-light/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 dark:text-blue-400 mr-2 sm:mr-3 group-hover:animate-bounce" />
            <h3 className="text-base sm:text-lg font-semibold text-navy-dark dark:text-white">Security Services</h3>
          </div>
          <p className="text-navy/70 dark:text-blue-200/70 text-sm sm:text-base">
            Bodyguards, bouncers, event security, and professional protection services
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
