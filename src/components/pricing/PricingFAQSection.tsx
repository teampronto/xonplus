
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const pricingFaqData = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card is required to start your trial, and you'll have full access to all features included in your selected plan."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Absolutely. You can upgrade, downgrade, or change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the end of your current billing period."
  },
  {
    question: "Is there a discount for annual payment?",
    answer: "Yes, we offer a 20% discount when you choose annual billing on any plan. This represents a significant saving compared to monthly payment options."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual enterprise plans. All payments are securely processed and encrypted."
  },
  {
    question: "Do you offer custom pricing for large organizations?",
    answer: "Yes. For organizations with specific needs or large-scale requirements, our team can create a custom pricing package. Contact our sales team to discuss your requirements and receive a tailored quote."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with your subscription within the first 30 days, contact our support team for a full refund, no questions asked."
  },
  {
    question: "How does user-based pricing work?",
    answer: "Our pricing tiers are based on the number of users or email domains you want to monitor. Each plan comes with a specific user allocation, and you can always add more users as your organization grows."
  },
  {
    question: "Are there any hidden fees or charges?",
    answer: "No, our pricing is completely transparent with no hidden fees. The price you see is the price you pay, with all features clearly listed for each plan. There are no surprise charges for standard usage."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "If you approach or exceed your plan limits, we'll notify you and provide options to upgrade. We won't suddenly cut off your service or charge overage fees without your knowledge or consent."
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No. All our standard plans are available on a month-to-month basis with no long-term commitment required. Annual plans offer a discount but can be cancelled before renewal with no penalty."
  },
  {
    question: "Can I add or remove features from my plan?",
    answer: "While our plans come with fixed feature sets, Enterprise customers can work with our team to create a customized solution with exactly the features you need. Contact sales to discuss custom requirements."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for qualified nonprofit organizations, educational institutions, and startups. Contact our sales team with verification of your status to learn more about these discounted rates."
  }
];

export function PricingFAQSection() {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and plans"
          variant="primary"
          className="mb-14"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {pricingFaqData.slice(0, 6).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-blue-400 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {pricingFaqData.slice(6, 12).map((faq, index) => (
                <AccordionItem
                  key={index + 6}
                  value={`item-${index + 6}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-blue-400 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
