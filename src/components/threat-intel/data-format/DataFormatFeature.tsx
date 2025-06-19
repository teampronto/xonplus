
import React from "react";
import { LucideIcon } from "lucide-react";

interface DataFormatFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

export function DataFormatFeature({ 
  icon: Icon, 
  title, 
  description, 
  iconBgColor, 
  iconColor 
}: DataFormatFeatureProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-700/30 h-full transition-all duration-300 hover:border-slate-600/50">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
        <div className={`${iconBgColor} p-1.5 md:p-2 rounded-lg`}>
          <Icon className={`h-4 w-4 md:h-5 md:w-5 ${iconColor}`} />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="text-xs md:text-sm text-slate-300">
        {description}
      </p>
    </div>
  );
}
