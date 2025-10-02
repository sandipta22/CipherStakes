import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden active:scale-97 active:shadow-[0_0_2px_hsl(var(--neon-blue)/0.12)]",
  {
    variants: {
      variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/80 shadow-[0_0_4px_hsl(var(--neon-blue)/0.18)] hover:shadow-[0_0_12px_hsl(var(--neon-blue)/0.25)] focus:scale-104 hover:scale-104",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:bg-destructive/80 shadow-[0_0_4px_hsl(var(--destructive)/0.18)] hover:shadow-[0_0_12px_hsl(var(--destructive)/0.25)] focus:scale-104 hover:scale-104",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-[0_0_4px_hsl(var(--neon-blue)/0.10)] hover:shadow-[0_0_12px_hsl(var(--neon-blue)/0.18)] focus:scale-104 hover:scale-104",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:bg-secondary/70 shadow-[0_0_4px_hsl(var(--neon-purple)/0.12)] hover:shadow-[0_0_12px_hsl(var(--neon-purple)/0.18)] focus:scale-104 hover:scale-104",
  ghost: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-[0_0_4px_hsl(var(--neon-cyan)/0.10)] hover:shadow-[0_0_12px_hsl(var(--neon-cyan)/0.18)] focus:scale-104 hover:scale-104",
  link: "text-primary underline-offset-4 hover:underline focus:underline shadow-none",
  neon: "bg-gradient-to-r from-primary via-secondary to-accent neon-border-blue text-primary-foreground font-bold uppercase tracking-wider shadow-[0_0_8px_hsl(var(--neon-blue)/0.25)] hover:shadow-[0_0_16px_hsl(var(--neon-blue)/0.35)] focus:scale-104 hover:scale-104",
  neonOutline: "border-2 border-primary bg-gradient-to-r from-background via-primary/10 to-background text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground neon-border-blue shadow-[0_0_8px_hsl(var(--neon-blue)/0.25)] hover:shadow-[0_0_16px_hsl(var(--neon-blue)/0.35)] focus:scale-104 hover:scale-104",
  neonPurple: "bg-gradient-to-r from-secondary via-primary to-accent neon-border-purple text-secondary-foreground font-bold uppercase tracking-wider shadow-[0_0_8px_hsl(var(--neon-purple)/0.18)] hover:shadow-[0_0_16px_hsl(var(--neon-purple)/0.25)] focus:scale-104 hover:scale-104",
  neonCyan: "bg-gradient-to-r from-accent via-primary to-secondary neon-border-cyan text-accent-foreground font-bold uppercase tracking-wider shadow-[0_0_8px_hsl(var(--neon-cyan)/0.18)] hover:shadow-[0_0_16px_hsl(var(--neon-cyan)/0.25)] focus:scale-104 hover:scale-104",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-10 text-base",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
