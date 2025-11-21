
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle, Shield, Award, ThumbsUp, Users, Globe, MessageCircle, Calendar, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-dark">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                About <span className="text-gold">Find<span className="italic">Valet</span></span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                India's premier platform connecting event organizers, hotels, and individuals with professional valet services.
              </p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-gold mr-2" />
                  <span>Verified Providers</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-gold mr-2" />
                  <span>Secure Booking</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span>24/7 Service</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 dark:from-navy-dark to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 mix-blend-overlay"></div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white dark:bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-navy/80 dark:text-white/80 mb-6">
                  Founded in 2023 in Hyderabad, invalser was born out of a simple observation: the growing need for professional valet services across India's bustling cities was not being met with an easy-to-use platform to connect customers with quality providers.
                </p>
                <p className="text-navy/80 dark:text-white/80 mb-6">
                  What started with a handful of vetted valet services in Hyderabad has now expanded to major cities across India. Our mission is to elevate the hospitality experience by making professional valet services accessible to everyone who needs them, whether for a grand wedding, a corporate event, or a luxury hotel.
                </p>
                <p className="text-navy/80 dark:text-white/80">
                  We believe that the first and last impression matters the most, and a smooth valet experience sets the tone for any event. That's why we meticulously vet every provider on our platform, ensuring they meet our high standards of professionalism, reliability, and customer service.
                </p>
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 dark:bg-navy-light rounded-lg p-6 text-center">
                    <div className="bg-gold/10 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-2">1+ Cities</h3>
                    <p className="text-navy/70 dark:text-white/70">Coverage across major Indian cities Soon</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-navy-light rounded-lg p-6 text-center">
                    <div className="bg-gold/10 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-2">1+ Provider</h3>
                    <p className="text-navy/70 dark:text-white/70">Verified valet service providers</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-navy-light rounded-lg p-6 text-center">
                    <div className="bg-gold/10 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <Calendar className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-2">10+ Events</h3>
                    <p className="text-navy/70 dark:text-white/70">Successfully serviced across Hyderabad India</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-navy-light rounded-lg p-6 text-center">
                    <div className="bg-gold/10 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <ThumbsUp className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-2">98% Satisfaction</h3>
                    <p className="text-navy/70 dark:text-white/70">Customer satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50 dark:bg-navy-dark/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-navy/80 dark:text-white/80 text-lg">
                To transform how valet services operate in India by creating a seamless platform that connects customers with reliable providers, ensuring every event and venue offers a premium arrival and departure experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md">
                <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-3">Quality Assurance</h3>
                <p className="text-navy/70 dark:text-white/70">
                  We rigorously vet all valet service providers on our platform to ensure they meet our high standards of professionalism, reliability, and customer service.
                </p>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md">
                <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-3">Pan-India Network</h3>
                <p className="text-navy/70 dark:text-white/70">
                  We've built a comprehensive network of valet services across major Indian cities, making it easy for customers to find reliable services anywhere.
                </p>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md">
                <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark dark:text-white mb-3">Customer First</h3>
                <p className="text-navy/70 dark:text-white/70">
                  We prioritize customer satisfaction with transparent pricing, reliable service, and dedicated support throughout the booking process.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 bg-white dark:bg-navy-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-navy/80 dark:text-white/80">
                Meet the passionate team leading the revolution in valet services across India.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gold/20">
                  <img src="/GTK.jpg" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark dark:text-white">THANGELLA</h3>
                <p className="text-gold mb-2">Founder & CEO</p>
                <p className="text-navy/70 dark:text-white/70 text-sm">
                  Former hospitality executive with 15 years of experience in luxury hotel management.
                </p>
              </div>
              
            
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-navy-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience Premium Valet Services Today
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you're organizing a grand wedding, hosting a corporate event, or managing a hotel, invalser connects you with the perfect valet service for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark">
                <Link to="/providers">Find a Valet Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
