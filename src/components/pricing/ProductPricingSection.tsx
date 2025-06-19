
import React from "react";
import { cn } from "@/lib/utils";
import { PricingPlanCard, PricingPlanProps } from "./PricingPlanCard";

interface ProductPricingSectionProps {
  title: string;
  description: string;
  plans: Omit<PricingPlanProps, 'buyUrl' | 'showLeadForm'>[];
  accentColor: string;
  buttonColor: string;
  demoUrl: string;
  buyUrl?: string;
  showLeadForm?: boolean;
}

export function ProductPricingSection({ 
  title, 
  description, 
  plans, 
  accentColor, 
  buttonColor, 
  demoUrl,
  buyUrl,
  showLeadForm 
}: ProductPricingSectionProps) {
  return (
    <section className="py-16 border-b border-slate-800 last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", accentColor)}>
            {title}
          </h2>
          <p className="text-lg text-slate-300">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
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
              buyUrl={buyUrl}
              showLeadForm={showLeadForm}
              billingFrequency={plan.billingFrequency}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
