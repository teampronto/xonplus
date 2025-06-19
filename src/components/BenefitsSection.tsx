
import { Shield, Sparkles, Lock, Database, Eye, BarChart2 } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Early Breach Detection",
      description: "Identify compromised credentials before they appear on the dark web with our proactive monitoring system.",
      icon: Eye,
      color: "from-blue-600 to-indigo-600",
      background: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20",
      iconColor: "text-blue-400",
      features: ["Real-time monitoring", "Dark web scanning", "Immediate alerts"]
    },
    {
      title: "Instant Remediation",
      description: "Stop unauthorized access attempts with real-time alerts and automated security protocols.",
      icon: Shield,
      color: "from-emerald-600 to-teal-600",
      background: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      iconColor: "text-emerald-400",
      features: ["Automated responses", "Threat neutralization", "Audit logging"]
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade protection with the same level of security used by Fortune 500 companies.",
      icon: Lock,
      color: "from-violet-600 to-purple-600",
      background: "bg-gradient-to-br from-violet-900/20 to-purple-900/20",
      iconColor: "text-violet-400",
      features: ["Enterprise-grade encryption", "End-to-end encryption", "Role-based access"]
    },
    {
      title: "Actionable Intelligence",
      description: "Transform raw data into actionable insights with our advanced analytics and reporting dashboard.",
      icon: BarChart2,
      color: "from-amber-600 to-orange-600",
      background: "bg-gradient-to-br from-amber-900/20 to-orange-900/20",
      iconColor: "text-amber-400",
      features: ["Custom reports", "Trend analysis", "Risk scoring"]
    }
  ];

  return (
    <section id="solutions" className="mb-10">
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="Detect threats before they impact your business"
            subtitle="Our comprehensive breach intelligence platform helps protect your company's most valuable assets from credential exposure with enterprise-grade security."
            variant="primary"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group h-full"
              >
                <div className={cn(
                  "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                  "relative overflow-hidden"
                )}>
                  <div className={cn(
                    "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-20 transition-opacity duration-300",
                    benefit.color
                  )}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">
                      <div className="h-14 w-14 rounded-lg flex items-center justify-center bg-slate-800/80 shadow-md relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                        <benefit.icon className={`h-6 w-6 ${benefit.iconColor} group-hover:text-white relative z-10 transition-colors duration-300`} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-white mb-6 transition-colors text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {benefit.features.map((feature, i) => (
                          <HoverCard key={i} openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <li className="flex items-start group/item cursor-pointer">
                                <span className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 overflow-hidden relative">
                                  <span className="h-1.5 w-1.5 rounded-full transition-all duration-300 bg-blue-400 group-hover:bg-blue-300"></span>
                                </span>
                                <span className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors">
                                  {feature}
                                </span>
                              </li>
                            </HoverCardTrigger>
                            <HoverCardContent 
                              className={cn(
                                "w-60 p-4 border-0",
                                "bg-slate-800/80 backdrop-blur-md",
                                "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                                "rounded-xl fixed z-[9999]",
                                "transition-all duration-300 scale-90",
                                "data-[state=open]:scale-100",
                                "border border-slate-700/50"
                              )}
                              align="start"
                              side="top"
                              sideOffset={12}
                            >
                              <div className="flex space-x-3">
                                <div className={cn(
                                  "h-8 w-8 rounded-lg flex items-center justify-center",
                                  "bg-gradient-to-br shadow-inner",
                                  benefit.color,
                                  "ring-1 ring-white/20"
                                )}>
                                  <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-semibold leading-none mb-1 text-white">
                                    {feature}
                                  </h4>
                                  <p className="text-xs text-slate-300 leading-relaxed">
                                    Advanced {feature.toLowerCase()} helps you stay ahead of threats.
                                  </p>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
