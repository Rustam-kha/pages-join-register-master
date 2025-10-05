import React from "react";
import SearchFilters, { Filters } from "@/components/Marketplace/SearchFilters";
import VendorCard, { Vendor } from "@/components/Marketplace/VendorCard";

async function getVendors(): Promise<Vendor[]> {
  // Mocked data for now
  return [
    {
      id: "1",
      name: "CryptoKing",
      countryFlag: "🇺🇸",
      rating: 4.9,
      completion: 98,
      paymentMethod: "Bank Transfer",
      rate: "1 USDT = 1.02 USD",
      markupPercent: 2,
      range: "$10 - $1,500",
      lastSeen: "5m ago",
    },
    {
      id: "2",
      name: "FastPay",
      countryFlag: "🇬🇧",
      rating: 4.7,
      completion: 95,
      paymentMethod: "Cash App",
      rate: "1 USDT = 1.03 USD",
      markupPercent: 3,
      range: "$20 - $2,000",
      lastSeen: "12m ago",
    },
  ];
}

export default async function MarketplacePage() {
  const vendors = await getVendors();
  const [filters, setFilters] = [
    { mode: "buy", query: "", amount: "", paymentMethod: "" } as Filters,
    (f: Filters) => f,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <SearchFilters value={filters} onChange={setFilters} />
      <div className="grid grid-cols-1 gap-3">
        {vendors.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>
    </div>
  );
}
