
import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Search, 
  Database, 
  CheckCircle, 
  Filter, 
  BarChart, 
  Bell 
} from "lucide-react";

export function HowWeCollectDataSection() {
  const steps = [
    {
      title: "Source Collection",
      description: "We monitor the internet's most dangerous corners.",
      details: "We gather breach data from: Hacker forums, Dark web markets, Public/private leak sources, Stolen credential combo lists",
      icon: <Search className="w-8 h-8 text-purple-400 group-hover:text-purple-100" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Normalization",
      description: "We clean and format the data.",
      details: "All raw breach data is standardized into a clean, usable format, ready for processing.",
      icon: <Database className="w-8 h-8 text-blue-400 group-hover:text-blue-100" />,
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "De-duplication",
      description: "We remove duplicates and keep what matters.",
      details: "Only unique, relevant breach records are kept. Everything else is filtered out.",
      icon: <Filter className="w-8 h-8 text-emerald-400 group-hover:text-emerald-100" />,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Verification",
      description: "We double-check every record.",
      details: "Each breach record is verified using automated checks to reduce false positives.",
      icon: <CheckCircle className="w-8 h-8 text-violet-400 group-hover:text-violet-100" />,
      gradient: "from-amber-600 to-orange-600"
    },
    {
      title: "Data Ingestion",
      description: "We feed verified data into our systems.",
      details: "Validated records are added to our core engine in real time to power alerts and reports.",
      icon: <Database className="w-8 h-8 text-amber-400 group-hover:text-amber-100" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Results You Can Act On",
      description: "You get real-time alerts, reports, and dashboards.",
      details: "Get alerted when your data is breached. View breach history in clean reports. Monitor everything from a single dashboard.",
      icon: <BarChart className="w-8 h-8 text-teal-400 group-hover:text-teal-100" />,
      gradient: "from-emerald-600 to-teal-600"
    },
  ];

  return (
    <section className="py-8">
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="How We Collect Data"
            subtitle="Our comprehensive 6-step process ensures you get accurate, actionable breach data"
            variant="primary"
          />
          
          {/* Balanced image container styling */}
          <div className="flex justify-center my-12">
            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="relative group w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-5xl"
            >
              {/* Enhanced background glow effect */}
              <div 
                className="absolute inset-0 bg-blue-500/10 rounded-2xl filter blur-xl transform scale-105 opacity-70 
                group-hover:opacity-90 group-hover:scale-110 transition-all duration-300"
              ></div>
              
              {/* Image with balanced width */}
              <img 
                src="/lovable-uploads/7616db89-a62b-4237-af77-c9c7c1f97e02.png"
                alt="Data Collection Flow Diagram" 
                className="relative z-10 rounded-2xl shadow-lg w-full mx-auto transition-transform duration-300 object-contain"
              />
              
              {/* Enhanced outer glow on hover with improved intensity */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                initial={{ boxShadow: "0 0 0 rgba(59, 130, 246, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </div>
          
          <div className="mt-9">
            <Marquee direction="left" speed={40} pauseOnHover={true} className="py-4">
              {steps.map((step, index) => (
                <div key={index} className="mx-3" style={{ width: '350px', minWidth: '350px' }}>
                  <Card className={cn(
                    "h-full border border-white/10 bg-white/5 backdrop-blur-xl",
                    "transition-all duration-300",
                    "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                    "relative overflow-hidden group"
                  )}>
                    <div className={cn(
                      "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-20 transition-opacity duration-300",
                      step.gradient
                    )}></div>
                    
                    <CardContent className="relative z-10 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/30 shadow-md group-hover:shadow-lg transition-all duration-300">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg font-medium text-slate-300 mb-3 group-hover:text-white transition-colors duration-300">
                        {step.description}
                      </p>
                      
                      <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                        {step.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
