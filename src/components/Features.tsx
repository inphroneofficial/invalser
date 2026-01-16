import React from 'react';
import { Car, Shield, CheckCircle, Clock, MapPin, Phone, User, Award, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    category: "Valet Services",
    icon: Car,
    color: "primary",
    items: [
      { icon: Car, title: "Professional Valet", description: "Trained professionals handle your vehicles with care" },
      { icon: CheckCircle, title: "Verified Providers", description: "Background-checked and certified personnel" },
      { icon: Clock, title: "24/7 Available", description: "Round-the-clock services for your convenience" },
    ]
  },
  {
    category: "Security Services",
    icon: Shield,
    color: "accent",
    items: [
      { icon: Shield, title: "Professional Security", description: "Trained bodyguards and security personnel" },
      { icon: User, title: "Personal Protection", description: "Executive protection and VIP services" },
      { icon: MapPin, title: "Event Security", description: "Comprehensive security for events and venues" },
    ]
  },
  {
    category: "Platform Benefits",
    icon: Award,
    color: "success",
    items: [
      { icon: Phone, title: "Easy Booking", description: "Simple process with instant confirmations" },
      { icon: MapPin, title: "Pan-India Coverage", description: "Services across 100+ major Indian cities" },
      { icon: Zap, title: "Instant Connect", description: "Direct contact with providers via WhatsApp" },
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 section-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Premium Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="gradient-text">INVALSER?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            India's most comprehensive platform for premium valet and security services
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 sm:space-y-16">
          {features.map((section, sectionIdx) => (
            <div key={section.category}>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  section.color === "primary" && "bg-primary/10",
                  section.color === "accent" && "bg-accent/10",
                  section.color === "success" && "bg-success/10"
                )}>
                  <section.icon className={cn(
                    "w-6 h-6",
                    section.color === "primary" && "text-primary",
                    section.color === "accent" && "text-accent",
                    section.color === "success" && "text-success"
                  )} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{section.category}</h3>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {section.items.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="card-modern p-6 sm:p-8 group"
                    style={{ animationDelay: `${(sectionIdx * 3 + idx) * 100}ms` }}
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110",
                      section.color === "primary" && "bg-primary/10",
                      section.color === "accent" && "bg-accent/10",
                      section.color === "success" && "bg-success/10"
                    )}>
                      <feature.icon className={cn(
                        "w-7 h-7",
                        section.color === "primary" && "text-primary",
                        section.color === "accent" && "text-accent",
                        section.color === "success" && "text-success"
                      )} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
