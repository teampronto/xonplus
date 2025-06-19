import { SectionHeader } from "@/components/ui/section-header";
import { ShieldCheck, Database, User, Zap, FileCheck, Award, Shield, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function KeyFeaturesSection() {
  const PriceTag = () => <span className="text-blue-400 font-bold text-lg">10x</span>;

  const features = [
    {
      icon: ShieldCheck,
      title: "Instant Alerts",
      description: "Instant notifications when credentials are exposed in breach sources.",
      gradient: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-400 group-hover:text-blue-200"
    },
    {
      icon: Database,
      title: "Massive Coverage",
      description: "10B+ leaked records, continuous scanning of breach dumps, dark web, and paste sites.",
      gradient: "from-emerald-500 to-teal-500",
      iconColor: "text-teal-400 group-hover:text-teal-200"
    },
    {
      icon: User,
      title: "VIP Protection",
      description: "Prioritized monitoring for high-risk accounts with no extra fees.",
      gradient: "from-violet-500 to-purple-500",
      iconColor: "text-purple-400 group-hover:text-purple-200"
    },
    {
      icon: Zap,
      title: "Zero Setup",
      description: "No plugins, no agents. Just add your domain and start detecting immediately.",
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-orange-400 group-hover:text-orange-200"
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Audit-ready logs for GDPR, ISO 27001, and cyber insurance.",
      gradient: "from-pink-500 to-red-500",
      iconColor: "text-pink-400 group-hover:text-pink-200"
    },
    {
      icon: Award,
      title: "Free Tools",
      description: "Password Checker, Privacy Shield, and Domain Exposure Report included.",
      gradient: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400 group-hover:text-cyan-200"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Never store, share, or reprocess passwords. Privacy-first design.",
      gradient: "from-green-500 to-teal-500",
      iconColor: "text-green-400 group-hover:text-green-200"
    },
    {
      icon: PriceTag as unknown as LucideIcon,
      title: "Cost Efficient",
      description: "Enterprise-grade protection at startup pricing.",
      gradient: "from-yellow-500 to-amber-500",
      iconColor: "text-yellow-400 group-hover:text-yellow-200"
    }
  ];

  return (
    <section className="mb-6">
      <div className="relative z-10">
        <SectionHeader
          title="Key Benefits"
          subtitle="The Smartest Way to Detect, Respond, and Prevent Breach-Based Attacks"
          variant="primary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
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
                  feature.gradient
                )}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                      <feature.icon className={`w-6 h-6 ${feature.iconColor} transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
