
import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/components/navbar"; 
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import FAQ from "./pages/FAQ";
import EnterpriseProduct from "./pages/EnterpriseProduct";
import ConsumerProduct from "./pages/ConsumerProduct";
import ApiProduct from "./pages/ApiProduct";
import ThreatIntelProduct from "./pages/ThreatIntelProduct";
import About from "./pages/About";
import ExposureCheck from "./pages/ExposureCheck";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import WebSecurity from "./pages/WebSecurity";
import DarkWebTest from "./pages/DarkWebTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/products/enterprise" element={<EnterpriseProduct />} />
                <Route path="/products/consumer" element={<ConsumerProduct />} />
                <Route path="/products/api" element={<ApiProduct />} />
                <Route path="/products/threat-intel" element={<ThreatIntelProduct />} />
                <Route path="/about" element={<About />} />
                <Route path="/exposure-check" element={<ExposureCheck />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/web-security" element={<WebSecurity />} />
                <Route path="/dark-web-test" element={<DarkWebTest />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/data-breach-statistics" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/blog/all" element={<Blog />} />
                <Route path="/blog/featured" element={<Blog />} />
                <Route path="/resources/case-studies" element={<CaseStudies />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
