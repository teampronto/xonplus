
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function CTVSection() {
  const isMobile = useIsMobile();
  
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  const handleBuyClick = () => {
    window.open('https://xonplus.lemonsqueezy.com/buy/f59cb831-8f12-43b6-acae-59a884bb033c?media=0', '_blank');
  };
  
  return (
    <div className="py-10 md:py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Prove You Care About Security and Mean It
              </h2>
              
              <p className="text-base md:text-lg text-slate-300">
                Secure your accounts with our privacy-focused solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:flex-shrink-0">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 md:px-8 md:py-6 text-sm md:text-lg rounded-xl whitespace-nowrap"
                onClick={handleBuyClick}
              >
                Buy Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-emerald-500/30 text-emerald-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-6 py-3 md:px-8 md:py-6 text-sm md:text-lg rounded-xl"
                onClick={handleDemoRequest}
              >
                Book Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
