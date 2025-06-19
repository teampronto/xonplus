
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Users, 
  Shield, 
  BellRing, 
  RefreshCcw, 
  BarChart3 
} from "lucide-react";
import { InteractiveTimeline, TimelineStep } from "@/components/ui/interactive-timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export function ConsumerHowItWorks() {
  const isMobile = useIsMobile();
  
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Connect Identifiers",
      description:
        "Share emails or hashes securely, no passwords, no PII required.",
      icon: <Users className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-emerald-600 to-green-600",
      textColor: "text-emerald-400"
    },
    {
      number: "02",
      title: "Continuous Monitoring",
      description:
        "Our breach discovery engine continuously scans for exposures tied to your users.",
      icon: <Shield className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-green-600 to-teal-600",
      textColor: "text-green-400"
    },
    {
      number: "03",
      title: "Instant Alerts",
      description:
        "Via email, in-app, SMS, or webhook, fully white-labelled with your tone and design.",
      icon: <BellRing className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-teal-600 to-lime-600",
      textColor: "text-teal-400"
    },
    {
      number: "04",
      title: "Threat Resolution",
      description:
        "They reset credentials, view their exposure timeline, and resolve threats with zero support tickets.",
      icon: <RefreshCcw className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-lime-600 to-emerald-600",
      textColor: "text-lime-400"
    },
    {
      number: "05",
      title: "Risk Analytics",
      description:
        "View insights, alert delivery stats, engagement, and overall risk reduction.",
      icon: <BarChart3 className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-green-600 to-emerald-600",
      textColor: "text-green-400"
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto">
        <div className="relative z-10">
          <SectionHeader 
            title="How It Works"
            subtitle="Simple Steps to Protect Your Organization"
            variant="primary"
          />

          <InteractiveTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
