
import React from 'react';
import { Star, Shield, Award, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PremiumCard } from '@/components/ui/premium-card';
import { PremiumButton } from '@/components/ui/premium-button';
import { Motion } from '@/components/ui/motion';
import { ServiceProvider } from '@/types/provider';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ValetProfileCardProps {
  provider: ServiceProvider;
  index: number;
}

export const ValetProfileCard: React.FC<ValetProfileCardProps> = ({ provider, index }) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-emerald-600 dark:text-emerald-400';
    if (rating >= 4.0) return 'text-ice-blue-600 dark:text-ice-blue-400';
    if (rating >= 3.5) return 'text-ice-blue-600 dark:text-ice-blue-400';
    return 'text-gray-500 dark:text-gray-400';
  };

  // Enhanced validation with detailed logging
  if (!provider) {
    console.error('ValetProfileCard: Provider is null or undefined');
    return null;
  }

  if (!provider.id || typeof provider.id !== 'number' || provider.id < 1) {
    console.error('ValetProfileCard: Provider has invalid ID:', {
      providerId: provider.id,
      providerName: provider.name,
      providerObject: provider
    });
    return null;
  }

  // Validate required fields
  const requiredFields = ['name', 'location', 'services', 'rating', 'pricing'];
  const missingFields = requiredFields.filter(field => !provider[field as keyof ServiceProvider]);
  
  if (missingFields.length > 0) {
    console.error('ValetProfileCard: Provider missing required fields:', {
      providerId: provider.id,
      missingFields,
      provider
    });
    return null;
  }

  return (
    <Motion 
      variant="slideUp" 
      delay={index * 100}
      className="group"
    >
      <PremiumCard 
        variant="glass" 
        className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/95 via-white/90 to-ice-blue-50/80 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-800/80"
      >
        {/* Hero Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src={provider.coverImage}
            alt={`${provider.name} - Professional Valet Services`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1529369623266-f5264b696110?auto=format&fit=crop&q=80";
            }}
            loading="lazy"
          />
          
          {/* Floating Badges */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            {provider.verified && (
              <Badge className="bg-emerald-500/95 text-white backdrop-blur-sm border-0 shadow-lg hover:bg-emerald-600 transition-colors">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            {provider.premium && (
              <Badge className="bg-gradient-to-r from-ice-blue-500 to-ice-blue-400 text-white backdrop-blur-sm border-0 shadow-lg hover:from-ice-blue-600 hover:to-ice-blue-500 transition-all">
                <Award className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50 dark:border-gray-700/50">
              <div className="flex items-center gap-1">
                <Star className={cn("h-4 w-4 fill-current", getRatingColor(provider.rating))} />
                <span className="font-bold text-sm text-gray-900 dark:text-white">{provider.rating}</span>
                <span className="text-xs text-gray-600 dark:text-gray-300">({provider.reviewCount})</span>
              </div>
            </div>
          </div>

          {/* Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{provider.name}</h3>
            <div className="flex items-center text-white/95 text-sm drop-shadow-md">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{provider.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-5">
          {/* Services Grid */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
              Services Offered
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {provider.services?.slice(0, 4).map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-ice-blue-50 to-ice-blue-100 dark:from-ice-blue-900/30 dark:to-ice-blue-800/30 rounded-lg p-3 text-center border border-ice-blue-200/50 dark:border-ice-blue-700/50 hover:from-ice-blue-100 hover:to-ice-blue-150 dark:hover:from-ice-blue-800/40 dark:hover:to-ice-blue-700/40 transition-all"
                >
                  <span className="text-xs font-semibold text-ice-blue-900 dark:text-ice-blue-100 line-clamp-2">
                    {service}
                  </span>
                </div>
              ))}
            </div>
            {provider.services && provider.services.length > 4 && (
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 text-center font-medium">
                +{provider.services.length - 4} more services available
              </p>
            )}
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-gray-50 to-ice-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Starting from</span>
              <div className="flex items-center text-ice-blue-700 dark:text-ice-blue-300">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">{provider.hoursText || '24/7 Available'}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-ice-blue-700 dark:text-ice-blue-300">
              {provider.pricing}
            </div>
          </div>

          {/* Secure Booking Process Info */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-4 border border-emerald-200/50 dark:border-emerald-700/50">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-800/50 flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                  📋 Simple Booking Process
                </h4>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <span>Fill booking form with your requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <span>We verify details and process your request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <span>Receive valet contact via WhatsApp/Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <PremiumButton
              variant="outline"
              size="sm"
              className="text-gray-700 dark:text-gray-200 border-ice-blue-300 dark:border-ice-blue-600 hover:border-ice-blue-500 dark:hover:border-ice-blue-400 hover:text-ice-blue-700 dark:hover:text-ice-blue-300 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/20 transition-all"
              asChild
            >
              <Link 
                to={`/providers/${provider.id}`}
                aria-label={`View ${provider.name} profile`}
              >
                View Profile
              </Link>
            </PremiumButton>
            <PremiumButton
              variant="primary"
              size="sm"
              glow
              className="bg-gradient-to-r from-ice-blue-600 to-ice-blue-500 hover:from-ice-blue-700 hover:to-ice-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              asChild
            >
              <Link 
                to={`/booking/${provider.id}`}
                aria-label={`Book ${provider.name} services now`}
              >
                Book Now
              </Link>
            </PremiumButton>
          </div>
        </div>
      </PremiumCard>
    </Motion>
  );
};
