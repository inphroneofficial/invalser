
import React from "react";
import { Users, Star, Clock, Award } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/20">
      <div className="text-center group">
        <div className="flex items-center justify-center mb-1 sm:mb-2 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
          <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 mr-1 sm:mr-2" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">10+</span>
        </div>
        <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-tight">Verified Professionals</p>
      </div>
      <div className="text-center group">
        <div className="flex items-center justify-center mb-1 sm:mb-2 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
          <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-ice-blue-400 dark:text-ice-blue-300 mr-1 sm:mr-2 fill-current" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">4.9</span>
        </div>
        <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-tight">Average Rating</p>
      </div>
      <div className="text-center group">
        <div className="flex items-center justify-center mb-1 sm:mb-2 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 mr-1 sm:mr-2" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">5min</span>
        </div>
        <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-tight">Booking Time</p>
      </div>
      <div className="text-center group">
        <div className="flex items-center justify-center mb-1 sm:mb-2 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
          <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-400 mr-1 sm:mr-2" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">100%</span>
        </div>
        <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-tight">Success Rate</p>
      </div>
    </div>
  );
}
