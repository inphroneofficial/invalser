
import React from "react";
import { Shield, Clock, CreditCard, CheckCircle } from "lucide-react";
import { Motion } from "@/components/ui/motion";

const uniqueSellingPoints = [
  {
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: "100% Verified Professionals",
    description: "Background-checked valets with insurance coverage"
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-400" />,
    title: "Instant Booking",
    description: "Book in under 60 seconds, confirmed within 5 minutes"
  },
  {
    icon: <CreditCard className="h-6 w-6 text-purple-400" />,
    title: "Transparent Pricing",
    description: "No hidden fees, pay after service completion"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-400" />,
    title: "Satisfaction Guarantee",
    description: "Money-back guarantee if not 100% satisfied"
  }
];

export default function HeroUSP() {
  return (
    <Motion variant="slideUp" delay={400}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {uniqueSellingPoints.map((point, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex justify-center mb-3">{point.icon}</div>
            <h3 className="text-white font-semibold text-sm mb-1">{point.title}</h3>
            <p className="text-white/70 text-xs">{point.description}</p>
          </div>
        ))}
      </div>
    </Motion>
  );
}
