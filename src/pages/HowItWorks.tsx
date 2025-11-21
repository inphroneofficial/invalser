
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, Phone, Check, CarFront, MapPin, Star } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-12 w-12 text-gold" />,
    title: "invalser Services",
    description: "Search for valet services in your city or location. Filter by rating, price, or specific services."
  },
  {
    icon: <Calendar className="h-12 w-12 text-gold" />,
    title: "Book Online",
    description: "Select your date, time, and service type. Complete the booking form with your event or personal details."
  },
  {
    icon: <Phone className="h-12 w-12 text-gold" />,
    title: "Confirm Details",
    description: "The valet provider will contact you to confirm all details and answer any questions you may have."
  },
  {
    icon: <Check className="h-12 w-12 text-gold" />,
    title: "Enjoy the Service",
    description: "Professional valets arrive on time and provide seamless service for your event or occasion."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-dark">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                How <span className="text-gold">ValetPalace</span> Works
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Book professional valet services in just a few simple steps
              </p>
              <Button asChild className="bg-gold hover:bg-gold-dark text-navy-dark">
                <Link to="/providers">invalser Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-navy-light/20 hidden md:block"></div>
                
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col md:flex-row items-center mb-16 last:mb-0 relative"
                  >
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      {index % 2 === 0 && (
                        <>
                          <h3 className="text-2xl font-serif font-bold text-navy-dark dark:text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="text-navy/70 dark:text-white/70">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>
                    
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-navy-dark flex items-center justify-center border-4 border-gold/20 z-10 my-6 md:my-0 md:mx-4 shadow-lg">
                      {step.icon}
                      <div className="absolute top-full mt-2 md:hidden text-sm font-medium text-navy-dark dark:text-gold">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                      {index % 2 === 1 && (
                        <>
                          <h3 className="text-2xl font-serif font-bold text-navy-dark dark:text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="text-navy/70 dark:text-white/70">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Types */}
        <section className="py-16 bg-gray-100 dark:bg-navy-light/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-4">
                Types of Valet Services
              </h2>
              <p className="text-navy/70 dark:text-white/70">
                invalser offers a variety of valet services to meet your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <CarFront className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                  Event Valet Services
                </h3>
                <p className="text-navy/70 dark:text-white/70 mb-4">
                  Professional valet parking for weddings, corporate events, galas, and other special occasions. Make a great first impression with smooth arrival and departure experiences for your guests.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Wedding receptions</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Corporate functions</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Gala dinners</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Private parties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                  Hotel Valet Services
                </h3>
                <p className="text-navy/70 dark:text-white/70 mb-4">
                  Enhance your hotel's guest experience with professional valet parking services. Our providers offer full-time or part-time valet solutions tailored to your property's needs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Luxury hotels</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Boutique properties</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Resort destinations</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Business hotels</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                  Personal Valet Services
                </h3>
                <p className="text-navy/70 dark:text-white/70 mb-4">
                  Enjoy the convenience of personal valet services for special occasions, airport transfers, or simply when you need professional drivers to handle your vehicles.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Airport transfers</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Special occasions</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Business travel</span>
                  </li>
                  <li className="flex items-center text-navy/70 dark:text-white/70">
                    <Check className="h-4 w-4 text-gold mr-2" />
                    <span>Residential services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                    How far in advance should I book valet services?
                  </h3>
                  <p className="text-navy/70 dark:text-white/70">
                    For events, we recommend booking at least 2-4 weeks in advance to ensure availability. For hotel services, contracts can be established with a month's notice. Personal services may be available on shorter notice but booking ahead is always recommended.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                    How many valets will I need for my event?
                  </h3>
                  <p className="text-navy/70 dark:text-white/70">
                    The number of valets needed depends on several factors including expected guest count, event duration, and venue layout. As a general guideline, we recommend 1 valet per 50 guests. Your valet provider will help you determine the appropriate staffing.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                    What happens if it rains during my outdoor event?
                  </h3>
                  <p className="text-navy/70 dark:text-white/70">
                    Professional valet services come prepared for all weather conditions. They typically bring umbrellas, canopies, and other equipment to ensure guests stay dry. Weather contingency plans are discussed during the booking process.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                    Are the valet providers insured?
                  </h3>
                  <p className="text-navy/70 dark:text-white/70">
                    Yes, all valet providers on our platform are required to have proper insurance coverage. This includes general liability and garage keeper's legal liability insurance. You can request proof of insurance during the booking process.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-dark dark:text-white mb-2">
                    What is the cancellation policy?
                  </h3>
                  <p className="text-navy/70 dark:text-white/70">
                    Cancellation policies vary by provider. Generally, cancellations made more than 7 days before the service date are eligible for a full refund. Cancellations within 7 days may be subject to a partial charge. Your specific cancellation terms will be provided during booking.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-navy/70 dark:text-white/70 mb-6">
                  Have more questions about how ValetPalace works?
                </p>
                <Button asChild className="bg-navy dark:bg-navy-light text-white">
                  <Link to="/contact">Contact Our Support Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-navy dark:bg-navy-dark py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Experience Premium Valet Services?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Browse our selection of verified valet service providers and book the perfect option for your needs.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-navy-dark font-medium">
              <Link to="/providers">invalser Services Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
