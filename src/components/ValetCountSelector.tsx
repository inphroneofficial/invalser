import React from 'react';
import { PremiumCard } from "@/components/ui/premium-card";
import { Users, Plus, Minus } from "lucide-react";
import { Motion } from "@/components/ui/motion";
import { PremiumButton } from "@/components/ui/premium-button";

interface ValetCountSelectorProps {
  count: number;
  onCountChange: (count: number) => void;
  maxCount?: number;
}

const ValetCountSelector: React.FC<ValetCountSelectorProps> = ({ 
  count, 
  onCountChange,
  maxCount = 10
}) => {
  const increment = () => {
    if (count < maxCount) {
      onCountChange(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      onCountChange(count - 1);
    }
  };

  return (
    <Motion variant="slideUp" delay={200}>
      <PremiumCard variant="glass" className="p-3 sm:p-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Title Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex-shrink-0">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm sm:text-lg text-foreground">
                Number of Valets
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Select how many valet professionals you need
              </p>
            </div>
          </div>
          
          {/* Counter Controls - Always below title */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 py-2">
            <PremiumButton
              variant="outline"
              size="sm"
              onClick={decrement}
              disabled={count <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full flex-shrink-0 text-lg font-bold"
            >
              <Minus className="h-5 w-5" />
            </PremiumButton>
            
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl px-6 sm:px-8 py-3 sm:py-4 min-w-[70px] sm:min-w-[80px] text-center">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">
                {count}
              </span>
            </div>
            
            <PremiumButton
              variant="outline"
              size="sm"
              onClick={increment}
              disabled={count >= maxCount}
              className="w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full flex-shrink-0 text-lg font-bold"
            >
              <Plus className="h-5 w-5" />
            </PremiumButton>
          </div>
        </div>
        
        {count > 1 && (
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-info/10 rounded-lg border border-info/20">
            <p className="text-xs sm:text-sm text-info">
              <strong>Multiple Valets:</strong> Perfect for larger events or extended service hours.
            </p>
          </div>
        )}
      </PremiumCard>
    </Motion>
  );
};

export default ValetCountSelector;
