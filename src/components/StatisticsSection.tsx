
import React, { useRef, useEffect, useState } from "react";
import { Database, Timer, Clock, DollarSign } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export function StatisticsSection() {
  const statistics = [
    { value: 10000000000, formattedValue: "10+ Billion", label: "Breached Records Monitored", icon: Database, countTo: 10 },
    { value: 835000000, formattedValue: "835+ Million", label: "Exposed Passwords", icon: Timer, countTo: 835 },
    { value: 15, formattedValue: "<15 Min", label: "Setup", icon: Clock, countTo: 15 },
    { value: 10, formattedValue: "10x", label: "More Affordable", icon: DollarSign, countTo: 10 }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [counts, setCounts] = useState(statistics.map(() => 0));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (isInView && !animationCompleted) {
      const duration = 2000; // 2 seconds for the entire animation
      const startTime = performance.now();
      const endTime = startTime + duration;
      
      // Find the highest target value to normalize speeds
      const maxTarget = Math.max(...statistics.map(stat => stat.countTo));
      
      const animateCounters = (timestamp) => {
        // Calculate what percentage of the animation time has passed (0 to 1)
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        if (progress < 1) {
          // Update all counters based on their normalized speed
          setCounts(
            statistics.map(stat => {
              // Each counter will reach its target value at the same time
              return Math.floor(stat.countTo * progress);
            })
          );
          requestAnimationFrame(animateCounters);
        } else {
          // Ensure final values are exactly the target values
          setCounts(statistics.map(stat => stat.countTo));
          setAnimationCompleted(true);
        }
      };
      
      requestAnimationFrame(animateCounters);
    }
  }, [isInView, animationCompleted]);

  const formatValue = (index, value) => {
    const stat = statistics[index];
    if (stat.label === "Breached Records Monitored") {
      return `${value}+ Billion`;
    } else if (stat.label === "Exposed Passwords") {
      return `${value}+ Million`;
    } else if (stat.label === "Setup") {
      return `<${value} Min`;
    } else if (stat.label === "More Affordable") {
      return `${value}x`;
    }
    return value;
  };

  return (
    <section>
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="Performance by the numbers"
            variant="primary"
          />

          <motion.div 
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8 px-6 sm:px-12 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {statistics.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="mb-3">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br from-blue-900/40 to-blue-800/40",
                      "border border-blue-700/30 shadow-inner",
                      "group-hover:shadow-glow-sm group-hover:border-blue-700/50 transition-all duration-300"
                    )}>
                      <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-200 transition-colors" />
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                    {formatValue(i, counts[i])}
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
