
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Lock, 
  LineChart, 
  BellRing, 
  ShieldCheck,
  Shield 
} from "lucide-react";
import { InteractiveTimeline, TimelineStep } from "@/components/ui/interactive-timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export function HowItWorksSection() {
  const isMobile = useIsMobile();
  
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Domain Connection",
      description:
        "Add your domain to monitor all employees and users. Takes less than 2 minutes.",
      icon: <Lock className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-blue-600 to-indigo-600",
      textColor: "text-blue-400"
    },
    {
      number: "02",
      title: "Active Monitoring",
      description:
        "Our system continuously scans breaches for your domain and email addresses.",
      icon: <LineChart className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-emerald-600 to-teal-600",
      textColor: "text-emerald-400"
    },
    {
      number: "03",
      title: "Breach Alerts",
      description:
        "Get instant notifications when your credentials are found in breaches.",
      icon: <BellRing className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-violet-600 to-purple-600",
      textColor: "text-violet-400"
    },
    {
      number: "04",
      title: "Security Actions",
      description:
        "Take immediate action with our guided remediation steps and tools.",
      icon: <ShieldCheck className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-amber-600 to-orange-600",
      textColor: "text-amber-400"
    },
    {
      number: "05",
      title: "Ongoing Protection",
      description:
        "Maintain continuous security with proactive alerts and monitoring.",
      icon: <Shield className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`} />,
      gradient: "from-blue-600 to-indigo-600", 
      textColor: "text-blue-400"
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
