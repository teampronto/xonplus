
import React from 'react';
import { MenuItem } from './menuData';
import * as Icons from 'lucide-react';

interface MenuDropdownContentProps {
  items: MenuItem[];
}

type LucideIconType = keyof typeof Icons;

export const MenuDropdownContent: React.FC<MenuDropdownContentProps> = ({ items }) => {
  // Map categories to premium Lucide icons
  const getIconForItem = (title: string): React.ReactNode => {
    const iconMap: Record<string, LucideIconType> = {
      // Products - STANDARDIZED ICONS
      'xonEnterprise+': 'Shield',
      'xonConsumer+': 'User',
      'xonAPI+': 'Code',
      'xonThreatIntel+': 'SearchCode',
      
      // Solutions
      'Account Takeover Prevention': 'Lock',
      'Employee Credential Monitoring': 'Users',
      'Customer Account Protection': 'ShieldCheck',
      'Dark Web Monitoring': 'Eye',
      'Compliance & Risk Management': 'FileCheck',
      'For MSSPs / Security Partners': 'Building',
      'For Developers / API Integration': 'Code2',
      
      // Free Tools
      'Check for Exposure': 'KeyRound',
      'Privacy Shield': 'Mail',
      'Breach Insights': 'FileSearch',
      'Community API': 'RefreshCcw',
      'Data Breach Patterns': 'TrendingUp',
      'Exposed Data Breaches': 'AlertCircle',
      
      // Resources
      'Blog': 'FileText',
      'Case Studies': 'ClipboardList',
      'FAQs': 'HelpCircle',
      'Latest News': 'Newspaper',
      'API Documentation': 'BookOpen',
    };

    // Default icon if no match is found
    const iconName = iconMap[title] || 'Star';
    
    // Get color based on product category
    const getIconColor = (title: string) => {
      // Match product prefixes to their respective colors
      if (title.startsWith('xonEnterprise')) return "#3f71f3"; // Enterprise blue
      if (title.startsWith('xonConsumer')) return "#8B5CF6";  // Consumer purple
      if (title.startsWith('xonAPI')) return "#0EA5E9";      // API blue
      if (title.startsWith('xonThreatIntel')) return "#F97316"; // ThreatIntel orange
      return "#3f71f3"; // Default primary color
    };
    
    // Fix the TypeScript error by using proper typing
    const LucideIcon = Icons[iconName] as React.ElementType;
    return LucideIcon ? <LucideIcon className="h-6 w-6" style={{ color: getIconColor(title) }} /> : null;
  };

  return (
    <div className="w-[800px] p-6 bg-[#F1F0FB] rounded-xl shadow-lg grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.target}
          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
          className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-white/80 hover:shadow-md group"
        >
          <div className="flex-shrink-0 mr-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-white to-[#F5F4FF] shadow-sm border border-gray-100">
            {getIconForItem(item.title)}
          </div>
          <div className="transform transition-all duration-300 group-hover:translate-x-1">
            <h3 className="text-xs font-semibold text-gray-800 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-gray-500 group-hover:text-gray-600">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
