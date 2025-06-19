import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Database, MessageSquare, Code, Shield } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
export function IntegrationsSection() {
  const {
    isMobile
  } = useIsMobile();

  // Define the integration data to be displayed in orbital format
  const integrationData = [{
    id: 1,
    title: "Service Providers",
    content: "SSO, MFA, Directory services",
    icon: Shield,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 2,
    title: "Communication",
    content: "Email, SMS, Slack, Teams",
    icon: MessageSquare,
    relatedIds: [1, 3],
    status: "completed" as const
  }, {
    id: 3,
    title: "Development",
    content: "API, SDK, Webhooks",
    icon: Code,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 4,
    title: "Data Storage",
    content: "SIEM, Log analytics, Data warehouses",
    icon: Database,
    relatedIds: [1, 3],
    status: "completed" as const
  }];
  return <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Add subtle background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Easy Integrations" subtitle="Connect with the tools you already use" variant="primary" align="center" />
        
        <div className="mt-10">
          {isMobile ?
        // Mobile card view
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrationData.map(item => {
            const Icon = item.icon;
            return <Card key={item.id} className="overflow-hidden bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600/90 p-3 rounded-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                          <p className="text-slate-300 text-sm">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
          })}
            </motion.div> :
        // Desktop orbital view
        <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex justify-center w-full">
              <RadialOrbitalTimeline timelineData={integrationData} centerColor="from-blue-600 via-blue-500 to-indigo-600" height={isMobile ? "h-[400px]" : "h-[500px]"} className="mb-12 max-w-full" />
            </motion.div>}
        </div>
        
        <div className="flex justify-center">
          
        </div>
      </div>
    </section>;
}