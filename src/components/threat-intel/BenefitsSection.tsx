
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Zap, Clock, Shield, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Layers,
      title: "Actionable, Not Noisy",
      description: "Every feed is pre-enriched with context, risk flags, and structured metadata.",
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: Clock,
      title: "Faster Time to Signal",
      description: "Near-real-time breach detection gives your team a detection edge.",
      gradient: "from-orange-500 to-amber-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    },
    {
      icon: Zap,
      title: "Easy to Operationalize",
      description: "Built for SIEMs, TIPs, custom playbooks, and manual investigations alike.",
      gradient: "from-amber-500 to-rose-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: Shield,
      title: "Zero Sensitive Data Stored",
      description: "Everything is privacy-respecting and compliant out of the box.",
      gradient: "from-orange-500 to-rose-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Security Teams Trust xonThreatIntel Plus"
          variant="primary"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full group"
            >
              <div className={cn(
                "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
                "transition-all duration-300",
                "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                "relative overflow-hidden"
              )}>
                <div className={cn(
                  "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-15 transition-opacity duration-300",
                  benefit.gradient
                )}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                      <benefit.icon className={`w-6 h-6 ${benefit.iconColor} transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-100 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
