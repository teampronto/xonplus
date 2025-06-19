
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useIsMobile } from "@/hooks/use-mobile";

export function ConsumerHero() {
  const { isMobile } = useIsMobile();
  
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <LampContainer className="min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className={`container relative z-10 px-4 ${isMobile ? 'pt-20 pb-8' : 'pt-[72px] pb-[36px]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge with mobile-optimized margin and better contrast */}
          <div className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 ${isMobile ? 'mt-12 mb-4' : 'mt-112 mb-6'} bg-slate-800/70 backdrop-blur-md text-emerald-200 rounded-full text-xs md:text-sm font-medium border border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:border-emerald-500/40`}>
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-emerald-400" />
            Build trust, reduce fraud, become the security-forward brand
          </div>

          {/* Main Content with improved performance */}
          <motion.h1 
            initial={{ opacity: 0.5, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} 
            className={`text-3xl md:text-4xl lg:text-6xl font-bold leading-tight ${isMobile ? 'mb-3' : 'mb-4 md:mb-5'} bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent`}
          >
            Give Your Customers the Power to Outsmart Breaches
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0.5, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }} 
            className={`text-base md:text-xl lg:text-2xl font-light text-slate-200 ${isMobile ? 'mb-5' : 'mb-6 md:mb-8'} max-w-2xl mx-auto px-0`}
          >
            Build trust, reduce fraud, and become the security-forward brand your users deserve.
          </motion.p>
          
          {/* CTA Buttons with better accessibility and contrast */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              className="relative bg-emerald-600 text-white hover:bg-emerald-700 font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg group overflow-hidden w-full sm:w-auto before:absolute before:inset-0 before:translate-x-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-[-150%] before:transition-transform before:duration-[1.5s] before:ease-in-out" 
              onClick={handleDemoRequest}
              aria-label="Schedule a free product demonstration"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl border-2 border-emerald-500/40 text-emerald-200 backdrop-blur-sm transition-all bg-slate-800/40 hover:bg-slate-700/60 w-full sm:w-auto" 
              onClick={scrollToPricing}
              aria-label="Compare pricing plans"
            >
              Compare Plans
            </Button>
          </motion.div>
        </div>
      </div>
    </LampContainer>
  );
}
