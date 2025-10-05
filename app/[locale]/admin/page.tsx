import React from "react";
import Card from "@/components/ui/Card";

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <Card className="p-4">
        <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Users</div>
        <div className="text-[18px] font-semibold">1,204</div>
      </Card>
      <Card className="p-4">
        <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Daily Trades</div>
        <div className="text-[18px] font-semibold">238</div>
      </Card>
      <Card className="p-4">
        <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Fees Collected</div>
        <div className="text-[18px] font-semibold">$1,932</div>
      </Card>
    </div>
  );
}
