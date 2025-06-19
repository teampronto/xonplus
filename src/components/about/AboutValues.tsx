
import React from 'react';
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Users, Lightbulb } from "lucide-react";

export function AboutValues() {
  return (
    <div className="bg-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Security Should Be Simple, Accessible, and Honest" 
            variant="secondary"
          />
          
          <div className="grid md:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 md:p-8 border border-slate-700/50">
              <div className="mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                Security for Everyone
              </h3>
              <p className="text-sm md:text-base text-slate-300">
                We believe strong breach protection should be available to every business, not just Fortune 500s.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 md:p-8 border border-slate-700/50">
              <div className="mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                Transparent by Design
              </h3>
              <p className="text-sm md:text-base text-slate-300">
                No hidden fees, no over-engineered dashboards. What you see is what you get.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 md:p-8 border border-slate-700/50">
              <div className="mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900/80 shadow-md border border-slate-700/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                Built from the Community
              </h3>
              <p className="text-sm md:text-base text-slate-300">
                Our free tools are still live and evolving. We're proud to give back while we scale forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
