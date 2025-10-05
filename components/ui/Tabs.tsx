"use client";
import React from "react";

export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
}

export default function Tabs({ items, value, onChange, className = "" }: TabsProps) {
  return (
    <div className={`flex gap-2 bg-white p-1 rounded-[8px] border border-[color:var(--qt-gray-border)] ${className}`}>
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium ${
              active
                ? "bg-[color:var(--qt-accent-blue)] text-white"
                : "text-[color:var(--qt-primary-green)]"
            }`}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
