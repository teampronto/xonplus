
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function SocialProofSection() {
  const isMobile = useIsMobile();
  
  const stats = [
    { value: "10B+", label: "Breach Records Analyzed" },
    { value: "835M+", label: "Credential Dumps Monitored Monthly" },
    { value: "<15 min", label: "Breach Ingestion Time" },
    { value: "100+", label: "Security Teams Worldwide" }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 md:p-6 lg:p-7 shadow-xl max-w-[calc(100%-2px)] mx-auto transform scale-[0.996]">
            {/* Removed the amber border */}
            
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
              Trusted Intelligence That Drives Faster Detection
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-2 md:p-3 lg:p-4">
                  <div className="text-base md:text-lg lg:text-2xl font-bold text-amber-400 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
