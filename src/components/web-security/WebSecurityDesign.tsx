
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from "@/components/ui/section-header";
import { TestTube, Zap } from 'lucide-react';
import { CloudflareLogoIcon } from '@/components/icons/CloudflareLogoIcon';

export function WebSecurityDesign() {
  const features = [
    {
      icon: CloudflareLogoIcon,
      title: "Web Protection with Cloudflare WAF",
      description: "All web traffic is filtered through Cloudflare's Web Application Firewall to block threats before they even reach us.",
      color: "amber"
    },
    {
      icon: TestTube,
      title: "Regular Security Testing",
      description: "Our app and API are regularly tested by security professionals. If something needs fixing, we fix it fast.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Strict API Rate Limiting",
      description: "We enforce rate limits on every API route. That keeps things fair, stable, and safe from abuse.",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: { bg: "from-amber-500/20 to-amber-600/20", border: "border-amber-500/20", icon: "text-amber-400" },
      purple: { bg: "from-purple-500/20 to-purple-600/20", border: "border-purple-500/20", icon: "text-purple-400" },
      cyan: { bg: "from-cyan-500/20 to-cyan-600/20", border: "border-cyan-500/20", icon: "text-cyan-400" }
    };
    return colors[color as keyof typeof colors] || colors.amber;
  };

  return (
    <div className="bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Secured by Design" 
            variant="primary"
          />
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-6 md:p-8 border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.bg} shadow-md ${colorClasses.border} border group-hover:shadow-lg transition-shadow duration-300`}>
                      <feature.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
