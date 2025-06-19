
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, User, Code, SearchCode, ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

export function ProductsSection() {
  const products = [
    {
      title: "xonEnterprise",
      description: "Secure your enterprise from cyberattacks with xonPlus Enterprise.",
      icon: Shield,
      color: "from-blue-500 to-indigo-500",
      glowColor: "from-blue-600/20 to-indigo-600/20",
      iconColor: "text-blue-400 group-hover:text-blue-200",
      features: ["Monitor employee emails across domains", "Executive & VIP account protection", "Real-time alerts and compliance reporting"],
      href: "/products/enterprise"
    },
    {
      title: "xonConsumer+",
      description: "Give individuals full visibility into their personal exposure footprint.",
      icon: User,
      color: "from-emerald-500 to-teal-500",
      glowColor: "from-emerald-600/20 to-teal-600/20",
      iconColor: "text-emerald-400 group-hover:text-emerald-200",
      features: ["Personal email breach detection", "Password and breach check tools", "Self-remediation guidance and alerts"],
      href: "/products/consumer"
    },
    {
      title: "xonAPI",
      description: "Integrate breach detection into your security systems, workflows, and SIEMs.",
      icon: Code,
      color: "from-violet-500 to-purple-500",
      glowColor: "from-violet-600/20 to-purple-600/20",
      iconColor: "text-violet-400 group-hover:text-violet-200",
      features: ["Real-time API endpoints", "Flexible pricing per call", "Ideal for SaaS platforms and DevSecOps teams"],
      href: "/products/api"
    },
    {
      title: "xonThreatIntel+",
      description: "Deep threat intelligence without the expensive analyst seats.",
      icon: SearchCode,
      color: "from-amber-500 to-orange-500",
      glowColor: "from-amber-600/20 to-orange-600/20",
      iconColor: "text-amber-400 group-hover:text-amber-200",
      features: ["Raw breach feeds and dark web insights", "Early breach signals before public disclosure", "Reports, enrichment, and trend alerts"],
      href: "/products/threat-intel"
    }
  ];

  return (
    <section id="products" className="mb-6">
      <div className="relative">
        <div className="relative z-10">
          <SectionHeader 
            title="Our Products"
            subtitle="Built for every use case. Choose your solution."
            variant="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className={cn(
                  "h-full rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-white/30 hover:-translate-y-2",
                  "relative overflow-hidden"
                )}>
                  <div className={cn(
                    "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-15 transition-opacity duration-300",
                    product.color
                  )}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">
                      <div className="h-14 w-14 rounded-lg flex items-center justify-center bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                        <product.icon className={`h-6 w-6 ${product.iconColor} transition-colors duration-300`} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    <p className="text-slate-300 group-hover:text-white transition-colors mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto space-y-6">
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <HoverCard key={i} openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <li className="flex items-start group/item cursor-pointer">
                                <span className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 overflow-hidden relative">
                                  <span className="h-1.5 w-1.5 rounded-full transition-all duration-300 bg-blue-400 group-hover:bg-blue-300"></span>
                                </span>
                                <span className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors">
                                  {feature}
                                </span>
                              </li>
                            </HoverCardTrigger>
                            <HoverCardContent 
                              className={cn(
                                "w-60 p-4 border-0",
                                "bg-slate-800/80 backdrop-blur-md",
                                "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                                "rounded-xl fixed z-[9999]",
                                "transition-all duration-300 scale-90",
                                "data-[state=open]:scale-100",
                                "border border-slate-700/50"
                              )}
                              align="start"
                              side="top"
                              sideOffset={12}
                            >
                              <div className="flex space-x-3">
                                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-slate-800 shadow-inner ring-1 ring-white/20">
                                  <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-semibold leading-none mb-1 text-white">
                                    {feature}
                                  </h4>
                                  <p className="text-xs text-slate-300 leading-relaxed">
                                    Advanced {feature.toLowerCase()} helps protect your assets.
                                  </p>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full group/btn relative overflow-hidden border-slate-700 hover:border-slate-500 bg-slate-900/50 text-white hover:text-blue-100 transition-all duration-300"
                        asChild
                      >
                        <a href={product.href}>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Go To Page
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </span>
                        </a>
                      </Button>
                    </div>
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
