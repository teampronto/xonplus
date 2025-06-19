
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export function WebSecurityReliable() {
  const highlights = [
    "Modern infrastructure built for security",
    "Smart protections and automated monitoring", 
    "Regular security testing and audits",
    "Enterprise-grade compliance standards"
  ];

  return (
    <div className="bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Security You Can Rely On" 
            variant="primary"
            className="mb-8"
          />
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 shadow-lg border border-blue-500/20">
                  <Shield className="h-10 w-10 text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Built for Trust
              </h3>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
                We've designed our platform to be secure from the ground up. With modern infrastructure, 
                smart protections, and regular testing, your data is in good hands.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  className="relative bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-5 md:px-8 md:py-6 rounded-xl shadow-lg group overflow-hidden w-full sm:w-auto"
                  onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
