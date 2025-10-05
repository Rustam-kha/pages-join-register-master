"use client";
import React, { useMemo, useState } from "react";
import Input from "@/components/ui/Input";
import Tabs from "@/components/ui/Tabs";
import { CreditCard, Banknote, Smartphone } from "lucide-react";

export interface Filters {
  mode: "buy" | "sell";
  query: string;
  amount: string;
  paymentMethod: string;
}

const chips = [
  { key: "card", label: "Card", icon: CreditCard },
  { key: "cashapp", label: "Cash App", icon: Smartphone },
  { key: "bank", label: "Bank", icon: Banknote },
];

export default function SearchFilters({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (f: Filters) => void;
}) {
  const [local, setLocal] = useState(value);
  const tabs = useMemo(() => [{ key: "buy", label: "Buy" }, { key: "sell", label: "Sell" }], []);

  return (
    <div className="space-y-3">
      <Tabs
        items={tabs}
        value={local.mode}
        onChange={(key) => {
          const next = { ...local, mode: key as Filters["mode"] };
          setLocal(next);
          onChange(next);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="Search payment method"
          value={local.query}
          onChange={(e) => {
            const next = { ...local, query: e.target.value };
            setLocal(next);
            onChange(next);
          }}
        />
        <Input
          placeholder="Amount"
          inputMode="decimal"
          value={local.amount}
          onChange={(e) => {
            const next = { ...local, amount: e.target.value };
            setLocal(next);
            onChange(next);
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const Icon = c.icon;
          const active = local.paymentMethod === c.key;
          return (
            <button
              key={c.key}
              className={`px-3 py-1.5 rounded-full text-[12px] border flex items-center gap-1 ${
                active
                  ? "bg-[color:var(--qt-primary-green)] text-white border-transparent"
                  : "border-[color:var(--qt-gray-border)] text-[color:var(--qt-text-primary)]"
              }`}
              onClick={() => {
                const next = { ...local, paymentMethod: active ? "" : c.key };
                setLocal(next);
                onChange(next);
              }}
            >
              <Icon size={14} /> {c.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-[12px] text-[color:var(--qt-text-secondary)]">
        <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"/> Escrow</span>
        <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"/> Active Users</span>
        <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"/> 24/7</span>
      </div>
    </div>
  );
}
