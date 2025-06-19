
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Search, Shield, Users, Activity } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Activity,
      title: "Proactive SOC Monitoring",
      description: "Surface breach events that directly affect your users, partners, or supply chain.",
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: Search,
      title: "Dark Web Reconnaissance",
      description: "Identify new credential leaks, actor chatter, and breach timelines fast.",
      gradient: "from-orange-500 to-amber-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    },
    {
      icon: Users,
      title: "Third-Party Risk Detection",
      description: "Monitor vendors and subsidiaries for exposure without waiting on them to disclose.",
      gradient: "from-amber-500 to-rose-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: Shield,
      title: "Incident Correlation & Enrichment",
      description: "Feed structured breach intelligence into your investigation pipelines instantly.",
      gradient: "from-orange-500 to-rose-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Your Early Signal Advantage"
          subtitle="From Threat Hunting to Response"
          variant="primary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {solutions.map((solution, index) => (
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
                  solution.gradient
                )}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                      <solution.icon className={`w-6 h-6 ${solution.iconColor} transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-100 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {solution.description}
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
