
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Clock, FileCheck, DollarSign, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  iconColor: string;
  gradient: string;
}

const BenefitCard = ({ icon: Icon, title, description, index, iconColor, gradient }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full group"
    >
      <div className={cn(
        "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
        "transition-all duration-300",
        "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
        "relative overflow-hidden"
      )}>
        <div className={cn(
          "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-15 transition-opacity duration-300",
          gradient
        )}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
              <Icon className={`w-6 h-6 ${iconColor} transition-colors duration-300`} />
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function EnterpriseBenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Time to Response",
      description: "Cut attacker dwell time from days to minutes.",
      gradient: "from-blue-500 to-sky-500",
      iconColor: "text-blue-400 group-hover:text-blue-200"
    },
    {
      icon: FileCheck,
      title: "Stronger Compliance Posture",
      description: "Automatically log actions for audits, assessments, and insurance.",
      gradient: "from-sky-500 to-cyan-500",
      iconColor: "text-sky-400 group-hover:text-sky-200"
    },
    {
      icon: DollarSign,
      title: "Lower Total Cost of Protection",
      description: "No hidden fees, analyst licenses, or per-user pricing.",
      gradient: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400 group-hover:text-cyan-200"
    },
    {
      icon: MessageSquare,
      title: "Works the Way You Do",
      description: "Slack, email, SIEM, or ticketing, alerts go where your team already operates.",
      gradient: "from-blue-500 to-sky-600",
      iconColor: "text-blue-400 group-hover:text-blue-200"
    }
  ];

  return (
    <section className="py-16">
      <div className="relative z-10">
        <SectionHeader
          title="Why Security Teams Choose xonEnterprise+"
          subtitle=""
          variant="primary"
        />
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                index={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                gradient={benefit.gradient}
                iconColor={benefit.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
