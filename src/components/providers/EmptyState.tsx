
import React from "react";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { Motion } from "@/components/ui/motion";
import { Target } from "lucide-react";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <Motion variant="fadeIn">
      <PremiumCard variant="glass" className="text-center py-16">
        <div className="mb-6">
          <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Services Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            We couldn't find any valet services matching your criteria. 
            Try selecting a different city or removing the area filter.
          </p>
        </div>
        <PremiumButton variant="outline" onClick={onClearFilters}>
          Clear All Filters
        </PremiumButton>
      </PremiumCard>
    </Motion>
  );
};
