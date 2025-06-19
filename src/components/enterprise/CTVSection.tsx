
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Call to Value Section - matching the homepage CTV styling
function CallToValueSection() {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Updated background overlay with darker blue gradient */}
      <div className="absolute inset-0 bg-[#0A1628] opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-sky-900/20 to-transparent"></div>
      
      <div className="max-w-full mx-auto relative z-10">
        {/* Updated container with smoother rounded corners and premium gradient effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A1628]/90 to-[#0e3a6b]/80 rounded-3xl p-12 relative overflow-hidden border border-blue-900/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Enhanced background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-sky-800/10 to-transparent pointer-events-none" />
          
          {/* Content container with left alignment */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            {/* Text content */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent mb-4">
                Your Team's Credentials Are Already Out There. Take Control Now.
              </h2>
              <p className="text-base md:text-lg text-slate-300 mb-0">
                Continuous breach exposure monitoring for your workforce, live in under 15 minutes.
              </p>
            </div>

            {/* CTA Buttons - with smoother rounded corners and enhanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                onClick={() => window.location.href = '/pricing'}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleDemoRequest}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Create a new CTVSection that wraps the CallToValueSection, matching the homepage styling
export function CTVSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <CallToValueSection />
      </div>
    </section>
  );
}
