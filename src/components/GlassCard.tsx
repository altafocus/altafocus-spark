import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}

const GlassCard = ({ children, className, strong }: GlassCardProps) => (
  <div className={cn(strong ? "glass-card-strong" : "glass-card", "p-6", className)}>
    {children}
  </div>
);

export default GlassCard;
