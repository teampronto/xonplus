
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
      gradient: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-400 group-hover:text-emerald-200"
    },
    {
      icon: Bell,
      title: "White-Labeled Alerts",
      description: "Send real-time notifications, breach details, and remediation steps under your brand.",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-400 group-hover:text-green-200"
    },
    {
      icon: User,
      title: "Self-Service Dashboard",
      description: "Let users see their own breach timeline and fix issues without raising a ticket.",
      gradient: "from-teal-500 to-emerald-500",
      iconColor: "text-teal-400 group-hover:text-teal-200"
    },
    {
      icon: FileText,
      title: "Regulatory-Ready",
      description: "Built for privacy by design, with zero risk to your data governance posture.",
      gradient: "from-lime-500 to-green-500",
      iconColor: "text-lime-400 group-hover:text-lime-200"
    }
  ];

  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Benefits"
          subtitle="API-First Monitoring, Built to Scale"
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
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-100 transition-colors duration-300">
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
