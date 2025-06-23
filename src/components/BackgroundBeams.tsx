
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
};
