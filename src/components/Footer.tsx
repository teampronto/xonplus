
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/lovable-uploads/6f69463c-cc3b-4d18-804f-82f170b11b1b.png" alt="xonPlus Logo" className="h-8" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Protecting businesses from account takeovers with breach intelligence and credential monitoring.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/xposedornot/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
              <a 
                href="https://x.com/XposedOrNot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
              <a 
                href="https://www.facebook.com/XposedOrNot/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Like us on Facebook"
              >
                <Facebook className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Products - Updated with product names */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Products</h3>
            <ul className="space-y-4">
              <li><a href="/products/enterprise" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">xonEnterprise+</a></li>
              <li><a href="/products/consumer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">xonConsumer+</a></li>
              <li><a href="/products/api" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">xonAPI+</a></li>
              <li><a href="/products/threat-intel" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">xonThreatIntel+</a></li>
            </ul>
          </div>

          {/* Free Tools - Updated with Dark Web Security Test */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Free Tools</h3>
            <ul className="space-y-4">
              <li><a href="/dark-web-test" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Dark Web Security Test</a></li>
              <li><a href="/exposure-check" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Check for Exposure</a></li>
              <li><a href="https://xposedornot.com/shield" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Privacy Shields</a></li>
              <li><a href="https://xposedornot.com/breaches" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Breach Insights</a></li>
              <li><a href="https://xposedornot.com/api_doc" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Community API</a></li>
              <li><a href="https://xposedornot.com/breaches-visualisations" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Data Breach Patterns</a></li>
              <li><a href="https://xposedornot.com/xposed" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Exposed Data Breaches</a></li>
            </ul>
          </div>

          {/* Resources - Updated with correct URLs, removed Whitepapers */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li><a href="https://blog.xposedornot.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Blog</a></li>
              <li><a href="/resources/case-studies" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Case Studies</a></li>
              <li><a href="/faq" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">FAQs</a></li>
              <li><a href="https://xposedornot.com/xonPulse" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Latest News</a></li>
              <li><a href="https://xposedornot.com/api_doc" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">API Documentation</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800" />
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} xonPlus. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Terms of Service</a>
            <a href="/cookies" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Cookie Policy</a>
            <a href="/web-security" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Security</a>
            <a href="/faq" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
