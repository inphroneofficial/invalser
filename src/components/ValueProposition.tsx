import React from "react";
import { Shield, Clock, Award, CreditCard, Users, CheckCircle, Star, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  
  { label: "Customer Retention", value: "95%", icon: Users },
  { label: "Success Rate", value: "99.8%", icon: CheckCircle },
  { label: "Response Time", value: "2 min", icon: Zap },
];

const trustFactors = [
  {
    icon: Shield,
    title: "₹10 Lakh Insurance",
    description: "Comprehensive coverage for complete peace of mind"
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "International quality standards certified"
  },
  {
    icon: CreditCard,
    title: "Secure Process",
    description: "Safe and transparent booking process"
  }
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-16 sm:py-24 section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            India's Most Trusted Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            The Clear Choice for{" "}
            <span className="gradient-text">Smart Customers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            When quality matters and time is precious, choose the platform that 50,000+ customers trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="card-modern p-5 sm:p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="rounded-3xl bg-gradient-primary p-8 sm:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Your Trust is Our Foundation
            </h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Industry-leading security, insurance, and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFactors.map((factor, idx) => (
              <div 
                key={factor.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{factor.title}</h4>
                <p className="text-white/70 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands who've already made the smart choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/providers">
              <Button size="lg" className="btn-primary text-white shadow-glow">
                Start Your Premium Experience
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
