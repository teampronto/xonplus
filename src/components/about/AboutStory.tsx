
import React from 'react';
import { SectionHeader } from "@/components/ui/section-header";

export function AboutStory() {
  return (
    <div className="bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="From Open Tools to Enterprise-Grade Protection" 
            variant="primary"
          />
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 md:p-8 border border-slate-700/50 mb-8 md:mb-12">
            <p className="text-base md:text-lg text-slate-300 mb-4 md:mb-6">
              xonPlus was born from XposedOrNot, a free platform created to help people check if their data was exposed. 
              As demand from companies grew, the need for a dedicated product became clear.
            </p>
            <p className="text-base md:text-lg text-slate-300">
              Instead of adding paywalls to community tools, we built xonPlus, a dedicated product line focused on 
              speed, scale, and affordability, without compromising our roots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
