import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  target?: string;
}

export function ToolCard({ title, description, icon: Icon, href, target }: ToolCardProps) {
  const colors = {
    "Credential": "text-blue-400 group-hover:text-blue-200",
    "Breach": "text-blue-400 group-hover:text-blue-200",
    "Security": "text-blue-400 group-hover:text-blue-200",
    "Risk": "text-purple-400 group-hover:text-purple-200",
    "Compliance": "text-purple-400 group-hover:text-purple-200",
    "Business": "text-purple-400 group-hover:text-purple-200",
    "API": "text-teal-400 group-hover:text-teal-200",
    "Authentication": "text-teal-400 group-hover:text-teal-200",
    "Webhook": "text-teal-400 group-hover:text-teal-200"
  };

  const getIconColor = () => {
    for (const [key, value] of Object.entries(colors)) {
      if (title.includes(key)) {
        return value;
      }
    }
    return "text-blue-400 group-hover:text-blue-200";
  }

  return (
    <a 
      href={href}
      target={target}
      className="block rounded-2xl p-6 transition-all duration-300 border border-white/10 bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl hover:border-white/30 hover:from-slate-900/90 hover:to-blue-900/60 hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-blue-900/20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="space-y-4 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/30 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:border-slate-700">
            <Icon className={`w-5 h-5 ${getIconColor()} transition-colors duration-300`} />
          </div>
          <h3 className="text-base font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </a>
  );
}
