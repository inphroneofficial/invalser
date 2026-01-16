import React, { Suspense, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Star, Shield, Award, MapPin, Clock, Phone, Mail, Calendar, 
  Users, CheckCircle2, AlertTriangle, Heart, Share2, ChevronLeft, ChevronRight,
  Briefcase, BadgeCheck, TrendingUp, Zap, MessageCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { PremiumCard } from '@/components/ui/premium-card';
import { PremiumButton } from '@/components/ui/premium-button';
import { Motion } from '@/components/ui/motion';
import { EnhancedLoading } from '@/components/ui/enhanced-loading';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/providers/ErrorFallback';
import { getProviderById, validateProviderId } from '@/services/providerService';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const galleryImages = [
  "https://images.unsplash.com/photo-1529369623266-f5264b696110?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
];

const ProviderDetailContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const validatedId = validateProviderId(id);
  
  if (!validatedId) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 py-16 text-center">
            <PremiumCard variant="glass" className="max-w-md mx-auto p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-destructive/10">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Invalid Provider ID</h1>
              <p className="text-muted-foreground mb-6">The provider ID in the URL is not valid.</p>
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
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 py-16 text-center">
            <PremiumCard variant="glass" className="max-w-md mx-auto p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-destructive/10">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Provider Not Found</h1>
              <p className="text-muted-foreground mb-6">The service provider doesn't exist or may have been removed.</p>
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
    if (rating >= 4.5) return 'text-emerald-500';
    if (rating >= 4.0) return 'text-primary';
    return 'text-muted-foreground';
  };

  const stats = [
    { icon: Users, label: 'Happy Clients', value: `${Math.floor(provider.reviewCount * 2.5)}+` },
    { icon: Calendar, label: 'Events Served', value: `${Math.floor(provider.reviewCount * 1.8)}+` },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Zap, label: 'Response Time', value: '<1hr' },
  ];

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Motion variant="fadeIn">
            <Link 
              to="/providers" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Providers
            </Link>
          </Motion>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Gallery & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <ScrollReveal variant="fade">
                <PremiumCard variant="glass" className="p-0 overflow-hidden">
                  <div className="relative aspect-video group">
                    <img
                      src={provider.coverImage || galleryImages[activeImageIndex]}
                      alt={provider.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = galleryImages[activeImageIndex];
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {provider.verified && (
                        <Badge className="bg-emerald-500 text-white border-0 shadow-lg animate-fade-in">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      {provider.premium && (
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg animate-fade-in">
                          <Award className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button 
                        onClick={() => setIsLiked(!isLiked)}
                        className={cn(
                          "p-2 rounded-full backdrop-blur-sm transition-all",
                          isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/40"
                        )}
                      >
                        <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                      </button>
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Provider Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{provider.name}</h1>
                      <div className="flex items-center gap-4 text-white/90">
                        <div className="flex items-center gap-1">
                          <Star className={cn("h-5 w-5 fill-current", getRatingColor(provider.rating))} />
                          <span className="font-semibold">{provider.rating}</span>
                          <span className="text-white/70">({provider.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{provider.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={cn(
                          "flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all",
                          idx === activeImageIndex ? "ring-2 ring-primary scale-105" : "opacity-60 hover:opacity-100"
                        )}
                      >
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </PremiumCard>
              </ScrollReveal>

              {/* Stats Section */}
              <ScrollReveal variant="slide-up" delay={100}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, idx) => (
                    <PremiumCard key={idx} variant="glass" className="p-4 text-center hover:scale-105 transition-transform">
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </PremiumCard>
                  ))}
                </div>
              </ScrollReveal>

              {/* Services Section */}
              <ScrollReveal variant="slide-up" delay={150}>
                <PremiumCard variant="glass" className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Services Offered
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {provider.services.map((service, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </PremiumCard>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal variant="slide-up" delay={200}>
                <PremiumCard variant="glass" className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">About {provider.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {provider.description || 
                      `${provider.name} is a trusted provider of premium valet and security services in ${provider.location}. 
                      With a track record of excellence and customer satisfaction, we ensure professional service delivery 
                      for all types of events including weddings, corporate functions, hotel services, and more. 
                      Our team is fully trained, background-verified, and committed to delivering exceptional experiences.`
                    }
                  </p>
                </PremiumCard>
              </ScrollReveal>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <ScrollReveal variant="fade" delay={100}>
                  <PremiumCard variant="glass" className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-foreground">₹200</span>
                        <span className="text-muted-foreground">/hour</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Valet Service</span>
                        <span className="font-semibold text-foreground">₹200/hr</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Bouncer</span>
                        <span className="font-semibold text-foreground">₹200/hr</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Bodyguard</span>
                        <span className="font-semibold text-foreground">₹200/hr</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-muted-foreground">Event Security</span>
                        <span className="font-semibold text-foreground">₹200/hr</span>
                      </div>
                    </div>
                    
                    <PremiumButton variant="primary" size="lg" className="w-full mb-3" asChild>
                      <Link to={`/booking/${provider.id}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Link>
                    </PremiumButton>
                    
                    <PremiumButton variant="outline" size="lg" className="w-full" asChild>
                      <a href={`https://wa.me/91${provider.phone?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </PremiumButton>
                  </PremiumCard>
                </ScrollReveal>

                {/* Contact Card */}
                <ScrollReveal variant="fade" delay={150}>
                  <PremiumCard variant="glass" className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <a 
                        href={`tel:${provider.phone}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Phone</div>
                          <div className="font-medium text-foreground">{provider.phone}</div>
                        </div>
                      </a>
                      
                      <a 
                        href={`mailto:${provider.email}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Email</div>
                          <div className="font-medium text-foreground">{provider.email}</div>
                        </div>
                      </a>
                      
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Availability</div>
                          <div className="font-medium text-foreground">{provider.hoursText || '24/7 Available'}</div>
                        </div>
                      </div>
                    </div>
                  </PremiumCard>
                </ScrollReveal>

                {/* Trust Badges */}
                <ScrollReveal variant="fade" delay={200}>
                  <PremiumCard variant="glass" className="p-4">
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BadgeCheck className="h-5 w-5 text-emerald-500" />
                        <span>Verified</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-5 w-5 text-primary" />
                        <span>Insured</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="h-5 w-5 text-amber-500" />
                        <span>Fast Response</span>
                      </div>
                    </div>
                  </PremiumCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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