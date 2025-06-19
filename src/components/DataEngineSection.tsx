
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Database, 
  FileCheck, 
  Shield, 
  Bell,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

export function DataEngineSection() {
  const steps = [
    {
      title: "Collect",
      description: "Our advanced technology continuously scans breach sources, data dumps, and dark web forums to collect exposed credentials.",
      metrics: "10B+ credentials tracked",
      icon: <Database className="w-8 h-8 text-blue-400 group-hover:text-blue-100" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Clean",
      description: "Raw data is processed through our cleaning pipeline to normalize formats and remove false positives.",
      metrics: "99.9% accuracy rate",
      icon: <FileCheck className="w-8 h-8 text-teal-400 group-hover:text-teal-100" />,
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Verify",
      description: "Advanced verification algorithms confirm legitimate exposures, eliminating false alarms that waste your team's time.",
      metrics: "Real-time validation",
      icon: <Shield className="w-8 h-8 text-purple-400 group-hover:text-purple-100" />,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Alert",
      description: "Real-time alerts are sent when verified credential exposures are detected, enabling immediate response.",
      metrics: "Minutes not days response",
      icon: <Bell className="w-8 h-8 text-orange-400 group-hover:text-orange-100" />,
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="data" className="mb-6">
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="How our data engine works"
            subtitle="Our data engine follows a methodical approach to ensure maximum accuracy and protection."
            variant="primary"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="h-full group"
              >
                <div className={cn(
                  "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                  "relative overflow-hidden"
                )}>
                  <div className={cn(
                    "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-20 transition-opacity duration-300",
                    step.gradient
                  )}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg group-hover:border-slate-600 transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-300 group-hover:text-white transition-colors duration-300 mb-6">
                      {step.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-700/50 group-hover:border-slate-600/70 transition-colors duration-300">
                      <div className="flex justify-center">
                        <span className="text-sm font-medium px-4 py-1.5 bg-slate-900/70 rounded-full text-blue-300 shadow-sm w-[200px] text-center group-hover:text-blue-100 transition-colors duration-300">
                          {step.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-slate-600/50 hover:bg-white/10">
                <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />
                Our data processing is compliant with global privacy regulations including GDPR, CCPA, and more.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
