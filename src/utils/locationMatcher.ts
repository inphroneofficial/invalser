
import { ServiceProvider, LocationMatchResult } from "@/types/provider";
import { providers } from "@/data/providers";

export const getProvidersByLocation = (city?: string, state?: string, area?: string): LocationMatchResult => {
  console.log("Location matching input:", { city, state, area });

  if (!city && !state && !area) {
    return {
      providers: providers.sort((a, b) => b.rating - a.rating),
      hasAreaMatch: false
    };
  }

  // Normalize input
  const normalizedCity = city?.toLowerCase().trim();
  const normalizedState = state?.toLowerCase().trim();
  const normalizedArea = area?.toLowerCase().trim();

  // Step 1: Filter by city first (strict city matching)
  let cityFilteredProviders = providers;
  if (normalizedCity && normalizedCity !== "all-cities") {
    cityFilteredProviders = providers.filter(provider => {
      const [providerCity, providerState] = provider.location.split(', ').map(s => s.toLowerCase().trim());
      
      // Match city name exactly or as substring
      const cityMatch = providerCity === normalizedCity || 
                        providerCity.includes(normalizedCity) || 
                        normalizedCity.includes(providerCity);
      
      // Optionally match state if provided
      const stateMatch = !normalizedState || 
                         (providerState && (providerState === normalizedState || 
                          providerState.includes(normalizedState)));
      
      return cityMatch && stateMatch;
    });
    console.log(`City '${city}' filtered providers:`, cityFilteredProviders.length);
  }

  // Step 2: If area is specified, try to find area-specific matches within the city
  if (normalizedArea && cityFilteredProviders.length > 0) {
    const areaMatches = cityFilteredProviders.filter(provider => {
      if (!provider.areas) return false;
      
      return provider.areas.some(providerArea => {
        const normalizedProviderArea = providerArea.toLowerCase().trim();
        
        // Exact match
        if (normalizedProviderArea === normalizedArea) return true;
        
        // Contains match (both ways)
        if (normalizedProviderArea.includes(normalizedArea) || normalizedArea.includes(normalizedProviderArea)) return true;
        
        // Word-based fuzzy matching
        const areaWords = normalizedArea.split(/\s+/);
        const providerWords = normalizedProviderArea.split(/\s+/);
        
        return areaWords.some(word => 
          word.length > 2 && providerWords.some(pWord => 
            pWord.includes(word) || word.includes(pWord)
          )
        );
      });
    });

    console.log(`Area '${area}' matches in '${city}':`, areaMatches.length);

    if (areaMatches.length > 0) {
      // Found area-specific matches
      const sortedAreaMatches = areaMatches.sort((a, b) => {
        // Premium and verified providers first
        if (a.premium !== b.premium) return (b.premium ? 1 : 0) - (a.premium ? 1 : 0);
        if (a.verified !== b.verified) return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
        return b.rating - a.rating;
      });

      return {
        providers: sortedAreaMatches,
        hasAreaMatch: true
      };
    } else {
      // No area matches found, return city-wide services with fallback message
      const sortedCityProviders = cityFilteredProviders.sort((a, b) => {
        if (a.premium !== b.premium) return (b.premium ? 1 : 0) - (a.premium ? 1 : 0);
        if (a.verified !== b.verified) return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
        return b.rating - a.rating;
      });

      return {
        providers: sortedCityProviders,
        hasAreaMatch: false,
        fallbackMessage: `Services in ${area} are currently not available. Below are services available in ${city} that you can contact for further assistance.`
      };
    }
  }

  // Step 3: Return city-filtered results (no area specified or no city filtering)
  const sortedResults = cityFilteredProviders.sort((a, b) => {
    if (a.premium !== b.premium) return (b.premium ? 1 : 0) - (a.premium ? 1 : 0);
    if (a.verified !== b.verified) return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
    return b.rating - a.rating;
  });

  return {
    providers: sortedResults,
    hasAreaMatch: false
  };
};
