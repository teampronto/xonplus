import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { Check, CopyIcon, Terminal, FileJson, Shield, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProductPreviewSection() {
  const [copyState, setCopyState] = React.useState<{
    [key: string]: "idle" | "copied";
  }>({
    curl: "idle",
    python: "idle",
    json: "idle",
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyState({ ...copyState, [key]: "copied" });
      setTimeout(() => {
        setCopyState({ ...copyState, [key]: "idle" });
      }, 2000);
    });
  };

  const curlCommand = `curl -X POST https://api.xonplus.com/v1/breaches/check \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "include_details": true}'`;

  const pythonCode = `import requests

url = "https://api.xonplus.com/v1/breaches/check"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "email": "user@example.com",
    "include_details": True
}

response = requests.post(url, headers=headers, json=payload)
result = response.json()
print(result)`;

  const jsonResponse = `{
  "status": "found",
  "email": "user@example.com",
  "breaches": [
    {
      "breach_name": "ExampleService",
      "date": "2023-06-15",
      "fields_exposed": ["email", "username", "password_hash"],
      "severity": "high",
      "details": "Credentials leaked in a database dump"
    },
    {
      "breach_name": "AnotherVendor",
      "date": "2022-09-03", 
      "fields_exposed": ["email", "ip_address"],
      "severity": "medium",
      "details": "Email exposed in marketing database leak"
    }
  ],
  "count": 2,
  "first_breach": "2022-09-03",
  "risk_score": 75
}`;

  return (
    <section className="py-16 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/0"></div>
      
      {/* API Dashboard Preview Image */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <SectionHeader
          title="Product Preview"
          subtitle="Monitoring Your API Usage & Management"
          variant="primary"
        />

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-5xl mx-auto group">
              {/* Glass dashboard container with rounded edges */}
              <div className={cn(
                "glass-card-dark rounded-2xl overflow-hidden shadow-2xl border border-purple-700/30",
                "backdrop-blur-xl bg-slate-800/30 transition-all duration-300",
                "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:border-purple-500/50 group-hover:scale-[1.02]" 
              )}>
                <div className="p-4">
                  <div className="w-full overflow-hidden rounded-xl">
                    <AspectRatio ratio={16/9} className="bg-slate-900">
                      <img 
                        src="/lovable-uploads/6da091f5-5714-4615-9bbb-038d48849a15.png" 
                        alt="API Usage Dashboard" 
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>

              {/* Decorative elements for glass design with enhanced glow on hover */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/10 rounded-full filter blur-3xl group-hover:bg-violet-500/20 transition-all duration-500"></div>
              
              {/* Additional subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-purple-500/10 rounded-2xl filter blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden shadow-lg">
              {/* Documentation Header */}
              <div className="bg-slate-800 border-b border-slate-700/50 p-4">
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">API Documentation</h3>
                </div>
              </div>

              {/* Documentation Content */}
              <div className="p-6">
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="request">Request Examples</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="widget">Implementation</TabsTrigger>
                  </TabsList>

                  {/* Request Examples Tab */}
                  <TabsContent value="request" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* cURL Example */}
                      <Card className="bg-slate-800/70 border-slate-700/50 shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-slate-800/90">
                          <div className="flex items-center space-x-2">
                            <Terminal className="h-4 w-4 text-purple-400" />
                            <CardTitle className="text-sm font-medium text-slate-200">cURL Request</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-xs hover:bg-slate-700"
                            onClick={() => handleCopy(curlCommand, "curl")}
                          >
                            {copyState.curl === "idle" ? (
                              <CopyIcon className="h-3.5 w-3.5 mr-1 text-slate-400" />
                            ) : (
                              <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                            )}
                            {copyState.curl === "idle" ? "Copy" : "Copied!"}
                          </Button>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="p-3 bg-slate-900/80 rounded-md overflow-x-auto">
                            <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                              <code>{curlCommand}</code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Python Example */}
                      <Card className="bg-slate-800/70 border-slate-700/50 shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-slate-800/90">
                          <div className="flex items-center space-x-2">
                            <Terminal className="h-4 w-4 text-blue-400" />
                            <CardTitle className="text-sm font-medium text-slate-200">Python Request</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-xs hover:bg-slate-700"
                            onClick={() => handleCopy(pythonCode, "python")}
                          >
                            {copyState.python === "idle" ? (
                              <CopyIcon className="h-3.5 w-3.5 mr-1 text-slate-400" />
                            ) : (
                              <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                            )}
                            {copyState.python === "idle" ? "Copy" : "Copied!"}
                          </Button>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="p-3 bg-slate-900/80 rounded-md overflow-x-auto">
                            <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                              <code>{pythonCode}</code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Response Tab */}
                  <TabsContent value="response">
                    <Card className="bg-slate-800/70 border-slate-700/50 shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-slate-800/90">
                        <div className="flex items-center space-x-2">
                          <FileJson className="h-4 w-4 text-emerald-400" />
                          <CardTitle className="text-sm font-medium text-slate-200">JSON Response</CardTitle>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs hover:bg-slate-700"
                          onClick={() => handleCopy(jsonResponse, "json")}
                        >
                          {copyState.json === "idle" ? (
                            <CopyIcon className="h-3.5 w-3.5 mr-1 text-slate-400" />
                          ) : (
                            <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                          )}
                          {copyState.json === "idle" ? "Copy" : "Copied!"}
                        </Button>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="p-3 bg-slate-900/80 rounded-md overflow-x-auto">
                          <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                            <code>{jsonResponse}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Widget Implementation Tab */}
                  <TabsContent value="widget">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="bg-slate-800/70 border-slate-700/50 shadow-md">
                        <CardHeader className="bg-slate-800/90">
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-purple-400" />
                            <CardTitle className="text-sm font-medium text-slate-200">Embedded Risk Widget</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                            <div className="flex items-start space-x-4">
                              <div className="bg-red-500/20 rounded-full p-3">
                                <Shield className="h-6 w-6 text-red-400" />
                              </div>
                              <div>
                                <div className="mb-3">
                                  <h4 className="text-lg font-medium text-white">High Risk Score: 75/100</h4>
                                  <p className="text-slate-400 text-sm">user@example.com</p>
                                </div>
                                <div className="space-y-3">
                                  <div>
                                    <div className="flex justify-between mb-1">
                                      <span className="text-xs text-slate-400">Risk Level</span>
                                      <span className="text-xs font-medium text-red-400">High</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Found in 2 breaches</span>
                                    <span className="text-slate-300">First breach: 2022-09-03</span>
                                  </div>
                                  <div className="pt-2">
                                    <Button size="sm" variant="outline" className="text-xs border-purple-700/50 text-purple-400 hover:bg-purple-900/20">
                                      View Full Report
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-xs text-slate-400 text-center">
                            Embed this widget in your application with just a few lines of code
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-800/70 border-slate-700/50 shadow-md">
                        <CardHeader className="bg-slate-800/90">
                          <div className="flex items-center space-x-2">
                            <Database className="h-4 w-4 text-blue-400" />
                            <CardTitle className="text-sm font-medium text-slate-200">Implementation Details</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="space-y-4">
                            <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800">
                              <h4 className="text-sm font-medium text-white mb-2">Client-side Integration</h4>
                              <p className="text-xs text-slate-300">Add our script to your website and use our JavaScript SDK to display risk scores with just a few lines of code.</p>
                            </div>
                            <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800">
                              <h4 className="text-sm font-medium text-white mb-2">Server-side Integration</h4>
                              <p className="text-xs text-slate-300">Use our API to check emails during registration, login, or transactions to prevent fraud and enhance security.</p>
                            </div>
                            <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800">
                              <h4 className="text-sm font-medium text-white mb-2">Webhook Notifications</h4>
                              <p className="text-xs text-slate-300">Receive real-time alerts when new breaches are discovered affecting your users or domain.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* API Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Real-time API
                </h3>
                <p className="text-slate-300">
                  Millisecond response times with 99.99% uptime SLA for mission-critical applications
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Comprehensive SDKs
                </h3>
                <p className="text-slate-300">
                  Libraries for JavaScript, Python, Ruby, Java, Go, and more with full documentation
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Flexible Integration
                </h3>
                <p className="text-slate-300">
                  Webhooks, callbacks, and batch processing for any use case or architecture
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
