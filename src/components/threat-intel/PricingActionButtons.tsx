
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingActionButtonsProps {
  onDownloadSample: () => void;
  onDemoRequest: () => void;
}

export function PricingActionButtons({ onDownloadSample, onDemoRequest }: PricingActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
      <Button 
        onClick={onDownloadSample}
        className="bg-white/10 hover:bg-white/20 text-white px-4 py-4 md:px-6 md:py-6 rounded-xl font-medium flex items-center justify-center text-sm md:text-base"
      >
        <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Download Sample Feed
      </Button>
      <Button 
        onClick={onDemoRequest} 
        className="bg-amber-600 text-white px-4 py-4 md:px-6 md:py-6 rounded-xl font-medium hover:bg-amber-700 transition-colors text-sm md:text-base"
      >
        Book a Demo
      </Button>
    </div>
  );
}
