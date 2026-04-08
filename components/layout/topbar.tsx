"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";

const mobileLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Alerts", href: "/alerts" },
  { label: "Reports", href: "/reports" },
  { label: "Dish Profit", href: "/dish-profit" },
];

export function Topbar() {
  return (
    <header className="fixed right-0 top-0 z-30 border-b border-white/10 bg-[#0B0F0E]/65 px-4 py-4 backdrop-blur-xl md:left-72 md:px-8">
      <div className="flex items-center gap-3 pb-3 md:pb-0">
        <div className="glass-surface flex flex-1 items-center gap-2 rounded-2xl border border-white/10 px-3.5 py-2.5 transition-colors focus-within:border-[#22C55E]/40">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            placeholder="Search inventory, SKUs, deliveries..."
            type="text"
          />
        </div>
        <button className="glass-surface rounded-2xl border border-white/10 p-2.5 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <div className="h-10 w-10 rounded-2xl border border-white/20 bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#14532D] shadow-[0_8px_20px_rgba(34,197,94,0.35)]" />
      </div>
      <nav className="flex gap-2 overflow-x-auto md:hidden">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="glass-surface whitespace-nowrap rounded-xl border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
