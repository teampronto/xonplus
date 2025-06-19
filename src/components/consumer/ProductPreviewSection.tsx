
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export function ProductPreviewSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Your Customers Will Actually See"
          variant="primary"
          align="center"
        />
        
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-w-5xl mx-auto">
              {/* Optimized glass dashboard container with simpler hover effects */}
              <div className={cn(
                "rounded-2xl overflow-hidden shadow-xl border border-slate-700/50",
                "backdrop-blur-md bg-slate-800/30 group transition-all duration-300",
                "hover:border-emerald-500/50 hover:scale-[1.01]"
              )}>
                <div className="p-4">
                  <div className="w-full overflow-hidden rounded-xl">
                    <AspectRatio ratio={16/9} className="bg-slate-900">
                      <img 
                        src="/lovable-uploads/02d183c3-cac9-4a4d-b067-7e1e331fc7cc.png" 
                        alt="Email Breach Analysis Dashboard" 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>

              {/* Simplified decorative elements with reduced blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full filter blur-xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
