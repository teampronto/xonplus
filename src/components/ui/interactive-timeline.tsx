
import React, { useState, useEffect } from "react";
import { TimelineTrack } from "./timeline/TimelineTrack";
import { TimelineContent } from "./timeline/TimelineContent";
import { MobileNavDots } from "./timeline/MobileNavDots";
import { TimelineStep } from "./timeline/types";

export { type TimelineStep } from "./timeline/types";

interface InteractiveTimelineProps {
  steps: TimelineStep[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

export function InteractiveTimeline({ 
  steps, 
  autoScroll = false, 
  autoScrollInterval = 5000 
}: InteractiveTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);

  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [isAutoScrolling, steps.length, autoScrollInterval]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (isAutoScrolling) setIsAutoScrolling(false);
  };

  // Add auto-reset to ensure timeline always starts from beginning
  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      setActiveStep(0);
      setIsAutoScrolling(autoScroll);
    }, 30000); // Reset after 30 seconds of inactivity
    
    return () => clearTimeout(resetTimeout);
  }, [activeStep, autoScroll]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 lg:px-8">
      {/* Timeline track with nodes */}
      <TimelineTrack
        steps={steps}
        activeStep={activeStep}
        handleStepClick={handleStepClick}
      />

      {/* Content area */}
      <div className="relative">
        <TimelineContent activeStep={activeStep} steps={steps} />
      </div>
      
      {/* Optional: Mini dots navigation (useful for mobile) */}
      <MobileNavDots 
        steps={steps} 
        activeStep={activeStep} 
        handleStepClick={handleStepClick} 
      />
    </div>
  );
}
