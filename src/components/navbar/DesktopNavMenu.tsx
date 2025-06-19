
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { menuItems } from './menuData';
import { MenuDropdownContent } from './MenuDropdownContent';

interface DesktopNavMenuProps {
  hiddenMenus: string[];
  revealMenus: (menus: string[]) => void;
}

export const DesktopNavMenu: React.FC<DesktopNavMenuProps> = ({ hiddenMenus, revealMenus }) => {
  // Get menu alignment based on its position
  const getMenuAlignment = (index: number, totalItems: number) => {
    // First item aligned left, last two items aligned right, others centered
    if (index === 0) return "start";
    if (index >= totalItems - 2) return "end";
    return "center";
  };
  
  // Calculate the number of visible menu items
  const visibleMenuItems = Object.keys(menuItems)
    .filter(category => !hiddenMenus.includes(category))
    .length;

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="flex space-x-2 lg:space-x-4 justify-center">
        {/* Filter out the hidden menu categories */}
        {Object.entries(menuItems)
          .filter(([category]) => !hiddenMenus.includes(category))
          .map(([category, items], index) => {
            const menuAlignment = getMenuAlignment(index, visibleMenuItems);
            const forceContentAlignment = index === 0 ? "left" : index === visibleMenuItems - 1 ? "right" : undefined;
            
            return (
              <NavigationMenuItem key={category}>
                <NavigationMenuTrigger 
                  className="text-sm font-medium text-gray-800"
                >
                  {category}
                </NavigationMenuTrigger>
                <NavigationMenuContent forceAlignment={forceContentAlignment}>
                  <MenuDropdownContent items={items} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}

        {/* Only show Pricing if not hidden */}
        {!hiddenMenus.includes('Pricing') && (
          <NavigationMenuItem>
            <a 
              href="/pricing" 
              className="text-sm font-medium px-3 py-2 text-gray-800 rounded-md transition-colors inline-flex h-10 items-center justify-center hover:bg-primary hover:text-white"
            >
              Pricing
            </a>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <a 
            href="/about" 
            className="text-sm font-medium px-3 py-2 text-gray-800 rounded-md transition-colors inline-flex h-10 items-center justify-center hover:bg-primary hover:text-white"
          >
            About
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
