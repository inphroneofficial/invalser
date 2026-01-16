import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Shield, Zap, Check, Star, TrendingUp, Users, Rocket, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { icon: Users, value: "2,500+", label: "Active Customers", color: "primary" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "success" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "warning" },
  { icon: Shield, value: "100+", label: "Cities Covered", color: "accent" },
];

const plans = [
  {
    name: "Standard",
    price: "₹799",
    period: "/month",
    description: "Perfect for new providers",
    icon: Zap,
    features: [
      "Premium profile listing",
      "Direct customer bookings",
      "Customer reviews & ratings",
      "24/7 customer support",
      "Basic analytics dashboard"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "₹1,499",
    period: "/month",
    description: "Save ₹4,788 yearly",
    icon: Crown,
    features: [
      "Everything in Standard +",
      "Featured & priority listings",
      "Priority customer support",
      "Advanced analytics & insights",
      "Marketing promotion",
      "Verified provider badge"
    ],
    popular: true
  }
];

const ServiceProviderCTA = () => {
  return (
    <section 
      id="service-provider-cta"
      className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-blob delay-200" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Partner with India's #1 Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Are You a{" "}
            <span className="gradient-text">Service Provider?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our premium platform and transform your business.
            Connect with verified customers and grow your income.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="card-modern p-5 sm:p-6 text-center group"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform",
                stat.color === "primary" && "bg-primary/10",
                stat.color === "success" && "bg-success/10",
                stat.color === "warning" && "bg-warning/10",
                stat.color === "accent" && "bg-accent/10"
              )}>
                <stat.icon className={cn(
                  "w-6 h-6",
                  stat.color === "primary" && "text-primary",
                  stat.color === "success" && "text-success",
                  stat.color === "warning" && "text-warning",
                  stat.color === "accent" && "text-accent"
                )} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <div 
              key={plan.name}
              className={cn(
                "card-modern p-6 sm:p-8 relative",
                plan.popular && "ring-2 ring-primary"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  plan.popular ? "bg-primary/20" : "bg-muted"
                )}>
                  <plan.icon className={cn(
                    "w-6 h-6",
                    plan.popular ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/registration" className="block">
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular 
                      ? "btn-primary text-white shadow-glow" 
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Link to="/registration">
            <Button size="lg" className="btn-primary text-white shadow-glow-lg">
              <Crown className="w-5 h-5 mr-2" />
              Start Your Premium Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Join 1000+ successful service providers • 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviderCTA;
