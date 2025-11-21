
import React from "react";
import { Motion } from "@/components/ui/motion";

export default function HeroSocialProof() {
  return (
    <Motion variant="slideUp" delay={1000}>
      <div className="text-center">
        <p className="text-white/70 mb-4">Trusted by leading brands across India</p>
        <div className="flex justify-center items-center gap-8 opacity-60">
          <div className="text-white font-bold text-lg">Marriott</div>
          <div className="text-white font-bold text-lg">Taj Hotels</div>
          <div className="text-white font-bold text-lg">Oberoi</div>
          <div className="text-white font-bold text-lg">ITC</div>
          <div className="text-white font-bold text-lg">Hyatt</div>
        </div>
      </div>
    </Motion>
  );
}
