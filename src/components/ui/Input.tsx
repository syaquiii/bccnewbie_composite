import React, { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/clsx";

const inputVariants = cva(
  "w-full rounded-xl transition-colors focus:outline-none  focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        normal:
          "bg-light text-normal placeholder:text-[#10101080] focus:ring-normal",
        outline:
          "border border-normal bg-transparent text-normal placeholder-normal/70 focus:ring-normal",
        white:
          "bg-white text-normal placeholder:text-[#10101080] focus:ring-normal",
      },
      // Rename size menjadi inputSize
      inputSize: {
        small: "px-3 py-2 text-sm",
        normal: "px-4 py-3",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "normal",
      inputSize: "normal", // Update default
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
