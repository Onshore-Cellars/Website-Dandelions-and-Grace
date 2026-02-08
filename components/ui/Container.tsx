import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  size = "default" 
}) => {
  const sizes = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1440px]",
  };
  
  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
};
