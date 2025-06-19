
import { GradientHeading } from "@/components/ui/gradient-heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Bell, UserCheck, Lock } from "lucide-react";

export function BenefitsPromiseSection() {
  const benefits = [
    {
      title: "Breach Search",
      description: "We search breaches for your information",
      icon: Shield,
      iconColor: "text-blue-400",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Exposure Alert",
      description: "We alert you when your information is exposed",
      icon: Bell,
      iconColor: "text-purple-400",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Identity Protection",
      description: "We protect your identity from being compromised",
      icon: UserCheck,
      iconColor: "text-emerald-400",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Account Security",
      description: "We secure your accounts from unauthorized access",
      icon: Lock,
      iconColor: "text-orange-400",
      gradient: "from-amber-600 to-orange-600"
    },
  ];

  return (
    <section>
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader
            title="Benefits We Promise" 
            variant="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className={cn(
                    "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-20 transition-opacity duration-300",
                    benefit.gradient
                  )}></div>
                  
                  <div className="flex flex-col items-start relative z-10">
                    <div className="p-3 rounded-full bg-brand-blue/5 mb-4 group-hover:bg-slate-800/50 transition-colors duration-300">
                      <benefit.icon className={`w-6 h-6 ${benefit.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
