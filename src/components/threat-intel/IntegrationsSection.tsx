import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Database, Shield, Cloud, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Card, CardContent } from "@/components/ui/card";
export function ThreatIntelIntegrations() {
  const {
    isMobile
  } = useIsMobile();

  // Define the integration data for the radar display
  const integrationData = [{
    id: 1,
    title: "SIEMs",
    content: "Splunk, Sentinel, QRadar",
    icon: Database,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 2,
    title: "TIPs",
    content: "MISP, ThreatConnect, Anomali",
    icon: Shield,
    relatedIds: [1, 3],
    status: "completed" as const
  }, {
    id: 3,
    title: "Data Lakes",
    content: "S3, BigQuery, Snowflake",
    icon: Cloud,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 4,
    title: "Custom Pipelines",
    content: "API, JSON, CSV, Webhooks",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const
  }];
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  return <section className="py-12 md:py-16 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-36 md:w-48 h-36 md:h-48 bg-amber-500/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 md:w-72 h-48 md:h-72 bg-orange-500/15 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Easy Integrations" subtitle="Integrates Seamlessly with Your Threat Stack" variant="primary" align="center" />
        
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
            return <Card key={item.id} className="overflow-hidden bg-slate-900/90 border border-slate-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-amber-600/90 p-3 rounded-lg">
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
              <RadialOrbitalTimeline timelineData={integrationData} centerColor="from-amber-600 via-amber-500 to-orange-600" height={isMobile ? "h-[400px]" : "h-[500px]"} className="mb-12 max-w-full" />
            </motion.div>}
        </div>
        
        <div className="flex justify-center">
          
        </div>
      </div>
    </section>;
}