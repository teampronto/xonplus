import React from "react";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCTA } from "@/components/pricing/PricingCTA";
import { ProductPricingSection } from "@/components/pricing/ProductPricingSection";
import { PricingFAQSection } from "@/components/pricing/PricingFAQSection";
import { enterprisePlans, consumerPlans, apiPlans } from "@/components/pricing/pricingData";
import { pricingPlans as threatIntelPlans } from "@/components/threat-intel/pricingData";

const Pricing = () => {
  // Define URLs for the different product pages with the updated purchase links
  const enterprisePurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/e24f4e5c-086f-491f-9b3b-3f45efdae527";
  const consumerPurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/37e80d56-0ce4-46ce-b767-41e52c2050ab";
  const apiPurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/288744d2-a5b6-4eda-b171-59c8b36bb941";
  
  // Add index to each plan
  const enterprisePlansWithIndex = enterprisePlans.map((plan, index) => ({
    ...plan,
    index
  }));
  
  const consumerPlansWithIndex = consumerPlans.map((plan, index) => ({
    ...plan,
    index
  }));
  
  const apiPlansWithIndex = apiPlans.map((plan, index) => ({
    ...plan,
    index
  }));
  
  const threatIntelPlansWithIndex = threatIntelPlans.map((plan, index) => ({
    ...plan,
    index
  }));
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-24">
      {/* Hero Section with top glow effect */}
      <PricingHero />

      {/* Pricing Sections */}
      <div className="bg-slate-900">
        <ProductPricingSection
          title="xonEnterprise"
          description="Secure your enterprise from cyberattacks. Reduce your risk of ransomware and other critical attacks with xonPlus Enterprise – acting on known points of compromise before they can be used by cyber criminals."
          plans={enterprisePlansWithIndex}
          accentColor="text-blue-400"
          buttonColor="bg-blue-600"
          demoUrl="https://calendly.com/xon-plus/30min?month=2025-05"
          buyUrl={enterprisePurchaseUrl}
        />
        
        <ProductPricingSection
          title="xonConsumer+"
          description="Personal and family protection to secure your digital identity and prevent unauthorized access."
          plans={consumerPlansWithIndex}
          accentColor="text-indigo-400"
          buttonColor="bg-indigo-600"
          demoUrl="https://calendly.com/xon-plus/30min?month=2025-05"
          buyUrl={consumerPurchaseUrl}
        />
        
        <ProductPricingSection
          title="xonAPI"
          description="Integrate our powerful security features directly into your applications with our flexible API solutions."
          plans={apiPlansWithIndex}
          accentColor="text-purple-400"
          buttonColor="bg-purple-600"
          demoUrl="https://calendly.com/xon-plus/30min?month=2025-05"
          buyUrl={apiPurchaseUrl}
        />
        
        <ProductPricingSection
          title="xonThreatIntel+"
          description="Advanced threat intelligence platform for organizations needing real-time monitoring and analysis."
          plans={threatIntelPlansWithIndex}
          accentColor="text-amber-400"
          buttonColor="bg-amber-600"
          demoUrl="https://calendly.com/xon-plus/30min?month=2025-05"
          showLeadForm={true}
        />
      </div>

      {/* Add the FAQ section */}
      <PricingFAQSection />

      {/* FAQ CTA Section */}
      <PricingCTA />
    </div>
  );
};

export default Pricing;
