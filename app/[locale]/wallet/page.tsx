"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Eye, EyeOff, ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function WalletPage() {
  const [hidden, setHidden] = useState(true);
  const assets = [
    { symbol: "BTC", name: "Bitcoin", balance: 0.245, fiat: "$16,820", change: "+2.1%" },
    { symbol: "USDT", name: "Tether", balance: 1543.12, fiat: "$1,543.12", change: "+0.0%" },
  ];
  const txs = [
    { id: "1", type: "receive", title: "Received USDT", desc: "From 0x9a...2f", amount: "+250.00 USDT", fiat: "+$250.00", status: "completed", ts: "2h ago" },
    { id: "2", type: "send", title: "Sent BTC", desc: "To bc1q...3k", amount: "-0.005 BTC", fiat: "-$145.12", status: "pending", ts: "1d ago" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <Card className="p-4 bg-gradient-to-r from-[color:var(--qt-primary-green)] to-[color:var(--qt-secondary-teal)] text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] opacity-90">Total Balance</div>
            <div className="text-[24px] font-bold">{hidden ? "•••••" : "$12,450.00"}</div>
          </div>
          <button className="underline text-[12px] flex items-center gap-1" onClick={() => setHidden((v)=>!v)}>
            {hidden ? <Eye size={16}/> : <EyeOff size={16}/>} {hidden ? "Show" : "Hide"}
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <UIButton className="bg-white text-[color:var(--qt-primary-green)]">Receive</UIButton>
          <UIButton className="bg-white text-[color:var(--qt-primary-green)]">Send</UIButton>
        </div>
      </Card>

      <div className="space-y-2">
        <div className="text-[16px] font-semibold">Assets</div>
        <div className="grid gap-2">
          {assets.map((a) => (
            <Card key={a.symbol} className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[color:var(--qt-gray-bg)] flex items-center justify-center font-semibold">
                  {a.symbol}
                </div>
                <div>
                  <div className="font-medium">{a.name}</div>
                  <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{a.balance} {a.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{a.fiat}</div>
                <div className="text-[12px] text-green-700">{a.change}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-2 pb-8">
        <div className="text-[16px] font-semibold">Transactions</div>
        <div className="grid gap-2">
          {txs.map((t) => (
            <Card key={t.id} className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${t.type === "receive" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}>
                  {t.type === "receive" ? <ArrowDownLeft size={18}/> : <ArrowUpRight size={18}/>}
                </div>
                <div>
                  <div className="font-medium">{t.title}</div>
                  <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{t.desc}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${t.type === "receive" ? "text-green-700" : "text-blue-700"}`}>{t.amount}</div>
                <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{t.fiat}</div>
                <div className="mt-1">
                  <Badge variant={t.status === "completed" ? "success" : "pending"}>{t.status}</Badge>
                </div>
                <div className="text-[12px] text-[color:var(--qt-text-secondary)] mt-1">{t.ts}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
