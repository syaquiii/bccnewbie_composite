import React, { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/clsx";

const checkboxVariants = cva(
  "form-checkbox h-5 w-5 rounded-md border-2 text-primary transition-colors focus:ring-2 focus:ring-normal focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-normal checked:bg-normal bg-normal checked:hover:bg-normal-hover",
        secondary:
          "border-secondary checked:bg-secondary checked:hover:bg-secondary-hover",
      },
      size: {
        sm: "h-4 w-4",
        normal: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(checkboxVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
