"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, LayoutDashboard, Package, UtensilsCrossed } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Dish Profit", href: "/dish-profit", icon: UtensilsCrossed },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass-surface fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 p-6 md:block">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-white">restoVentry</h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-[#22C55E]/50 bg-gradient-to-r from-[#22C55E]/18 to-transparent text-[#22C55E] shadow-[inset_0_0_0_1px_rgba(34,197,94,0.08)]"
                  : "border-transparent text-gray-400 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#0B0F0E]/80 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B0F0E]/80 p-4 text-xs text-gray-400">
        <p className="mb-1 text-white">Additional workflows</p>
        <div className="space-y-1">
          <Link className="block transition-colors hover:text-[#22C55E]" href="/stock-count">
            Stock Count
          </Link>
          <Link className="block transition-colors hover:text-[#22C55E]" href="/delivery">
            Delivery Reception
          </Link>
        </div>
      </div>
    </aside>
  );
}
