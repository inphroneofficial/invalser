
import React from "react";
import { Badge } from "@/components/ui/badge";
import { PremiumCard } from "@/components/ui/premium-card";
import { Motion } from "@/components/ui/motion";
import { LocationMatchResult } from "@/types/provider";
import { Target, AlertCircle } from "lucide-react";

interface LocationInfoProps {
  selectedCity: string;
  selectedState: string;
  selectedArea: string;
  matchResult: LocationMatchResult;
}

export const LocationInfo: React.FC<LocationInfoProps> = ({
  selectedCity,
  selectedState,
  selectedArea,
  matchResult
}) => {
  const getLocationMatchInfo = () => {
    if (!selectedCity && !selectedState && !selectedArea) return null;
    
    let matchInfo = "Results for: ";
    const parts = [];
    
    if (selectedArea) parts.push(`📍 ${selectedArea}`);
    if (selectedCity && selectedCity !== "all-cities") parts.push(`🏙️ ${selectedCity}`);
    if (selectedState) parts.push(`🗺️ ${selectedState}`);
    
    return matchInfo + parts.join(", ");
  };

  const locationInfo = getLocationMatchInfo();

  if (!locationInfo) return null;

  return (
    <>
      <Motion variant="fadeIn" delay={300}>
        <PremiumCard variant="glass" className="max-w-4xl mx-auto p-4 bg-blue-50/90 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-200 font-medium">
              {locationInfo}
            </span>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {matchResult.hasAreaMatch ? (
              <Badge className="bg-green-200 text-green-900 border-green-500 font-semibold">
                ✅ Area-specific matches found
              </Badge>
            ) : selectedArea && selectedCity && (
              <Badge className="bg-blue-200 text-blue-900 border-blue-500 font-semibold">
                🏙️ City-wide matches (area not available)
              </Badge>
            )}
          </div>
        </PremiumCard>
      </Motion>

      {matchResult.fallbackMessage && (
        <Motion variant="fadeIn" delay={400}>
          <PremiumCard variant="glass" className="max-w-4xl mx-auto p-4 bg-orange-50/90 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5" />
              <span className="text-orange-900 dark:text-orange-200 font-medium">
                {matchResult.fallbackMessage}
              </span>
            </div>
          </PremiumCard>
        </Motion>
      )}
    </>
  );
};
