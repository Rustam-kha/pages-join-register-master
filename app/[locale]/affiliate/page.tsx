import React from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";

export default function AffiliatePage() {
  const { show } = useToast();
  const referrals = [
    { id: "u1", name: "AL", joined: "2025-09-10", trades: 12, earnings: "$34.50", active: true },
    { id: "u2", name: "BK", joined: "2025-09-20", trades: 0, earnings: "$0.00", active: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <Card className="p-4 bg-gradient-to-r from-[color:var(--qt-primary-green)] to-[color:var(--qt-secondary-teal)] text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] opacity-90">Commission Rate</div>
            <div className="text-[24px] font-bold">15%</div>
          </div>
          <div className="text-right">
            <div className="text-[12px] opacity-90">Referral Code</div>
            <div className="text-[18px] font-bold">QT-9X2K</div>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-4 gap-3">
        <Card>
          <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Total earnings</div>
          <div className="text-[18px] font-semibold">$182.35</div>
        </Card>
        <Card>
          <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Active referrals</div>
          <div className="text-[18px] font-semibold">12</div>
        </Card>
        <Card>
          <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Monthly earnings</div>
          <div className="text-[18px] font-semibold">$54.10</div>
        </Card>
        <Card>
          <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Conversion rate</div>
          <div className="text-[18px] font-semibold">3.4%</div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Share your link</div>
            <div className="text-[14px] font-medium">https://qictrader.com/r/QT-9X2K</div>
          </div>
          <div className="flex gap-2">
            <UIButton className="bg-white text-[color:var(--qt-primary-green)]" onClick={() => { navigator.clipboard.writeText("https://qictrader.com/r/QT-9X2K"); show("Copied!"); }}>Copy</UIButton>
            <UIButton onClick={async () => { try { await navigator.share?.({ title: "QicTrader", url: "https://qictrader.com/r/QT-9X2K" }); } catch { /* ignore */ } }}>Share</UIButton>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-3 pb-8">
        <Card>
          <div className="font-semibold mb-2">Referrals</div>
          <div className="grid gap-2">
            {referrals.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-2 border rounded-[12px]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[color:var(--qt-gray-bg)] flex items-center justify-center font-semibold">{r.name}</div>
                  <div>
                    <div className="font-medium">Joined {r.joined}</div>
                    <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Trades: {r.trades}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{r.earnings}</div>
                  <Badge variant={r.active ? "success" : "failed"}>{r.active ? "Active" : "Inactive"}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="font-semibold mb-2">Earnings (weekly)</div>
          <div className="h-48 bg-[color:var(--qt-gray-bg)] rounded-[12px] grid grid-cols-7 items-end gap-1 p-2">
            {[4,6,3,8,5,7,9].map((h,i)=>(
              <div key={i} className="bg-[color:var(--qt-accent-blue)] rounded-t" style={{height: `${h*10}%`}} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
