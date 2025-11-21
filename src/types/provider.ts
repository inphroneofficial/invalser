/**
 * =====================================================
 * SERVICE PROVIDER TYPE DEFINITIONS
 * =====================================================
 * 
 * Core types for service provider data throughout the application.
 */

// Pricing types
export type BillingUnit = 'minute' | 'hour' | 'day';
export interface ServicePricing { perMinute?: number; perHour?: number; baseFee?: number; notes?: string }

/**
 * Main service provider interface
 * Represents a valet/security service provider in the system
 */
export interface ServiceProvider {
  // Basic Information
  id: number;                    // Unique identifier for the provider
  name: string;                  // Provider business name
  verified: boolean;             // Whether provider is verified by platform
  premium?: boolean;             // Whether provider has premium listing
  
  // Rating & Reviews
  rating: number;                // Average rating (0-5)
  reviewCount: number;           // Total number of reviews
  
  // Location & Service Areas
  location: string;              // Format: "City, State" (e.g., "Bangalore, Karnataka")
  areas?: string[];              // Specific areas served within the city
  
  // Services & Pricing
  services: string[];            // List of all services offered
  pricing: string;               // Pricing format: "₹[amount]/hour"
  pricingDetails?: Record<string, ServicePricing>; // Per-service pricing by ID (e.g., 'valet', 'bouncers')
  featuredService?: string;      // Primary/highlighted service
  description?: string;          // Provider description
  
  // Media & Contact
  coverImage: string;            // Cover image URL for profile
  phone: string;                 // Contact phone number
  email: string;                 // Contact email
  
  // Operating Information
  hoursText: string;             // Operating hours (e.g., "9:00 AM - 10:00 PM")
  
  // Business Management (for dashboard)
  subscriptionStatus?: 'active' | 'trial' | 'expired';
  subscriptionTier?: 'basic' | 'premium' | 'enterprise';
  monthlyRevenue?: number;       // Monthly revenue in ₹
}

/**
 * Result object from location-based provider searches
 * Used by location matcher and search functions
 */
export interface LocationMatchResult {
  providers: ServiceProvider[];  // Matched providers
  hasAreaMatch: boolean;         // Whether results are area-specific or city-wide
  fallbackMessage?: string;      // Message shown when no area match found
}
