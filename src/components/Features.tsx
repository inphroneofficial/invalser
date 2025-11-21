
import React from 'react';
import { Car, Shield, CheckCircle, Clock, MapPin, Phone, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const valetFeatures = [
    {
      icon: Car,
      title: "Professional Valet Services",
      description: "Trained professionals handle your vehicles with care and precision"
    },
    {
      icon: CheckCircle,
      title: "Verified Providers",
      description: "All valet service providers are background-checked and verified"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock valet services for your convenience"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Professional Security",
      description: "Trained bodyguards, bouncers, and security personnel for all needs"
    },
    {
      icon: User,
      title: "Personal Protection",
      description: "Individual bodyguards and executive protection services"
    },
    {
      icon: MapPin,
      title: "Event Security",
      description: "Comprehensive security solutions for events and venues"
    }
  ];

  const platformFeatures = [
    {
      icon: Phone,
      title: "Easy Booking",
      description: "Simple booking process with instant confirmations"
    },
    {
      icon: MapPin,
      title: "Pan-India Coverage",
      description: "Services available across 20+ major Indian cities"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Premium service standards with customer satisfaction guarantee"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ice-blue-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-ice-blue-400/10 rounded-full blur-3xl animate-pulse-gentle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/30 dark:to-blue-900/30 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-ice-blue-600 dark:text-ice-blue-400 mr-2" />
            <span className="text-sm font-semibold text-ice-blue-700 dark:text-ice-blue-300">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ice-blue-700 via-blue-600 to-ice-blue-600 dark:from-ice-blue-400 dark:via-blue-400 dark:to-ice-blue-400 bg-clip-text text-transparent mb-6">
            Why Choose INVALSER?
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            India's most comprehensive platform for premium valet and security services
          </p>
        </div>

        {/* Valet Services */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/30 dark:to-blue-900/30 rounded-2xl px-8 py-4 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Car className="w-7 h-7 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-subtle" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-ice-blue-700 to-blue-600 dark:from-ice-blue-400 dark:to-blue-400 bg-clip-text text-transparent">
                Valet Services
              </h3>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Professional valet parking for personal, event, and commercial needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valetFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-ice-blue-200/50 dark:border-ice-blue-700/30 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-10 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-ice-blue-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/40 dark:to-blue-900/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <feature.icon className="w-10 h-10 text-ice-blue-600 dark:text-ice-blue-400" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-ice-blue-600 dark:group-hover:text-ice-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Services */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl px-8 py-4 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-7 h-7 text-red-600 dark:text-red-400 mr-3 animate-pulse-gentle" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                Security Services
              </h3>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Professional security solutions including bodyguards, bouncers, and event security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-red-200/50 dark:border-red-700/30 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                <CardContent className="p-10 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <feature.icon className="w-10 h-10 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-white bg-clip-text text-transparent mb-4">
              Platform Benefits
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need for seamless service booking and management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${(index + 6) * 100}ms` }}>
                <CardContent className="p-10 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700/40 dark:to-slate-800/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <feature.icon className="w-10 h-10 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-ice-blue-600 dark:group-hover:text-ice-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
