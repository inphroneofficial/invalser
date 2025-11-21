/**
 * =====================================================
 * SERVICE PROVIDER DATA - SINGLE SOURCE OF TRUTH
 * =====================================================
 * 
 * This file contains ALL service provider data for the application.
 * 
 * DATA STRUCTURE:
 * - activeProviders: Currently active, paying providers
 * - trialProviders: Providers on trial period
 * - providers: Combined list (activeProviders + trialProviders)
 * 
 * TO ADD A NEW PROVIDER:
 * 1. Add provider object to activeProviders or trialProviders array
 * 2. Ensure all required fields are filled
 * 3. Use unique ID for each provider
 * 
 * TO EDIT A PROVIDER:
 * 1. Find provider in activeProviders or trialProviders array
 * 2. Update the fields as needed
 * 3. Ensure location format: "City, State"
 * 4. Ensure areas array matches city-specific areas from cityData.ts
 * 
 * PRICING FORMAT: "₹[amount]/hour" (e.g., "₹950/hour")
 * LOCATION FORMAT: "City, State" (e.g., "Bangalore, Karnataka")
 */

import { ServiceProvider } from "@/types/provider";

// =====================================================
// ACTIVE PROVIDERS (Currently active subscriptions)
// =====================================================
export const activeProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "Anil Valet & Security - Hyderabad",
    verified: true,
    rating: 4.7,
    reviewCount: 76,
    location: "Hyderabad, Telangana",
    services: [
      "Personal Use Valet",
      "Function/Event Valet",
      "Commercial/Institutional Valet",
      "Corporate Valet",
      "Event Valet",
      "Residential Valet",
      "Professional Bouncers",
      "Personal Bodyguards",
      "Event Security",
      "Temporary Security Services",
      "Residential Protection",
      "Corporate Security"
    ],
    pricing: "₹150/hour",
    pricingDetails: {
      valet: { perHour: 100, baseFee: 100, notes: "Hyderabad valet services" },
      bouncers: { perHour: 100, baseFee: 100, notes: "Event crowd management" },
      bodyguards: { perHour: 100, baseFee: 100, notes: "Personal security services" },
      "event-security": { perHour: 100, baseFee: 100, notes: "Event security teams" },
      "corporate-security": { perHour: 100, baseFee: 100, notes: "Corporate security" }
    },
    coverImage: "/anil valet services 2.png",
    hoursText: "9:00 AM - 10:00 PM",
    phone: "9550464957",
    email: "kandgulanil@gmail.com",
    description: "Event and corporate valet with trained security teams in Hyderabad.",
    areas: ["Banjara Hills", "Hitech City", "Jubilee Hills", "Gachibowli", "Madhapur"],
    premium: true,
    subscriptionStatus: "active",
    subscriptionTier: "premium",
    monthlyRevenue: 0
  }
];

// =====================================================
// TRIAL PROVIDERS (Providers on trial period)
// =====================================================
export const trialProviders: ServiceProvider[] = [
  // ADD TRIAL PROVIDERS HERE
  // Example:
  // {
  //   id: 2,
  //   name: "Trial Provider Name",
  //   verified: false,
  //   rating: 4.5,
  //   reviewCount: 50,
  //   location: "Mumbai, Maharashtra",
  //   services: ["Service 1", "Service 2"],
  //   pricing: "₹800/hour",
  //   coverImage: "image-url",
  //   hoursText: "9:00 AM - 9:00 PM",
  //   phone: "1234567890",
  //   email: "email@example.com",
  //   description: "Provider description",
  //   areas: ["Area 1", "Area 2"],
  //   subscriptionStatus: "trial",
  //   subscriptionTier: "basic",
  //   monthlyRevenue: 0
  // }
];

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Calculate total monthly revenue from all providers
 */
export const calculateMonthlyRevenue = (): number => {
  return activeProviders.reduce((total, provider) => total + (provider.monthlyRevenue || 0), 0);
};

/**
 * Debug function to log all provider IDs and names
 */
export const debugProviderIds = () => {
  console.log('All Provider IDs:', providers.map(p => ({ id: p.id, name: p.name })));
  return providers.map(p => p.id);
};

// =====================================================
// MAIN EXPORTS
// =====================================================

/**
 * Combined list of all providers (active + trial)
 * USE THIS for displaying providers in the application
 */
export const providers: ServiceProvider[] = [...activeProviders, ...trialProviders];

/**
 * Export activeProviders as premiumProviders for backwards compatibility
 */
export { activeProviders as premiumProviders };