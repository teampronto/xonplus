
import React from "react";
import { motion } from "framer-motion";

export const BlogHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-indigo-950 py-24 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 backdrop-blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-full bg-indigo-500/5 backdrop-blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/4"></div>
        <div className="hero-blob opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/65620b57-0b1b-45d1-9a04-bd768aa9145f.png')] bg-cover opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        
        {/* Futuristic Grid Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute left-0 top-2/4 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
          <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-100 text-sm font-medium">Cybersecurity Insights</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Next-Generation
            </span>
            <br />
            Data Breach Intelligence
          </h1>
          
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Cutting-edge security research, advanced threat analysis, and expert insights to protect your digital assets in an evolving threat landscape.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              Latest Research
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              Subscribe to Updates
            </motion.button>
          </div>
          
          {/* Animated stats counter */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-blue-400">250+</p>
              <p className="text-sm text-blue-200/80">Security Reports</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-indigo-400">42K+</p>
              <p className="text-sm text-blue-200/80">Monthly Readers</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-cyan-400">1.2M+</p>
              <p className="text-sm text-blue-200/80">Annual Views</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-purple-400">15K+</p>
              <p className="text-sm text-blue-200/80">Subscribers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
