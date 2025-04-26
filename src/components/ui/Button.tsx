import React, { forwardRef } from "react";
import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/clsx";

const buttonVariants = cva("rounded-xl  active:scale-95 transition-all", {
  variants: {
    variant: {
      normal: "bg-normal text-light hover:bg-normal-hover ",
    },
    size: {
      small: "px-2 py-1",
      normal: "px-6 py-4",
      lg: "py-4 lg:text-lg text-sm px-8",
    },
  },
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
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
