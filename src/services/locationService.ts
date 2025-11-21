
export interface LocationData {
  latitude: number;
  longitude: number;
  city?: string;
  area?: string;
  suburb?: string;
  neighbourhood?: string;
  quarter?: string;
  state?: string;
  country?: string;
  accuracy?: number;
}

export interface LocationError {
  code: number;
  message: string;
}

class LocationService {
  private static instance: LocationService;
  private watchId: number | null = null;
  private cachedLocation: LocationData | null = null;
  private cacheExpiry: number = 5 * 60 * 1000; // 5 minutes
  private lastFetch: number = 0;

  static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  async requestPermission(): Promise<PermissionState> {
    try {
      // For mobile devices, we need to explicitly trigger permission request
      const result = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
      console.log("Location permission status:", result.state);
      return result.state;
    } catch (error) {
      console.warn("Permission query not supported:", error);
      return 'prompt';
    }
  }

  async getCurrentLocation(): Promise<LocationData> {
    // Check cache first
    if (this.cachedLocation && Date.now() - this.lastFetch < this.cacheExpiry) {
      console.log("Returning cached location:", this.cachedLocation);
      return this.cachedLocation;
    }

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject({
          code: 0,
          message: 'Geolocation is not supported by this browser'
        });
        return;
      }

      // Mobile-friendly options with longer timeout
      const options: PositionOptions = {
        enableHighAccuracy: false, // Better for mobile battery
        timeout: 30000, // Longer timeout for mobile
        maximumAge: 60000 // Cache for 60 seconds on mobile
      };

      console.log("Getting current position with options:", options);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log("Position received:", position);
          try {
            const location: LocationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            };

            // Try to get address details
            const addressDetails = await this.reverseGeocode(
              position.coords.latitude,
              position.coords.longitude
            );

            console.log("Address details received:", addressDetails);

            const finalLocation = { ...location, ...addressDetails };
            this.cachedLocation = finalLocation;
            this.lastFetch = Date.now();
            
            console.log("Final location data:", finalLocation);
            resolve(finalLocation);
          } catch (error) {
            console.warn("Reverse geocoding failed, returning basic location:", error);
            // Return basic location data even if reverse geocoding fails
            const basicLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            };
            resolve(basicLocation);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          let errorMessage = 'Unable to retrieve location';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
          }

          reject({
            code: error.code,
            message: errorMessage
          });
        },
        options
      );
    });
  }

  private async reverseGeocode(lat: number, lng: number): Promise<Partial<LocationData>> {
    try {
      console.log(`Reverse geocoding: ${lat}, ${lng}`);
      // Using OpenStreetMap Nominatim API (free and no API key required)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=en`
      );

      if (!response.ok) {
        throw new Error('Reverse geocoding failed');
      }

      const data = await response.json();
      console.log("Nominatim response:", data);
      
      // Extract area information with multiple fallbacks
      const addressData = data.address || {};
      
      return {
        city: addressData.city || addressData.town || addressData.village || addressData.municipality,
        area: addressData.suburb || addressData.neighbourhood || addressData.quarter || addressData.district,
        suburb: addressData.suburb,
        neighbourhood: addressData.neighbourhood,
        quarter: addressData.quarter,
        state: addressData.state,
        country: addressData.country
      };
    } catch (error) {
      console.warn('Reverse geocoding failed:', error);
      return {};
    }
  }

  startWatching(callback: (location: LocationData) => void, errorCallback?: (error: LocationError) => void) {
    if (!navigator.geolocation) {
      errorCallback?.({
        code: 0,
        message: 'Geolocation is not supported'
      });
      return;
    }

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 30000
    };

    this.watchId = navigator.geolocation.watchPosition(
      async (position) => {
        try {
          const location: LocationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          };

          const addressDetails = await this.reverseGeocode(
            position.coords.latitude,
            position.coords.longitude
          );

          callback({ ...location, ...addressDetails });
        } catch (error) {
          callback({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        }
      },
      (error) => {
        errorCallback?.({
          code: error.code,
          message: error.message
        });
      },
      options
    );
  }

  stopWatching() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  clearCache() {
    this.cachedLocation = null;
    this.lastFetch = 0;
  }

  // Method to check if location services are available
  isLocationAvailable(): boolean {
    return !!navigator.geolocation;
  }
}

export default LocationService.getInstance();
