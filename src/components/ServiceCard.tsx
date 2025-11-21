
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Shield, Crown } from "lucide-react";

interface ServiceCardProps {
  name: string;
  rating: number;
  reviews: number;
  price: string;
  location: string;
  availability: string;
  image?: string;
  verified?: boolean;
  premium?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  rating,
  reviews,
  price,
  location,
  availability,
  image,
  verified = false,
  premium = false
}) => {
  // Determine if service is premium based on price
  const priceNumber = parseInt(price.replace(/[^\d]/g, ''));
  const isPremiumService = priceNumber >= 1200 || premium;

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in ${
      isPremiumService ? 'border-2 border-ice-blue-400/30 bg-gradient-to-br from-white to-ice-blue-50/30' : 'hover:shadow-lg'
    }`}>
      <div className="relative">
        {/* Service Image */}
        <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-ice-blue-100 to-blue-100 dark:from-navy-light dark:to-navy flex items-center justify-center relative overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-4xl sm:text-5xl md:text-6xl opacity-20">🚗</div>
          )}
          
          {/* Premium Badge */}
          {isPremiumService && (
            <Badge className="absolute top-2 right-2 bg-gradient-to-r from-ice-blue-500 to-ice-blue-700 text-white border-ice-blue-600 animate-pulse">
              <Crown className="w-3 h-3 mr-1" />
              <span className="text-xs font-bold">PREMIUM</span>
            </Badge>
          )}

          {/* Standard Badge */}
          {!isPremiumService && (
            <Badge className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-green-600 text-white animate-bounce-gentle">
              <Shield className="w-3 h-3 mr-1" />
              <span className="text-xs font-bold">STANDARD</span>
            </Badge>
          )}

          {/* Verified Badge */}
          {verified && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white animate-glow">
              <span className="text-xs">✓ VERIFIED</span>
            </Badge>
          )}
        </div>

        <CardContent className="p-3 sm:p-4">
          {/* Service Name */}
          <h3 className={`font-semibold text-sm sm:text-base md:text-lg mb-2 text-gray-900 dark:text-white group-hover:text-ice-blue-600 transition-colors duration-200 ${
            isPremiumService ? 'animate-glow-text' : ''
          }`}>
            {name}
          </h3>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
            <div className="flex items-center">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-ice-blue-400 text-ice-blue-400 animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium ml-1">{rating}</span>
            </div>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
            isPremiumService 
              ? 'text-transparent bg-gradient-to-r from-ice-blue-600 to-ice-blue-800 bg-clip-text animate-shimmer' 
              : 'text-ice-blue-600 dark:text-ice-blue-400'
          }`}>
            {price}
            {isPremiumService && <span className="text-xs font-normal ml-1 opacity-70">Premium Rate</span>}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mb-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="text-xs sm:text-sm truncate">{location}</span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-1 mb-3 sm:mb-4">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 animate-bounce-gentle" />
            <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
              {availability}
            </span>
          </div>

          {/* Action Button */}
          <button 
            className={`w-full py-2 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
              isPremiumService
                ? 'bg-gradient-to-r from-ice-blue-600 to-ice-blue-800 hover:from-ice-blue-700 hover:to-ice-blue-900 text-white shadow-lg hover:shadow-xl animate-glow'
                : 'bg-gradient-to-r from-ice-blue-500 to-blue-600 hover:from-ice-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            {isPremiumService ? '🌟 Book Premium Service' : 'Book Now'}
          </button>

          {/* Premium Features */}
          {isPremiumService && (
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs px-1 py-0.5 animate-pulse border-ice-blue-300 text-ice-blue-700">Priority</Badge>
                <Badge variant="outline" className="text-xs px-1 py-0.5 animate-pulse border-ice-blue-300 text-ice-blue-700">Insurance</Badge>
                <Badge variant="outline" className="text-xs px-1 py-0.5 animate-pulse border-ice-blue-300 text-ice-blue-700">24/7 Support</Badge>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ServiceCard;
