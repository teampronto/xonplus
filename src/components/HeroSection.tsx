import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useIsMobile } from "@/hooks/use-mobile";
export function HeroSection() {
  const isMobile = useIsMobile();
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  // Optimized animation variants
  const fadeInVariants = {
    hidden: {
      opacity: 0.5,
      y: 50
    },
    // Reduced y distance for performance
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <LampContainer className="min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center py-0">
          {/* Trust Badge with increased desktop margin */}
          <div className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 ${isMobile ? 'mt-12' : 'mt-96'} mb-6 bg-slate-800/50 backdrop-blur-md text-white rounded-full text-xs md:text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/30`}>
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-blue-400" />
            Trusted by security leaders to reduce breach detection from months to minutes
          </div>

          {/* Main Content - optimized animations */}
          <motion.h1 initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInVariants} transition={{
          delay: 0.2,
          duration: 0.5
        }} // Reduced animation duration
        className="text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-5 bg-gradient-to-br from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent lg:text-7xl">
            Get Instant Breach Alerts - No SOC Needed
          </motion.h1>
          
          <motion.p initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInVariants} transition={{
          delay: 0.3,
          duration: 0.5
        }} // Reduced animation duration
        className="text-base md:text-xl font-light text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto px-0 lg:text-xl">
            Protect your business from credential-based attacks with continuous breach monitoring, acting on exposed data before attackers can
          </motion.p>
          
          {/* CTA Buttons - optimized animations */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInVariants} transition={{
          delay: 0.4,
          duration: 0.5
        }} // Reduced animation duration
        className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="relative bg-amber-500 text-white hover:bg-amber-600 font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg group overflow-hidden w-full sm:w-auto" onClick={() => window.location.href = '/exposure-check'}>
              Check Exposure Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="font-medium px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl border-2 border-white/20 text-white backdrop-blur-sm transition-all bg-slate-800/30 hover:bg-slate-700/50 w-full sm:w-auto" onClick={handleDemoRequest}>
              Request Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </LampContainer>;
}