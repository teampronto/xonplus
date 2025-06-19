
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FinalCTA() {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <section className="py-6">
      <div className="relative overflow-hidden">
        {/* Optimized background overlays */}
        <div className="absolute inset-0 bg-[#0A1628] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-transparent"></div>
        
        <div className="max-w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} /* Reduced animation duration */
            className="bg-gradient-to-br from-[#0A1628]/90 to-[#122b4e]/80 rounded-3xl p-6 relative overflow-hidden border border-blue-900/30 shadow-lg" /* Reduced shadow intensity */
          >
            {/* Simplified background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-800/10 to-transparent pointer-events-none" />
            
            {/* Content container with left alignment */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              {/* Text content */}
              <div className="flex-1 text-left">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent mb-3">
                  Stop Guessing. Start Knowing.
                </h2>
                <p className="text-base text-slate-300 mb-0">
                  Continuous breach exposure monitoring for your workforce, live in under 15 minutes.
                </p>
              </div>

              {/* CTA Buttons - optimized hover effects */}
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Button 
                  className="bg-[#00A7E5] hover:bg-[#0095CC] text-white font-semibold text-base px-6 py-5 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  onClick={() => window.location.href = '/exposure-check'}
                >
                  Check Exposure Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 font-semibold text-base px-6 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={handleDemoRequest}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
