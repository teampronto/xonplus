
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useIsMobile } from "@/hooks/use-mobile";

export function EnterpriseHero() {
  const isMobile = useIsMobile();
  
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  // Enterprise product purchase URL
  const enterprisePurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/c3eed4e9-0217-4df9-9007-9a045bf28b6c";

  const handleGetStarted = () => {
    window.open(enterprisePurchaseUrl, '_blank');
  };

  return (
    <div className="relative">
      <LampContainer className={`min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900`}>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge with increased desktop margin */}
            <div className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 ${isMobile ? 'mt-12' : 'mt-112'} mb-6 bg-slate-800/50 backdrop-blur-md text-white rounded-full text-xs md:text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/30`}>
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-blue-400" />
              Protect your workforce from credential leaks and account takeovers
            </div>

            {/* Main Content */}
            <motion.h1 
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-5 bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent"
            >
              Protect Your Enterprise from Credential Leaks
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
              className="text-base md:text-xl lg:text-2xl font-light text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto px-0"
            >
              Continuous monitoring for exposed employee credentials with automated remediation workflows
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                className="relative bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg group overflow-hidden w-full sm:w-auto before:absolute before:inset-0 before:translate-x-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-[-150%] before:transition-transform before:duration-[1.5s] before:ease-in-out"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl border-2 border-white/20 text-white backdrop-blur-sm transition-all bg-slate-800/30 hover:bg-slate-700/50 w-full sm:w-auto"
                onClick={handleDemoRequest}
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </LampContainer>
    </div>
  );
}
