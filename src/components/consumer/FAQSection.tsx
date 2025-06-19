
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const faqData = [
  {
    question: "What is xonConsumer+?",
    answer: "xonConsumer+ is a personal breach monitoring service that alerts individuals when their passwords or private information appear in data breaches. We continuously scan the web and dark web to protect your digital identity."
  },
  {
    question: "How does xonConsumer+ protect my privacy?",
    answer: "We use zero-knowledge architecture that never stores your passwords. Our system creates secure fingerprints of your information that can detect matches without ever processing or storing the actual sensitive data."
  },
  {
    question: "What personal information does xonConsumer+ monitor?",
    answer: "We monitor email addresses, usernames, passwords, phone numbers, credit card information, and other personal identifiers that might appear in data breaches or on the dark web."
  },
  {
    question: "How quickly will I be notified of a breach?",
    answer: "You'll receive alerts within minutes of detection. Our real-time monitoring system continuously scans for new breaches and immediately notifies you when your information appears, giving you time to secure your accounts."
  },
  {
    question: "How are breach alerts delivered?",
    answer: "Alerts can be delivered via email, SMS, or through our mobile app. You can customize notification preferences based on severity and breach type for a personalized security experience."
  },
  {
    question: "Can I monitor my family members' information?",
    answer: "Yes. Our family plans allow you to monitor multiple email addresses and identifiers for your entire household under a single dashboard, with separate privacy controls for each family member."
  },
  {
    question: "How is xonConsumer+ priced?",
    answer: "We offer simple monthly or annual subscription plans starting at $6.99/month for individuals. Family plans covering up to 5 people are available at $12.99/month, with all core protection features included."
  },
  {
    question: "Is my data shared with third parties?",
    answer: "Never. Your privacy is our priority. We don't sell, share, or analyze your personal data for marketing purposes. Our business model is subscription-based, not data-based."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our platform"
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
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-emerald-400 text-left font-medium">
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
                  <AccordionTrigger className="py-5 text-slate-100 hover:text-emerald-400 text-left font-medium">
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
