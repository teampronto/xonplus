
import React from "react";

export function SocialProofSection() {
  return (
    <div className="w-full py-8 bg-slate-950">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Trusted by Security-First Brands That Put Their Users First
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              <div className="p-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10B+</div>
                <div className="text-slate-300 text-sm">Breach Records Monitored Continuously</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;15 min</div>
                <div className="text-slate-300 text-sm">Real-Time Exposure Detection</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Zero</div>
                <div className="text-slate-300 text-sm">Password Storage or PII Retention</div>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5M+</div>
                <div className="text-slate-300 text-sm">User Accounts Scale with Ease</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
