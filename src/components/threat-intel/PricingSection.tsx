
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingPlanCard } from "./PricingPlanCard";
import { PricingActionButtons } from "./PricingActionButtons";
import { pricingPlans } from "./pricingData";

export function PricingSection() {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  const downloadSampleFeed = () => {
    // In a real app, this would download a sample feed
    alert("Sample feed download will be available soon");
  };
  
  return (
    <section className="py-12 md:py-16 bg-slate-950">
      <div className="relative z-10">
        <SectionHeader
          title="Pricing"
          subtitle="Enterprise Intelligence Without Enterprise Headaches"
          variant="primary"
        />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {pricingPlans.map((plan, index) => (
              <PricingPlanCard
                key={index}
                index={index}
                title={plan.title}
                price={plan.price}
                priceDetail={plan.priceDetail}
                features={plan.features}
                gradient={plan.gradient}
                iconColor={plan.iconColor}
                popular={plan.popular}
                showLeadForm={true}
                billingFrequency={plan.billingFrequency}
              />
            ))}
          </div>
          
          <PricingActionButtons 
            onDownloadSample={downloadSampleFeed}
            onDemoRequest={handleDemoRequest}
          />
        </div>
      </div>
    </section>
  );
}
