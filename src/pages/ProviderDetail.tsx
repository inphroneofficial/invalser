import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Award, MapPin, Clock, Phone, Mail, Calendar, Users, CheckCircle2, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImprovedChatbot from '@/components/ImprovedChatbot';
import { Badge } from '@/components/ui/badge';
import { PremiumCard } from '@/components/ui/premium-card';
import { PremiumButton } from '@/components/ui/premium-button';
import { Motion } from '@/components/ui/motion';
import { EnhancedLoading } from '@/components/ui/enhanced-loading';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/providers/ErrorFallback';
import { getProviderById, validateProviderId } from '@/services/providerService';
import { cn } from '@/lib/utils';

const ProviderDetailContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Enhanced validation and error handling
  const validatedId = validateProviderId(id);
  
  if (!validatedId) {
    console.error('Invalid provider ID in URL:', id);
    return (
      <div className="min-h-screen bg-gradient-to-br from-ice-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 py-16 text-center">
            <PremiumCard variant="glass" className="max-w-md mx-auto p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Invalid Provider ID
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The provider ID in the URL is not valid. Please check the URL and try again.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Debug Info: Invalid ID format ({id})
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <PremiumButton variant="outline" asChild className="flex-1">
                  <Link to="/providers">Browse All Providers</Link>
                </PremiumButton>
                <PremiumButton variant="primary" asChild className="flex-1">
                  <Link to="/">Go Home</Link>
                </PremiumButton>
              </div>
            </PremiumCard>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const provider = getProviderById(validatedId);

  if (!provider) {
    console.error('Provider not found for valid ID:', validatedId);
    return (
      <div className="min-h-screen bg-gradient-to-br from-ice-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 py-16 text-center">
            <PremiumCard variant="glass" className="max-w-md mx-auto p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Provider Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The service provider you're looking for doesn't exist or may have been removed.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Debug Info: Provider with ID {validatedId} not found
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <PremiumButton variant="outline" asChild className="flex-1">
                  <Link to="/providers">Browse All Providers</Link>
                </PremiumButton>
                <PremiumButton variant="primary" asChild className="flex-1">
                  <Link to="/">Go Home</Link>
                </PremiumButton>
              </div>
            </PremiumCard>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-emerald-600 dark:text-emerald-400';
    if (rating >= 4.0) return 'text-ice-blue-600 dark:text-ice-blue-400';
    if (rating >= 3.5) return 'text-ice-blue-500 dark:text-ice-blue-300';
    return 'text-gray-500 dark:text-gray-400';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-ice-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Motion variant="fadeIn">
            <PremiumButton variant="ghost" asChild className="mb-6">
              <Link to="/providers" className="inline-flex items-center text-ice-blue-600 hover:text-ice-blue-700 dark:text-ice-blue-400 dark:hover:text-ice-blue-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Providers
              </Link>
            </PremiumButton>
          </Motion>
          
          <PremiumCard variant="glass" className="p-8">
            {/* Hero Image Section */}
            <div className="relative h-64 overflow-hidden rounded-2xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={provider.coverImage}
                alt={`${provider.name} - Professional Valet Services`}
                className="w-full h-full object-cover transition-transform duration-700"
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
            </div>

            {/* Provider Details Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {provider.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {provider.description || 'Premium valet services for all your needs.'}
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <Phone className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400" />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Phone</h5>
                    <a href={`tel:${provider.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-ice-blue-600 dark:hover:text-ice-blue-300 transition-colors">
                      {provider.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <Mail className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400" />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Email</h5>
                    <a href={`mailto:${provider.email}`} className="text-gray-600 dark:text-gray-300 hover:text-ice-blue-600 dark:hover:text-ice-blue-300 transition-colors">
                      {provider.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <MapPin className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400" />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Location</h5>
                    <p className="text-gray-600 dark:text-gray-300">{provider.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <Clock className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400" />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Hours</h5>
                    <p className="text-gray-600 dark:text-gray-300">{provider.hoursText || '24/7 Available'}</p>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Services Offered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {provider.services.map((service, index) => (
                    <div key={index} className="bg-gradient-to-r from-ice-blue-50 to-ice-blue-100 dark:from-ice-blue-900/30 dark:to-ice-blue-800/30 rounded-lg p-3 text-center border border-ice-blue-200/50 dark:border-ice-blue-700/50">
                      <span className="text-sm font-medium text-ice-blue-900 dark:text-ice-blue-100">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <PremiumButton variant="primary" size="lg" asChild>
                  <Link to={`/booking/${provider.id}`}>
                    Book This Provider
                  </Link>
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </div>
      </main>
      <Footer />
      <ImprovedChatbot />
    </div>
  );
};

const ProviderDetail: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<EnhancedLoading message="Loading provider details..." showProgress />}>
        <ProviderDetailContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProviderDetail;
