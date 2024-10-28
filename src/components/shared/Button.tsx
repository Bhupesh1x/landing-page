"use client";

import { forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      type = "button",
      variant = "primary",
      onClick,
      ...props
    },
    ref
  ) => {
    // Base styles for the button
    const baseStyles =
      "w-fit h-[50px] rounded-[5px] border border-[#00732F] px-5 py-2 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 text-[15px] font-[700] text-center transition box-border";

    // Variant styles
    let variantStyles = "";
    switch (variant) {
      case "primary":
        variantStyles = "bg-[#00732F] text-white hover:bg-opacity-80";
        break;
      case "outline":
        variantStyles =
          "bg-transparent border !border-[#00732F] text-[#00732F]";
        break;
      case "secondary":
        variantStyles =
          "bg-[#EB7150] !border-[#EB7150] text-white hover:bg-opacity-80";
        break;
      default:
        variantStyles = "";
    }

    return (
      <button
        ref={ref}
        {...props}
        type={type}
        className={`${baseStyles} ${variantStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
