
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from "@/components/ui/section-header";
import { Shield } from 'lucide-react';
import { CloudflareLogoIcon } from '@/components/icons/CloudflareLogoIcon';
import { GoogleCloudLogoIcon } from '@/components/icons/GoogleCloudLogoIcon';

export function WebSecurityInfrastructure() {
  const features = [
    {
      icon: CloudflareLogoIcon,
      title: "Cloudflare Pages for the Web App",
      description: "Our frontend is hosted on Cloudflare Pages, giving you fast, secure access through their global CDN. SSL, DDoS protection, and smart filtering are all part of the package."
    },
    {
      icon: GoogleCloudLogoIcon,
      title: "Google Cloud Run for the API", 
      description: "Our backend lives on Google Cloud Run, backed by Google's rock-solid infrastructure and security standards."
    },
    {
      icon: Shield,
      title: "Certified and Compliant",
      description: "Google Cloud is certified with SOC 2, ISO 27001, and more. Your data is protected with the same standards trusted by the world's top companies."
    }
  ];

  return (
    <div className="bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Built on Trusted Infrastructure" 
            variant="primary"
          />
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-6 md:p-8 border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 shadow-md border border-blue-500/20 group-hover:shadow-lg transition-shadow duration-300">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
