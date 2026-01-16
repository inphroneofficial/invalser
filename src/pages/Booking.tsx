import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImprovedBookingForm from "@/components/booking/ImprovedBookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Shield, 
  Users,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Star,
  ArrowRight
} from "lucide-react";
import { getProviderById } from "@/services/providerService";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  
  const serviceType = searchParams.get('type') || 'personal';
  const provider = id ? getProviderById(id) : null;

  const features = [
    { icon: CheckCircle, text: "Verified Professionals" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Shield, text: "Secure Booking" },
    { icon: Star, text: "Quality Assured" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Book in Minutes</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="text-foreground">Book </span>
              <span className="gradient-text">Professional Services</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up stagger-2">
              Complete your booking in just a few simple steps. Our verified professionals are ready to serve.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up stagger-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur border border-border/50 text-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Car,
                title: "Valet Services",
                desc: "Professional parking solutions",
                color: "primary",
                services: ["Event Valet", "Hotel Valet", "Corporate Valet"]
              },
              {
                icon: Shield,
                title: "Security Services",
                desc: "Comprehensive protection",
                color: "destructive",
                services: ["Bodyguards", "Bouncers", "Event Security"]
              },
              {
                icon: Users,
                title: "Combined Package",
                desc: "Complete coverage",
                color: "accent",
                services: ["Mix & Match", "Custom Solutions", "Best Value"]
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="group card-interactive border-2 border-transparent hover:border-primary/30 bg-card/80 backdrop-blur overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                  <ul className="space-y-1">
                    {service.services.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <ImprovedBookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Left - Info */}
              <div className="p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="text-primary-foreground/80 mb-8">
                  Our support team is available 24/7 to assist you with your booking.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:9550464957" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">Call Us</p>
                      <p className="font-semibold">+91 9550464957</p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a href="mailto:support@invalser.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">Email Us</p>
                      <p className="font-semibold">support@invalser.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
              
              {/* Right - Hours */}
              <div className="p-8 bg-card">
                <h4 className="font-semibold text-lg mb-6 text-foreground">Support Hours</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <Badge variant="secondary">24 Hours</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Saturday</span>
                    <Badge variant="secondary">24 Hours</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <Badge variant="secondary">24 Hours</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Holidays</span>
                    <Badge variant="secondary">24 Hours</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Support is Online</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
