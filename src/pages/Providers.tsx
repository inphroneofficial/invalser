import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, MapPin, Filter, Star, Shield, Award, Users, Sparkles, Car, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ValetProfileCard } from "@/components/ValetProfileCard";
import { EmptyState } from "@/components/providers/EmptyState";
import { ProviderCardSkeleton } from "@/components/ui/skeleton-loader";
import { searchProviders } from "@/services/providerService";
import { LocationMatchResult } from "@/types/provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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

    setIsLoading(true);
    setTimeout(() => {
      const result = searchProviders(query, city, state, area);
      setMatchResult(result);
      setIsLoading(false);
    }, 600);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCity) params.set("city", selectedCity);
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSelectedServices([]);
    setSortBy("rating");
    setShowVerifiedOnly(false);
    setSearchQuery("");
    setSelectedCity("");
  };

  const serviceFilters = [
    { id: "valet", label: "Valet", icon: Car },
    { id: "security", label: "Security", icon: Shield },
    { id: "bodyguard", label: "Bodyguard", icon: UserCheck },
  ];

  const stats = [
    { icon: Users, value: `${matchResult.providers.length}+`, label: "Providers" },
    { icon: Star, value: "4.8", label: "Avg Rating" },
    { icon: Shield, value: "100%", label: "Verified" },
    { icon: Award, value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Service Providers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service Provider
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover trusted, verified valet and security professionals in your area with transparent pricing
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col sm:flex-row gap-3 p-3 bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background border-0 focus-visible:ring-1"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="City or location..."
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="pl-12 h-12 bg-background border-0 focus-visible:ring-1"
                />
              </div>
              <Button type="submit" variant="gradient" size="lg" className="h-12 px-8">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover:scale-105">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            {serviceFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setSelectedServices(prev => 
                    prev.includes(filter.id) 
                      ? prev.filter(s => s !== filter.id)
                      : [...prev, filter.id]
                  );
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105",
                  selectedServices.includes(filter.id)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                )}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
            <button
              onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105",
                showVerifiedOnly
                  ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              )}
            >
              <Shield className="w-4 h-4" />
              Verified Only
            </button>
            {(selectedServices.length > 0 || showVerifiedOnly || searchQuery || selectedCity) && (
              <button
                onClick={handleClearFilters}
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Location Info */}
          {(selectedCity || selectedState || selectedArea) && matchResult.providers.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">
                  Showing providers in {selectedArea || selectedCity || selectedState}
                </span>
                {matchResult.hasAreaMatch && (
                  <span className="ml-2 px-2 py-0.5 bg-primary/20 rounded-full text-xs">
                    Exact match
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Results */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProviderCardSkeleton key={index} />
              ))}
            </div>
          ) : matchResult.providers.length === 0 ? (
            <EmptyState onClearFilters={handleClearFilters} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {matchResult.providers.map((provider, index) => (
                <div 
                  key={provider.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ValetProfileCard provider={provider} index={index} />
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          {matchResult.providers.length > 0 && (
            <div className="mt-16 text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Contact us directly and we'll help you find the perfect service provider for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/9550464957"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    WhatsApp Support
                  </Button>
                </a>
                <a href="mailto:support@invalser.com">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Email Support
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Providers;
