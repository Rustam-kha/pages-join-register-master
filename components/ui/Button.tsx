"use client";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export default function UIButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "text-[12px]"
      : size === "lg"
      ? "text-[16px]"
      : "text-[14px]";

  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "btn-text";

  return (
    <button
      className={`btn ${variantClass} ${sizeClasses} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
