"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export default function Input({ label, hint, error, className = "", ...props }: InputProps) {
  return (
    <label className="block w-full">
      {label && (
        <div className="text-[12px] font-medium text-[color:var(--qt-text-secondary)] mb-1">
          {label}
        </div>
      )}
      <input
        className={`w-full h-[44px] px-4 rounded-[8px] outline-none bg-white border text-[14px] font-medium placeholder:text-[color:var(--qt-text-secondary)] focus:ring-2 focus:ring-[color:var(--qt-accent-blue)] focus:border-[color:var(--qt-accent-blue)] transition-colors border-[color:var(--qt-gray-border)] ${className}`}
        {...props}
      />
      {hint && !error && (
        <div className="text-[12px] text-[color:var(--qt-text-secondary)] mt-1">{hint}</div>
      )}
      {error && (
        <div className="text-[12px] text-red-600 mt-1">{error}</div>
      )}
    </label>
  );
}
