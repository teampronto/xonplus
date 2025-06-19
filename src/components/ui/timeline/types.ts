
import { ReactNode } from "react";

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  textColor: string;
}
