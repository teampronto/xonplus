
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { AboutHero } from "./about/AboutHero";
import { AboutStory } from "./about/AboutStory";
import { AboutValues } from "./about/AboutValues";
import { AboutFounder } from "./about/AboutFounder";
import { AboutContact } from "./about/AboutContact";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      
      {/* Visual divider */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 h-12 md:h-16 flex items-center justify-center">
        <Separator className="w-3/4 md:w-1/2 bg-slate-700/30" />
      </div>
      
      <AboutStory />
      <AboutValues />
      <AboutFounder />
      <AboutContact />
    </div>
  );
}

const About = () => {
  return <AboutPage />;
};

export default About;
