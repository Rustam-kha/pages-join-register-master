"use client";
import React, { useMemo, useState } from "react";
import SearchFilters, { Filters } from "@/components/Marketplace/SearchFilters";
import VendorCard from "@/components/Marketplace/VendorCard";
import { useAppState } from "@/components/state/AppState";
import { useRouter, useParams } from "next/navigation";

export default function MarketplacePage() {
  const { vendors, startTrade } = useAppState();
  const [filters, setFilters] = useState<Filters>({ mode: "buy", query: "", amount: "", paymentMethod: "" });
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      const matchQuery = filters.query
        ? v.name.toLowerCase().includes(filters.query.toLowerCase()) ||
          v.paymentMethod.toLowerCase().includes(filters.query.toLowerCase())
        : true;
      const matchChip = filters.paymentMethod ? v.paymentMethod.toLowerCase().includes(filters.paymentMethod) : true;
      return matchQuery && matchChip;
    });
  }, [vendors, filters]);

  const handleSelect = (vendorId: string) => {
    const trade = startTrade(vendorId, 100, 102); // mock values for now
    router.push(`/${locale}/trade/active?trade=${trade.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <SearchFilters value={filters} onChange={setFilters} />
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((v) => (
          <VendorCard key={v.id} vendor={v} onSelect={() => handleSelect(v.id)} />
        ))}
      </div>
    </div>
  );
}
