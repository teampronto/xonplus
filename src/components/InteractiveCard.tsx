
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'primary' | 'secondary' | 'transparent' | 'none';
}

export function InteractiveCard({ 
  children, 
  className, 
  hoverEffect = 'primary',
  ...props 
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = cn(
    "transition-all duration-300 ease-in-out p-6 backdrop-blur-sm transform-gpu rounded-2xl", 
    {
      "hover:-translate-y-2 hover:shadow-lg": hoverEffect !== 'none',
      "bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-brand-blue-dark text-slate-200 hover:text-white border border-white/10": hoverEffect === 'primary',
      "bg-white/5 hover:bg-gradient-to-br hover:from-brand-blue-dark hover:to-blue-900 text-slate-200 hover:text-white border border-white/10": hoverEffect === 'secondary',
      "backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-white hover:border-white/20 hover:bg-white/8": hoverEffect === 'transparent',
    },
    isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-md',
    className
  );

  return (
    <Card
      className={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className={cn(
        "transition-all duration-300",
        isHovered ? 'transform-gpu -translate-y-1' : ''
      )}>
        {children}
      </div>
    </Card>
  );
}
