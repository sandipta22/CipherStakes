import { cn } from "@/lib/utils";
import React from "react";

export function SmallGridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Responsive grid background, less intrusive and fits viewport */}
      <div
        className={cn(
          "fixed inset-0 w-full h-full z-0 pointer-events-none",
          "[background-size:32px_32px] md:[background-size:40px_40px] lg:[background-size:48px_48px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]",
        )}
        aria-hidden="true"
      />
      {/* Softer radial mask for subtlety, less darkening */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-transparent [mask-image:radial-gradient(ellipse_at_center,rgba(243, 237, 237, 0.15)_40%,transparent_100%)] dark:bg-transparent" aria-hidden="true"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
