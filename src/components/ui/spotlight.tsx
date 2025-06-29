import { cn } from "@/lib/utils";
import { memo } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = memo(({ className, fill = "rgba(59, 130, 246, 0.5)" }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-screen w-screen pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${fill} 0%, transparent 50%)`,
        }}
      />
    </div>
  );
});

Spotlight.displayName = 'Spotlight';
