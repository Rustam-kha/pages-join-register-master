"use client";
import React, { useState } from "react";
import { ShieldCheck, Wallet, Lock, Bell } from "lucide-react";
import Card from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";

export default function Header() {
  const { show } = useToast();
  const [hidden, setHidden] = useState(true);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/75 bg-white/90 border-b border-[color:var(--qt-gray-border)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-[color:var(--qt-primary-green)]" size={20} />
          <span className="text-[16px] font-semibold text-[color:var(--qt-text-primary)]">QicTrader</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[12px] text-[color:var(--qt-text-secondary)]">
            <Lock size={16} className="text-[color:var(--qt-primary-green)]" />
            <span className="hidden md:inline">Escrow Protected</span>
          </div>
          <button className="relative" onClick={() => show("No new notifications") }>
            <Bell size={20} className="text-[color:var(--qt-text-primary)]" />
            <span className="absolute -top-1 -right-1 bg-[color:var(--qt-accent-blue)] text-white text-[10px] rounded-full px-1">3</span>
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-3">
        <Card className="p-3 bg-gradient-to-r from-[color:var(--qt-primary-green)] to-[color:var(--qt-secondary-teal)] text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet size={18} />
              <span className="text-[12px] opacity-90">Available balance</span>
            </div>
            <button className="text-[12px] underline" onClick={() => setHidden((v)=>!v)}>{hidden ? "Show" : "Hide"}</button>
          </div>
          <div className="mt-1 text-[24px] font-bold">{hidden ? "•••••" : "$12,450.00"}</div>
        </Card>
      </div>
    </header>
  );
}
