
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ChevronDown } from "lucide-react";
import { Motion } from "@/components/ui/motion";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import HeroStats from "./HeroStats";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const popularCities = [
  "Mumbai",
  "Delhi", 
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Vadodara",
  "Firozabad",
  "Ludhiana",
  "Rajkot",
  "Surat",
  "Patna",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubballi-Dharwad",
  "Tiruchirappalli",
  "Bareilly",
  "Mysore",
  "Tiruppur",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Bhubaneswar",
  "Salem",
  "Warangal",
  "Guntur",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Nellore",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Rourkela",
  "Nanded",
  "Kolhapur",
  "Ajmer",
  "Akola",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Jammu",
  "Sangli-Miraj & Kupwad",
  "Mangalore",
  "Erode",
  "Belgaum",
  "Ambattur",
  "Tirunelveli",
  "Malegaon",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala",
  "New York",
  "London", 
  "Dubai",
  "Singapore",
  "Hong Kong",
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
    <Motion variant="scale" delay={600}>
      <PremiumCard className="p-2 sm:p-3 md:p-4 mb-6 md:mb-8 max-w-4xl mx-auto bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300">
        <div className="text-center mb-2 md:mb-3 px-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 drop-shadow-lg leading-tight">
            Find Your Perfect Service Provider
          </h2>
          <p className="text-xs text-white/90 drop-shadow-md leading-relaxed">
            Compare prices, read reviews, book instantly
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="space-y-2 md:space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            <div className="md:col-span-2 relative group">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost"
                    className="w-full justify-between bg-white/15 text-white border border-white/40 hover:bg-white/25 hover:border-white/60 pl-12 sm:pl-12 pr-2 h-9 sm:h-10 md:h-12 text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 font-medium"
                  >
                    <MapPin className="absolute left-3 sm:left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:text-ice-blue-300 transition-colors flex-shrink-0" />
                    <span className="truncate">{selectedCity || "Choose your city"}</span>
                    <ChevronDown className="ml-1 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-h-60 overflow-auto bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border border-ice-blue-200/50 dark:border-ice-blue-700/50 z-50 shadow-2xl">
                  <DropdownMenuItem 
                    onClick={() => setSelectedCity("all-cities")}
                    className="cursor-pointer text-sm md:text-base py-3 md:py-4 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 text-gray-900 dark:text-white transition-colors"
                  >
                    <MapPin className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-ice-blue-600 dark:text-ice-blue-400" />
                    All Cities
                  </DropdownMenuItem>
                  {popularCities.map((city) => (
                    <DropdownMenuItem 
                      key={city} 
                      onClick={() => setSelectedCity(city)}
                      className="cursor-pointer text-sm md:text-base py-3 md:py-4 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 text-gray-900 dark:text-white transition-colors"
                    >
                      <MapPin className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-ice-blue-600 dark:text-ice-blue-400" />
                      {city}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <PremiumButton 
              type="submit" 
              variant="primary"
              size="lg"
              disabled={!selectedCity}
              className="h-9 sm:h-10 md:h-12 text-xs sm:text-sm bg-gradient-to-r from-ice-blue-500 via-ice-blue-600 to-ice-blue-500 hover:from-ice-blue-600 hover:via-ice-blue-700 hover:to-ice-blue-600 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transform hover:-translate-y-1"
              glow
            >
              <Users className="mr-1 sm:mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Search Providers</span>
              <span className="sm:hidden">Search</span>
            </PremiumButton>
          </div>
        </form>

        <HeroStats />
      </PremiumCard>
    </Motion>
  );
}
