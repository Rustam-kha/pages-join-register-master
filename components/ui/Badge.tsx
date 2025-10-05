import React from "react";

export type BadgeVariant = "success" | "pending" | "failed" | "active";

export default function Badge({
  variant = "active",
  children,
  className = "",
}: React.PropsWithChildren<{ variant?: BadgeVariant; className?: string }>) {
  const map: Record<BadgeVariant, string> = {
    success: "badge badge-success",
    pending: "badge badge-pending",
    failed: "badge badge-failed",
    active: "badge badge-active",
  };
  return <span className={`${map[variant]} ${className}`}>{children}</span>;
}
