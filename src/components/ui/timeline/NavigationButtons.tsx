
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  goToPrev: () => void;
  goToNext: () => void;
}

export function NavigationButtons({ goToPrev, goToNext }: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center absolute w-full top-1/2 -translate-y-1/2 z-10 px-4 md:px-24 lg:px-32">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={goToPrev}
        className="border border-slate-700 bg-slate-800/50 hover:bg-slate-700 rounded-full transform group w-12 h-12"
        aria-label="Previous step"
      >
        <div className="relative overflow-hidden">
          <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors relative z-10" />
          {/* Neon glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 bg-blue-500 blur-md transition-opacity duration-300"></div>
        </div>
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={goToNext}
        className="border border-slate-700 bg-slate-800/50 hover:bg-slate-700 rounded-full transform group w-12 h-12"
        aria-label="Next step"
      >
        <div className="relative overflow-hidden">
          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors relative z-10" />
          {/* Neon glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 bg-blue-500 blur-md transition-opacity duration-300"></div>
        </div>
      </Button>
    </div>
  );
}
