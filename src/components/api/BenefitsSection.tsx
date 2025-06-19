
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Zap, Clock, Database, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Database,
      title: "No Sensitive Data Required",
      description: "Pass email or hash. That's it.",
      gradient: "from-purple-500 to-violet-500",
      iconColor: "text-purple-400 group-hover:text-purple-200"
    },
    {
      icon: Clock,
      title: "Deploy in Under 15 Minutes",
      description: "Fully REST-based with plug-and-play examples.",
      gradient: "from-fuchsia-500 to-purple-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-200"
    },
    {
      icon: Zap,
      title: "Zero Storage, Zero Headaches",
      description: "Nothing stored. Nothing to clean up. Nothing to audit.",
      gradient: "from-violet-500 to-purple-500",
      iconColor: "text-violet-400 group-hover:text-violet-200"
    },
    {
      icon: Scale,
      title: "Designed for Scale",
      description: "From 10K to 100M lookups/month, with flat, predictable pricing.",
      gradient: "from-fuchsia-500 to-violet-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-200"
    }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Your Devs Will Love It. Your Legal Team Will Approve It."
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
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-100 transition-colors duration-300">
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
