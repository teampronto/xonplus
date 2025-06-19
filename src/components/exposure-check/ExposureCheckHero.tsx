
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useIsMobile } from "@/hooks/use-mobile";

export function ExposureCheckHero() {
  const isMobile = useIsMobile();
  
  return (
    <LampContainer className="min-h-[40vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge with increased desktop margin */}
          <div className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 ${isMobile ? 'mt-24' : 'mt-96'} mb-6 bg-slate-800/50 backdrop-blur-md text-white rounded-full text-xs md:text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/30`}>
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-blue-400" />
            Check if your organization's data has been exposed in breaches
          </div>

          {/* Main Content */}
          <motion.h1 
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-5 bg-gradient-to-br from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent"
          >
            Domain Exposure Scanner
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl mx-auto px-0"
          >
            Find out if your organization's email accounts and passwords have been exposed in data breaches
          </motion.p>
        </div>
      </div>
    </LampContainer>
  );
}
