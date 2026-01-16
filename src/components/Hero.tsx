import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Car, Shield, MapPin, Star, Users, ArrowRight, Sparkles, Key, UserCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSearchForm from "./hero/HeroSearchForm";
import { ValetAnimation, SecurityAnimation } from "./ServiceAnimations";
import { AnimatedCounter } from "@/components/ui/animated-counter";


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-blob delay-200" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-info/20 rounded-full blur-3xl animate-blob delay-400" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float delay-200 opacity-50" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-info rounded-full animate-float delay-400 opacity-40" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-white/90">India's #1 Service Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Premium{" "}
            <span className="gradient-text text-glow">Valet</span>
            {" & "}
            <span className="text-accent">Security</span>
            <br className="hidden sm:block" />
            Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100 text-balance">
            Connect with verified professionals for valet parking and security services. 
            Trusted by 50,000+ customers across India.
          </p>

          {/* Animated Service Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover-lift hover-glow group cursor-pointer relative overflow-hidden" onClick={() => scrollToSection('features')}>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden shadow-lg shadow-primary/20">
                  <ValetAnimation />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Valet Services</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Key className="w-3 h-3 text-primary animate-wave" />
                    <span className="text-xs text-white/60">Professional Parking</span>
                  </div>
                </div>
              </div>
              <p className="relative text-sm text-white/60 mb-3">Professional parking for events, hotels & commercial venues</p>
              
              {/* Features */}
              <div className="flex items-center gap-3 text-xs text-white/50">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-primary animate-pulse" />
                  <span>Instant</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>24/7</span>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover-lift hover-glow group cursor-pointer relative overflow-hidden" onClick={() => scrollToSection('features')}>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Pulse ring animation */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping" />
              </div>
              
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative overflow-hidden shadow-lg shadow-accent/20">
                  <SecurityAnimation />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg group-hover:text-accent transition-colors">Security Services</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <UserCheck className="w-3 h-3 text-accent animate-pulse" />
                    <span className="text-xs text-white/60">Verified Guards</span>
                  </div>
                </div>
              </div>
              <p className="relative text-sm text-white/60 mb-3">Bodyguards, bouncers & event security professionals</p>
              
              {/* Features */}
              <div className="flex items-center gap-3 text-xs text-white/50">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-accent animate-pulse-soft" />
                  <span>Trained</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-accent fill-accent/50" />
                  <span>Top Rated</span>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* Search Form */}
          <HeroSearchForm />

          
          {/* Provider CTA */}
          <div className="mt-10 animate-fade-in-up delay-500">
            <Link to="/registration">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 group">
                <Users className="w-4 h-4 mr-2" />
                Register as Service Provider
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <button 
          onClick={() => scrollToSection('value-proposition')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
