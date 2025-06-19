
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineStep } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineNodeProps {
  step: TimelineStep;
  index: number;
  activeStep: number;
  handleStepClick: (index: number) => void;
  stepsLength: number;
}

export function TimelineNode({ 
  step, 
  index, 
  activeStep, 
  handleStepClick,
  stepsLength
}: TimelineNodeProps) {
  const isActive = index === activeStep;
  const isPast = index < activeStep;
  const isMobile = useIsMobile();
  
  const percentOffset = `${(index / (stepsLength - 1)) * 100}%`;
  
  return (
    <motion.div 
      className={cn(
        "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
        "transition-all duration-300 ease-in-out"
      )}
      style={{ left: percentOffset }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <div 
        className="relative"
        onClick={() => handleStepClick(index)}
      >
        {/* Enhanced node visualization with responsive sizing */}
        <div 
          className={cn(
            "flex items-center justify-center rounded-full transition-all duration-300 shadow-md border-2",
            isMobile ? "w-12 h-12" : "w-16 h-16", 
            isActive ? 
              `scale-${isMobile ? '115' : '125'} border-white bg-gradient-to-br shadow-lg shadow-blue-500/20` : 
              isPast ? 
                "border-white/70 bg-gradient-to-br opacity-90" :
                "border-white/50 bg-slate-800/90 opacity-80",
            step.gradient
          )}
        >
          {/* Add glow effect for better visibility */}
          <div className={cn(
            "absolute w-full h-full rounded-full",
            isActive ? "animate-pulse opacity-60" : "opacity-0",
            isActive ? step.gradient : ""
          )} style={{ filter: "blur(8px)" }}></div>
          
          {/* Icon with improved visibility and responsive sizing */}
          <div className={cn(
            "z-10 transition-transform duration-300",
            isActive ? `scale-${isMobile ? '115' : '125'}` : "",
            isActive ? "text-white" : step.textColor
          )}>
            {step.icon}
          </div>
          
          {/* Step number display with responsive sizing */}
          <div className={cn(
            "absolute -top-2 -right-2 rounded-full flex items-center justify-center border border-white/50 font-bold",
            isMobile ? "w-5 h-5 text-xs" : "w-7 h-7 text-sm",
            isActive ? "bg-white text-slate-900" : "bg-slate-800 text-white/80"
          )}>
            {step.number}
          </div>
        </div>
        
        {/* Title below node - hidden on mobile */}
        {!isMobile && (
          <div className={cn(
            "absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold",
            isActive ? "text-white drop-shadow-md" : "text-slate-400"
          )}>
            {step.title}
          </div>
        )}
      </div>
    </motion.div>
  );
}
