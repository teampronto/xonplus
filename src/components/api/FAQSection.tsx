
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const faqData = [
  {
    question: "What is xonAPI+?",
    answer: "xonAPI+ is a secure breach detection API that lets developers integrate real-time credential monitoring directly into their applications, with simple REST endpoints returning structured breach data."
  },
  {
    question: "How does the API respect user privacy?",
    answer: "The API is completely stateless and never logs or stores submitted credentials. All requests use secure hashing and encryption, providing breach detection without any privacy concerns."
  },
  {
    question: "What's the average API response time?",
    answer: "Our API delivers responses in under 100ms globally, with edge distribution ensuring minimal latency. High-volume requests use our optimized batch endpoints for even greater efficiency."
  },
  {
    question: "What data formats does the API support?",
    answer: "The API returns standardized JSON responses with options for hierarchical or flattened data structures. Responses include breach details, timestamps, and severity indicators for easy integration."
  },
  {
    question: "How does API authentication work?",
    answer: "We use API keys with optional IP restrictions, environment-specific access, and request rate limiting. Keys can be rotated, revoked, and managed through our developer dashboard."
  },
  {
    question: "Can we test the API before production?",
    answer: "Yes. All plans include full sandbox environments with test credentials and simulated breach data. Our comprehensive documentation includes code examples in multiple languages."
  },
  {
    question: "How is the API priced?",
    answer: "The API is priced based on monthly request volume with transparent tiers starting at $79/month for 10,000 requests. Custom high-volume pricing is available for enterprise implementations."
  },
  {
    question: "What integrations and SDKs are available?",
    answer: "We offer official SDKs for Node.js, Python, Ruby, PHP, and Java, plus integration guides for popular frameworks. Community-maintained libraries support additional languages and platforms."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our API"
          variant="primary"
          className="mb-14"
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
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-purple-400 text-left font-medium">
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
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-purple-400 text-left font-medium">
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
