
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from "@/components/ui/section-header";
import { ServerOff, CheckCircle } from 'lucide-react';

export function WebSecurityNoServers() {
  const benefits = [
    "No stress about patching outdated software",
    "No surprise vulnerabilities from server maintenance",
    "Cloudflare and Google handle the heavy lifting",
    "Focus on keeping things running smoothly"
  ];

  return (
    <div className="bg-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="No Servers to Patch" 
            variant="secondary"
          />
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 shadow-lg border border-green-500/20">
                  <ServerOff className="h-10 w-10 text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Serverless by Design
              </h3>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                We don't run any traditional servers. This architectural choice eliminates 
                entire categories of security risks and maintenance overhead.
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-green-500/30 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
