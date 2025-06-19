import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ApiHero } from "@/components/api/ApiHero";
import { SocialProofSection } from "@/components/api/SocialProofSection";
import { KeyFeaturesSection } from "@/components/api/KeyFeaturesSection";
import { SolutionsSection } from "@/components/api/SolutionsSection";
import { ProductPreviewSection } from "@/components/api/ProductPreviewSection";
import { BenefitsSection } from "@/components/api/BenefitsSection"; 
import { ApiHowItWorks } from "@/components/api/HowItWorksSection";
import { ApiIntegrations } from "@/components/api/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/api/PricingSection";
import { FAQSection } from "@/components/api/FAQSection";
import { CTVSection } from "@/components/api/CTVSection";

const ApiMidPageCTV = () => {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  const handleApiDocumentation = () => {
    window.open('https://xposedornot.com/api_doc', '_blank');
  };

  // API product purchase URL - UPDATED
  const apiPurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/288744d2-a5b6-4eda-b171-59c8b36bb941";

  const handleBuyClick = () => {
    window.open(apiPurchaseUrl, '_blank');
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Integrate Breach Detection Into Your App
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Seamless API integration in minutes, with no data storage or compliance concerns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleBuyClick}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-purple-500/30 text-purple-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
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

const ApiProduct = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>xonAPI+ | Breach Detection API for Developers</title>
        <meta name="description" content="Integrate breach detection capabilities into your applications with xonAPI+. Seamless API integration with no data storage or compliance concerns." />
      </Helmet>

      <ApiHero />
      <div className="bg-slate-950">
        <SocialProofSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <ProductPreviewSection />
      </div>
      <div className="bg-slate-900">
        <BenefitsSection />
      </div>
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <ApiHowItWorks />
      </div>
      
      {/* Mid-page CTV Section - Moved to the middle of the page */}
      <ApiMidPageCTV />
      
      <div className="bg-slate-950">
        <ApiIntegrations />
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

export default ApiProduct;
