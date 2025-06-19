
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PricingHero() {
  return (
    <section className="py-32 md:py-40 relative">
      {/* Added glowing effect similar to homepage hero but only at the top */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-cyan-500/30 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 via-cyan-200 to-indigo-300">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Choose the perfect plan for your security needs. All plans include our core protection features.
          </p>
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm p-2 rounded-lg">
            <Button
              onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg rounded-xl transition-all"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
