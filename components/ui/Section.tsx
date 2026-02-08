import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted";
  spacing?: "default" | "large" | "small";
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className,
  background = "default",
  spacing = "default"
}) => {
  const backgrounds = {
    default: "bg-stone-50",
    muted: "bg-stone-100",
  };
  
  const spacings = {
    small: "py-12 md:py-16",
    default: "py-16 md:py-24",
    large: "py-24 md:py-32",
  };
  
  return (
    <section className={cn(backgrounds[background], spacings[spacing], className)}>
      {children}
    </section>
  );
};
