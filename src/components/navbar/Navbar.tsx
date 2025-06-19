
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MobileNavMenu } from './MobileNavMenu';
import { DesktopNavMenu } from './DesktopNavMenu';
import { useIsMobile } from '@/hooks/use-mobile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Update to only hide Solutions since we want to show Pricing now
  const [hiddenMenus, setHiddenMenus] = useState<string[]>(['Solutions']);
  const { isMobile, isTablet, isDesktop } = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to reveal hidden menus when needed
  const revealMenus = (menus: string[]) => {
    setHiddenMenus(prevHidden => prevHidden.filter(menu => !menus.includes(menu)));
  };

  const handleDemoRequest = () => {
    window.open('https://calendly.com/xon-plus/30min?month=2025-05', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
      scrolled ? 'py-1 md:py-2' : 'py-1 md:py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className={`rounded-xl md:rounded-2xl bg-[#F1F0FB] shadow-lg px-3 sm:px-4 py-2 md:px-6 md:py-3`}>
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3b199a23-cea7-42f3-b657-15ad26464858.png" 
                alt="xonPlus Logo" 
                className="h-6 sm:h-7 md:h-8" 
              />
            </a>

            {/* Desktop navigation - only show on large screens (1024px+) */}
            {isDesktop && (
              <div className="flex flex-1 items-center">
                <DesktopNavMenu 
                  hiddenMenus={hiddenMenus} 
                  revealMenus={revealMenus}
                />
              </div>
            )}
            
            {/* Desktop CTA Button - only show on large screens (1024px+) */}
            {isDesktop && (
              <div>
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-5 py-2 text-sm font-medium transition-colors duration-300"
                  onClick={handleDemoRequest}
                >
                  Book Demo
                </Button>
              </div>
            )}

            {/* Mobile and Tablet view - show on screens smaller than 1024px */}
            {(isMobile || isTablet) && (
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Book Demo button - visible on all mobile and tablet screens */}
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-300"
                  onClick={handleDemoRequest}
                >
                  Book Demo
                </Button>
                
                {/* Mobile hamburger menu */}
                <MobileNavMenu 
                  isOpen={mobileMenuOpen} 
                  setIsOpen={setMobileMenuOpen}
                  hiddenMenus={hiddenMenus}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
