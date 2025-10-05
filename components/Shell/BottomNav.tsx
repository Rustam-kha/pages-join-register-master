"use client";
import React from "react";
import { Home, Wallet, MessageCircle, Users, User } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const items = [
  { key: "home", label: "Home", icon: Home, href: (l:string)=>`/${l}` },
  { key: "wallet", label: "Wallet", icon: Wallet, href: (l:string)=>`/${l}/wallet` },
  { key: "trade", label: "Trade", icon: MessageCircle, href: (l:string)=>`/${l}/trade/active` },
  { key: "affiliate", label: "Affiliate", icon: Users, href: (l:string)=>`/${l}/affiliate` },
  { key: "profile", label: "Profile", icon: User, href: (l:string)=>`/${l}/profile` },
];

export default function BottomNav() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[color:var(--qt-gray-border)]">
      <div className="max-w-6xl mx-auto grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href(locale)}
              className="flex flex-col items-center justify-center py-2 text-[12px] text-[color:var(--qt-text-secondary)] hover:text-[color:var(--qt-accent-blue)]"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
