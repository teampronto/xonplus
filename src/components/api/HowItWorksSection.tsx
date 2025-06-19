
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Key, 
  ArrowRight, 
  FileText 
} from "lucide-react";
import { InteractiveTimeline, TimelineStep } from "@/components/ui/interactive-timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export function ApiHowItWorks() {
  const isMobile = useIsMobile();
  
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Authenticate",
      description: "Authenticate with your unique API key.",
      icon: <Key className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-purple-600 to-violet-600",
      textColor: "text-purple-400"
    },
    {
      number: "02",
      title: "Query",
      description: "Query via GET with email/hash/domain.",
      icon: <ArrowRight className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-fuchsia-600 to-purple-600",
      textColor: "text-fuchsia-400"
    },
    {
      number: "03",
      title: "Receive",
      description: "Receive breach details in JSON. Use it however you want.",
      icon: <FileText className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-violet-600 to-purple-600",
      textColor: "text-violet-400"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto">
        <div className="relative z-10">
          <SectionHeader 
            title="How It Works"
            subtitle="From Auth to Alert in 3 Steps"
            variant="primary"
          />

          <InteractiveTimeline steps={steps} autoScroll={true} />
        </div>
      </div>
    </section>
  );
}
