import React from "react";
import { Shield, Lock, Bell, Search, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function ConsumerBenefitsSection() {
  const benefits = [{
    icon: Shield,
    title: "Protect Your Personal Credentials",
    description: "Monitor and protect all your personal email addresses and associated accounts from compromises.",
    gradient: "from-emerald-600 to-teal-600",
    iconColor: "text-emerald-400 group-hover:text-emerald-200"
  }, {
    icon: Lock,
    title: "Enhanced Privacy Protection",
    description: "Keep your sensitive information secure with our zero-knowledge password verification technology.",
    gradient: "from-teal-600 to-green-600",
    iconColor: "text-teal-400 group-hover:text-teal-200"
  }, {
    icon: Bell,
    title: "Proactive Alerts",
    description: "Be the first to know when your data appears in new breaches with real-time notifications.",
    gradient: "from-green-600 to-emerald-600",
    iconColor: "text-green-400 group-hover:text-green-200"
  }, {
    icon: Search,
    title: "Dark Web Monitoring",
    description: "Our advanced technology continuously scans the dark web for your personal information.",
    gradient: "from-emerald-600 to-teal-600",
    iconColor: "text-emerald-400 group-hover:text-emerald-200"
  }, {
    icon: Clock,
    title: "Historical Breach Analysis",
    description: "Get insights into past breaches that may have affected your accounts and take remedial action.",
    gradient: "from-teal-600 to-green-600",
    iconColor: "text-teal-400 group-hover:text-teal-200"
  }];
  return <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Corporates Choose xonConsumer+</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive protection for your personal digital identity in an increasingly vulnerable online world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group h-full">
              <div className={cn("h-full rounded-xl p-6 border border-slate-800 bg-slate-900/80 backdrop-blur-sm", "transition-all duration-300", "hover:shadow-xl hover:border-emerald-500/30 hover:-translate-y-2", "relative overflow-hidden flex flex-col")}>
                <div className={cn("absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-10 transition-opacity duration-300", benefit.gradient)}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-emerald-500/20">
                      <benefit.icon className={cn("h-6 w-6", benefit.iconColor, "transition-colors duration-300")} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-100 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
}

// Add this line to export the component with the name BenefitsSection as well
export const BenefitsSection = ConsumerBenefitsSection;