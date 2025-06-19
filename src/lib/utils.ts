
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define transition classes for reuse
export const hoverGlowTransition = "transition-all duration-300 hover:shadow-glow hover:border-blue-500/50"
