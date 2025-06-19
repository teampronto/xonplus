
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function AboutHero() {
  return (
    <LampContainer className="min-h-[60vh] md:min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 mt-8 md:mt-14 mb-4 md:mb-6 bg-slate-800/50 backdrop-blur-md text-white rounded-full text-xs md:text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/30"
          >
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-blue-400" />
            Protecting what matters most
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-br from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text px-2 md:px-0"
          >
            Built for Security, Backed by Purpose
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 px-2 md:px-0"
          >
            xonPlus began as a free community project. Today, it's a trusted breach monitoring platform 
            used by businesses that want serious protection without inflated costs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0"
          >
            <Button 
              className="relative bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-5 md:px-8 md:py-6 rounded-xl shadow-lg group overflow-hidden w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}
            >
              Start the Conversation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </LampContainer>
  );
}
