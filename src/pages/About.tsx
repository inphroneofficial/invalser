import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle, Shield, Award, ThumbsUp, Users, Globe, MessageCircle, Calendar, Clock, ArrowRight, Car } from "lucide-react";

const stats = [
  { icon: MapPin, value: "100+", label: "Cities Covered" },
  { icon: Users, value: "500+", label: "Verified Providers" },
  { icon: Calendar, value: "50K+", label: "Bookings Completed" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" }
];

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We rigorously vet all service providers to ensure they meet our high standards of professionalism and reliability."
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description: "We've built a comprehensive network of valet and security services across major Indian cities."
  },
  {
    icon: MessageCircle,
    title: "Customer First",
    description: "We prioritize customer satisfaction with transparent pricing, reliable service, and dedicated support."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-dark text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob delay-200" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                About <span className="gradient-text">INVALSER</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 animate-fade-in-up delay-100">
                India's premier platform connecting businesses and individuals with professional valet and security services.
              </p>
              <div className="flex justify-center items-center gap-3 flex-wrap animate-fade-in-up delay-200">
                <div className="flex items-center glass px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-white/90">Verified Providers</span>
                </div>
                <div className="flex items-center glass px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm text-white/90">Secure Booking</span>
                </div>
                <div className="flex items-center glass px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-white/90">24/7 Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in Hyderabad, INVALSER was born from a simple observation: the growing need for professional valet and security services across India wasn't being met with an easy-to-use platform.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    What started with a handful of vetted providers has now expanded to 100+ cities across India. Our mission is to elevate service experiences by making professional valet and security services accessible to everyone.
                  </p>
                  <p className="text-muted-foreground">
                    We believe that first and last impressions matter most, and a smooth service experience sets the tone for any event. That's why we meticulously vet every provider on our platform.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-card border border-border rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Car className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">INVALSER</h3>
                        <p className="text-sm text-muted-foreground">Indian Valet Services</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Verified & Background-Checked Staff</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Insurance Coverage</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Professional Training</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>24/7 Customer Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at INVALSER
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Experience Premium Services Today
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Whether you're organizing a grand wedding, hosting a corporate event, or managing a venue, INVALSER connects you with the perfect service providers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/providers">
                <Button variant="gradient" size="lg">
                  Find Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
