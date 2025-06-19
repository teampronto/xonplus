
import { cn } from "@/lib/utils";
import { GradientHeading } from "@/components/ui/gradient-heading";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "primary" | "secondary";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  variant = "primary",
  className,
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "relative z-20 mb-12",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right"
        },
        className
      )}
    >
      <GradientHeading 
        variant={variant} 
        className={cn("mb-4", "overflow-visible")} // Added overflow-visible to ensure descenders show
        size="md" // Changed default size from "lg" to "md"
      >
        {title}
      </GradientHeading>
      
      {subtitle && (
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
