"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Boxes, LayoutDashboard, Package, ShoppingBag, Truck } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Orders", href: "/reports", icon: ShoppingBag },
  { name: "Suppliers", href: "/delivery", icon: Truck },
  { name: "Kitchen Lab", href: "/dish-profit", icon: Boxes },
  { name: "Alerts", href: "/alerts", icon: Bell },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 overflow-y-auto bg-[#F1F3FF] p-4 md:flex md:flex-col">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B] text-white">
          <Boxes className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-headline text-lg font-extrabold tracking-tight text-[#613B00]">The Culinary Architect</h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Kitchen HQ</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 ${
                isActive
                  ? "bg-[#F59E0B] font-bold text-white shadow-sm"
                  : "text-slate-600 hover:bg-white/55 hover:text-[#613B00]"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="font-headline text-sm font-semibold tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-2">
        <button
          type="button"
          onClick={() => router.push("/inventory?new=1")}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] py-3 font-bold text-[#613B00] transition-transform hover:scale-[0.98]"
        >
          New Inventory Item
        </button>
      </div>
    </aside>
  );
}
