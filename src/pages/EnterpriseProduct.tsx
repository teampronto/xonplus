
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { SocialProofSection } from "@/components/enterprise/SocialProofSection";
import { KeyFeaturesSection } from "@/components/enterprise/KeyFeaturesSection";
import { LegacySolutionSection } from "@/components/LegacySolutionSection";
import { ProductPreviewSection } from "@/components/ProductPreviewSection";
import { EnterpriseBenefitsSection } from "@/components/EnterpriseBenefitsSection";
import { EnterpriseHowItWorks } from "@/components/enterprise/HowItWorksSection";
import { EnterpriseIntegrations } from "@/components/enterprise/IntegrationsSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTVSection } from "@/components/enterprise/CTVSection";

const EnterpriseMidPageCTV = () => {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  // Enterprise product purchase URL - UPDATED
  const enterprisePurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/e24f4e5c-086f-491f-9b3b-3f45efdae527";

  const handleBuyClick = () => {
    window.open(enterprisePurchaseUrl, '_blank');
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Your Enterprise Workforce
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Protect your organization with continuous monitoring for exposed employee credentials.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleBuyClick}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleDemoRequest}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Enterprise Product Page Component
export default function EnterpriseProduct() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>xonEnterprise+ | Enterprise Credential Monitoring & Breach Detection</title>
        <meta name="description" content="Protect your organization from credential leaks with xonEnterprise+. Continuous monitoring of employee credentials in data breaches for enterprise security teams." />
      </Helmet>
      
      <EnterpriseHero />
      
      {/* 1. Trusted by Security Teams Across the Globe */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <SocialProofSection />
      </div>
      
      {/* 2. Key Benefits */}
      <div className="bg-slate-900">
        <KeyFeaturesSection />
      </div>
      
      {/* 3. Solve What Legacy Vendors Don't */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <LegacySolutionSection />
      </div>
      
      {/* Mid-page CTV Section - Custom for Enterprise */}
      <EnterpriseMidPageCTV />
      
      {/* 4. Product Preview */}
      <div className="bg-slate-950">
        <ProductPreviewSection />
      </div>
      
      {/* 5. Why Security Teams Choose xonPlus Enterprise */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <EnterpriseBenefitsSection />
      </div>
      
      {/* 6. How It Works */}
      <div className="bg-slate-900">
        <EnterpriseHowItWorks />
      </div>
      
      {/* 7. Easy Integrations - changed to gradient background for alternation */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <EnterpriseIntegrations />
      </div>
      
      {/* 8. Testimonials */}
      <div className="bg-slate-950">
        <TestimonialsSection />
      </div>
      
      {/* 9. Pricing */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <PricingSection />
      </div>
      
      {/* 10. FAQ - moved above final CTV */}
      <div className="bg-slate-900">
        <FAQSection />
      </div>
      
      {/* 11. Final CTV */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <CTVSection />
      </div>
    </div>
  );
}
