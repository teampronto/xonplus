
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const BlogSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="overflow-hidden relative border-0 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-xl z-0"></div>
      <div className="absolute inset-0 border border-slate-700/50 rounded-lg backdrop-blur-xl z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full filter blur-2xl -mr-8 -mt-8 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full filter blur-2xl -ml-10 -mb-10"></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute left-0 top-1/4 w-full h-[0.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute left-0 top-2/4 w-full h-[0.5px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          <div className="absolute left-0 top-3/4 w-full h-[0.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute left-1/4 top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute left-2/4 top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
      
      <CardContent className="p-6 relative z-20">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-600/30 to-indigo-600/30 w-14 h-14 rounded-xl mb-6 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Cybersecurity Intelligence
          </h3>
          <p className="text-sm text-blue-100/70 mb-6 text-center">
            Get exclusive breach alerts, security research and insider threat intelligence delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 text-white placeholder:text-blue-200/40"
              />
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-500/20"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Get Premium Insights'}
            </Button>
          </form>
          
          <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-center">
            <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
              <span className="text-blue-400 font-bold">2x/week</span>
              <span className="text-slate-400">Email frequency</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
              <span className="text-blue-400 font-bold">Instant</span>
              <span className="text-slate-400">Breach alerts</span>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
