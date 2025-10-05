"use client";
import React, { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

function useCountdown(seconds: number) {
  const [remain, setRemain] = useState(seconds);
  React.useEffect(() => {
    const id = setInterval(() => setRemain((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(remain / 60);
  const s = remain % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ActiveTradePage() {
  const timer = useCountdown(15 * 60);
  const steps = useMemo(
    () => ["Escrow Locked", "Payment Sent", "Vendor Confirms", "Crypto Released"],
    []
  );
  const [current, setCurrent] = useState(1);

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-4">
      <header className="flex items-center justify-between">
        <div className="text-[14px] text-[color:var(--qt-text-secondary)]">Trade ID: #QT-39204 • Vendor: CryptoKing</div>
        <div className="text-[16px] font-semibold bg-[color:var(--qt-success-yellow)] px-3 py-1 rounded-full">⏳ {timer}</div>
      </header>

      <Card>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Crypto</div>
            <div className="text-[18px] font-semibold">350 USDT</div>
          </div>
          <div>
            <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Fiat</div>
            <div className="text-[18px] font-semibold">$357.00</div>
          </div>
          <div className="col-span-2">
            <Badge variant="active">Escrow Locked</Badge>
          </div>
        </div>
      </Card>

      <Card>
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s, idx) => (
            <div key={s} className={`text-center text-[12px] px-2 py-2 rounded ${
              idx <= current ? "bg-blue-50 text-blue-700" : "bg-gray-50 text-gray-500"
            }`}>
              {idx + 1}. {s}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="space-y-2">
          <div className="font-semibold">Payment Instructions</div>
          <div className="text-[14px] text-[color:var(--qt-text-secondary)]">
            Send $357.00 via Cash App to $FASTPAY within 15 minutes. Include memo: QT39204.
          </div>
          <div className="flex gap-2">
            <UIButton className="bg-white text-[color:var(--qt-primary-green)] border border-[color:var(--qt-gray-border)]">Upload Proof</UIButton>
            <UIButton onClick={() => setCurrent(2)}>I&apos;ve Paid</UIButton>
          </div>
        </div>
      </Card>

      <Card>
        <div className="h-[300px] flex flex-col">
          <div className="flex-1 space-y-2 overflow-y-auto pr-2">
            <div className="text-center text-[12px] text-gray-500">System • Escrow locked for this trade</div>
            <div className="max-w-[70%] bg-white border rounded-[12px] p-2">Hi, please send payment then mark as paid.</div>
            <div className="max-w-[70%] bg-blue-500 text-white rounded-[12px] p-2 self-end">Ok, sending now.</div>
            <div className="text-center text-[12px] text-gray-500">System • Remember: Never release outside escrow</div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input className="flex-1 h-[44px] rounded-[8px] border px-3" placeholder="Type a message" />
            <UIButton>Send</UIButton>
          </div>
        </div>
      </Card>

      <footer className="text-[12px] text-red-700 bg-red-50 border border-red-200 rounded-[12px] p-3">
        Warning: Never trade outside the platform. Report suspicious activity immediately.
      </footer>
    </div>
  );
}
