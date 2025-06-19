import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ConsumerHero } from "@/components/consumer/ConsumerHero";
import { SocialProofSection } from "@/components/consumer/SocialProofSection";
import { KeyFeaturesSection } from "@/components/consumer/KeyFeaturesSection";
import { SolutionsSection } from "@/components/consumer/SolutionsSection";
import { ProductPreviewSection } from "@/components/consumer/ProductPreviewSection";
import { BenefitsSection } from "@/components/consumer/BenefitsSection"; 
import { ConsumerHowItWorks } from "@/components/consumer/HowItWorksSection";
import { ConsumerIntegrations } from "@/components/consumer/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/consumer/PricingSection";
import { FAQSection } from "@/components/consumer/FAQSection";
import { CTVSection } from "@/components/consumer/CTVSection";
import { ArrowRight } from "lucide-react";

const ConsumerMidPageCTV = () => {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  // Consumer product purchase URL - UPDATED
  const consumerPurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/37e80d56-0ce4-46ce-b767-41e52c2050ab";

  const handleBuyClick = () => {
    window.open(consumerPurchaseUrl, '_blank');
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-teal-800/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Protect Your Personal Data Online
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Get instant alerts when your passwords or personal information are exposed in data breaches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={handleBuyClick}
              >
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-emerald-500/30 text-emerald-300 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
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

const ConsumerProduct = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>xonConsumer+ | Personal Data Breach & Password Protection</title>
        <meta name="description" content="Protect your online identity with xonConsumer+. Get instant alerts when your passwords or personal information are exposed in data breaches." />
      </Helmet>

      <ConsumerHero />
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <SocialProofSection />
      </div>
      
      <div className="bg-slate-900">
        <KeyFeaturesSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <SolutionsSection />
      </div>
      
      {/* Mid-page CTV Section - Custom for Consumer */}
      <ConsumerMidPageCTV />
      
      <div className="bg-slate-950">
        <ProductPreviewSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <BenefitsSection />
      </div>
      
      {/* How It Works - keep consistent with solid bg */}
      <div className="bg-slate-900">
        <ConsumerHowItWorks />
      </div>
      
      {/* Integrations - ensure gradient for alternation */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <ConsumerIntegrations />
      </div>
      
      <div className="bg-slate-950">
        <TestimonialsSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-950 to-slate-900">
        <PricingSection />
      </div>
      
      <div className="bg-slate-900">
        <FAQSection />
      </div>
      
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        <CTVSection />
      </div>
    </div>
  );
};

export default ConsumerProduct;
