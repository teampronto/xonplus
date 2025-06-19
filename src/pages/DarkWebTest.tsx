
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, XCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet-async';

interface Question {
  id: number;
  question: string;
  helpText: string;
  freeFixLink?: string;
  freeFixText?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Do you have multi-factor authentication enabled on all admin accounts?",
    helpText: "MFA is your first line of defense against credential theft.",
    freeFixLink: "https://support.google.com/accounts/answer/185839",
    freeFixText: "Enable Google 2FA"
  },
  {
    id: 2,
    question: "Are all employee passwords required to be at least 12 characters long?",
    helpText: "Longer passwords are exponentially harder to crack.",
    freeFixLink: "https://www.nist.gov/blogs/taking-measure/easy-ways-build-better-password",
    freeFixText: "NIST Password Guidelines"
  },
  {
    id: 3,
    question: "Do you regularly monitor for your company email domains in data breaches?",
    helpText: "Most companies don't know they've been breached until it's too late.",
    freeFixLink: "https://haveibeenpwned.com/DomainSearch",
    freeFixText: "Check HaveIBeenPwned"
  },
  {
    id: 4,
    question: "Have you implemented email security protocols (SPF, DKIM, DMARC)?",
    helpText: "These prevent email spoofing and phishing attacks.",
    freeFixLink: "https://mxtoolbox.com/dmarc.aspx",
    freeFixText: "Test Your DMARC"
  },
  {
    id: 5,
    question: "Do you have a formal incident response plan for data breaches?",
    helpText: "Response time in the first hour determines breach impact.",
    freeFixLink: "https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf",
    freeFixText: "CISA IR Template"
  },
  {
    id: 6,
    question: "Are software updates and patches applied within 48 hours of release?",
    helpText: "Unpatched systems are the #1 attack vector for hackers.",
    freeFixLink: "https://www.us-cert.gov/ncas/tips/ST04-006",
    freeFixText: "US-CERT Patching Guide"
  },
  {
    id: 7,
    question: "Do you use a password manager for all company accounts?",
    helpText: "Reused passwords across systems multiply your attack surface.",
    freeFixLink: "https://bitwarden.com/",
    freeFixText: "Try Bitwarden Free"
  },
  {
    id: 8,
    question: "Have you conducted security awareness training in the last 6 months?",
    helpText: "Human error causes 95% of successful cyber attacks.",
    freeFixLink: "https://www.cisa.gov/cybersecurity-awareness-month",
    freeFixText: "Free CISA Training"
  },
  {
    id: 9,
    question: "Do you have network segmentation separating critical systems?",
    helpText: "Network segmentation limits breach impact and lateral movement.",
    freeFixLink: "https://www.nist.gov/publications/guide-industrial-control-systems-ics-security",
    freeFixText: "NIST Network Security"
  },
  {
    id: 10,
    question: "Are you monitoring dark web marketplaces for your company data?",
    helpText: "Your data might already be for sale and you don't know it.",
    freeFixLink: "https://xposedornot.com/",
    freeFixText: "Check XposedOrNot"
  },
  {
    id: 11,
    question: "Do you have endpoint detection and response (EDR) on all devices?",
    helpText: "Traditional antivirus misses 50% of modern threats.",
    freeFixLink: "https://www.microsoft.com/en-us/security/business/threat-protection/endpoint-defender",
    freeFixText: "Microsoft Defender"
  },
  {
    id: 12,
    question: "Are privileged accounts regularly audited and de-provisioned?",
    helpText: "Orphaned privileged accounts are goldmines for attackers.",
    freeFixLink: "https://www.cisecurity.org/controls/privileged-account-management",
    freeFixText: "CIS Privileged Access"
  },
  {
    id: 13,
    question: "Do you have automated backups tested monthly for restoration?",
    helpText: "Ransomware can only hurt you if your backups don't work.",
    freeFixLink: "https://www.cisa.gov/stopransomware/how-can-i-protect-against-ransomware",
    freeFixText: "CISA Ransomware Guide"
  },
  {
    id: 14,
    question: "Are all remote access connections secured with VPN?",
    helpText: "Unsecured remote access is like leaving your front door open.",
    freeFixLink: "https://www.cloudflare.com/learning/access-management/what-is-ztna/",
    freeFixText: "Learn About ZTNA"
  },
  {
    id: 15,
    question: "Do you have real-time monitoring of login attempts and failures?",
    helpText: "Brute force attacks happen 24/7 - are you watching?",
    freeFixLink: "https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/",
    freeFixText: "Azure AD Monitoring"
  },
  {
    id: 16,
    question: "Are third-party vendor security assessments conducted annually?",
    helpText: "Your security is only as strong as your weakest vendor.",
    freeFixLink: "https://www.sans.org/white-papers/1473/",
    freeFixText: "SANS Vendor Assessment"
  },
  {
    id: 17,
    question: "Do you have data loss prevention (DLP) policies in place?",
    helpText: "Data exfiltration often goes unnoticed for months.",
    freeFixLink: "https://www.microsoft.com/en-us/security/business/information-protection/data-loss-prevention",
    freeFixText: "Microsoft DLP Guide"
  },
  {
    id: 18,
    question: "Are security logs centralized and monitored 24/7?",
    helpText: "If you're not watching your logs, attackers are.",
    freeFixLink: "https://www.elastic.co/security",
    freeFixText: "Elastic Security Free"
  },
  {
    id: 19,
    question: "Do you conduct penetration testing at least annually?",
    helpText: "You can't fix vulnerabilities you don't know exist.",
    freeFixLink: "https://owasp.org/www-project-web-security-testing-guide/",
    freeFixText: "OWASP Testing Guide"
  },
  {
    id: 20,
    question: "Have you verified your cyber insurance covers dark web incidents?",
    helpText: "Many policies exclude certain types of cyber incidents.",
    freeFixLink: "https://www.cisa.gov/sites/default/files/publications/cyber_insurance_best_practices.pdf",
    freeFixText: "CISA Insurance Guide"
  }
];

