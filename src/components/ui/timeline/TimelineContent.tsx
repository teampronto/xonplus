
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimelineStep } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  activeStep: number;
  steps: TimelineStep[];
}

export function TimelineContent({ activeStep, steps }: TimelineContentProps) {
  const step = steps[activeStep];
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("relative", isMobile ? "mt-24" : "mt-32", "min-h-[120px]")}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-5 md:p-10 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
            {/* Enhanced icon display with glow effect */}
            <div className="flex-shrink-0">
              <div className={cn(
                "relative rounded-xl flex items-center justify-center bg-gradient-to-br",
                isMobile ? "w-16 h-16" : "w-24 h-24", 
                step.gradient,
                "shadow-lg"
              )}>
                {/* Glow effect */}
                <div className={cn(
                  "absolute rounded-xl opacity-40 animate-pulse",
                  isMobile ? "w-16 h-16" : "w-24 h-24",  
                  step.gradient
                )} 
                  style={{ filter: "blur(10px)" }}></div>
                
                <div className="relative z-10 text-white">
                  {step.icon}
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                <h3 className={cn("font-bold text-white", isMobile ? "text-lg" : "text-2xl")}>
                  {step.title}
                </h3>
                <div className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs md:text-sm text-white/70">
                  Step {step.number}
                </div>
              </div>
              <p className={cn("text-slate-300", isMobile ? "text-sm" : "text-lg")}>
                {step.description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
