
// Update file with consistent "xonPlus" branding
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldCheck, Bell, User, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function KeyFeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "API-First Monitoring",
      description: "Plug into your ecosystem to monitor customer emails across public breaches, instantly.",
      gradient: "from-purple-500 to-violet-500",
      iconColor: "text-purple-400 group-hover:text-purple-200"
    },
    {
      icon: Bell,
      title: "Data Privacy by Design",
      description: "Zero data storage and complete compliance with global privacy regulations.",
      gradient: "from-violet-500 to-purple-500",
      iconColor: "text-violet-400 group-hover:text-violet-200"
    },
    {
      icon: User,
      title: "Flexible Integration",
      description: "Connect via REST API, webhooks, or SIEM plugins with minimal development effort.",
      gradient: "from-fuchsia-500 to-purple-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-200"
    },
    {
      icon: FileText,
      title: "Complete Breach Data",
      description: "Access structured data on breach source, type, affected fields, and remediation steps.",
      gradient: "from-purple-500 to-fuchsia-500",
      iconColor: "text-purple-400 group-hover:text-purple-200"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Benefits"
          subtitle="Privacy-Safe API Monitoring"
          variant="primary"
        />
        
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
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-100 transition-colors duration-300">
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
  );
}
