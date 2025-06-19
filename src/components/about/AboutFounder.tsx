
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from "@/components/ui/section-header";

export function AboutFounder() {
  return (
    <div className="bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Created by a Researcher, Not a Corporation" 
            variant="primary"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700/50"
          >
            <div className="p-5 md:p-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 md:mb-4">
                <img 
                  src="/lovable-uploads/5dafccdc-72be-4fd1-9ede-b74e4055ed66.png" 
                  alt="Devanand Premkumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-1">Devanand Premkumar</h3>
              <p className="text-blue-400 text-center mb-3 md:mb-4">Founder & CEO</p>
              <p className="text-sm md:text-base text-slate-300 text-center">
                xonPlus is led by Deva, a security researcher and founder of XposedOrNot, a community-driven breach alerting platform trusted by thousands globally. With over 20 years of experience in building and scaling global information security programs across Europe and APAC, he brings deep expertise in SOC operations, ISO 27001/22301, and enterprise security strategy.
              </p>
              <br />
              <p className="text-sm md:text-base text-slate-300 text-center">
                A CISSP and CISA-certified professional, Deva's leadership combines hands-on technical credibility with a strategic, clear-headed approach to protecting organizations. He's also an avid CTF player who enjoys solving forensic challenges in his spare time, keeping his skills sharp and curiosity alive.
              </p>
              <br />
              <p className="text-sm md:text-base text-slate-300 text-center">
                That same mindset powers xonPlus our platform built with care, clarity, and credibility.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
