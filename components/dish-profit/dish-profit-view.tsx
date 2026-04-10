"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Plus, TrendingDown, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import type { DishProfitRow } from "@/lib/mock-data";

type DishProfitViewProps = {
  initialRows: DishProfitRow[];
};

export function DishProfitView({ initialRows }: DishProfitViewProps) {
  const [rows, setRows] = useState<DishProfitRow[]>(() => [...initialRows]);
  const [open, setOpen] = useState(false);
  const [dishName, setDishName] = useState("");
  const [costInput, setCostInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const titleId = useId();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setError(null);
    setDishName("");
    setCostInput("");
    setPriceInput("");
  }, []);

  useEffect(() => {
    if (!open) return;
    nameInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const avgProfit =
    rows.length === 0 ? 0 : Math.round(rows.reduce((sum, r) => sum + r.profit, 0) / rows.length);
  const belowTarget = rows.filter((r) => r.profit < 80).length;
  const top = rows.length === 0 ? null : rows.reduce((a, b) => (a.profit >= b.profit ? a : b));

  function addDish(e: React.FormEvent) {
    e.preventDefault();
    const name = dishName.trim();
    const cost = Number(costInput);
    const price = Number(priceInput);
    if (!name) {
      setError("Enter a dish name.");
      return;
    }
    if (!Number.isFinite(cost) || cost < 0) {
      setError("Cost must be zero or a positive number.");
      return;
    }
    if (!Number.isFinite(price) || price < 0) {
      setError("Price must be zero or a positive number.");
      return;
    }
    const profit = Math.round((price - cost) * 100) / 100;
    setRows((prev) => [...prev, { dish: name, cost, price, profit }]);
    close();
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Dish Profit
          </h1>
          <p className="mt-2 max-w-2xl text-base text-slate-500">
            Cost, price, and margin by dish so you can tune the menu without guessing. Add rows here for now —
            they stay in this browser session until you plug in a database.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-bold text-[#613B00] shadow-sm transition-transform hover:scale-[0.99] active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" aria-hidden />
          Add dish
        </button>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Avg profit / dish</p>
          <p className="mt-1 font-headline text-2xl font-extrabold tabular-nums text-slate-900">₹{avgProfit}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Below ₹80 target</p>
          <p className="mt-1 font-headline text-2xl font-extrabold tabular-nums text-slate-900">
            {belowTarget}{" "}
            <span className="text-base font-semibold text-slate-400">/ {rows.length}</span>
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#855300]">Top performer</p>
          {top ? (
            <>
              <p className="mt-1 font-headline text-lg font-extrabold leading-snug text-[#2a1700]">{top.dish}</p>
              <p className="mt-0.5 text-sm font-semibold tabular-nums text-[#855300]">₹{top.profit} profit</p>
            </>
          ) : (
            <p className="mt-1 text-sm text-slate-500">Add a dish to see rankings.</p>
          )}
        </div>
      </section>

      <Card title="Dish performance">
        <DataTable<DishProfitRow>
          data={rows}
          columns={[
            { key: "dish", header: "Dish name" },
            {
              key: "cost",
              header: "Cost",
              align: "right",
              render: (value) => <span className="text-slate-600">₹{value as number}</span>,
            },
            {
              key: "price",
              header: "Price",
              align: "right",
              render: (value) => <span className="text-slate-600">₹{value as number}</span>,
            },
            {
              key: "profit",
              header: "Profit",
              align: "right",
              render: (value, row) => {
                const p = value as number;
                const price = row.price as number;
                const margin = price > 0 ? Math.round((p / price) * 100) : 0;
                const weak = p < 80;
                return (
                  <div className="inline-flex flex-col items-end gap-0.5">
                    <span className={weak ? "font-bold text-red-600" : "font-bold text-emerald-600"}>₹{p}</span>
                    <span className="text-[11px] font-medium text-slate-400">{margin}% margin</span>
                  </div>
                );
              },
            },
          ]}
        />
      </Card>

      <Card title="Suggested actions">
        <ul className="space-y-3">
          <li className="flex gap-3 rounded-xl border border-slate-100 bg-[#f9f9ff] p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <TrendingUp className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">Mushroom Soup</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                Increase price by <span className="font-semibold tabular-nums text-slate-800">₹20</span> to recover
                margin without changing prep.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl border border-slate-100 bg-[#f9f9ff] p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <TrendingDown className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">Seafood Risotto</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                Reduce portion size by <span className="font-semibold text-slate-800">8%</span> to protect profit if
                price is fixed for the set menu.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <span className="text-xs font-black" aria-hidden>
                ✓
              </span>
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">Chicken Biryani</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                Keep current pricing — highest stable performer this period.
              </p>
            </div>
          </li>
        </ul>
      </Card>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-slate-900/35 backdrop-blur-[2px]"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <h2 id={titleId} className="font-headline text-xl font-extrabold text-slate-900">
              Add dish
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Profit is calculated as price minus cost. Hook this form to Supabase when you are ready to persist data.
            </p>
            <form className="mt-5 space-y-4" onSubmit={addDish}>
              <div>
                <label htmlFor="dish-name" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Dish name
                </label>
                <input
                  ref={nameInputRef}
                  id="dish-name"
                  value={dishName}
                  onChange={(e) => {
                    setError(null);
                    setDishName(e.target.value);
                  }}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm text-slate-900 outline-none ring-amber-400/0 transition-shadow focus:border-amber-300 focus:ring-4 focus:ring-amber-400/25"
                  placeholder="e.g. Dal Makhani"
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="dish-cost" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Cost (₹)
                  </label>
                  <input
                    id="dish-cost"
                    inputMode="decimal"
                    value={costInput}
                    onChange={(e) => {
                      setError(null);
                      setCostInput(e.target.value);
                    }}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm tabular-nums text-slate-900 outline-none ring-amber-400/0 transition-shadow focus:border-amber-300 focus:ring-4 focus:ring-amber-400/25"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="dish-price" className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Price (₹)
                  </label>
                  <input
                    id="dish-price"
                    inputMode="decimal"
                    value={priceInput}
                    onChange={(e) => {
                      setError(null);
                      setPriceInput(e.target.value);
                    }}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm tabular-nums text-slate-900 outline-none ring-amber-400/0 transition-shadow focus:border-amber-300 focus:ring-4 focus:ring-amber-400/25"
                    placeholder="0"
                  />
                </div>
              </div>
              {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-bold text-[#613B00] shadow-sm"
                >
                  Save dish
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
