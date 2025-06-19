
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function MidPageCTVSection() {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }} // Reduced animation duration
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-700/30 shadow-lg"
        >
          {/* Simplified background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-blue-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Take Control of Your Digital Identity
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Detect exposed credentials before they become a risk to you or your organization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.location.href = '/exposure-check'}
              >
                Check Exposure Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleDemoRequest}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
