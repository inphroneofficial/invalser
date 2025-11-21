
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Shield, Zap, Check, Star, TrendingUp, Users, Phone, Sparkles, Rocket, Target } from 'lucide-react';
import { Motion } from '@/components/ui/motion';

const ServiceProviderCTA = () => {
  return (
    <section 
      id="service-provider-cta"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ice-blue-50 via-blue-50 to-indigo-50 dark:from-ice-blue-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-ice-blue-400/20 to-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-ice-blue-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="fadeIn">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-ice-blue-500/20 to-blue-500/20 backdrop-blur-sm border border-ice-blue-200 dark:border-ice-blue-700 rounded-full px-8 py-4 mb-8 animate-glow-blue">
              <Rocket className="h-6 w-6 text-ice-blue-600 dark:text-ice-blue-400 animate-bounce-gentle" />
              <span className="text-ice-blue-800 dark:text-ice-blue-200 font-bold text-lg">Partner with India's #1 Platform</span>
              <Sparkles className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 animate-sparkle" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ice-blue-700 via-blue-600 to-indigo-600 dark:from-ice-blue-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Are you a Service Provider?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 animate-slide-in-left">
              Join our premium platform and transform your business
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-in-right">
              Connect with verified customers • Grow your income • Build your reputation
            </p>
          </div>
        </Motion>

        {/* Enhanced Stats Section */}
<Motion variant="slideUp" delay={200}>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
    <Card className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-ice-blue-200 dark:border-ice-blue-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-subtle group">
      <CardContent className="p-6">
        <div className="relative">
          <Users className="h-10 w-10 text-ice-blue-600 dark:text-ice-blue-400 mx-auto mb-3 animate-bounce-gentle group-hover:animate-spin" />
          <div className="absolute inset-0 bg-ice-blue-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 animate-pulse-number">100+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Active Customers</div>
        <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-black dark:text-white group-hover:bg-green-100 group-hover:text-green-800 animate-glow-gentle">
          Growing 25% monthly
        </Badge>
      </CardContent>
    </Card>

    <Card className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-ice-blue-200 dark:border-ice-blue-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-subtle group" style={{ animationDelay: '100ms' }}>
      <CardContent className="p-6">
        <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-3 animate-bounce-gentle group-hover:animate-pulse" />
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 animate-pulse-number">98%</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
        <Badge className="mt-2 bg-blue-100 text-blue-800 dark:bg-black dark:text-white group-hover:bg-blue-100 group-hover:text-blue-800 animate-glow-gentle">
          Industry Leading
        </Badge>
      </CardContent>
    </Card>

    <Card className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-ice-blue-200 dark:border-ice-blue-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-subtle group" style={{ animationDelay: '200ms' }}>
      <CardContent className="p-6">
        <Star className="h-10 w-10 text-ice-blue-500 dark:text-ice-blue-400 mx-auto mb-3 animate-sparkle group-hover:animate-spin" />
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 animate-pulse-number">4.9</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
        <Badge className="mt-2 bg-ice-blue-100 text-ice-blue-800 dark:bg-black dark:text-white group-hover:bg-ice-blue-100 group-hover:text-ice-blue-800 animate-glow-gentle">
          Excellent Service
        </Badge>
      </CardContent>
    </Card>

    <Card className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-ice-blue-200 dark:border-ice-blue-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-bounce-subtle group" style={{ animationDelay: '300ms' }}>
      <CardContent className="p-6">
        <Target className="h-10 w-10 text-ice-blue-600 mx-auto mb-3 animate-pulse group-hover:animate-bounce" />
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 animate-pulse-number">1+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Cities Covered</div>
        <Badge className="mt-2 bg-purple-100 text-purple-800 dark:bg-black dark:text-white group-hover:bg-purple-100 group-hover:text-purple-800 animate-glow-gentle">
          Pan-India Presence
        </Badge>
      </CardContent>
    </Card>
  </div>
</Motion>


        {/* Enhanced Pricing Plans */}
        <Motion variant="slideUp" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-ice-blue-200 dark:border-ice-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-900 relative overflow-hidden group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-blue-50/50 to-blue-50/50 dark:from-ice-blue-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center bg-gradient-to-r from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/30 dark:to-blue-900/30 relative z-10">
                <CardTitle className="text-3xl text-ice-blue-700 dark:text-ice-blue-300 flex items-center justify-center gap-3 animate-slide-in-left">
                  <Zap className="h-8 w-8 animate-flash" />
                  Standard Plan
                </CardTitle>
                <CardDescription className="text-xl flex flex-col gap-2">
                  <span className="block">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white animate-pulse-number">₹799</span>
                    <span className="text-slate-600 dark:text-slate-400">/month</span>
                  </span>
                  <span className="text-ice-blue-600 dark:text-ice-blue-400 font-semibold text-lg animate-bounce-gentle">Perfect for new providers</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center animate-slide-in-left" style={{ animationDelay: '100ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    Premium profile listing with photos
                  </li>
                  <li className="flex items-center animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    Direct customer bookings & communication
                  </li>
                  <li className="flex items-center animate-slide-in-left" style={{ animationDelay: '300ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    Customer reviews & rating system
                  </li>
                  <li className="flex items-center animate-slide-in-left" style={{ animationDelay: '400ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center animate-slide-in-left" style={{ animationDelay: '500ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    Basic analytics dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-3 border-ice-blue-400 dark:border-ice-blue-600 shadow-3xl hover:shadow-4xl transition-all duration-500 relative transform hover:scale-105 bg-gradient-to-br from-white to-ice-blue-50/30 dark:from-gray-900 dark:to-ice-blue-900/20 overflow-hidden group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-blue-100/30 to-blue-100/30 dark:from-ice-blue-800/30 dark:to-blue-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ice-blue-600 to-blue-600 dark:from-ice-blue-500 dark:to-blue-500 text-white px-6 py-2 text-lg font-bold animate-bounce-gentle shadow-lg">
                <Crown className="mr-2 h-5 w-5 animate-spin-slow" />
                Most Popular Choice
                <Sparkles className="ml-2 h-4 w-4 animate-sparkle" />
              </Badge>
              
              <CardHeader className="text-center bg-gradient-to-r from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/50 dark:to-blue-900/50 pt-8 relative z-10">
                <CardTitle className="text-3xl text-ice-blue-800 dark:text-ice-blue-200 flex items-center justify-center gap-3 animate-slide-in-right">
                  <Crown className="h-8 w-8 animate-bounce-gentle" />
                  Premium Plan
                </CardTitle>
                <CardDescription className="text-xl flex flex-col gap-2">
                  <span className="block">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white animate-pulse-number">₹1,499</span>
                    <span className="text-slate-600 dark:text-slate-400">/month</span>
                  </span>
                  <span className="text-ice-blue-700 dark:text-ice-blue-300 font-bold text-xl animate-glow-text">
                    Save ₹4,788 yearly! 💰
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-semibold">Everything in Standard Plan +</span>
                  </li>
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-medium">Featured & priority listings</span>
                  </li>
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-medium">Priority customer support</span>
                  </li>
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '400ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-medium">Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '500ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-medium">Marketing promotion inclusion</span>
                  </li>
                  <li className="flex items-center animate-slide-in-right" style={{ animationDelay: '600ms' }}>
                    <Check className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 mr-3 animate-bounce-gentle" />
                    <span className="font-medium">Verified provider badge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Motion>

        {/* Enhanced CTA Button */}
        <Motion variant="fadeIn" delay={600}>
          <div className="text-center">
            <Link to="/registration">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-ice-blue-600 via-blue-600 to-indigo-600 hover:from-ice-blue-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-12 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-glow-blue relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Crown className="h-6 w-6 animate-bounce-gentle" />
                  Start Your Premium Journey
                  <Rocket className="h-6 w-6 animate-bounce-gentle" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></div>
              </Button>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 animate-fade-in-up">
              🚀 Join 10+ successful service providers • 💯 100% satisfaction guarantee
            </p>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ServiceProviderCTA;
