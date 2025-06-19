
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowRight, Shield, Lock, CheckCircle } from "lucide-react";
export function WebSecurityHero() {
  return <LampContainer className="min-h-[80vh] md:min-h-[85vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Trust Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 mt-12 md:mt-20 mb-6 md:mb-8 bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-xl text-white rounded-full text-sm md:text-base font-semibold border border-blue-500/30 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-blue-400/50 hover:scale-[1.02]">
            <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Enterprise-Grade Security
            </span>
          </motion.div>
          
          {/* Enhanced Main Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut"
        }} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight tracking-tight px-2 md:px-0">
            Security at{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-slate-50">
              xonPlus
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeOut"
        }} className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 font-medium leading-relaxed px-2 md:px-0">
            We know security matters, and we've built our product with that in mind from day one.
          </motion.p>
          
          {/* Enhanced Description */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut"
        }} className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 px-2 md:px-0">
            Our SaaS platform runs on a serverless setup using trusted names like{" "}
            <span className="text-blue-300 font-semibold">Cloudflare</span> and{" "}
            <span className="text-blue-300 font-semibold">Google Cloud</span>. 
            That means fewer moving parts, fewer risks, and better peace of mind for you.
          </motion.p>

          {/* Security Features Grid */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeOut"
        }} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/40">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Zero Trust Architecture</h3>
              <p className="text-slate-400 text-sm">Built with security-first principles</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/40">
              <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-slate-400 text-sm">Your data is always protected</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/40">
              <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Compliance Ready</h3>
              <p className="text-slate-400 text-sm">Meets industry standards</p>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] group w-full sm:w-auto" onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}>
              Learn More About Our Security
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Floating Security Icons */}
          <div className="absolute top-1/4 left-10 opacity-20">
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              
            </motion.div>
          </div>
          
          <div className="absolute top-1/3 right-10 opacity-20">
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}>
              
            </motion.div>
          </div>
        </div>
      </div>
    </LampContainer>;
}
