
import React from "react";
import { motion } from "framer-motion";

export function SocialProofSection() {
  const stats = [
    { value: "<100ms", label: "Global Response Time" },
    { value: "10B+", label: "Compromised Records Indexed" },
    { value: "Zero", label: "PII Stored or Logged" },
    { value: "99.99%", label: "Uptime Across Regions" }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-7 shadow-xl max-w-[calc(100%-2px)] mx-auto transform scale-[0.996]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              One of the World's Fastest Breach Lookup API
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-xl lg:text-2xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
