
import React from "react";
import { Button } from "@/components/ui/button";

interface CodeDisplayProps {
  title: string;
  code: string;
  copyKey: string;
  description?: string;
  copyState: { [key: string]: "idle" | "copied" };
  onCopy: (text: string, key: string) => void;
}

export function CodeDisplay({ 
  title, 
  code, 
  copyKey, 
  description, 
  copyState, 
  onCopy 
}: CodeDisplayProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 md:mb-3">
        <h3 className="text-xs md:text-sm font-medium text-slate-200">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 md:h-8 text-xs hover:bg-slate-700 text-slate-300 hover:text-white"
          onClick={() => onCopy(code, copyKey)}
        >
          {copyState[copyKey] === "copied" ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div className="bg-slate-900/80 rounded-md p-3 md:p-4 overflow-x-auto border border-slate-800/50">
        <pre className="text-xs md:text-sm text-slate-300 whitespace-pre-wrap font-mono">
          {code}
        </pre>
      </div>
      {description && (
        <p className="text-xs text-slate-400 mt-2 md:mt-3">
          {description}
        </p>
      )}
    </div>
  );
}
