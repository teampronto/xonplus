
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, ShieldCheck, AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { DomainBreachResults } from "@/components/exposure-check/DomainBreachResults";
import { ExposureCheckHero } from "@/components/exposure-check/ExposureCheckHero";
import { BreachDataType } from "@/types/breach";

// Domain validation regex
const domainRegex = /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|localhost)$/;

const ExposureCheck = () => {
  const [domain, setDomain] = useState<string>("");
  const [domainToCheck, setDomainToCheck] = useState<string>("");
  
  const fetchDomainBreaches = async (domain: string) => {
    if (!domain) return null;
    
    try {
      const response = await fetch(`https://api.xposedornot.com/v1/domain-breach-summary?d=${domain}`);
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      return response.json();
    } catch (error) {
      console.error("Error fetching breach data:", error);
      throw error;
    }
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['domainBreaches', domainToCheck],
    queryFn: () => fetchDomainBreaches(domainToCheck),
    enabled: !!domainToCheck,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!domain.trim()) {
      toast.error("Please enter a domain name");
      return;
    }
    
    if (!domainRegex.test(domain)) {
      toast.error("Please enter a valid domain name");
      return;
    }
    
    setDomainToCheck(domain);
  };

  const handleReset = () => {
    setDomain("");
    setDomainToCheck("");
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <ExposureCheckHero />
      
      <div className="container mx-auto px-4 py-9">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-slate-900 border-slate-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Check Your Domain For Data Breaches
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Enter your company domain to discover exposed credentials, breaches, and risk level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <Input
                        type="text"
                        placeholder="Enter domain (e.g., company.com)"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="flex-1 bg-slate-800 border-slate-700 text-white"
                      />
                      <Button 
                        type="submit" 
                        className="relative bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 rounded-xl group overflow-hidden"
                        disabled={isLoading}
                      >
                        {isLoading ? "Checking..." : "Check Exposure"}
                        {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">We don't store your domain information or search queries</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {isLoading && (
            <div className="mt-8 flex justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <Database className="h-12 w-12 text-blue-500 mb-2" />
                <p className="text-slate-300">Scanning for breaches...</p>
              </div>
            </div>
          )}

          {isError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Alert variant="destructive" className="bg-red-900/50 border-red-800">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  We encountered an error while checking this domain. Please try again later.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {data && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              {data.SearchStatus === "Success" ? (
                <>
                  <DomainBreachResults 
                    data={data} 
                    domain={domainToCheck} 
                  />
                  
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleReset}
                      variant="outline" 
                      className="border-blue-600/30 text-blue-400 hover:bg-blue-900/20"
                    >
                      Check Another Domain
                    </Button>
                  </div>
                </>
              ) : (
                <Alert className="bg-slate-800 border-slate-700">
                  <Info className="h-5 w-5" />
                  <AlertTitle>No results</AlertTitle>
                  <AlertDescription>
                    We couldn't find any breach data for the domain: {domainToCheck}
                  </AlertDescription>
                </Alert>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExposureCheck;
