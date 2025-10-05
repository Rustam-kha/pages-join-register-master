import React from "react";

export default function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`card p-4 ${className}`}>{children}</div>;
}
