
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Search, 
  FileText, 
  Bell, 
  ArrowRight 
} from "lucide-react";
import { InteractiveTimeline, TimelineStep } from "@/components/ui/interactive-timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export function ThreatIntelHowItWorks() {
  const isMobile = useIsMobile();
  
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Monitor",
      description: "Monitor breach sources across clear, dark, and deep web.",
      icon: <Search className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-amber-600 to-orange-600",
      textColor: "text-amber-400"
    },
    {
      number: "02",
      title: "Parse & Enrich",
      description: "Parse & Enrich metadata with breach type, timestamps, severity, source, and more.",
      icon: <FileText className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-orange-600 to-amber-600",
      textColor: "text-orange-400"
    },
    {
      number: "03",
      title: "Match & Alert",
      description: "Match & Alert based on your watchlists or data policies.",
      icon: <Bell className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-amber-600 to-orange-600",
      textColor: "text-amber-400"
    },
    {
      number: "04",
      title: "Deliver",
      description: "Deliver clean feeds to your preferred tools.",
      icon: <ArrowRight className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-orange-600 to-amber-600",
      textColor: "text-orange-400"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto">
        <div className="relative z-10">
          <SectionHeader 
            title="How It Works"
            subtitle="From Breach Discovery to Your Inbox in <15 Minutes"
            variant="primary"
          />

          <InteractiveTimeline steps={steps} autoScroll={true} />
        </div>
      </div>
    </section>
  );
}
