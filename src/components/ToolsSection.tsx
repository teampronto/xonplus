
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Shield, UserRoundCog, Code } from "lucide-react";
import { ToolCard } from "@/components/ui/tool-card";
import { SectionHeader } from "@/components/ui/section-header";

const roleTools = {
  security: [
    {
      title: "Credential Exposure Dashboard",
      description: "Monitor and track exposed credentials across your organization in real-time.",
      icon: Shield,
      href: "/exposure-check"
    },
    {
      title: "Breach Response Automation",
      description: "Automatically initiate remediation workflows when breaches are detected.",
      icon: Shield,
      href: "/products/enterprise"
    },
    {
      title: "Security Posture Assessments",
      description: "Evaluate your organization's vulnerability to credential-based attacks.",
      icon: Shield,
      href: "https://xposedornot.com/breaches",
      target: "_blank"
    }
  ],
  executive: [
    {
      title: "Risk Intelligence Reports",
      description: "Get executive-level insights into your organization's security posture.",
      icon: UserRoundCog,
      href: "https://xposedornot.com/breaches",
      target: "_blank"
    },
    {
      title: "Compliance Dashboard",
      description: "Ensure credential security meets regulatory requirements.",
      icon: UserRoundCog,
      href: "/products/enterprise"
    },
    {
      title: "Business Impact Analysis",
      description: "Quantify the potential cost of credential breaches to your organization.",
      icon: UserRoundCog,
      href: "https://xposedornot.com/breaches-visualisations",
      target: "_blank"
    }
  ],
  developer: [
    {
      title: "API Integration Toolkit",
      description: "Easily integrate XON Plus breach intelligence into your applications.",
      icon: Code,
      href: "https://xposedornot.com/api_doc",
      target: "_blank"
    },
    {
      title: "Authentication Security SDK",
      description: "Add credential exposure checks to your authentication flows.",
      icon: Code,
      href: "/products/api"
    },
    {
      title: "Webhook Monitoring System",
      description: "Receive real-time notifications when new exposures are detected.",
      icon: Code,
      href: "https://xposedornot.com/api_doc",
      target: "_blank"
    }
  ]
};

export function ToolsSection() {
  return (
    <section id="tools" className="py-16 bg-slate-950 mb-6">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <SectionHeader 
            title="Tools designed for your role"
            subtitle="Actionable tools that provide real value, not just information. Select your role to discover the tools built for you."
            variant="primary"
          />

          <Tabs defaultValue="security" className="max-w-6xl mx-auto">
            <TabsList className="relative z-20 flex justify-center space-x-4 max-w-xl mx-auto mb-16 bg-transparent">
              <TabsTrigger 
                value="security" 
                className="
                  flex items-center gap-2 py-3 px-6 text-base 
                  rounded-xl transition-all duration-300
                  text-slate-400 hover:text-blue-300
                  data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-800/40 data-[state=active]:to-blue-700/40 
                  data-[state=active]:text-blue-200
                  data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-blue-700/40
                "
              >
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger 
                value="executive" 
                className="
                  flex items-center gap-2 py-3 px-6 text-base 
                  rounded-xl transition-all duration-300
                  text-slate-400 hover:text-purple-300
                  data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-800/40 data-[state=active]:to-purple-700/40 
                  data-[state=active]:text-purple-200
                  data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-purple-700/40
                "
              >
                <UserRoundCog className="h-4 w-4" />
                <span>CXO</span>
              </TabsTrigger>
              <TabsTrigger 
                value="developer" 
                className="
                  flex items-center gap-2 py-3 px-6 text-base 
                  rounded-xl transition-all duration-300
                  text-slate-400 hover:text-teal-300
                  data-[state=active]:bg-gradient-to-br data-[state=active]:from-teal-800/40 data-[state=active]:to-teal-700/40 
                  data-[state=active]:text-teal-200
                  data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-teal-700/40
                "
              >
                <Code className="h-4 w-4" />
                <span>Developer</span>
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(roleTools).map(([role, tools]) => (
              <TabsContent key={role} value={role} className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {tools.map((tool, index) => (
                    <ToolCard
                      key={index}
                      icon={tool.icon}
                      title={tool.title}
                      description={tool.description}
                      href={tool.href}
                      target={tool.target}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
