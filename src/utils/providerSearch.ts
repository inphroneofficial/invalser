
import { ServiceProvider, LocationMatchResult } from "@/types/provider";
import { getProvidersByLocation } from "./locationMatcher";

export const searchProviders = (query: string, city?: string, state?: string, area?: string): LocationMatchResult => {
  let result = getProvidersByLocation(city, state, area);
  
  if (query.trim()) {
    const filteredProviders = result.providers.filter(provider => {
      const searchableText = [
        provider.name,
        provider.location,
        provider.description || '',
        ...provider.services,
        ...(provider.areas || [])
      ].join(' ').toLowerCase();
      
      return searchableText.includes(query.toLowerCase());
    });

    return {
      ...result,
      providers: filteredProviders
    };
  }
  
  return result;
};
