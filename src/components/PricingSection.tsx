
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { enterprisePlans } from "@/components/pricing/pricingData";

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  index: number;
  gradient: string;
  iconColor: string;
  popular?: boolean;
  billingFrequency?: string;
}

const PricingPlan = ({ 
  title, 
  price, 
  features, 
  index, 
  gradient,
  iconColor,
  popular = false,
  billingFrequency
}: PricingPlanProps) => {
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  // Enterprise product purchase URL - UPDATED
  const enterprisePurchaseUrl = "https://xonplus.lemonsqueezy.com/buy/e24f4e5c-086f-491f-9b3b-3f45efdae527";

  const handleBuyClick = () => {
    window.open(enterprisePurchaseUrl, '_blank');
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
        popular ? "border-blue-500/50" : "border-white/10",
      )}>
        <div className={cn(
          "absolute inset-0 opacity-0 bg-gradient-to-br group-hover:opacity-10 transition-opacity duration-300",
          gradient
        )}></div>
        
        {popular && (
          <div className="absolute -right-12 top-8 rotate-45 bg-blue-600 text-white text-xs py-1 px-12 font-medium">
            MOST POPULAR
          </div>
        )}
        
        <div className="p-8 relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className={cn(
              "text-2xl font-bold mb-2",
              popular ? "text-blue-400" : "text-white"
            )}>
              {title}
            </h3>
            <div className="text-3xl font-bold text-white mb-2">
              {price} <span className="text-sm text-slate-400 font-normal">/mo</span>
            </div>
            {billingFrequency && (
              <div className="text-sm text-slate-400 mb-4">
                {billingFrequency}
              </div>
            )}
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
                popular 
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              )}
              onClick={handleBuyClick}
            >
              Buy Now
            </Button>
            <Button 
              variant="ghost"
              onClick={handleDemoRequest}
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
  return (
    <section className="py-16">
      <div className="relative z-10">
        <SectionHeader
          title="Pricing"
          subtitle="Secure your enterprise from cyberattacks"
          variant="primary"
        />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {enterprisePlans.map((plan, index) => (
              <PricingPlan
                key={index}
                index={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                gradient={plan.gradient}
                iconColor={plan.iconColor}
                popular={plan.popular}
                billingFrequency={plan.billingFrequency}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
