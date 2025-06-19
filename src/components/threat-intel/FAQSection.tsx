
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const faqData = [
  {
    question: "What is xonThreatIntel+?",
    answer: "xonThreatIntel+ is a specialized breach intelligence platform that provides security teams with early access to breach data, indicators of compromise, and dark web threat intelligence for proactive security."
  },
  {
    question: "What data sources does xonThreatIntel+ cover?",
    answer: "We aggregate intelligence from proprietary crawlers, dark web monitoring, public breach disclosures, private forums, and threat researcher networks to provide comprehensive coverage beyond public sources."
  },
  {
    question: "How fresh is your threat intelligence?",
    answer: "Our platform detects and processes new breaches within 15 minutes of first appearance. Intelligence is enriched, verified, and distributed to customers with industry-leading speed."
  },
  {
    question: "What data formats and delivery methods are available?",
    answer: "Intelligence is available in JSON, STIX, CSV, and via API/webhooks. You can integrate feeds directly into your SIEM, threat intelligence platform, or custom security pipeline."
  },
  {
    question: "Can we monitor specific organizations or vendors?",
    answer: "Yes. You can create custom watchlists for specific domains, emails, or credential formats. Receive immediate alerts when third-party vendors or partners appear in breach data."
  },
  {
    question: "How does xonThreatIntel+ handle privacy compliance?",
    answer: "Our platform is designed for privacy-first operation. We never store plaintext credentials, all processing follows strict access controls, and feed delivery complies with GDPR and similar regulations."
  },
  {
    question: "What makes your intelligence different from free sources?",
    answer: "We deliver intelligence 10-15x faster than public sources, with proprietary access to private forums and marketplaces. All data is verified, enriched, and contextualized for actionability."
  },
  {
    question: "Do you offer analyst support with the platform?",
    answer: "Yes. Our Enterprise tier includes access to threat researchers for analysis support, custom intelligence requests, and quarterly threat briefings tailored to your industry and threat landscape."
  }
];

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 md:w-48 h-32 md:h-48 bg-amber-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 md:w-72 h-48 md:h-72 bg-orange-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Get answers about our threat intelligence platform"
          variant="primary"
          className="mb-8 md:mb-14"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {faqData.slice(0, 4).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-amber-400 text-left font-medium">
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
              {faqData.slice(4, 8).map((faq, index) => (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-amber-400 text-left font-medium">
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
