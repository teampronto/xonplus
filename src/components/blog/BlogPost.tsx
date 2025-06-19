
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { FinancialImpactChart, AttackVectorsChart, IndustryImpactChart, TimeToDetectionChart, DataTypesCompromisedChart, RegulatoryResponseChart, SMBImpactChart, FutureTrendsChart } from "@/components/blog/DataBreachCharts";

export function BlogPost() {
  // Function to handle smooth scrolling when clicking section links
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Data Breach Statistics - Lovable</title>
        <meta name="description" content="Explore the latest data breach statistics, trends, and insights to understand the evolving landscape of cybersecurity threats." />
        <meta property="og:title" content="Data Breach Statistics - Lovable" />
        <meta property="og:description" content="Stay informed with comprehensive data breach statistics, trends, and analysis." />
        <meta property="og:image" content="/lovable-uploads/6be721d9-078a-4032-a029-ca865fb9e2a3.png" />
        <meta property="og:url" content="https://lovable.tools/blog/data-breach-statistics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Breach Statistics - Lovable" />
        <meta name="twitter:description" content="Explore the latest data breach statistics, trends, and insights." />
        <meta name="twitter:image" content="/lovable-uploads/6be721d9-078a-4032-a029-ca865fb9e2a3.png" />
      </Helmet>

      <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-slate-950 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-900/20 rounded-full filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-800/20 rounded-full filter blur-[120px] opacity-30"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="mb-12">
            <GradientHeading size="xxl" className="text-center mb-4">
              The Ultimate Guide to Data Breach Statistics in 2025
            </GradientHeading>
            <p className="text-slate-400 text-lg text-center mb-8">
              Stay informed about the evolving landscape of cybersecurity threats with our comprehensive analysis of data breach statistics.
            </p>
            <div className="flex items-center justify-center text-xs text-slate-400 mb-6">
              <Calendar className="h-3 w-3 mr-1.5" />
              <span>Last Updated: June 12, 2024</span>
            </div>
            
            {/* Table of Contents */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 mb-8 max-w-3xl mx-auto">
              <h3 className="text-white font-semibold mb-3 text-lg">Table of Contents</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li><a href="#introduction" onClick={scrollToSection('introduction')} className="text-blue-400 hover:text-blue-300 hover:underline">Introduction</a></li>
                <li><a href="#key-stats" onClick={scrollToSection('key-stats')} className="text-blue-400 hover:text-blue-300 hover:underline">Key Statistics</a></li>
                <li><a href="#financial-impact" onClick={scrollToSection('financial-impact')} className="text-blue-400 hover:text-blue-300 hover:underline">Financial Impact of Data Breaches</a></li>
                <li><a href="#attack-vectors" onClick={scrollToSection('attack-vectors')} className="text-blue-400 hover:text-blue-300 hover:underline">Common Attack Vectors</a></li>
                <li><a href="#industry-impact" onClick={scrollToSection('industry-impact')} className="text-blue-400 hover:text-blue-300 hover:underline">Industry-Specific Impact</a></li>
                <li><a href="#time-to-detection" onClick={scrollToSection('time-to-detection')} className="text-blue-400 hover:text-blue-300 hover:underline">Time to Detect and Contain Breaches</a></li>
                <li><a href="#data-types-compromised" onClick={scrollToSection('data-types-compromised')} className="text-blue-400 hover:text-blue-300 hover:underline">Types of Data Most Often Compromised</a></li>
                <li><a href="#regulatory-response" onClick={scrollToSection('regulatory-response')} className="text-blue-400 hover:text-blue-300 hover:underline">Regulatory and Legal Responses</a></li>
                <li><a href="#impact-on-smbs" onClick={scrollToSection('impact-on-smbs')} className="text-blue-400 hover:text-blue-300 hover:underline">Impact on Small and Medium-Sized Businesses</a></li>
                <li><a href="#future-trends" onClick={scrollToSection('future-trends')} className="text-blue-400 hover:text-blue-300 hover:underline">Future Trends in Data Breaches</a></li>
                <li><a href="#conclusion" onClick={scrollToSection('conclusion')} className="text-blue-400 hover:text-blue-300 hover:underline">Conclusion</a></li>
              </ol>
            </div>
            
            <div className="flex items-center justify-center">
              <a href="#key-stats" onClick={scrollToSection('key-stats')} className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium">
                Explore key stats <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          {/* Editor's Pick */}
          <section className="mb-12">
            <Card className="overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-slate-700/50 shadow-xl">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-grid-white/[0.02] z-0"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-1.5 rounded-full">
                        <Star className="h-3.5 w-3.5 text-amber-500" />
                      </div>
                      <h3 className="font-semibold text-amber-400">Editor's Pick</h3>
                    </div>
                    <button className="text-slate-400 hover:text-slate-300">
                      {/* Bookmark Icon */}
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src="/lovable-uploads/6be721d9-078a-4032-a029-ca865fb9e2a3.png"
                        alt="Editor's pick"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2 hover:text-blue-400 transition-colors">
                      <a href="/blog/featured">Zero Trust Architecture: A Modern Security Paradigm</a>
                    </h4>
                    <div className="flex items-center text-xs text-slate-400 mb-3">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      <span>June 2, 2023</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-4">
                      Learn how to implement a modern zero trust architecture to protect your organization's most sensitive data from advanced threats.
                    </p>
                    <a href="/blog/featured" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium">
                      Read article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* Introduction */}
          <section id="introduction" className="mb-16 scroll-mt-16">
            <GradientHeading size="xl" className="mb-4">
              Introduction
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Data breaches are a persistent and evolving threat to organizations of all sizes. Understanding the latest statistics and trends is crucial for developing effective cybersecurity strategies. This article provides a comprehensive overview of data breach statistics, offering insights into the causes, costs, and impacts of these incidents.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-lg">
              <li><strong>Rising Costs:</strong> The average cost of a data breach continues to increase, impacting organizations' financial stability.</li>
              <li><strong>Expanding Attack Vectors:</strong> Cybercriminals are employing increasingly sophisticated methods to exploit vulnerabilities.</li>
              <li><strong>Regulatory Scrutiny:</strong> Governments worldwide are implementing stricter data protection regulations, increasing the stakes for non-compliance.</li>
            </ul>
          </section>

          {/* Key Statistics */}
          <section id="key-stats" className="mb-16 scroll-mt-16">
            <GradientHeading size="xl" className="mb-4">
              Key Statistics
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Here are some of the most significant data breach statistics and trends to be aware of:
            </p>
          </section>

          {/* Financial Impact */}
          <section id="financial-impact" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Financial Impact of Data Breaches
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Data breaches can result in significant financial losses for organizations, including direct costs, fines, and reputational damage.
            </p>
            <FinancialImpactChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Healthcare:</strong> $10.93 million</li>
              <li><strong>Financial:</strong> $9.48 million</li>
              <li><strong>Tech:</strong> $8.51 million</li>
              <li><strong>Energy:</strong> $7.39 million</li>
              <li><strong>Industrial:</strong> $6.88 million</li>
              <li><strong>Services:</strong> $6.05 million</li>
              <li><strong>Retail:</strong> $5.72 million</li>
            </ul>
          </section>

          {/* Attack Vectors */}
          <section id="attack-vectors" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Common Attack Vectors
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Understanding the methods used by cybercriminals is essential for implementing effective security measures.
            </p>
            <AttackVectorsChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Phishing:</strong> 36%</li>
              <li><strong>Stolen Credentials:</strong> 25%</li>
              <li><strong>Cloud Misconfiguration:</strong> 15%</li>
              <li><strong>Zero-day Vulnerabilities:</strong> 10%</li>
              <li><strong>Insider Threats:</strong> 8%</li>
              <li><strong>Other:</strong> 6%</li>
            </ul>
          </section>

          {/* Industry Impact */}
          <section id="industry-impact" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Industry-Specific Impact
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Different industries face varying levels of risk and impact from data breaches.
            </p>
            <IndustryImpactChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Healthcare:</strong> Consistently high due to sensitive patient data.</li>
              <li><strong>Finance:</strong> Attractive target due to financial assets and personal information.</li>
              <li><strong>Technology:</strong> Increasing as tech companies manage vast amounts of data.</li>
              <li><strong>Education:</strong> Vulnerable due to limited resources and sensitive student data.</li>
              <li><strong>Government:</strong> High-profile target with significant national security implications.</li>
            </ul>
          </section>

          {/* Time to Detection */}
          <section id="time-to-detection" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Time to Detect and Contain Breaches
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              The longer it takes to detect and contain a breach, the greater the potential damage.
            </p>
            <TimeToDetectionChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>2020:</strong> 280 days</li>
              <li><strong>2021:</strong> 250 days</li>
              <li><strong>2022:</strong> 212 days</li>
              <li><strong>2023:</strong> 190 days</li>
              <li><strong>2024:</strong> 174 days</li>
              <li><strong>2025:</strong> 161 days (Projected)</li>
            </ul>
          </section>

          {/* Data Types Compromised */}
          <section id="data-types-compromised" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Types of Data Most Often Compromised
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Certain types of data are more frequently targeted in data breaches.
            </p>
            <DataTypesCompromisedChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Personally Identifiable Information (PII):</strong> 42%</li>
              <li><strong>Login Credentials:</strong> 28%</li>
              <li><strong>Financial Data:</strong> 15%</li>
              <li><strong>Health Records:</strong> 8%</li>
              <li><strong>Intellectual Property:</strong> 7%</li>
            </ul>
          </section>

          {/* Regulatory Response */}
          <section id="regulatory-response" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Regulatory and Legal Responses
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Governments worldwide are increasing their regulatory and legal responses to data breaches.
            </p>
            <RegulatoryResponseChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>North America:</strong> High enforcement and reporting requirements.</li>
              <li><strong>Europe (EU):</strong> Stringent GDPR enforcement.</li>
              <li><strong>Asia-Pacific:</strong> Varied enforcement levels.</li>
              <li><strong>Latin America:</strong> Developing regulatory frameworks.</li>
              <li><strong>Middle East:</strong> Increasing data protection laws.</li>
              <li><strong>Africa:</strong> Emerging data protection regulations.</li>
            </ul>
          </section>

          {/* Impact on SMBs */}
          <section id="impact-on-smbs" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Impact on Small and Medium-Sized Businesses (SMBs)
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              SMBs are particularly vulnerable to data breaches due to limited resources and expertise.
            </p>
            <SMBImpactChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Survived without Protection:</strong> 40%</li>
              <li><strong>Failed without Protection:</strong> 60%</li>
              <li><strong>Survived with Protection:</strong> 85%</li>
              <li><strong>Failed with Protection:</strong> 15%</li>
            </ul>
          </section>

          {/* Future Trends */}
          <section id="future-trends" className="mb-12 scroll-mt-16">
            <GradientHeading size="lg" className="mb-4">
              Future Trends in Data Breaches
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Emerging technologies and evolving cyber threats will shape the future of data breaches.
            </p>
            <FutureTrendsChart />
            <ul className="list-disc list-inside text-slate-400 text-sm mt-4">
              <li><strong>Ransomware:</strong> Expected to increase in frequency and sophistication.</li>
              <li><strong>Supply Chain Attacks:</strong> Growing as supply chains become more complex.</li>
              <li><strong>AI Deepfakes:</strong> Emerging threat using AI to create convincing fake data.</li>
              <li><strong>Cloud Breaches:</strong> Increasing as more data is stored in the cloud.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16 scroll-mt-16">
            <GradientHeading size="xl" className="mb-4">
              Conclusion
            </GradientHeading>
            <p className="text-slate-400 text-lg mb-6">
              Data breach statistics highlight the ongoing and evolving nature of cybersecurity threats. By staying informed about the latest trends and implementing robust security measures, organizations can better protect themselves from these costly and damaging incidents.
            </p>
            <p className="text-slate-400 text-lg">
              For more detailed information and resources, refer to the following:
            </p>
            <ul className="list-disc list-inside text-slate-400 text-lg">
              <li><a href="https://www.example.com/resource1" className="text-blue-400 hover:text-blue-300">Data Breach Investigation Report</a></li>
              <li><a href="https://www.example.com/resource2" className="text-blue-400 hover:text-blue-300">Global Data Protection Regulations</a></li>
            </ul>
          </section>
        </div>

        {/* Stats band with updated numbers */}
        <div className="border-t border-slate-800/70 py-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-8 text-center">
              <GradientHeading size="md">Our Impact</GradientHeading>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "250+", label: "Research Articles", color: "from-blue-600 to-blue-400" },
                { value: "5K+", label: "Monthly Readers", color: "from-indigo-600 to-indigo-400" },
                { value: "42K+", label: "Annual Pageviews", color: "from-purple-600 to-purple-400" },
                { value: "2K+", label: "Newsletter Subscribers", color: "from-cyan-600 to-cyan-400" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl border border-slate-700/50 backdrop-blur-sm p-6 group hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200`}></div>
                  <div className="relative text-center">
                    <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
                    <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimations />
    </>
  );
}
