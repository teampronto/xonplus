
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
export function FounderSection() {
  return <section id="about">
      <div className="relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader title="Why we built XON Plus" variant="primary" />
          
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5
              }} viewport={{
                once: true
              }}>
                  <img src="/lovable-uploads/5dafccdc-72be-4fd1-9ede-b74e4055ed66.png" alt="Devanand Premkumar" className="w-full h-auto rounded-xl shadow-lg object-cover border border-slate-700/50 glow-sm" />
                </motion.div>
              </div>
              <div className="md:col-span-3">
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} viewport={{
                once: true
              }}>
                  <blockquote className="text-lg text-slate-300 mb-6 italic">"We created xonPlus to give businesses of all sizes access to powerful identity threat protection. You shouldn't need a huge security budget to stay safe. With xonPlus, you get smart, enterprise-grade breach detection that's easy to use and built for everyone. Turn risks into resilience."</blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-white">Devanand Premkumar</p>
                      <p className="text-blue-400 text-sm">Founder, xonPlus</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
