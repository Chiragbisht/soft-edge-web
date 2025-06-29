import { memo } from "react";

export const BackgroundBeams = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simplified background with CSS-only animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(29,78,216,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.10),transparent_50%)]" />
    </div>
  );
});
