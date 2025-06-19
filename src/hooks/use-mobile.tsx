
import * as React from "react";

// Updated breakpoints to match Tailwind CSS standards
const MOBILE_BREAKPOINT = 768;   // md breakpoint
const TABLET_BREAKPOINT = 1024;  // lg breakpoint  
const DESKTOP_BREAKPOINT = 1280; // xl breakpoint

export function useIsMobile() {
  // Initially undefined to prevent hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined);
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined);
  
  React.useEffect(() => {
    // Set initial state
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width >= MOBILE_BREAKPOINT && width < DESKTOP_BREAKPOINT);
      setIsDesktop(width >= DESKTOP_BREAKPOINT);
    };
    
    checkViewport();
    
    // Handle resize events with debounce for better performance
    let resizeTimer: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkViewport, 100); // 100ms debounce
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  return {
    isMobile: isMobile === undefined ? false : isMobile,
    isTablet: isTablet === undefined ? false : isTablet,
    isDesktop: isDesktop === undefined ? false : isDesktop,
    // Add this property for backward compatibility
    value: isMobile === undefined ? false : isMobile
  };
}

// Also export the original hook name for backward compatibility
export function useMobileLayout(): boolean {
  const { isMobile } = useIsMobile();
  return isMobile;
}
