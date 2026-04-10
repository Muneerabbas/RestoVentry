"use client";

import Link from "next/link";
import { Bell, HelpCircle, Search } from "lucide-react";

const mobileLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Alerts", href: "/alerts" },
  { label: "Reports", href: "/reports" },
  { label: "Dish Profit", href: "/dish-profit" },
];

export function Topbar() {
  return (
    <header className="fixed left-64 right-0 top-0 z-40 flex h-16 items-center justify-between bg-white/80 px-8 shadow-[0_12px_40px_rgba(17,24,39,0.05)] backdrop-blur-md">
      <div className="flex max-w-xl flex-1 items-center">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full border-b-2 border-transparent bg-transparent py-2 pl-10 text-sm outline-none transition-all focus:border-[#F59E0B]"
            placeholder="Search inventory, recipes, or orders..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-slate-500">
          <button className="transition-colors hover:text-[#F59E0B]">
            <Bell className="h-5 w-5" />
          </button>
          <button className="transition-colors hover:text-[#F59E0B]">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold leading-tight text-slate-900">Chef de Cuisine</p>
            <p className="text-xs text-slate-500">Executive HQ</p>
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[#F59E0B] bg-slate-200" />
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto md:hidden">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-md border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs text-slate-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
