
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { FileJson, FileText, FileSpreadsheet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { CodeDisplay } from "./code-display/CodeDisplay";
import { DataFormatFeature } from "./data-format/DataFormatFeature";
import { 
  jsonSample, jsonSampleMobile, 
  csvSample, csvSampleMobile, 
  stixSample, stixSampleMobile 
} from "./code-display/codeExamples";

export function ProductPreviewSection() {
  const isMobile = useIsMobile();
  
  const [copyState, setCopyState] = React.useState<{
    [key: string]: "idle" | "copied";
  }>({
    json: "idle",
    csv: "idle",
    stix: "idle",
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyState({ ...copyState, [key]: "copied" });
      setTimeout(() => {
        setCopyState({ ...copyState, [key]: "idle" });
      }, 2000);
    });
  };

  const dataFormats = [
    {
      icon: FileJson,
      title: "Machine-Readable",
      description: "Structured data formats for automated processing and integration",
      iconBgColor: "bg-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: FileSpreadsheet,
      title: "Analysis-Ready",
      description: "Pre-formatted reports for immediate analysis by security teams",
      iconBgColor: "bg-amber-500/20",
      iconColor: "text-amber-400"
    },
    {
      icon: FileText,
      title: "Standards-Compliant",
      description: "STIX/TAXII compatible intelligence for seamless integration",
      iconBgColor: "bg-rose-500/20",
      iconColor: "text-rose-400"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Product Preview"
          subtitle="Breach Intelligence Delivered in the Format You Work With"
          variant="primary"
        />

        <div className="mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden shadow-lg">
              <Tabs defaultValue="json" className="w-full">
                <div className="bg-slate-800 border-b border-slate-700/50 p-4">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="json" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                      <FileJson className="h-3 w-3 md:h-4 md:w-4" /> JSON{isMobile ? "" : " Feed"}
                    </TabsTrigger>
                    <TabsTrigger value="csv" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                      <FileSpreadsheet className="h-3 w-3 md:h-4 md:w-4" /> CSV{isMobile ? "" : " Report"}
                    </TabsTrigger>
                    <TabsTrigger value="stix" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                      <FileText className="h-3 w-3 md:h-4 md:w-4" /> STIX{isMobile ? "" : " Format"}
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-4 md:p-6">
                  {/* JSON Tab */}
                  <TabsContent value="json" className="mt-0">
                    <CodeDisplay
                      title="Breach Intelligence JSON Feed"
                      code={isMobile ? jsonSampleMobile : jsonSample}
                      copyKey="json"
                      description="Real-time JSON feeds for SIEM or data lake ingestion"
                      copyState={copyState}
                      onCopy={handleCopy}
                    />
                  </TabsContent>

                  {/* CSV Tab */}
                  <TabsContent value="csv" className="mt-0">
                    <CodeDisplay
                      title="Breach Summary CSV Report"
                      code={isMobile ? csvSampleMobile : csvSample}
                      copyKey="csv"
                      description="Formatted CSV reports for analysis in spreadsheets"
                      copyState={copyState}
                      onCopy={handleCopy}
                    />
                  </TabsContent>

                  {/* STIX Tab */}
                  <TabsContent value="stix" className="mt-0">
                    <CodeDisplay
                      title="STIX-Compatible Intelligence"
                      code={isMobile ? stixSampleMobile : stixSample}
                      copyKey="stix"
                      description="Structured Threat Information Expression (STIX) format"
                      copyState={copyState}
                      onCopy={handleCopy}
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              {dataFormats.map((format, index) => (
                <DataFormatFeature
                  key={index}
                  icon={format.icon}
                  title={format.title}
                  description={format.description}
                  iconBgColor={format.iconBgColor}
                  iconColor={format.iconColor}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
