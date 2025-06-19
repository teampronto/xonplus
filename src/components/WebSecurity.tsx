
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { WebSecurityHero } from "./web-security/WebSecurityHero";
import { WebSecurityInfrastructure } from "./web-security/WebSecurityInfrastructure";
import { WebSecurityNoServers } from "./web-security/WebSecurityNoServers";
import { WebSecurityDesign } from "./web-security/WebSecurityDesign";
import { WebSecurityMonitoring } from "./web-security/WebSecurityMonitoring";
import { WebSecurityReliable } from "./web-security/WebSecurityReliable";

export function WebSecurityPage() {
  return (
    <div className="min-h-screen">
      <WebSecurityHero />
      
      {/* Visual divider */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 h-12 md:h-16 flex items-center justify-center">
        <Separator className="w-3/4 md:w-1/2 bg-slate-700/30" />
      </div>
      
      <WebSecurityInfrastructure />
      <WebSecurityNoServers />
      <WebSecurityDesign />
      <WebSecurityMonitoring />
      <WebSecurityReliable />
    </div>
  );
}

const WebSecurity = () => {
  return <WebSecurityPage />;
};

export default WebSecurity;
