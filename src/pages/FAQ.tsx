
import { FileQuestion } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FAQ = () => {
  const { isMobile } = useIsMobile();
  
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };
  
  const faqData = [
    {
      question: "What is xonPlus and how does it work?",
      answer: (
        <>
          <p className="mb-4">xonPlus is a comprehensive breach monitoring and security platform that continuously scans for exposed credentials and personal data across the internet. Our platform uses advanced detection algorithms to identify when your organization's data appears in breaches, dark web forums, or data dumps.</p>
          <p>When we detect exposed information, we immediately send alerts through your preferred channels, enabling you to take proactive security measures before the data can be exploited by attackers.</p>
        </>
      )
    },
    {
      question: "How does the platform protect sensitive data?",
      answer: (
        <p>The solution is built with a privacy first approach. We never store passwords or sensitive credentials in our systems. The platform uses secure, one way hashing technology to check for matches without processing or retaining the raw data. All communications are encrypted, and our infrastructure follows ISO 27001 security standards to ensure your organization's data remains protected.</p>
      )
    },
    {
      question: "Which integrations do you support?",
      answer: (
        <p>We seamlessly integrate with popular security tools and communication platforms including Slack, Microsoft Teams, email systems, JIRA, ServiceNow, and major SIEM solutions like Splunk, Microsoft Sentinel, and LogRhythm. We also offer a robust API for custom integrations with your existing security stack.</p>
      )
    },
    {
      question: "How quickly will I be notified of a data breach?",
      answer: (
        <p>We provide near real time notifications, typically alerting you within 15 minutes of detecting your data in a breach. Our platform continuously monitors multiple sources, ensuring you're informed of exposures quickly, giving your team the critical time advantage needed to respond before credentials can be exploited.</p>
      )
    },
    {
      question: "What information does the platform monitor?",
      answer: (
        <>
          <p className="mb-4">Our system monitors a wide range of data points including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-0">
            <li>Email addresses and domains</li>
            <li>Employee credentials</li>
            <li>Executive and VIP accounts</li>
            <li>Company IP ranges</li>
            <li>API keys and access tokens</li>
            <li>Personally identifiable information (PII)</li>
          </ul>
        </>
      )
    },
    {
      question: "Is the service compliant with privacy regulations?",
      answer: (
        <p>Yes. Our service is fully compliant with GDPR, CCPA, and other global privacy regulations. Our privacy first architecture ensures that we never store sensitive data, and our processing methods meet or exceed regulatory requirements for data protection and privacy. We provide detailed documentation to support your compliance needs and audits.</p>
      )
    },
    {
      question: "How does this compare to traditional threat intelligence solutions?",
      answer: (
        <p>Unlike traditional threat intelligence platforms that provide generic alerts or require manual analysis, we deliver targeted, actionable intelligence specific to your organization. We offer faster detection, wider coverage, and more affordable pricing compared to legacy solutions, with automated workflows that reduce response time and eliminate alert fatigue.</p>
      )
    },
    {
      question: "Can I monitor multiple brands or subsidiaries under one account?",
      answer: (
        <p>Absolutely. Our Enterprise plan allows you to monitor multiple domains, departments, or global entities under a single dashboard. You can assign access by role, filter alerts by business unit, and centralize breach intelligence across your entire organization, making it ideal for companies with complex organizational structures.</p>
      )
    },
    {
      question: "How long does it take to set up the service?",
      answer: (
        <p>Setup takes less than 15 minutes. Our agentless deployment requires no software installation or network changes. Simply verify your domain ownership, configure your alert preferences, and you're protected. We provide onboarding assistance to ensure you're up and running quickly and effectively.</p>
      )
    },
    {
      question: "What kind of reporting do you provide?",
      answer: (
        <p>We offer comprehensive reporting including breach exposure trends, risk scores by department, response metrics, and compliance ready documentation. All reports can be customized and scheduled for delivery to stakeholders. These insights help demonstrate security ROI and support regulatory compliance requirements.</p>
      )
    },
    {
      question: "How does your pricing work?",
      answer: (
        <p>We offer transparent, subscription based pricing with plans tailored for businesses of all sizes. Unlike competitors who charge per monitored user or credential, our pricing is based on organization size with unlimited alerts and monitoring. You can contact us by scheduling a demo with us for a customized quote based on your specific requirements.</p>
      )
    },
    {
      question: "What support options are available?",
      answer: (
        <p>All plans include email and chat support. Enterprise customers receive dedicated account management, 24/7 priority support, and regular security advisory sessions. You can contact us by scheduling a demo with us whenever you need assistance with implementation, ongoing optimization, or incident response guidance.</p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex items-center justify-center space-x-4 pt-10 relative">
            {/* Added glowing effect similar to homepage hero but only at the top */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-cyan-500/30 rounded-full blur-3xl opacity-20"></div>
            
            <FileQuestion className="h-10 w-10 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-800 shadow-xl">
            <Accordion type="single" collapsible className="space-y-6">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-700 last:border-none"
                >
                  <AccordionTrigger className="py-4 text-slate-100 hover:text-blue-400 text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-slate-300 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* CTV Section - Added after FAQ content */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800 rounded-xl p-6 md:p-10 overflow-hidden relative border border-slate-700/30 shadow-xl">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="md:max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Secure Your Organization?
                  </h2>
                  
                  <p className="text-base md:text-lg text-slate-300">
                    Get personalized answers to your questions and see how our breach detection solutions can work for your specific needs.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
                    onClick={handleDemoRequest}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
