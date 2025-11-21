
import { providers, activeProviders, trialProviders, calculateMonthlyRevenue, debugProviderIds } from "@/data/providers";
import { getProvidersByLocation } from "@/utils/locationMatcher";
import { searchProviders } from "@/utils/providerSearch";

// Re-export types using 'export type' syntax
export type { ServiceProvider, LocationMatchResult } from "@/types/provider";

// Re-export functions normally
export { getProvidersByLocation, searchProviders };

export const getProviderById = (id: number | string) => {
  try {
    console.log('Looking for provider with ID:', id, 'Type:', typeof id);
    console.log('Total providers available:', providers.length);
    
    // Log all available IDs for debugging
    const availableIds = debugProviderIds();
    console.log('Available provider IDs:', availableIds);
    
    // Convert string ID to number if needed
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    
    // Check if conversion was successful
    if (isNaN(numericId) || numericId < 1) {
      console.error('Invalid ID provided:', id);
      return null;
    }
    
    // Find provider in combined array
    const provider = providers.find(provider => provider.id === numericId);
    console.log('Found provider:', provider ? provider.name : 'Not found');
    
    if (!provider) {
      console.error('Provider not found. Available IDs:', availableIds);
      console.error('Requested ID:', numericId);
      
      // Additional debugging
      console.error('Provider search debug:', {
        requestedId: numericId,
        totalProviders: providers.length,
        availableRange: `${Math.min(...availableIds)} - ${Math.max(...availableIds)}`,
        providersWithSimilarIds: providers.filter(p => 
          Math.abs(p.id - numericId) <= 2
        ).map(p => ({ id: p.id, name: p.name }))
      });
    }
    
    return provider || null;
  } catch (error) {
    console.error('Error in getProviderById:', error);
    return null;
  }
};

export const getAllProviders = () => {
  try {
    return providers.sort((a, b) => b.rating - a.rating);
  } catch (error) {
    console.error('Error in getAllProviders:', error);
    return [];
  }
};

export const getProvidersByCity = (city: string) => {
  try {
    if (!city || typeof city !== 'string') {
      return providers;
    }
    
    const cityProviders = providers.filter(provider => 
      provider.location.toLowerCase().includes(city.toLowerCase())
    );
    
    return cityProviders.length > 0 ? cityProviders : providers;
  } catch (error) {
    console.error('Error in getProvidersByCity:', error);
    return providers;
  }
};

// Business management functions with error handling
export const getActiveProviders = () => {
  try {
    return activeProviders;
  } catch (error) {
    console.error('Error in getActiveProviders:', error);
    return [];
  }
};

export const getTrialProviders = () => {
  try {
    return trialProviders;
  } catch (error) {
    console.error('Error in getTrialProviders:', error);
    return [];
  }
};

export const getMonthlyRevenue = () => {
  try {
    return calculateMonthlyRevenue();
  } catch (error) {
    console.error('Error in getMonthlyRevenue:', error);
    return 0;
  }
};

export const getProviderStats = () => {
  try {
    const stats = {
      total: providers.length,
      active: activeProviders.length,
      trial: trialProviders.length,
      monthlyRevenue: calculateMonthlyRevenue(),
      averageRating: providers.length > 0 
        ? providers.reduce((sum, p) => sum + p.rating, 0) / providers.length 
        : 0
    };
    
    console.log('Provider stats calculated:', stats);
    return stats;
  } catch (error) {
    console.error('Error in getProviderStats:', error);
    return {
      total: 0,
      active: 0,
      trial: 0,
      monthlyRevenue: 0,
      averageRating: 0
    };
  }
};

// Validation helper
export const validateProviderId = (id: unknown): number | null => {
  if (typeof id === 'number' && !isNaN(id) && id > 0) {
    return id;
  }
  
  if (typeof id === 'string') {
    const parsed = parseInt(id, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  
  return null;
};
