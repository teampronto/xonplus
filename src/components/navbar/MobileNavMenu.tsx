
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Calendar } from "lucide-react";
import { menuItems } from './menuData';
import * as Icons from 'lucide-react';

interface MobileNavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  hiddenMenus: string[];
}

type LucideIconType = keyof typeof Icons;

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, setIsOpen, hiddenMenus }) => {
  // State to track which dropdown is expanded
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };
  
  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  // Map item titles to premium Lucide icons - STANDARDIZED ICONS
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
      'Dark Web Security Test': 'AlertTriangle',
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
      if (title === 'Dark Web Security Test') return "#EF4444"; // Red for security test
      return "#3f71f3"; // Default primary color
    };
    
    // Fix the TypeScript error by using proper typing
    const LucideIcon = Icons[iconName] as React.ElementType;
    return LucideIcon ? <LucideIcon className="h-4 w-4" style={{ color: getIconColor(title) }} /> : null;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="px-2 bg-black hover:bg-black/90 text-white"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        sideOffset={8} 
        className="w-[85vw] max-w-[280px] mt-2 bg-[#F1F0FB] border border-slate-300 shadow-lg z-50"
      >
        {/* Filter out hidden items for mobile menu as well */}
        {Object.entries(menuItems)
          .filter(([category]) => !hiddenMenus.includes(category))
          .map(([category, items]) => (
            <React.Fragment key={category}>
              {items && items.length > 0 ? (
                <div className="relative">
                  <button 
                    className="cursor-pointer w-full py-3 px-4 text-slate-800 hover:text-slate-900 flex justify-between items-center text-base font-medium"
                    onClick={() => toggleDropdown(category)}
                    aria-expanded={expandedCategory === category}
                    aria-label={`Toggle ${category} menu`}
                  >
                    <span>{category}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${expandedCategory === category ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {expandedCategory === category && (
                    <div className="bg-[#E9E8F3] pl-5 py-2">
                      {items.map((item) => (
                        <a 
                          key={item.title} 
                          href={item.href}
                          target={item.target}
                          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                          className="flex items-center py-2 px-3 text-sm text-slate-700 hover:text-slate-900"
                          aria-label={`Navigate to ${item.title}`}
                        >
                          {/* Replace image with icon */}
                          <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white/80 shadow-sm mr-2 flex-shrink-0">
                            {getIconForItem(item.title)}
                          </div>
                          <span className="truncate">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <DropdownMenuItem asChild className="focus:bg-slate-100">
                  <a 
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="cursor-pointer w-full py-3 px-4 text-slate-800 hover:text-slate-900 text-base font-medium"
                    aria-label={`Navigate to ${category} section`}
                  >
                    {category}
                  </a>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator className="my-1 bg-slate-200" />
            </React.Fragment>
          ))}
        {/* Fixed font sizes to match other menu items */}
        {!hiddenMenus.includes('Pricing') && (
          <DropdownMenuItem asChild className="focus:bg-slate-100">
            <a 
              href="/pricing" 
              className="w-full py-3 px-4 text-slate-800 hover:text-slate-900 text-base font-medium"
              aria-label="View pricing information"
            >
              Pricing
            </a>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator className="my-1 bg-slate-200" />
        <DropdownMenuItem asChild className="focus:bg-slate-100">
          <a 
            href="/about" 
            className="w-full py-3 px-4 text-slate-800 hover:text-slate-900 text-base font-medium"
            aria-label="Learn more about us"
          >
            About
          </a>
        </DropdownMenuItem>
        
        {/* Add Book Demo button to mobile nav menu */}
        <DropdownMenuSeparator className="my-1 bg-slate-200" />
        <div className="p-3">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 flex items-center justify-center"
            onClick={handleDemoRequest}
            aria-label="Schedule a demo call"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Demo
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
