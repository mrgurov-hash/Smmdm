import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm active:scale-95 transition-all duration-200",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm active:scale-95 transition-all duration-200 border border-border",
      ghost: "bg-transparent text-foreground hover:bg-muted active:scale-95 transition-all duration-200",
      link: "bg-transparent text-primary hover:underline p-0 h-auto font-normal",
      outline: "bg-transparent border border-border text-foreground hover:bg-muted active:scale-95 transition-all duration-200",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg font-semibold",
      icon: "h-10 w-10 p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground border border-primary/10", className)}>
    {children}
  </span>
);

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300", className)}>
    {children}
  </div>
);

export const IconLabel = ({ icon: Icon, label, className }: { icon: any; label: string; className?: string }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className="w-8 h-8 rounded-lg bg-accent/50 flex items-center justify-center text-primary">
      <Icon size={18} />
    </div>
    <span className="text-sm font-medium text-foreground/80">{label}</span>
  </div>
);
