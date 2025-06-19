
import { Shield, UserCheck, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function ValueSection() {
  return (
    <section className="mb-6">
      <div className="relative">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden border border-slate-700/30 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] bg-white/5 backdrop-blur-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/95 via-primary to-brand-blue-dark p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Enhanced gradient orbs with animation */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue-light/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow"></div>
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.4 }}
                      className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-sm border border-white/20 shadow-inner-glow"
                    >
                      <Shield className="h-7 w-7 text-white" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                      Enterprise protection at affordable cost
                    </h2>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                      Our innovative approach delivers superior protection at a fraction of what competitors charge.
                    </p>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-4 relative"
                    >
                      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">10x</span>
                      <span className="text-lg text-white/90 mt-2">cost-effective than<br />industry average</span>
                    </motion.div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 relative">
                  <h3 className="text-xl font-semibold mb-8 text-slate-200 relative">
                    Why we're more affordable
                  </h3>
                  <ul className="space-y-6 relative">
                    {[
                      {
                        icon: Shield,
                        title: "Ultra-efficient breach scanning architecture",
                        description: "Advanced protection through innovative scanning technology",
                        iconColor: "text-blue-400"
                      },
                      {
                        icon: UserCheck,
                        title: "Automation replacing manual monitoring teams",
                        description: "Automated systems that reduce operational overhead and costs",
                        iconColor: "text-emerald-400"
                      },
                      {
                        icon: BadgeDollarSign,
                        title: "Transparent subscription, no hidden legalese",
                        description: "Clear, straightforward pricing model",
                        iconColor: "text-purple-400"
                      }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700/50 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors duration-300">
                              <item.icon className={`h-4 w-4 ${item.iconColor} transform group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-200 mb-1 group-hover:text-blue-300 transition-colors duration-300">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{item.description}</p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
