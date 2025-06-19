
import React from "react";
import { Shield, Lock, Bell, Search, Clock } from "lucide-react";

export function ConsumerBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Protect Your Personal Credentials",
      description: "Monitor and protect all your personal email addresses and associated accounts from compromises."
    },
    {
      icon: Lock,
      title: "Enhanced Privacy Protection",
      description: "Keep your sensitive information secure with our zero-knowledge password verification technology."
    },
    {
      icon: Bell,
      title: "Proactive Alerts",
      description: "Be the first to know when your data appears in new breaches with real-time notifications."
    },
    {
      icon: Search,
      title: "Dark Web Monitoring",
      description: "Our advanced technology continuously scans the dark web for your personal information."
    },
    {
      icon: Clock,
      title: "Historical Breach Analysis",
      description: "Get insights into past breaches that may have affected your accounts and take remedial action."
    }
  ];

  return (
    <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Individuals Choose xonPlus Consumer Plus
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive protection for your personal digital identity in an increasingly vulnerable online world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
