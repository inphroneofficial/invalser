
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { Motion } from "@/components/ui/motion";
import { indianCities } from "@/data/cityData";
import { Search, MapPin, Target, Navigation, Loader2, AlertCircle } from "lucide-react";
import locationService, { LocationData, LocationError } from "@/services/locationService";
import { toast } from "sonner";

interface SearchFormProps {
  onSearch: (query: string, city: string, state: string, area: string) => void;
  initialCity?: string;
  initialState?: string;
  initialArea?: string;
  initialQuery?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  initialCity = "",
  initialState = "",
  initialArea = "",
  initialQuery = ""
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  useEffect(() => {
    setSearchQuery(initialQuery);
    setSelectedCity(initialCity);
    setSelectedArea(initialArea);
  }, [initialQuery, initialCity, initialArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCity, initialState, selectedArea);
  };

  const handleGetCurrentLocation = async () => {
    if (!locationService.isLocationAvailable()) {
      toast.error("Location services are not available on this device");
      return;
    }

    setIsGettingLocation(true);
    console.log("Starting location detection...");

    try {
      const location: LocationData = await locationService.getCurrentLocation();
      console.log("Location received:", location);
      
      if (location.city) {
        setSelectedCity(location.city);
        console.log("City set to:", location.city);
      }
      
      // Enhanced area detection - try multiple fields
      let detectedArea = "";
      if (location.area) {
        detectedArea = location.area;
      } else if (location.suburb) {
        detectedArea = location.suburb;
      } else if (location.neighbourhood) {
        detectedArea = location.neighbourhood;
      } else if (location.quarter) {
        detectedArea = location.quarter;
      }
      
      if (detectedArea) {
        setSelectedArea(detectedArea);
        console.log("Area set to:", detectedArea);
      }

      const locationMessage = `Location detected: ${location.city || 'Unknown city'}${detectedArea ? `, ${detectedArea}` : ''}`;
      toast.success(locationMessage);

      // Automatically search with detected location
      onSearch(searchQuery, location.city || selectedCity, location.state || initialState, detectedArea || selectedArea);

    } catch (error) {
      const locationError = error as LocationError;
      console.error('Location error:', locationError);
      
      let errorMessage = "Unable to get your location";
      if (locationError.code === 1) {
        errorMessage = "Please allow location access in your browser settings";
      } else if (locationError.code === 2) {
        errorMessage = "Location services are currently unavailable";
      } else if (locationError.code === 3) {
        errorMessage = "Location detection timed out. Please try again";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsGettingLocation(false);
    }
  };

  return (
    <Motion variant="scale" delay={200}>
      <PremiumCard variant="glass" className="w-full max-w-7xl mx-auto p-3 sm:p-4 lg:p-6 mb-6 sm:mb-8 bg-white/98 dark:bg-slate-900/98 border-ice-blue-200 dark:border-ice-blue-700 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Mobile-first responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
            {/* Search Input - Full width on mobile, 2 cols on large screens */}
            <div className="sm:col-span-2 lg:col-span-2 relative">
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, area, or provider..."
                className="pl-8 sm:pl-10 lg:pl-12 h-9 sm:h-10 lg:h-12 bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:ring-2 focus:ring-ice-blue-500/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-xs sm:text-sm lg:text-base"
              />
            </div>
            
            {/* City Select */}
            <div className="relative">
              <MapPin className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 z-10" />
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="pl-8 sm:pl-10 lg:pl-12 h-9 sm:h-10 lg:h-12 bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 text-slate-900 dark:text-white text-xs sm:text-sm lg:text-base">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 shadow-xl z-50 max-h-60 overflow-y-auto">
                  <SelectItem value="all-cities" className="text-slate-900 dark:text-white text-xs sm:text-sm lg:text-base">All Cities</SelectItem>
                  {indianCities.map((city) => (
                    <SelectItem key={city.name} value={city.name} className="text-slate-900 dark:text-white text-xs sm:text-sm lg:text-base">
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Area Input */}
            <div className="relative">
              <Input
                type="text"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                placeholder="Enter area/locality..."
                className="h-9 sm:h-10 lg:h-12 bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:ring-2 focus:ring-ice-blue-500/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-xs sm:text-sm lg:text-base px-2 sm:px-3"
              />
            </div>
            
            {/* Location Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <PremiumButton 
                type="button" 
                variant="outline" 
                className="w-full h-9 sm:h-10 lg:h-12 border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-700 dark:text-ice-blue-300 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 text-xs sm:text-sm px-2 sm:px-3 lg:px-4"
                onClick={handleGetCurrentLocation}
                disabled={isGettingLocation}
              >
                {isGettingLocation ? (
                  <>
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-spin" />
                    <span className="hidden sm:inline">Detecting...</span>
                    <span className="sm:hidden">...</span>
                  </>
                ) : (
                  <>
                    <Navigation className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden lg:inline">Use Location</span>
                    <span className="lg:hidden">Location</span>
                  </>
                )}
              </PremiumButton>
            </div>
            
            {/* Search Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <PremiumButton 
                type="submit" 
                variant="primary" 
                className="w-full h-9 sm:h-10 lg:h-12 btn-text-visible text-xs sm:text-sm px-2 sm:px-3 lg:px-4"
              >
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden lg:inline">Search</span>
                <span className="lg:hidden">Find</span>
              </PremiumButton>
            </div>
          </div>
          
          {/* Location Detection Info */}
          {!isGettingLocation && selectedArea && (
            <div className="flex items-center gap-2 text-xs text-ice-blue-600 dark:text-ice-blue-400 bg-ice-blue-50/50 dark:bg-ice-blue-900/20 p-2 rounded-md">
              <AlertCircle className="h-3 w-3" />
              <span>Area detected: {selectedArea}</span>
            </div>
          )}
        </form>
      </PremiumCard>
    </Motion>
  );
};
