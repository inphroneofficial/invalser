import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Filter, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterControlsProps {
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
  onClearFilters: () => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  showVerifiedOnly: boolean;
  onVerifiedToggle: () => void;
  showPremiumOnly: boolean;
  onPremiumToggle: () => void;
}

const serviceTypes = [
  // Valet Services
  "Personal Use Valet",
  "Function/Event Valet", 
  "Commercial/Institutional Valet",
  "Wedding Valet",
  "Corporate Valet", 
  "Hotel Valet",
  "Restaurant Valet",
  "Airport Valet",
  "VIP Valet",
  "Premium Valet",
  "Event Valet",
  "Executive Valet",
  "Celebrity Valet",
  "Diplomatic Valet",
  "Concierge Valet",
  "Mall Valet",
  "Hospital Valet",
  "University Valet",
  "Normal Valet",
  
  // Security Services
  "Professional Bouncers",
  "Personal Bodyguards",
  "Event Security",
  "Temporary Security Services",
  "Specialized Protection",
  "VIP Security",
  "Corporate Security",
  "Diplomatic Security",
  "Venue Security",
  "Crowd Control",
  "Executive Protection",
  "Celebrity Security",
  "Personal Protection Officer",
  "Security Guards",
  "Close Protection"
];

const FilterControls: React.FC<FilterControlsProps> = ({
  selectedServices,
  onServiceToggle,
  onClearFilters,
  sortBy,
  onSortChange,
  showVerifiedOnly,
  onVerifiedToggle,
  showPremiumOnly,
  onPremiumToggle,
}) => {
  return (
    <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Filters</h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Service Types */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Service Types</label>
          <Select onValueChange={(value) => value && onServiceToggle(value)}>
            <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 max-h-60 overflow-auto">
              <div className="px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border-b">
                Valet Services
              </div>
              {serviceTypes.slice(0, 19).map((service) => (
                <SelectItem 
                  key={service} 
                  value={service}
                  className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {service}
                </SelectItem>
              ))}
              <div className="px-2 py-1 text-xs font-semibold text-red-600 dark:text-red-400 border-b border-t">
                Security Services
              </div>
              {serviceTypes.slice(19).map((service) => (
                <SelectItem 
                  key={service} 
                  value={service}
                  className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Sort By</label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
              <SelectItem value="rating" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Highest Rated
                </div>
              </SelectItem>
              <SelectItem value="reviews" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Most Reviews</SelectItem>
              <SelectItem value="price-low" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Price: Low to High</SelectItem>
              <SelectItem value="price-high" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Quick Filters</label>
          <div className="space-y-2">
            <Button
              variant={showVerifiedOnly ? "default" : "outline"}
              size="sm"
              onClick={onVerifiedToggle}
              className={showVerifiedOnly 
                ? "bg-ice-blue-600 hover:bg-ice-blue-700 text-white border-0" 
                : "text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              Verified Only
            </Button>
            <Button
              variant={showPremiumOnly ? "default" : "outline"}
              size="sm"
              onClick={onPremiumToggle}
              className={showPremiumOnly 
                ? "bg-ice-blue-600 hover:bg-ice-blue-700 text-white border-0" 
                : "text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              Premium Only
            </Button>
          </div>
        </div>
      </div>

      {/* Selected Services */}
      {selectedServices.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Selected Services</label>
          <div className="flex flex-wrap gap-2">
            {selectedServices.map((service) => (
              <Badge
                key={service}
                variant="secondary"
                className="bg-ice-blue-100 dark:bg-ice-blue-900 text-ice-blue-800 dark:text-ice-blue-200 border border-ice-blue-300 dark:border-ice-blue-700 hover:bg-ice-blue-200 dark:hover:bg-ice-blue-800 cursor-pointer"
                onClick={() => onServiceToggle(service)}
              >
                {service}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;
