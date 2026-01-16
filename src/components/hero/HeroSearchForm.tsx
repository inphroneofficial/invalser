import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const popularCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Kanpur",
  "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Vadodara",
  "Gurgaon", "Noida", "Chandigarh", "Kochi", "Goa", "Udaipur"
];

export default function HeroSearchForm() {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity) {
      navigate(`/providers?city=${encodeURIComponent(selectedCity)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-xl mx-auto animate-scale-in delay-300">
      <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl glass">
        {/* City Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost"
              className="flex-1 justify-between h-12 sm:h-14 px-4 bg-white/10 hover:bg-white/20 text-white border-0 rounded-xl text-left"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className={selectedCity ? "text-white" : "text-white/60"}>
                  {selectedCity || "Select your city"}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-white/60 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[280px] sm:w-[320px] max-h-[300px] overflow-auto bg-card/98 backdrop-blur-xl border-border"
            align="start"
          >
            <DropdownMenuItem 
              onClick={() => setSelectedCity("all-cities")}
              className="py-3 cursor-pointer"
            >
              <MapPin className="w-4 h-4 mr-3 text-primary" />
              <span className="font-medium">All Cities</span>
            </DropdownMenuItem>
            <div className="h-px bg-border my-1" />
            {popularCities.map((city) => (
              <DropdownMenuItem 
                key={city} 
                onClick={() => setSelectedCity(city)}
                className="py-2.5 cursor-pointer"
              >
                <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
                {city}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Button */}
        <Button 
          type="submit" 
          disabled={!selectedCity}
          className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl btn-primary font-semibold text-white shadow-glow disabled:opacity-50 disabled:shadow-none"
        >
          <Search className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Find Providers</span>
          <span className="sm:hidden">Search</span>
        </Button>
      </div>
    </form>
  );
}
