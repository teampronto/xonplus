
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { motion } from "framer-motion";

interface Logo {
  name: string
  logo: string
}

interface LogoCarouselProps {
  heading?: string
  logos?: Logo[]
}

export function LogoCarousel({
  heading = "Trusted by Security-Conscious Enterprises Worldwide",
  logos = []
}: LogoCarouselProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <GradientHeading 
            variant="primary" 
            size="md" // Changed from "lg" to "md" to reduce size
            className="mb-4"
          >
            {heading}
          </GradientHeading>
          <div className="w-20 h-1 bg-blue-500/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
              skipSnaps: false
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                stopOnInteraction: false,
                speed: 1
              })
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[...logos, ...logos].map((logo, index) => (
                <CarouselItem
                  key={`${logo.name}-${index}`}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center h-24 p-4"
                  >
                    <img
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="max-h-full w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