export default function DarkWebTest() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getScore = () => {
    const yesAnswers = Object.values(answers).filter(Boolean).length;
    return Math.round((yesAnswers / 20) * 100);
  };

  const getScoreColor = () => {
    const score = getScore();
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreMessage = () => {
    const score = getScore();
    if (score >= 80) return "Excellent! Your dark web exposure risk is low.";
    if (score >= 60) return "Good start, but there are critical gaps to address.";
    return "URGENT: Your company data is likely already compromised.";
  };

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / 20) * 100;

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleBookDemo = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Dark Web Security Assessment - Is Your Company Data For Sale? | xonPlus</title>
        <meta name="description" content="Take our 20-question dark web security test to discover if your company data is already compromised and for sale on dark web marketplaces." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Dark Web Exposure Assessment
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Is Your Company Data Available on 
              <span className="text-red-400"> Dark Web</span> for Sale?
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              A simple 20-question assessment you can finish over coffee. Each "no" answer reveals a security gap that puts your data at risk.
            </p>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Progress</span>
                <span>{answeredQuestions}/20 questions</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          </motion.div>

          {!showResults ? (
            /* Questions Section */
            <div className="space-y-6">
              {questions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between text-white">
                        <span className="text-lg">{q.id}. {q.question}</span>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant={answers[q.id] === true ? "default" : "outline"}
                            onClick={() => handleAnswer(q.id, true)}
                            className={answers[q.id] === true ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Yes
                          </Button>
                          <Button
                            size="sm"
                            variant={answers[q.id] === false ? "default" : "outline"}
                            onClick={() => handleAnswer(q.id, false)}
                            className={answers[q.id] === false ? "bg-red-600 hover:bg-red-700" : ""}
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            No
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-3">{q.helpText}</p>
                      {answers[q.id] === false && q.freeFixLink && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                        >
                          <p className="text-blue-300 text-sm mb-2">
                            <strong>Free Fix Available:</strong>
                          </p>
                          <a
                            href={q.freeFixLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {q.freeFixText}
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Show Results Button */}
              {answeredQuestions === 20 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center pt-8"
                >
                  <Button
                    onClick={handleShowResults}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-xl"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Show My Security Score
                  </Button>
                </motion.div>
              )}
            </div>
          ) : (
            /* Results Section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-8">
                <div className="mb-8">
                  <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                    {getScore()}%
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Your Dark Web Exposure Score
                  </h2>
                  <p className={`text-xl ${getScoreColor()}`}>
                    {getScoreMessage()}
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    What This Means for Your Business
                  </h3>
                  <div className="text-left space-y-3 text-slate-300">
                    <p>• <strong className="text-red-400">{20 - Object.values(answers).filter(Boolean).length} critical vulnerabilities</strong> detected</p>
                    <p>• Your data may already be compromised and for sale</p>
                    <p>• Each gap multiplies your risk of a costly breach</p>
                    <p>• Average breach cost: <strong className="text-yellow-400">$4.45 million</strong></p>
                  </div>
                </div>

                {/* Enhanced CTA Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-red-600/30 via-red-500/20 to-orange-500/30 border-2 border-red-500/50 rounded-2xl p-8 mb-8 shadow-2xl">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-red-500/20 p-4 rounded-full border border-red-500/50">
                        <AlertTriangle className="w-8 h-8 text-red-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                      Your Company is Under <span className="text-red-400">ACTIVE THREAT</span>
                    </h3>
                    
                    <div className="bg-black/30 rounded-xl p-6 mb-6 border border-red-500/30">
                      <p className="text-lg text-red-200 mb-4 font-semibold">
                        ⚠️ CRITICAL SECURITY GAPS DETECTED
                      </p>
                      <div className="text-slate-200 space-y-2 text-left">
                        <p>• Cybercriminals are scanning for companies with your exact vulnerabilities</p>
                        <p>• Your employee credentials may already be circulating on dark web forums</p>
                        <p>• <strong className="text-red-400">Every day you wait increases your exposure risk</strong></p>
                        <p>• Companies with similar gaps suffer breaches within 6-12 months</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-600/20 rounded-xl p-6 mb-8 border border-blue-500/30">
                      <h4 className="text-xl font-bold text-blue-200 mb-3">
                        xonEnterprise+ Protection Includes:
                      </h4>
                      <div className="text-slate-200 space-y-2 text-left">
                        <p>✅ Real-time monitoring of 847+ dark web marketplaces</p>
                        <p>✅ Instant alerts when your data appears for sale</p>
                        <p>✅ Employee credential breach notifications</p>
                        <p>✅ 24/7 threat intelligence updates</p>
                        <p>✅ Emergency incident response support</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button
                        onClick={handleBookDemo}
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-xl font-black rounded-xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-red-500/50"
                      >
                        <Shield className="w-6 h-6 mr-3" />
                        EMERGENCY SECURITY CONSULTATION - BOOK NOW
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </Button>
                      
                      <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                        <p className="text-green-200 text-sm font-semibold mb-1">
                          🚀 IMMEDIATE ACTION GUARANTEE
                        </p>
                        <p className="text-slate-300 text-sm">
                          Free 30-minute emergency consultation • Available within 24 hours • Zero sales pressure • Actionable security roadmap provided
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 text-sm">
                  <p>Trusted by 500+ enterprises worldwide • SOC 2 Type II Certified • 99.9% Uptime SLA</p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
