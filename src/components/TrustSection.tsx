
import React from 'react';
import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "@/components/ui/section-header";

const TrustSection = () => {
  // Updated logos array with the new images
  const companyLogos = [
    {
      id: 1,
      name: "KRISH",
      src: "/lovable-uploads/9983c092-78d8-4cf3-a96e-2da9a3ed3f33.png",
      alt: "KRISH Logo"
    }, {
      id: 2,
      name: "Corent",
      src: "/lovable-uploads/6be721d9-078a-4032-a029-ca865fb9e2a3.png",
      alt: "Corent Logo"
    }, {
      id: 3,
      name: "Invica",
      src: "/lovable-uploads/635f8cc9-6b48-4b12-8441-f5d0858007cd.png",
      alt: "Invica Logo"
    }, {
      id: 4,
      name: "DT",
      src: "/lovable-uploads/b0283b70-b011-483e-87e9-254a874645cb.png",
      alt: "DT Logo"
    }, {
      id: 5,
      name: "IOPEX",
      src: "/lovable-uploads/ad0a6d91-b179-4a5a-83ce-845dd5a2ea37.png",
      alt: "IOPEX Logo"
    }, {
      id: 6,
      name: "Tecsynt",
      src: "/lovable-uploads/680ba2fd-e91d-4afd-8fc7-affd98e8c51e.png",
      alt: "Tecsynt Logo"
    }, {
      id: 7,
      name: "Qruize",
      src: "/lovable-uploads/0514d1c4-c088-46c3-928b-79e0454cdebd.png",
      alt: "Qruize Logo"
    }, {
      id: 8,
      name: "SecureShield",
      src: "/lovable-uploads/045fd4a4-9432-4d8c-99e0-584052167ddc.png",
      alt: "SecureShield Logo"
    }
  ];

  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Simplified background effects */}
        <div className="absolute inset-0 bg-grid-slate-700/[0.03] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-slate-800/20 to-slate-900/90"></div>
        
        <div className="relative z-10">
          <div className="pt-5">
            <SectionHeader 
              title="Used by Organizations Globally"
              variant="primary"
            />
          </div>

          <div className="mt-9 mb-0">
            <Marquee speed={30} pauseOnHover={true}> {/* Reduced speed for performance */}
              {companyLogos.map(logo => (
                <div key={logo.id} className="mx-8 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-4 h-20 w-40 flex items-center justify-center shadow-md">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-auto object-contain transition duration-300" 
                      loading="lazy"
                      decoding="async"
                      width="120"
                      height="48"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
