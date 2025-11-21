
import React from "react";
import { PremiumCard } from "@/components/ui/premium-card";
import { Motion } from "@/components/ui/motion";
import { Users, Star, Award } from "lucide-react";
import { LocationMatchResult } from "@/types/provider";

interface StatsSectionProps {
  matchResult: LocationMatchResult;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ matchResult }) => {
  const stats = {
    totalProviders: matchResult.providers.length,
    avgRating: matchResult.providers.length > 0 ? 
      (matchResult.providers.reduce((sum, p) => sum + p.rating, 0) / matchResult.providers.length).toFixed(1) : '0',
    verifiedCount: matchResult.providers.filter(p => p.verified).length
  };

  return (
    <Motion variant="slideUp" delay={200}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <PremiumCard variant="glass" className="text-center p-6">
          <Users className="h-8 w-8 text-ice-blue dark:text-ice-blue-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalProviders}</div>
          <div className="text-gray-600 dark:text-gray-400">Matched Providers</div>
        </PremiumCard>
        
        <PremiumCard variant="glass" className="text-center p-6">
          <Star className="h-8 w-8 text-ice-blue dark:text-ice-blue-400 mx-auto mb-3 fill-current" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.avgRating}</div>
          <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
        </PremiumCard>
        
        <PremiumCard variant="glass" className="text-center p-6">
          <Award className="h-8 w-8 text-ice-blue dark:text-ice-blue-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.verifiedCount}</div>
          <div className="text-gray-600 dark:text-gray-400">Verified Providers</div>
        </PremiumCard>
      </div>
    </Motion>
  );
};
