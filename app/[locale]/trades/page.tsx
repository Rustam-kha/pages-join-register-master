import React from "react";
import Card from "@/components/ui/Card";
import { useAppState } from "@/components/state/AppState";

export default function TradesPage() {
  const { trades } = useAppState();
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-2">
      {trades.length === 0 ? (
        <Card className="p-4 text-center text-[14px] text-[color:var(--qt-text-secondary)]">No trades yet</Card>
      ) : (
        trades.map((t) => (
          <Card key={t.id} className="p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{t.id}</div>
              <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{t.crypto} • ${t.amountFiat}</div>
            </div>
            <div className="text-[12px] uppercase">{t.status}</div>
          </Card>
        ))
      )}
    </div>
  );
}
