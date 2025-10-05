"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import type { Vendor } from "@/components/Marketplace/VendorCard";

export interface Trade {
  id: string;
  vendorId: string;
  crypto: string;
  amountCrypto: number;
  amountFiat: number;
  status: "locked" | "paid" | "confirmed" | "released";
  createdAt: number;
}

export interface Wallet {
  totalUsd: number;
  assets: { symbol: string; name: string; balance: number; fiat: string; change: string }[];
  txs: { id: string; type: "receive" | "send"; title: string; desc: string; amount: string; fiat: string; status: "completed" | "pending"; ts: string }[];
}

interface AppStateShape {
  vendors: Vendor[];
  wallet: Wallet;
  trades: Trade[];
  offers: { id: string; vendor: string; method: string; vendorMarkup: number; myMarkup: number; totalMarkup: number; clicks: number; trades: number; earned: string }[];
  // actions
  startTrade: (vendorId: string, amountCrypto: number, amountFiat: number) => Trade;
  markPaid: (tradeId: string) => void;
  confirmVendor: (tradeId: string) => void;
  releaseCrypto: (tradeId: string) => void;
}

const AppStateContext = createContext<AppStateShape | null>(null);

export function AppStateProvider({ children }: React.PropsWithChildren) {
  const [vendors] = useState<Vendor[]>([
    { id: "1", name: "CryptoKing", countryFlag: "🇺🇸", rating: 4.9, completion: 98, paymentMethod: "Bank Transfer", rate: "1 USDT = 1.02 USD", markupPercent: 2, range: "$10 - $1,500", lastSeen: "5m ago" },
    { id: "2", name: "FastPay", countryFlag: "🇬🇧", rating: 4.7, completion: 95, paymentMethod: "Cash App", rate: "1 USDT = 1.03 USD", markupPercent: 3, range: "$20 - $2,000", lastSeen: "12m ago" },
  ]);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [wallet] = useState<Wallet>({
    totalUsd: 12450,
    assets: [
      { symbol: "BTC", name: "Bitcoin", balance: 0.245, fiat: "$16,820", change: "+2.1%" },
      { symbol: "USDT", name: "Tether", balance: 1543.12, fiat: "$1,543.12", change: "+0.0%" },
    ],
    txs: [
      { id: "1", type: "receive", title: "Received USDT", desc: "From 0x9a...2f", amount: "+250.00 USDT", fiat: "+$250.00", status: "completed", ts: "2h ago" },
      { id: "2", type: "send", title: "Sent BTC", desc: "To bc1q...3k", amount: "-0.005 BTC", fiat: "-$145.12", status: "pending", ts: "1d ago" },
    ],
  });
  const [offers] = useState<AppStateShape["offers"]>([
    { id: "o1", vendor: "CryptoKing", method: "Cash App", vendorMarkup: 2, myMarkup: 3, totalMarkup: 5, clicks: 213, trades: 18, earned: "$92.40" },
  ]);

  const startTrade = (vendorId: string, amountCrypto: number, amountFiat: number) => {
    const trade: Trade = {
      id: `T${Date.now()}`,
      vendorId,
      crypto: "USDT",
      amountCrypto,
      amountFiat,
      status: "locked",
      createdAt: Date.now(),
    };
    setTrades((t) => [trade, ...t]);
    return trade;
  };

  const updateTrade = (tradeId: string, status: Trade["status"]) =>
    setTrades((ts) => ts.map((t) => (t.id === tradeId ? { ...t, status } : t)));

  const value = useMemo<AppStateShape>(
    () => ({
      vendors,
      wallet,
      trades,
      offers,
      startTrade,
      markPaid: (id) => updateTrade(id, "paid"),
      confirmVendor: (id) => updateTrade(id, "confirmed"),
      releaseCrypto: (id) => updateTrade(id, "released"),
    }),
    [vendors, wallet, trades, offers]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
