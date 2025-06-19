
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from "@/components/ui/section-header";
import { Activity, Shield, Eye, AlertTriangle } from 'lucide-react';

export function WebSecurityMonitoring() {
  const features = [
    {
      icon: Shield,
      title: "Secure Storage",
      description: "All logs stored securely in Google Cloud with enterprise-grade encryption"
    },
    {
      icon: Eye,
      title: "Performance Monitoring",
      description: "Real-time tracking of system performance and response times"
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Automated detection of unusual activity patterns and potential threats"
    }
  ];

  return (
    <div className="bg-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Monitoring and Logging" 
            variant="secondary"
          />
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 shadow-lg border border-purple-500/20 mr-4">
                  <Activity className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Comprehensive Oversight
                </h3>
              </div>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
                Our monitoring system provides complete visibility into system performance, 
                security events, and operational metrics. Everything is logged securely and 
                analyzed for insights.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20">
                    <feature.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
