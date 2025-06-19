
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ShieldCheck, UserPlus, MessageSquare, FileSearch } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: ShieldCheck,
      title: "Login Flow Risk Detection",
      description: "Flag high-risk logins based on exposed credentials in real time.",
      gradient: "from-purple-500 to-fuchsia-500",
      iconColor: "text-purple-400 group-hover:text-purple-200"
    },
    {
      icon: UserPlus,
      title: "Onboarding Email Checks",
      description: "Prevent fake accounts by screening exposed emails at sign-up.",
      gradient: "from-fuchsia-500 to-purple-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-200"
    },
    {
      icon: MessageSquare,
      title: "User Trust Dashboards",
      description: "Give customers visibility into their exposure, build loyalty and trust.",
      gradient: "from-violet-500 to-purple-500",
      iconColor: "text-violet-400 group-hover:text-violet-200"
    },
    {
      icon: FileSearch,
      title: "Fraud Investigations",
      description: "Add breach context to identity verification and internal tooling.",
      gradient: "from-fuchsia-500 to-violet-500",
      iconColor: "text-fuchsia-400 group-hover:text-fuchsia-200"
    }
  ];

  return (
    <section className="py-16 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="One API. Infinite Use Cases."
          subtitle=""
          variant="primary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {solutions.map((solution, index) => (
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
                  solution.gradient
                )}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                      <solution.icon className={`w-6 h-6 ${solution.iconColor} transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-100 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {solution.description}
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
