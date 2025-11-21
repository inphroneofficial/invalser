# Code Structure Guide

## Overview
This document explains the organization of provider-related code in the application. All provider data and logic is centralized for easy editing and maintenance.

---

## 📁 Data Files (Single Source of Truth)

### **src/data/providers/index.ts**
**THE MAIN FILE FOR ALL PROVIDER DATA**

This is where you add, edit, or remove service providers.

**To Add a New Provider:**
1. Go to `activeProviders` array
2. Copy the existing provider object
3. Update all fields with new provider info
4. Use a unique ID

**To Edit a Provider:**
1. Find the provider in `activeProviders` array
2. Edit any field (name, services, pricing, areas, etc.)
3. Make sure location format is "City, State"
4. Make sure areas match city data from `cityData.ts`

**Provider Fields Explained:**
- `id`: Unique number for each provider
- `name`: Business name
- `verified`: true/false for verified badge
- `premium`: true/false for premium listing
- `rating`: 0-5 rating score
- `reviewCount`: Number of reviews
- `location`: Format "City, State" (e.g., "Bangalore, Karnataka")
- `services`: Array of all services offered
- `pricing`: Format "₹[amount]/hour" (e.g., "₹950/hour")
- `coverImage`: URL to cover image
- `hoursText`: Operating hours (e.g., "9:00 AM - 10:00 PM")
- `phone`: Contact phone number
- `email`: Contact email
- `description`: About the provider
- `areas`: Array of service areas within city
- `subscriptionStatus`: "active" | "trial" | "expired"
- `subscriptionTier`: "basic" | "premium" | "enterprise"
- `monthlyRevenue`: Monthly revenue amount

---

### **src/data/cityData.ts**
**ALL CITY AND LOCATION DATA**

Contains:
- List of Indian cities with coordinates
- Popular venues per city
- Hotel types
- Personal occasions
- Vehicle types

**To Add a New City:**
1. Add city object to `indianCities` array
2. Include: name, state, latitude, longitude, popular venues
3. Make sure venue names match the area names used in provider data

---

## 📄 Type Definitions

### **src/types/provider.ts**
**TYPE DEFINITIONS FOR PROVIDERS**

Defines the structure of:
- `ServiceProvider`: Main provider interface
- `LocationMatchResult`: Search result structure

Don't modify this unless adding new fields to provider data.

---

## 🛠️ Service & Utility Files

### **src/services/providerService.ts**
**BUSINESS LOGIC FOR PROVIDERS**

Functions:
- `getProviderById()`: Get single provider by ID
- `getAllProviders()`: Get all providers
- `getProvidersByCity()`: Filter by city
- `getActiveProviders()`: Get active providers
- `getTrialProviders()`: Get trial providers
- `getMonthlyRevenue()`: Calculate revenue
- `getProviderStats()`: Get dashboard statistics

### **src/utils/locationMatcher.ts**
**LOCATION-BASED SEARCH LOGIC**

Handles:
- Matching providers by city/state/area
- Fallback when no area match found
- Sorting by premium/verified status

### **src/utils/providerSearch.ts**
**SEARCH AND FILTER LOGIC**

Implements:
- Text search across provider data
- Filtering by location
- Service matching

---

## 📱 Page Components

### **src/pages/Providers.tsx**
**PROVIDER LISTING PAGE**

Displays:
- Search form
- Location info
- Statistics
- Filter controls
- Provider cards

### **src/pages/ProviderDetail.tsx**
**INDIVIDUAL PROVIDER PAGE**

Shows:
- Full provider details
- Services offered
- Pricing information
- Contact options
- Booking form

### **src/pages/Profile.tsx**
**USER PROFILE PAGE** (Not Provider Profile)

This is for customer profiles showing:
- User information
- Booking history
- Favorite services
- Account settings

**Note:** This is separate from provider profiles.

---

## 🎨 UI Components

### **src/components/ValetProfileCard.tsx**
Provider card component used in listing page

### **src/components/booking/ImprovedBookingForm.tsx**
Multi-step booking form with WhatsApp share

---

## 🔄 Data Flow

```
User visits /providers page
    ↓
Providers.tsx loads
    ↓
Calls searchProviders() from providerService
    ↓
Uses getProvidersByLocation() from locationMatcher
    ↓
Gets data from providers array in src/data/providers/index.ts
    ↓
Displays results in ValetProfileCard components
```

---

## ✏️ Quick Edit Guide

**To change provider details:**
→ Edit `src/data/providers/index.ts`

**To add a new city:**
→ Edit `src/data/cityData.ts`

**To modify search logic:**
→ Edit `src/utils/locationMatcher.ts` or `src/utils/providerSearch.ts`

**To change UI:**
→ Edit page components in `src/pages/` or UI components in `src/components/`

---

## ⚠️ Important Notes

1. **Always use unique IDs** for providers
2. **Location format must be** "City, State"
3. **Pricing format must be** "₹[amount]/hour"
4. **Areas must match** city areas from cityData.ts
5. **Don't duplicate** provider data across files
6. **Profile.tsx is for customers**, not providers
7. **Test after changes** by visiting /providers page

---

## 🐛 Common Issues & Solutions

**Problem:** Provider not showing up
- Check if ID is unique
- Verify location format is correct
- Make sure provider is in `activeProviders` array

**Problem:** WhatsApp share not working
- It tries 3 methods: native share → wa.me → clipboard
- If blocked, details are copied to clipboard automatically

**Problem:** Search not finding provider
- Check if city/area spelling matches exactly
- Verify areas array matches cityData.ts

---

## 📞 Provider Contact Flow

1. User searches for providers
2. Filters by location/service
3. Views provider profile
4. Clicks "Book Now"
5. Fills booking form
6. Shares via WhatsApp/Email
7. Provider receives booking details

---

**Last Updated:** 2025-01-07
