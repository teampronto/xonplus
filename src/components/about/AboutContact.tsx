
import React from 'react';
import { motion } from 'framer-motion';

export function AboutContact() {
  return (
    <div className="bg-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A1628]/90 to-[#0e3a6b]/80 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden border border-blue-900/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-sky-800/10 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent mb-3 md:mb-4">
                Want to Partner, Collaborate, or Reach Out?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-slate-300 mb-0">
                We're always open to smart partnerships and meaningful conversations. If you're building the future of security, we'd love to talk.
              </p>
            </div>
            
            <div className="flex flex-shrink-0 w-full md:w-auto">
              <a 
                href="mailto:deva@xposedornot.com" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-4 md:px-8 md:py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 text-center inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
