
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PricingCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-700/30 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Our team can build a tailored security package for your specific requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.location.href = '/faq'}
              >
                View FAQ
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
