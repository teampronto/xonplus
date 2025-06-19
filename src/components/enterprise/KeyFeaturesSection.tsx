
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ShieldCheck, UserCheck, Settings, FileCheck } from "lucide-react";

export function KeyFeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Real-Time Credential Leak Detection",
      description: "Scan public, private, and dark web sources 24/7 and get alerted instantly when your workforce credentials appear.",
      gradient: "from-blue-500 to-sky-500",
      iconColor: "text-blue-400 group-hover:text-blue-200"
    },
    {
      icon: UserCheck,
      title: "VIP & Privileged Account Monitoring",
      description: "Protect high-risk users like executives and IT admins with elevated alerting.",
      gradient: "from-sky-500 to-blue-500",
      iconColor: "text-sky-400 group-hover:text-sky-200"
    },
    {
      icon: Settings,
      title: "Agentless Setup",
      description: "No installs, no agents. Just verify your domain and you're protected.",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400 group-hover:text-blue-200"
    },
    {
      icon: FileCheck,
      title: "Enterprise-Grade Reporting",
      description: "Generate logs and audit trails for GDPR, ISO 27001, and cyber insurance policies.",
      gradient: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400 group-hover:text-cyan-200"
    }
  ];

  return (
    <section className="py-8">
      <div className="relative z-10">
        <SectionHeader
          title="Key Benefits"
          subtitle="Enterprise-grade protection at a fraction of the cost"
          variant="primary"
        />
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
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
                    feature.gradient
                  )}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                        <feature.icon className={`w-6 h-6 ${feature.iconColor} transition-colors duration-300`} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
