
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Mail, Calendar, Database, CircleIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type BreachDetailsType = {
  domain: string;
  breach_pastes: number;
  breach_emails: number;
  breach_total: number;
  breach_count: number;
  breach_last_seen: string;
};

type DomainBreachesType = {
  sendDomains: {
    breaches_details: BreachDetailsType[];
  };
  SearchStatus: string;
};

type DomainBreachResultsProps = {
  data: DomainBreachesType;
  domain: string;
};

export function DomainBreachResults({ data, domain }: DomainBreachResultsProps) {
  const breachDetails = data.sendDomains.breaches_details[0];
  
  // Calculate risk level based on breach counts and emails
  const calculateRiskLevel = (details: BreachDetailsType) => {
    if (!details) return { level: "Low", score: 20, color: "text-green-400" };
    
    const emailsWeight = details.breach_emails * 2;
    const breachesWeight = details.breach_count * 5;
    const totalWeight = details.breach_total;
    
    let score = Math.min(((emailsWeight + breachesWeight + totalWeight) / 100) * 100, 100);
    score = Math.max(score, 15); // Minimum risk score of 15
    
    if (score < 30) return { level: "Low", score, color: "text-green-400" };
    if (score < 60) return { level: "Moderate", score, color: "text-yellow-400" };
    if (score < 80) return { level: "High", score, color: "text-orange-500" };
    return { level: "Critical", score, color: "text-red-500" };
  };
  
  const risk = calculateRiskLevel(breachDetails);
  
  const formatDate = (dateStr: string) => {
    return dateStr || "N/A";
  };

  return (
    <>
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white mb-2 md:mb-0">
            Results for <span className="text-blue-400">{domain}</span>
          </h2>
          <div className="bg-slate-800 rounded-lg px-3 py-1 text-sm flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-blue-400" />
            <span className="text-slate-300">Last seen: {formatDate(breachDetails?.breach_last_seen || "N/A")}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className={`text-lg font-semibold ${risk.color}`}>{risk.level} Risk</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleIcon className="h-4 w-4 ml-1 text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs">
                      Risk score is based on number of breached emails, breach incidents, and total exposed records.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className={`text-sm font-bold ${risk.color}`}>
              {Math.round(risk.score)}%
            </span>
          </div>
          <Progress 
            value={risk.score} 
            className="h-2 bg-slate-800"
            indicatorClassName={
              risk.level === "Low" ? "bg-green-500" :
              risk.level === "Moderate" ? "bg-yellow-500" :
              risk.level === "High" ? "bg-orange-500" : "bg-red-500"
            }
          />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Breached Emails</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-2xl font-bold text-white">{breachDetails?.breach_emails || 0}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Email addresses from this domain found in breach data
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Breach Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold text-white">{breachDetails?.breach_count || 0}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Number of separate breach incidents affecting this domain
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Database className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-2xl font-bold text-white">{breachDetails?.breach_total || 0}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Total credentials exposed in breach datasets
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 text-sm text-slate-300">
        <h3 className="font-semibold mb-2 text-blue-300">What does this mean?</h3>
        <p>
          {breachDetails?.breach_emails ? 
            `We've found ${breachDetails.breach_emails} email addresses from ${domain} in our database of breached credentials. These accounts may have been compromised in data breaches, potentially exposing passwords and sensitive data.` :
            `We haven't found any email addresses from ${domain} in our database of breached credentials.`
          }
        </p>
        <p className="mt-2">
          {risk.level !== "Low" ? 
            "We recommend implementing a breach monitoring solution to protect your organization and employees from credential-based attacks." :
            "Continue maintaining good security practices to keep your organization safe from credential-based attacks."
          }
        </p>
      </div>
    </>
  );
}
