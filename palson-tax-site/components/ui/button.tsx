import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-8 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-teal text-white hover:bg-teal-600 shadow-md hover:shadow-lg",
        primary: "bg-navy text-white hover:bg-navy-600 shadow-md hover:shadow-lg",
        secondary: "bg-indigo text-white hover:bg-indigo-600 shadow-md hover:shadow-lg",
        outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-teal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-48 px-24 py-12",
        sm: "h-32 px-16 py-8 text-xs",
        lg: "h-56 px-32 py-16 text-base",
        xl: "h-64 px-48 py-24 text-lg",
        icon: "h-48 w-48",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
