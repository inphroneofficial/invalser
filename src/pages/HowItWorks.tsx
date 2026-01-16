import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, Phone, Check, Car, MapPin, Star, Shield, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Services",
    description: "Search for valet or security services in your city. Filter by rating, price, or specific requirements."
  },
  {
    icon: Calendar,
    title: "Book Online",
    description: "Select your date, time, and service type. Complete the booking form with your event details."
  },
  {
    icon: Phone,
    title: "Confirm Details",
    description: "The provider will contact you to confirm all details and answer any questions you may have."
  },
  {
    icon: Check,
    title: "Enjoy the Service",
    description: "Professional staff arrive on time and provide seamless service for your event or occasion."
  }
];

const services = [
  {
    icon: Car,
    title: "Event Valet Services",
    description: "Professional valet parking for weddings, corporate events, galas, and special occasions.",
    features: ["Wedding receptions", "Corporate functions", "Gala dinners", "Private parties"]
  },
  {
    icon: MapPin,
    title: "Hotel & Venue Valet",
    description: "Enhance guest experience with professional valet parking solutions for your property.",
    features: ["Luxury hotels", "Boutique properties", "Resort destinations", "Commercial venues"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Professional bodyguards, bouncers, and event security for comprehensive protection.",
    features: ["Personal bodyguards", "Event bouncers", "Corporate security", "VIP protection"]
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-dark text-white py-20 lg:py-28 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob delay-200" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">Simple 4-Step Process</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                How <span className="gradient-text">INVALSER</span> Works
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 animate-fade-in-up delay-100">
                Book professional valet and security services in just a few simple steps
              </p>
              <Link to="/providers">
                <Button variant="gradient" size="lg" className="animate-fade-in-up delay-200">
                  Find Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="relative group"
                  >
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                    )}
                    
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300 relative z-10">
                      {/* Step number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                      
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Types */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground">
                INVALSER offers a variety of services to meet your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "How far in advance should I book services?",
                    a: "For events, we recommend booking at least 2-4 weeks in advance to ensure availability. For hotel services, contracts can be established with a month's notice."
                  },
                  {
                    q: "How many staff will I need for my event?",
                    a: "The number of staff depends on expected guest count, event duration, and venue layout. As a guideline, we recommend 1 valet per 50 guests. Your provider will help determine appropriate staffing."
                  },
                  {
                    q: "Are the service providers verified?",
                    a: "Yes, all providers on INVALSER are verified with proper documentation, background checks, and insurance coverage. You can request proof during the booking process."
                  },
                  {
                    q: "What is the cancellation policy?",
                    a: "Cancellation policies vary by provider. Generally, cancellations more than 7 days before are eligible for full refund. Your specific terms will be provided during booking."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground mb-4">
                  Have more questions?
                </p>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Browse our selection of verified service providers and book the perfect option for your needs.
            </p>
            <Link to="/providers">
              <Button variant="gradient" size="lg">
                Find Services Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
