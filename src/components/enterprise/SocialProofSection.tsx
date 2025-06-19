
import React from "react";

export function SocialProofSection() {
  return (
    <div className="w-full py-8 bg-slate-950">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Trusted by Security Teams Across the Globe
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">10B+</div>
                <div className="text-slate-300 text-sm">Breach Records Indexed</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">&lt;15 min</div>
                <div className="text-slate-300 text-sm">Credential Detection Time</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-slate-300 text-sm">Privacy Safe (No Passwords Stored)</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">Up to 50</div>
                <div className="text-slate-300 text-sm">Domains Monitored per Account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
