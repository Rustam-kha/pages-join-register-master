"use client";
import React from "react";
import Card from "@/components/ui/Card";
import UIButton from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Star, Shield, CircleDot } from "lucide-react";

export interface Vendor {
  id: string;
  name: string;
  countryFlag: string; // emoji
  rating: number; // 0-5
  completion: number; // percentage
  paymentMethod: string;
  rate: string; // e.g. 1 USDT = 1.02 USD
  markupPercent: number; // e.g. 2
  range: string; // e.g. $10 - $500
  lastSeen: string; // e.g. 5m ago
}

export default function VendorCard({ vendor, onSelect }: { vendor: Vendor; onSelect?: (v: Vendor) => void }) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-[color:var(--qt-gray-bg)] flex items-center justify-center text-lg">
          {vendor.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-semibold text-[16px]">{vendor.name}</div>
              <span>{vendor.countryFlag}</span>
              <div className="flex items-center gap-1 text-[12px] text-[color:var(--qt-text-secondary)]">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span>{vendor.rating.toFixed(1)}</span>
                <span>•</span>
                <span className="text-green-700">{vendor.completion}%</span>
                <span>completion</span>
              </div>
              <Shield size={14} className="text-[color:var(--qt-primary-green)]" />
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[color:var(--qt-text-secondary)]">
              <CircleDot size={10} className="text-orange-500" />
              <span>Last seen {vendor.lastSeen}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="active">{vendor.paymentMethod}</Badge>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="text-[12px] text-[color:var(--qt-text-secondary)]">Rate</div>
              <div className="text-[18px] font-semibold">{vendor.rate}</div>
              <div className="text-[12px] text-green-700">+{vendor.markupPercent}% markup</div>
              <div className="text-[12px] text-[color:var(--qt-text-secondary)] mt-1">Range: {vendor.range}</div>
            </div>
            <UIButton onClick={() => onSelect?.(vendor)} className="min-w-[112px]">Trade</UIButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
