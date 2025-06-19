import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const faqData = [
  {
    question: "What is xonPlus?",
    answer: "xonPlus is a breach monitoring platform that protects your organization by detecting exposed employee credentials before they can be exploited. We continuously monitor the web, dark web, and data breaches to secure your workforce accounts."
  },
  {
    question: "How quickly can we set up xonPlus?",
    answer: "Setup takes under 15 minutes with no software installation or network changes required. Simply verify domain ownership, configure alert preferences, and your organization is protected with immediate monitoring coverage."
  },
  {
    question: "What specific data does xonPlus monitor?",
    answer: "We monitor employee email addresses and credentials that appear in data breaches across the web and dark web. Our focus is on protecting your workforce's login information to prevent account takeovers."
  },
  {
    question: "How are breach alerts delivered?",
    answer: "Alerts are delivered through your choice of Slack, Microsoft Teams, email, SIEM systems, or webhooks. You can customize routing based on severity, department, or domain to ensure proper response."
  },
  {
    question: "How does the privacy-first approach work?",
    answer: "We never store passwords or sensitive credentials. xonPlus uses zero-knowledge architecture with secure one-way hashing to verify breaches without retaining sensitive data, ensuring maximum security and compliance."
  },
  {
    question: "What security integrations are available?",
    answer: "xonPlus integrates with Slack, Microsoft Teams, email systems, JIRA, ServiceNow, and major SIEM solutions like Splunk, Microsoft Sentinel, and LogRhythm, plus a robust API for custom security workflows."
  },
  {
    question: "Is xonPlus compliant with regulations?",
    answer: "Yes. We're fully compliant with GDPR, CCPA, ISO 27001, and other privacy regulations. Our zero-knowledge architecture provides audit-ready reporting without storing sensitive information, simplifying your compliance processes."
  },
  {
    question: "What support is included?",
    answer: "All plans include email and chat support. Enterprise customers receive dedicated account management, 24/7 priority support, and regular security advisory sessions to maximize your protection."
  }
];

export function FAQSection() {
  return (
    <section className="py-8 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our platform"
          variant="primary"
          className="mb-8"
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.slice(0, 4).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-3 text-slate-100 hover:text-blue-400 text-left font-medium text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 text-slate-300 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.slice(4, 8).map((faq, index) => (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  className="border-b border-slate-700"
                >
                  <AccordionTrigger className="py-3 text-slate-100 hover:text-blue-400 text-left font-medium text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 text-slate-300 leading-relaxed text-sm">
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
