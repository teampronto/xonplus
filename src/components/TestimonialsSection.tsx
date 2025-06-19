
import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Marquee } from "@/components/ui/marquee";

export function TestimonialsSection() {
  const testimonials = [
    {
      author: {
        name: "Sundar Kumar",
        handle: "Corent",
        avatar: "/lovable-uploads/735815aa-e8b8-427c-aa82-06995eae67a0.png",
      },
      text: "Xposedornot is a useful tool for data breach alerting system. Every organization requires this tool to receive timely alerts of their exposed breaches. Its user-friendly design and seamless integration make it a valuable asset for proactive data security.",
    },
    {
      author: {
        name: "Miguel Mendes",
        handle: "Bluecom",
        avatar: "/lovable-uploads/65620b57-0b1b-45d1-9a04-bd768aa9145f.png",
      },
      text: "Indispensable to monitor the exposure of your personal data. What I like most about ExposedOrNot is its real-time dashboard alerts, as well as integration with Slack and Teams, are very practical features to be informed immediately in the event of a compromise.",
    },
    {
      author: {
        name: "Bertold Kolics",
        handle: "Verosint",
        avatar: "/lovable-uploads/8a892a9f-2a2e-4dd7-ac70-b47e035ab386.png",
      },
      text: "I have been working with XposedOrNot from the early days. My experience could not have been better. The service scales well, performs well under high load and it has a large set of breach data dating back to several years.",
    },
    {
      author: {
        name: "Senthil K",
        handle: "Invicara",
        avatar: "/lovable-uploads/ef1bb3d4-54d1-4ea2-a84c-52b8abcb6d70.png",
      },
      text: "I love how XposedOrNot makes protecting our data so simple and effective from ATO. The alerts are timely, and the CXO dashboard gives a clear picture of breach trends and risks. It's more than just a tool, it's like having a personal assistant for your security, helping you understand and manage threats before they become serious issues.",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full px-4 flex flex-col items-center gap-2 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <SectionHeader 
              title="What our users are saying"
              subtitle="Discover why organizations trust us with their security needs"
              variant="primary"
            />
          </motion.div>

          <Marquee pauseOnHover className="[--duration:40s]">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={i}
                {...testimonial}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
