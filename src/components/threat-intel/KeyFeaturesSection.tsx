
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Activity, ShieldCheck, Layers, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function KeyFeaturesSection() {
  const features = [
    {
      icon: Activity,
      title: "Live Exposure Feed",
      description: "Breach records ingested and parsed within 15 minutes of discovery.",
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "Curated Intelligence",
      description: "Enriched with breach tags, source reliability, first-seen timestamps, and actor insights.",
      gradient: "from-orange-500 to-amber-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    },
    {
      icon: Layers,
      title: "Flexible Delivery",
      description: "Available via API, CSV, STIX, JSON, delivered to your SIEM, TIP, or data lake.",
      gradient: "from-amber-500 to-rose-500",
      iconColor: "text-amber-400 group-hover:text-amber-200"
    },
    {
      icon: Eye,
      title: "Watchlists and Custom Alerts",
      description: "Upload domains, email patterns, or employee hashes to monitor exposure in real time.",
      gradient: "from-orange-500 to-rose-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    }
  ];

  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Benefits"
          subtitle="Everything a Modern Threat Intel Team Needs"
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
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-100 transition-colors duration-300">
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
