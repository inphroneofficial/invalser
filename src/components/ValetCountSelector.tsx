
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
      <PremiumCard variant="glass" className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 dark:from-blue-500/10 dark:to-blue-500/5">
              <Users className="h-6 w-6 text-gold dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-dark dark:text-white">
                Number of Valets
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Select how many valet professionals you need
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <PremiumButton
              variant="outline"
              size="sm"
              onClick={decrement}
              disabled={count <= 1}
              className="w-10 h-10 p-0 rounded-full"
            >
              <Minus className="h-4 w-4" />
            </PremiumButton>
            
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 dark:from-blue-500/20 dark:to-blue-500/10 rounded-xl px-6 py-3 min-w-[60px] text-center">
              <span className="text-2xl font-bold text-navy-dark dark:text-white">
                {count}
              </span>
            </div>
            
            <PremiumButton
              variant="outline"
              size="sm"
              onClick={increment}
              disabled={count >= maxCount}
              className="w-10 h-10 p-0 rounded-full"
            >
              <Plus className="h-4 w-4" />
            </PremiumButton>
          </div>
        </div>
        
        {count > 1 && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Multiple Valets:</strong> Perfect for larger events or extended service hours. 
              Each additional valet ensures better coverage and service quality.
            </p>
          </div>
        )}
      </PremiumCard>
    </Motion>
  );
};

export default ValetCountSelector;
