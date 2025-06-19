
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineStep } from "./types";

interface MobileNavDotsProps {
  steps: TimelineStep[];
  activeStep: number;
  handleStepClick: (index: number) => void;
}

export function MobileNavDots({
  steps,
  activeStep,
  handleStepClick
}: MobileNavDotsProps) {
  return (
    <div className="flex justify-center gap-3 mt-6 md:hidden">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => handleStepClick(index)}
          className="focus:outline-none p-1.5"
        >
          <motion.div
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              index === activeStep 
                ? step.gradient.split(' ')[1] 
                : "bg-slate-500"
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === activeStep ? 1.2 : 1,
              transition: { duration: 0.3 }
            }}
          />
        </button>
      ))}
    </div>
  );
}
