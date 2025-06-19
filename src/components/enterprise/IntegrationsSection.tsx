import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Database, MessageSquare, FileCheck, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export function EnterpriseIntegrations() {
  const {
    isMobile
  } = useIsMobile();

  // Simplified to just 4 integration points with enhanced descriptions
  const integrationData = [{
    id: 1,
    title: "SIEMs",
    content: "Connect breach data directly to Splunk, Sentinel, or LogRhythm for comprehensive security analysis and correlation.",
    icon: Database,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 2,
    title: "Collaboration Tools",
    content: "Instant alerts to Slack and Microsoft Teams channels for real-time security notifications to your team.",
    icon: MessageSquare,
    relatedIds: [1, 3],
    status: "completed" as const
  }, {
    id: 3,
    title: "Ticketing & Helpdesk",
    content: "Auto-create remediation tickets in Jira, ServiceNow, and Freshservice to streamline security workflows.",
    icon: FileCheck,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 4,
    title: "Custom Workflows",
    content: "Build your own integration using our full-featured APIs and webhooks to extend security capabilities.",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const
  }];
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  return <section className="py-16 bg-slate-950 relative">
      {/* Background decorative elements with better visibility */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/15 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <SectionHeader title="Easy Integrations" subtitle="Connect xonPlus to Your Enterprise Security Ecosystem" variant="primary" align="center" />

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
        }} className="grid grid-cols-1 gap-4">
              {integrationData.map(item => {
            const Icon = item.icon;
            return <Card key={item.id} className="overflow-hidden bg-slate-900/90 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-blue-600/90 p-3 rounded-lg flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
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
        }}>
              <RadialOrbitalTimeline timelineData={integrationData} centerColor="from-blue-600 via-blue-500 to-blue-700" height={isMobile ? "h-[400px]" : "h-[70vh]"} className="mb-12" />
            </motion.div>}
        </div>
        
        <div className="flex justify-center">
          
        </div>
      </div>
    </section>;
}