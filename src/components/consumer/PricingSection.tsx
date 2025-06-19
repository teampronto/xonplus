
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { consumerPlans } from "@/components/pricing/pricingData";

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  index: number;
  gradient: string;
  iconColor: string;
  buyUrl: string;
  billingFrequency?: string;
}

const PricingPlan = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  featured, 
  cta,
  index,
  gradient,
  iconColor,
  buyUrl,
  billingFrequency
}: PricingPlanProps) => {
  
  const handleBuyClick = () => {
    window.open(buyUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className={cn(
        "h-full rounded-xl border bg-white/5 backdrop-blur-xl",
        "transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-2",
        "relative overflow-hidden",
        featured ? "border-emerald-500/50" : "border-white/10",
      )}>
        <div className={cn(
          "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-10 transition-opacity duration-300",
          gradient
        )}></div>
        
        {featured && (
          <div className="absolute -right-12 top-8 rotate-45 bg-emerald-600 text-white text-xs py-1 px-12 font-medium">
            MOST POPULAR
          </div>
        )}
        
        <div className="p-8 relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className={cn(
              "text-2xl font-bold mb-2",
              featured ? "text-emerald-400" : "text-white"
            )}>
              {name}
            </h3>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-white">{price}</span>
              {period && <span className="text-sm text-slate-400 font-normal ml-2">{period}</span>}
            </div>
            {billingFrequency && (
              <div className="text-sm text-slate-400 mb-3">
                {billingFrequency}
              </div>
            )}
            <p className="text-slate-300 mb-6">{description}</p>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className={cn("w-5 h-5 mr-3 mt-0.5", iconColor)} />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            <Button 
              className={cn(
                "w-full font-medium py-6",
                featured 
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              )}
              onClick={handleBuyClick}
            >
              {cta}
            </Button>
            <Button 
              variant="ghost"
              onClick={() => window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank')}
              className="w-full mt-3 text-slate-400 hover:text-white hover:bg-transparent"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function PricingSection() {
  const consumerPurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/37e80d56-0ce4-46ce-b767-41e52c2050ab";
  
  const plans = consumerPlans.map((plan, index) => ({
    name: plan.title,
    price: plan.price,
    period: "/mo",
    billingFrequency: plan.billingFrequency,
    description: index === 0 ? "For individuals getting started with personal protection" : 
                index === 1 ? "Perfect for growing businesses" : 
                "For large organizations",
    features: plan.features,
    featured: plan.popular,
    cta: "Buy Now",
    gradient: plan.gradient,
    iconColor: plan.iconColor
  }));

  return (
    <section id="pricing" className="py-16 bg-slate-950">
      <div className="relative z-10">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for your business"
          variant="primary"
        />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {plans.map((plan, index) => (
              <PricingPlan
                key={index}
                index={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                billingFrequency={plan.billingFrequency}
                description={plan.description}
                features={plan.features}
                featured={plan.featured}
                cta={plan.cta}
                gradient={plan.gradient}
                iconColor={plan.iconColor}
                buyUrl={consumerPurchaseUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
