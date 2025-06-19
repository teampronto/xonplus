
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Clock, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { InteractiveCard } from "@/components/InteractiveCard";

export function LegacySolutionSection() {
  const solutions = [
    {
      problem: "Most breaches start with reused or leaked credentials.",
      solution: "Get notified before attackers use them. Stop ATOs at the source.",
      icon: Shield,
      gradient: "from-blue-500 to-sky-500",
      iconColor: "text-blue-400 group-hover:text-blue-200",
      hoverGradient: "group-hover:from-blue-600/20 group-hover:to-sky-600/20"
    },
    {
      problem: "Legacy tools are expensive, slow, and noisy.",
      solution: "xonPlus delivers actionable alerts within 15 minutes, not days, at a fraction of the cost.",
      icon: Clock,
      gradient: "from-sky-500 to-blue-500",
      iconColor: "text-sky-400 group-hover:text-sky-200",
      hoverGradient: "group-hover:from-sky-600/20 group-hover:to-blue-600/20"
    },
    {
      problem: "You're under pressure to prove security readiness.",
      solution: "Export audit-ready reports that satisfy GDPR, SOC 2, and enterprise vendor reviews.",
      icon: FileCheck,
      gradient: "from-blue-500 to-sky-500",
      iconColor: "text-blue-400 group-hover:text-blue-200",
      hoverGradient: "group-hover:from-blue-600/20 group-hover:to-sky-600/20"
    }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Solve What Legacy Vendors Don't"
          subtitle="Transform your credential exposure management with real-time protection"
          variant="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={cn(
                "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
                "transition-all duration-300",
                "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                "relative overflow-hidden group"
              )}>
                <div className={cn(
                  "absolute inset-0 opacity-0 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-15",
                  item.gradient
                )}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                      <item.icon className={`w-6 h-6 ${item.iconColor} transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors duration-300 cursor-help">
                        Problem:
                      </h3>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-slate-900 border border-slate-700 text-white">
                      Common issue with legacy vendors
                    </HoverCardContent>
                  </HoverCard>
                  
                  <p className="mb-6 text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.problem}
                  </p>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 cursor-help">
                        Solution:
                      </h3>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-slate-900 border border-slate-700 text-white">
                      How xonPlus solves this challenge
                    </HoverCardContent>
                  </HoverCard>
                  
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.solution}
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
