"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";

interface Offer {
  id: string;
  vendor: string;
  method: string;
  vendorMarkup: number;
  myMarkup: number;
  totalMarkup: number;
  clicks: number;
  trades: number;
  earned: string;
}

export default function ResellerPage() {
  const { show } = useToast();
  const [offers, setOffers] = useState<Offer[]>([
    { id: "o1", vendor: "CryptoKing", method: "Cash App", vendorMarkup: 2, myMarkup: 3, totalMarkup: 5, clicks: 213, trades: 18, earned: "$92.40" },
  ]);
  const [open, setOpen] = useState(false);
  const [markup, setMarkup] = useState(3);

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <Card className="p-4 bg-gradient-to-r from-[color:var(--qt-primary-green)] to-[color:var(--qt-secondary-teal)] text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] opacity-90">Total reseller earnings</div>
            <div className="text-[24px] font-bold">$342.10</div>
          </div>
          <div className="text-right">
            <div className="text-[12px] opacity-90">Active offers</div>
            <div className="text-[18px] font-bold">{offers.length}</div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="font-semibold mb-2">How reselling works</div>
        <div className="text-[14px] text-[color:var(--qt-text-secondary)]">Select a vendor offer, set your markup, share a link. When clients complete trades, you earn the spread.</div>
      </Card>

      <div className="flex items-center justify-between">
        <div className="text-[16px] font-semibold">My Active Offers</div>
        <UIButton onClick={() => setOpen(true)}>Create Offer</UIButton>
      </div>

      <div className="grid gap-2 pb-16">
        {offers.map((o) => (
          <Card key={o.id} className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{o.vendor}</div>
                <div className="text-[12px] text-[color:var(--qt-text-secondary)]">{o.method}</div>
              </div>
              <div className="text-right">
                <div className="text-[12px]">Markup: vendor {o.vendorMarkup}% + yours {o.myMarkup}% = <span className="font-semibold">{o.totalMarkup}%</span></div>
                <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Clicks {o.clicks} • Trades {o.trades}</div>
                <div className="font-semibold">Earned {o.earned}</div>
                <div className="mt-2 flex gap-2 justify-end">
                  <UIButton className="bg-white text-[color:var(--qt-primary-green)] border border-[color:var(--qt-gray-border)]" onClick={() => show("Link copied")}>Copy Link</UIButton>
                  <UIButton className="bg-white text-[color:var(--qt-primary-green)] border border-[color:var(--qt-gray-border)]">Edit</UIButton>
                  <UIButton className="bg-white text-[color:var(--qt-primary-green)] border border-[color:var(--qt-gray-border)]">Delete</UIButton>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full sm:max-w-md rounded-t-[16px] sm:rounded-[16px] p-4 space-y-3">
            <div className="font-semibold">Create Offer</div>
            <div className="text-[14px] text-[color:var(--qt-text-secondary)]">Select a vendor offer and set your markup. Preview is updated live.</div>
            <Input placeholder="Vendor offer (mock)" />
            <Input
              placeholder="Your markup %"
              inputMode="decimal"
              value={markup.toString()}
              onChange={(e)=> setMarkup(Number(e.target.value||0))}
            />
            <Card>
              <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Preview</div>
              <div className="text-[14px]">Vendor markup 2% + your markup {markup}% = total {(2+markup)}%</div>
              <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Example: Client pays $1000 → You earn ${(1000*(markup/100)).toFixed(2)}</div>
            </Card>
            <div className="flex gap-2 justify-end">
              <UIButton className="bg-white text-[color:var(--qt-primary-green)] border border-[color:var(--qt-gray-border)]" onClick={()=> setOpen(false)}>Cancel</UIButton>
              <UIButton onClick={()=>{ setOffers([...offers, { id: String(Date.now()), vendor: "FastPay", method: "Bank", vendorMarkup: 2, myMarkup: markup, totalMarkup: 2+markup, clicks: 0, trades: 0, earned: "$0.00" }]); setOpen(false); }}>Create</UIButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
