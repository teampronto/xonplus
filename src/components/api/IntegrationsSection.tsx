import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code, BookOpen, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Card, CardContent } from "@/components/ui/card";
export function ApiIntegrations() {
  const {
    isMobile
  } = useIsMobile();

  // Define the sections that will be displayed in the integration section
  const integrationData = [{
    id: 1,
    title: "Supported Languages",
    content: "JS, Python, Go, Java",
    icon: Code,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 2,
    title: "Dev Tools",
    content: "Postman, Swagger, RapidAPI",
    icon: BookOpen,
    relatedIds: [1, 3],
    status: "completed" as const
  }, {
    id: 3,
    title: "Use Cases",
    content: "Frontend breach alert widgets, Backend risk scoring engines, Fraud analysis dashboards, Signup & login flows",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const
  }, {
    id: 4,
    title: "API Features",
    content: "RESTful endpoints, Rate limits, Authentication tokens, JSON responses",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const
  }];
  const handleApiDocumentation = () => {
    window.open('https://xposedornot.com/api_doc', '_blank');
  };
  return <section className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-purple-500/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-fuchsia-500/15 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Easy Integrations" subtitle="Plug xonAPI Plus Into the Stack You Already Use" variant="primary" align="center" />
        
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
            return <Card key={item.id} className="overflow-hidden bg-slate-900/90 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-600/90 p-3 rounded-lg">
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
        }}>
              <RadialOrbitalTimeline timelineData={integrationData} centerColor="from-purple-600 via-fuchsia-500 to-purple-700" height={isMobile ? "h-[400px]" : "h-[70vh]"} className="mb-12" />
            </motion.div>}
        </div>
        
        <div className="flex justify-center">
          
        </div>
      </div>
    </section>;
}