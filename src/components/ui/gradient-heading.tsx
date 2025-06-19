import { cn } from "@/lib/utils"
import React from "react"

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
}

export function GradientHeading({
  children,
  variant = "primary",
  size = "lg",
  className,
  ...props
}: GradientHeadingProps) {
  const variants = {
    primary: "from-blue-400 via-cyan-300 to-indigo-400",
    secondary: "from-gray-300 via-slate-200 to-gray-100",
  }

  // Keeping the text size system but making it more impactful for "xl" and "xxl"
  const sizes = {
    sm: "text-xl md:text-2xl", 
    md: "text-2xl md:text-3xl", 
    lg: "text-3xl md:text-4xl", 
    xl: "text-4xl md:text-5xl font-extrabold", // Enhanced with extrabold
    xxl: "text-5xl md:text-6xl font-extrabold tracking-tight", // Enhanced with extrabold and tighter tracking
  }

  return (
    <h2
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-bold",
        "leading-relaxed pb-1", // Added proper line height and bottom padding for descenders
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
