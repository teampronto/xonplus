
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Building, Shield, Globe, Briefcase } from "lucide-react";

const caseStudies = [
  {
    title: "How a Fortune 500 Financial Institution Reduced ATO by 92%",
    industry: "Financial Services",
    icon: Building,
    description: "Discover how one of the world's largest banks implemented xonEnterprise+ to drastically reduce account takeover attempts and save millions in fraud prevention costs.",
    downloadLink: "#",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Healthcare Provider Secures Patient Data Across 50+ Systems",
    industry: "Healthcare",
    icon: Shield,
    description: "Learn how a major healthcare network integrated our API to monitor sensitive patient data across their fragmented technology landscape.",
    downloadLink: "#",
    color: "from-emerald-600 to-emerald-400"
  },
  {
    title: "Global E-commerce Platform Protects 120M Customer Accounts",
    industry: "E-commerce",
    icon: Globe,
    description: "See how this retailer implemented real-time breach monitoring to protect customer accounts across 15 international markets.",
    downloadLink: "#",
    color: "from-violet-600 to-violet-400"
  },
  {
    title: "Technology Service Provider Enhances Security Offering",
    industry: "Technology",
    icon: Briefcase,
    description: "This leading MSSP integrated xonAPI+ to expand their security portfolio, driving $2.4M in additional annual revenue.",
    downloadLink: "#",
    color: "from-amber-600 to-amber-400"
  }
];

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies | xonPlus</title>
        <meta name="description" content="Real-world success stories of organizations securing their digital assets with xonPlus solutions." />
      </Helmet>

      <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GradientHeading size="xl" className="mb-6">
                  Customer Success Stories
                </GradientHeading>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-8"
              >
                Discover how organizations across industries are securing their digital assets and protecting their customers with xonPlus solutions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 pb-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="p-6 border-b border-slate-700/40">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${study.color} bg-opacity-20 flex items-center justify-center`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-slate-400">{study.industry}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                          <p className="text-slate-300 mb-6">{study.description}</p>
                          <div className="flex items-center justify-between">
                            <Button variant="link" className="p-0 text-blue-400 hover:text-blue-300 flex items-center gap-2">
                              Read case study <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1.5 border-slate-700 hover:border-slate-500 text-slate-300">
                              <Download className="h-4 w-4" /> PDF
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to become our next success story?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Contact our team to discuss how xonPlus solutions can help secure your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                >
                  Request a Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-500/30 text-blue-400 hover:text-blue-300"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
