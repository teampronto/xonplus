
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTVSection() {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  const handleBuyClick = () => {
    window.open('https://xonplus.lemonsqueezy.com/buy/dc173ebc-1c9c-451b-945c-db1b80a26ad8', '_blank');
  };
  
  return (
    <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Add Breach Detection to Your App, In Just 15 Minutes
              </h2>
              
              <p className="text-base md:text-lg text-slate-300">
                No data stored. No compliance risks.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:flex-shrink-0">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl"
                onClick={handleBuyClick}
              >
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-purple-500/30 text-purple-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl"
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
