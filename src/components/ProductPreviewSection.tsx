
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { ZoomIn, ZoomOut, Maximize2, Download } from "lucide-react";

export function ProductPreviewSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    toast({
      title: isExpanded ? "View minimized" : "View expanded",
      description: isExpanded ? "Returned to normal view" : "Expanded for better visibility",
      duration: 2000
    });
  };
  const handleZoomIn = () => {
    if (zoomLevel < 1.5) {
      setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
    }
  };
  const handleZoomOut = () => {
    if (zoomLevel > 0.8) {
      setZoomLevel(prev => Math.max(prev - 0.1, 0.8));
    }
  };
  const handleDownload = () => {
    toast({
      title: "Sample report downloaded",
      description: "Your enterprise breach report sample has been downloaded",
      duration: 2000
    });
  };
  return <section className="py-16 relative overflow-hidden">
      {/* Optimized background elements - reduced blur radius */}
      <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[40px]"></div>
      <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Interactive Dashboard" subtitle="Real-time Breach Intelligence at Your Fingertips" variant="primary" />

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}
      // Reduced animation duration
      transition={{
        duration: 0.5
      }} className="mt-12">
          <div className={cn(
        // Reduced transition duration
        "max-w-6xl mx-auto transition-all duration-300 ease-in-out", isExpanded ? "scale-110 my-12" : "")}>
            {/* Premium mockup container */}
            <div className="relative">
              {/* Control bar */}
              <div className="absolute top-0 right-0 z-20 bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded-bl-lg rounded-tr-xl border border-slate-700/50 flex items-center gap-3">
                <button onClick={handleZoomOut} className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button onClick={handleZoomIn} className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button onClick={handleExpandClick} className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button onClick={handleDownload} className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Main preview container with optimized glass effect */}
              <div className={cn("rounded-2xl overflow-hidden", /* Reduced shadow intensity */
            "shadow-lg", "ring-1 ring-slate-700/50", "bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/95", /* Reduced blur and transition */
            "backdrop-blur-md group transition-all duration-300", /* Simplified hover effect */
            "hover:shadow-lg hover:ring-blue-500/30")}>
                {/* Browser-like header */}
                <div className="border-b border-slate-700/50 px-6 py-3 bg-slate-900/90 flex items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  
                  <div className="w-16"></div>
                </div>

                {/* Dashboard content - optimized image loading */}
                <div className="p-6">
                  <div className="w-full overflow-hidden rounded-xl border border-slate-700/30 shadow-inner shadow-slate-900/50">
                    <AspectRatio ratio={16 / 9} className="bg-slate-950/60">
                      <div className="relative w-full h-full" style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center center'
                    }}>
                        <img src="/lovable-uploads/aa1d6ae2-7480-4214-b3f8-e22565eafdc2.png" alt="Enterprise breach data visualization"
                      // Reduced transition time
                      className="w-full h-full object-contain transition-transform duration-300" loading="lazy" decoding="async" />
                        
                        {/* Simplified hover overlay - removed animated elements */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-blue-400/5 to-transparent rounded-xl transition-opacity duration-300"></div>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  {/* Dashboard stats bar - made responsive for mobile */}
                  <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[{
                    label: "Alerts Today",
                    value: "12",
                    change: "+3"
                  }, {
                    label: "Critical Findings",
                    value: "2",
                    change: "-1"
                  }, {
                    label: "Remediated",
                    value: "8",
                    change: "+5"
                  }, {
                    label: "Safety Score",
                    value: "86%",
                    change: "+2%"
                  }].map((stat, index) => <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700/30 p-2.5 md:p-3 backdrop-blur-sm">
                        <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-lg md:text-xl font-semibold text-white">{stat.value}</div>
                          <div className={cn("text-xs px-1 md:px-1.5 py-0.5 rounded", stat.change.startsWith("+") ? "text-emerald-300 bg-emerald-900/20" : "text-amber-300 bg-amber-900/20")}>
                            {stat.change}
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features highlight - simplified and optimized */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {[{
              title: "Intuitive UI",
              description: "Designed for security teams with clear visualizations"
            }, {
              title: "Real-time Data",
              description: "Live updates as new breaches are detected"
            }, {
              title: "Advanced Analytics",
              description: "Trend analysis and predictive risk scoring"
            }].map((feature, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}
            // Reduced animation duration
            transition={{
              duration: 0.3,
              delay: i * 0.1
            }} className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/40 p-4 hover:border-blue-500/20 hover:bg-slate-800/40 transition-all duration-300">
                  <h3 className="text-lg font-medium text-blue-300 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.description}</p>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}
