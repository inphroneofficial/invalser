
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ValetProfileCard } from "@/components/ValetProfileCard";
import { SearchForm } from "@/components/providers/SearchForm";
import { LocationInfo } from "@/components/providers/LocationInfo";
import { StatsSection } from "@/components/providers/StatsSection";
import FilterControls from "@/components/providers/FilterControls";
import { EmptyState } from "@/components/providers/EmptyState";
import { ProviderCardSkeleton } from "@/components/ui/skeleton-loader";
import { searchProviders } from "@/services/providerService";
import { LocationMatchResult } from "@/types/provider";
import { Motion } from "@/components/ui/motion";

const Providers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [matchResult, setMatchResult] = useState<LocationMatchResult>({ providers: [], hasAreaMatch: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const city = searchParams.get("city") || "";
    const state = searchParams.get("state") || "";
    const area = searchParams.get("area") || "";
    const query = searchParams.get("q") || "";

    setSelectedCity(city);
    setSelectedState(state);
    setSelectedArea(area);
    setSearchQuery(query);

    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => {
      const result = searchProviders(query, city, state, area);
      setMatchResult(result);
      setIsLoading(false);
    }, 800);
  }, [searchParams]);

  const handleSearch = (query: string, city: string, state: string, area: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (city) params.set("city", city);
    if (state) params.set("state", state);
    if (area) params.set("area", area);
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSelectedServices([]);
    setSortBy("rating");
    setShowVerifiedOnly(false);
    setShowPremiumOnly(false);
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <Motion variant="fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ice-blue-700 via-blue-600 to-ice-blue-600 dark:from-ice-blue-400 dark:via-blue-400 dark:to-ice-blue-400 bg-clip-text text-transparent mb-4">
                Premium Service Providers
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
                Discover trusted, verified service providers in your area - Valet, Security, and more with transparent pricing and instant booking
              </p>
            </div>
          </Motion>

          {/* Search Form */}
          <SearchForm 
            onSearch={handleSearch}
            initialCity={selectedCity}
            initialState={selectedState}
            initialArea={selectedArea}
            initialQuery={searchQuery}
          />

          {/* Location Info & Fallback Message */}
          <LocationInfo 
            matchResult={matchResult}
            selectedCity={selectedCity}
            selectedState={selectedState}
            selectedArea={selectedArea}
          />

          {/* Stats Section */}
          {matchResult.providers.length > 0 && (
            <StatsSection matchResult={matchResult} />
          )}

          {/* Filter Controls */}
          <FilterControls 
            selectedServices={selectedServices}
            onServiceToggle={handleServiceToggle}
            onClearFilters={handleClearFilters}
            sortBy={sortBy}
            onSortChange={setSortBy}
            showVerifiedOnly={showVerifiedOnly}
            onVerifiedToggle={() => setShowVerifiedOnly(!showVerifiedOnly)}
            showPremiumOnly={showPremiumOnly}
            onPremiumToggle={() => setShowPremiumOnly(!showPremiumOnly)}
          />

          {/* Results Section */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProviderCardSkeleton key={index} />
              ))}
            </div>
          ) : matchResult.providers.length === 0 ? (
            <EmptyState onClearFilters={handleClearFilters} />
          ) : (
            <Motion variant="slideUp" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {matchResult.providers.map((provider, index) => (
                  <ValetProfileCard
                    key={provider.id}
                    provider={provider}
                    index={index}
                  />
                ))}
              </div>
            </Motion>
          )}

          {/* Call to Action */}
          {matchResult.providers.length > 0 && (
            <Motion variant="fadeIn" delay={600}>
              <div className="text-center bg-gradient-to-r from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/30 dark:to-blue-900/30 rounded-2xl p-8 border border-ice-blue-200 dark:border-ice-blue-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Can't find what you're looking for?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact us directly and we'll help you find the perfect service provider for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/8499090369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    WhatsApp Support
                  </a>
                  <a
                    href="mailto:support@royalvaletservices.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-ice-blue-500 to-blue-500 hover:from-ice-blue-600 hover:to-blue-600 dark:from-ice-blue-400 dark:to-blue-400 dark:hover:from-ice-blue-500 dark:hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </Motion>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Providers;
