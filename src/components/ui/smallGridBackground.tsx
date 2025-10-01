import { cn } from "@/lib/utils";
import React from "react";

export function SmallGridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className={cn(
          "fixed inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
        aria-hidden="true"
      />
      {/* Optional: faded radial mask for subtlety */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" aria-hidden="true"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
