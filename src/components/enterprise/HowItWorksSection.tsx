
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Key, 
  Search, 
  BellRing, 
  Workflow, 
  Users 
} from "lucide-react";
import { InteractiveTimeline, TimelineStep } from "@/components/ui/interactive-timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export function EnterpriseHowItWorks() {
  const isMobile = useIsMobile();
  
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Verify Your Domains",
      description: "Start with DNS, file, or email-based domain validation. No credentials required.",
      icon: <Key className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-blue-600 to-sky-600",
      textColor: "text-blue-400"
    },
    {
      number: "02",
      title: "Real-time Scanning",
      description: "Our engine monitors breach dumps, paste sites, dark web forums, and underground marketplaces.",
      icon: <Search className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-sky-600 to-cyan-600",
      textColor: "text-sky-400"
    },
    {
      number: "03",
      title: "Alert Notification",
      description: "Notifications via Slack, Teams, email, or your SIEM, filtered by severity, role, and exposure type.",
      icon: <BellRing className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-cyan-600 to-blue-600",
      textColor: "text-cyan-400"
    },
    {
      number: "04",
      title: "Remediation Recommendation",
      description: "Trigger password resets, privilege reviews, or export logs for compliance.",
      icon: <Workflow className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-blue-600 to-sky-600",
      textColor: "text-blue-400"
    },
    {
      number: "05",
      title: "Scale Protection",
      description: "Add domains or expand user protection as your company grows.",
      icon: <Users className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-sky-600 to-cyan-600",
      textColor: "text-sky-400"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="How It Works"
            subtitle="Breach Detection That Works While You Sleep"
            variant="primary"
          />

          <div className="container mx-auto">
            <InteractiveTimeline steps={steps} autoScroll={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
