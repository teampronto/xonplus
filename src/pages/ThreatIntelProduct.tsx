import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ThreatIntelHero } from "@/components/threat-intel/ThreatIntelHero";
import { SocialProofSection } from "@/components/threat-intel/SocialProofSection";
import { KeyFeaturesSection } from "@/components/threat-intel/KeyFeaturesSection";
import { SolutionsSection } from "@/components/threat-intel/SolutionsSection";
import { ProductPreviewSection } from "@/components/threat-intel/ProductPreviewSection";
import { BenefitsSection } from "@/components/threat-intel/BenefitsSection"; 
import { ThreatIntelHowItWorks } from "@/components/threat-intel/HowItWorksSection";
import { ThreatIntelIntegrations } from "@/components/threat-intel/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/threat-intel/PricingSection";
import { FAQSection } from "@/components/threat-intel/FAQSection";
import { CTVSection } from "@/components/threat-intel/CTVSection";

const ThreatIntelMidPageCTV = () => {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-700/30 shadow-lg"
        >
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Ahead of Emerging Threats
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Access real-time intelligence on breaches before they hit mainstream channels.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.location.href = '/sample-feed'}
              >
                Download Sample Feed
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-amber-500/30 text-amber-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleDemoRequest}
              >
                Book Free Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ThreatIntelProduct = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>xonThreatIntel+ | Real-time Breach Intelligence Feed</title>
        <meta name="description" content="Stay ahead of emerging threats with xonThreatIntel+. Access real-time intelligence on data breaches before they hit mainstream channels." />
      </Helmet>

      <ThreatIntelHero />
      <div className="bg-slate-950">
        <SocialProofSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <KeyFeaturesSection />
      </div>
      <div className="bg-slate-950">
        <SolutionsSection />
      </div>
      
      {/* Mid-page CTV Section - Custom for Threat Intel */}
      <ThreatIntelMidPageCTV />
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <ProductPreviewSection />
      </div>
      <div className="bg-slate-900">
        <BenefitsSection />
      </div>
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <ThreatIntelHowItWorks />
      </div>
      <div className="bg-slate-950">
        <ThreatIntelIntegrations />
      </div>
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <TestimonialsSection />
      </div>
      <div className="bg-slate-900">
        <PricingSection />
      </div>
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <FAQSection />
      </div>
      <div className="bg-slate-950">
        <CTVSection />
      </div>
    </div>
  );
};

export default ThreatIntelProduct;
