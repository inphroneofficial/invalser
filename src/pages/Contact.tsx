
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Validate form
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      setSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Sending contact form data:", { name, email, phone, message });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitting(false);
      
      // Show success message
      toast.success("Message sent successfully! We'll get back to you shortly.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-dark">
      <Navbar />
      
      <main className="flex-grow pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ice-blue-900 via-ice-blue-800 to-ice-blue-700 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
                Contact <span className="text-ice-blue-200">Us</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                Have questions about our services? We're here to help you find the perfect valet solution for your needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="lg:w-2/3">
                <Card className="border-gray-300 dark:border-gray-800 shadow-lg bg-white dark:bg-navy-light">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                      Send Us a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="bg-gray-50 dark:bg-navy-dark border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-ice-blue-500 focus:border-ice-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="bg-gray-50 dark:bg-navy-dark border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-ice-blue-500 focus:border-ice-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number (optional)"
                          className="bg-gray-50 dark:bg-navy-dark border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-ice-blue-500 focus:border-ice-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="How can we help you?"
                          className="bg-gray-50 dark:bg-navy-dark border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-ice-blue-500 focus:border-ice-blue-500 min-h-[150px]"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-ice-blue-600 hover:bg-ice-blue-700 text-white font-medium"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:w-1/3">
                <Card className="border-gray-300 dark:border-gray-800 shadow-lg mb-6 bg-white dark:bg-navy-light">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-ice-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Hyderabad, KV.Rangareddy<br />
                            500060<br />
                            India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 text-ice-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            +91 9550464957
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-ice-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            invalser@gmail.com
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 text-ice-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Hours</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-gray-100 dark:bg-navy-light/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                  How do I book a valet service?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  You can book a valet service by browsing our providers, selecting one that matches your needs, and completing the booking form with your event or personal details.
                </p>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                  What types of events do you cover?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Our valet services cover a wide range of events including weddings, corporate functions, private parties, galas, and more. We also offer hotel and personal valet services.
                </p>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                  How are prices determined?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Pricing depends on several factors including the type of service, duration, number of attendees, number of vehicles expected, and location. Contact us for a custom quote.
                </p>
              </div>
              
              <div className="bg-white dark:bg-navy-light rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Do you offer services internationally?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Yes, we have partners in select international destinations including Dubai, Singapore, Hong Kong, and other major cities. Contact us for availability in your location.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
              Find Us
            </h2>
            
            <div className="rounded-xl overflow-hidden h-[300px] sm:h-[400px] bg-gray-200 dark:bg-navy-light/20 flex items-center justify-center shadow-lg">
              <div className="text-gray-600 dark:text-gray-400 text-center">
                <MapPin className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm sm:text-base">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
