import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValetRegistrationForm from "@/components/ValetRegistrationForm";
import { Sparkles, CheckCircle, Users, Star, Shield } from "lucide-react";

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: Users, text: "Access to 50K+ customers" },
    { icon: Star, text: "Build your reputation" },
    { icon: Shield, text: "Verified badge" },
    { icon: CheckCircle, text: "24/7 support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join Our Network</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="text-foreground">Become a </span>
              <span className="gradient-text">Service Provider</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up stagger-2">
              Join INVALSER and connect with thousands of customers looking for premium valet and security services.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up stagger-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur border border-border/50 text-sm"
                >
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <ValetRegistrationForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Registration;
