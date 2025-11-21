
import React from "react";
import { Motion } from "@/components/ui/motion";

export default function HeroWhyChooseUs() {
  return (
    <Motion variant="slideUp" delay={800}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why 50,000+ Customers Choose Us Over Competitors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Fastest Booking</h3>
            <p className="text-white/80">60 seconds to book vs 10+ minutes on other platforms</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-white/80">Only top 10% of applicants make it to our platform</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">Complete Protection</h3>
            <p className="text-white/80">₹10L insurance coverage + money-back guarantee</p>
          </div>
        </div>
      </div>
    </Motion>
  );
}
