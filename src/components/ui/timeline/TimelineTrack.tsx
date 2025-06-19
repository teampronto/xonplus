
import React from "react";
import { motion } from "framer-motion";
import { TimelineNode } from "./TimelineNode";
import { TimelineStep } from "./types";

interface TimelineTrackProps {
  steps: TimelineStep[];
  activeStep: number;
  handleStepClick: (index: number) => void;
}

export function TimelineTrack({ 
  steps, 
  activeStep, 
  handleStepClick 
}: TimelineTrackProps) {
  return (
    <div className="relative mb-40">
      {/* Timeline track */}
      <div className="h-1.5 bg-gradient-to-r from-slate-700/40 via-slate-700/60 to-slate-700/40 w-full max-w-[98%] mx-auto rounded-full my-16 relative">
        {/* Timeline progress indicator */}
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
          initial={{ width: `${(1 / steps.length) * 100}%` }}
          animate={{ 
            width: `${((activeStep + 1) / steps.length) * 100}%`,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        />

        {/* Timeline nodes */}
        <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
          {steps.map((step, index) => (
            <TimelineNode 
              key={index}
              step={step}
              index={index}
              activeStep={activeStep}
              handleStepClick={handleStepClick}
              stepsLength={steps.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
