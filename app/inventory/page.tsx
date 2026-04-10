"use client";

import { useEffect, useMemo, useState } from "react";
import { StatusPill } from "@/components/ui/status-pill";
import { inventoryItems } from "@/lib/mock-data";

type StockStatus = "OK" | "Low" | "Critical";
type CategoryFilter = "All Stock" | "Perishables" | "Dry Goods" | "Beverages";

type InventoryRow = {
  item: string;
  category: string;
  quantity: number;
  status: StockStatus;
};

export default function InventoryPage() {
  const [rows, setRows] = useState<InventoryRow[]>(inventoryItems as InventoryRow[]);
  const [onlyAttention, setOnlyAttention] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Stock");
  const [openNewModal, setOpenNewModal] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");
  const [newQuantity, setNewQuantity] = useState("0");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("new") === "1") {
      setOpenNewModal(true);
      window.history.replaceState({}, "", "/inventory");
    }
  }, []);

  const visibleRows = useMemo(() => {
    let filtered = rows;
    if (activeCategory === "Perishables") {
      filtered = filtered.filter((row) => row.category === "Protein" || row.category === "Dairy" || row.category === "Produce");
    } else if (activeCategory === "Dry Goods") {
      filtered = filtered.filter((row) => row.category === "Dry Goods");
    } else if (activeCategory === "Beverages") {
      filtered = filtered.filter((row) => row.category === "Beverages");
    }
    if (onlyAttention) {
      filtered = filtered.filter((row) => row.status !== "OK");
    }
    return filtered;
  }, [activeCategory, onlyAttention, rows]);

  const exportCsv = () => {
    const header = "Item Name,Category,In Stock,Unit,Status\n";
    const csvRows = visibleRows
      .map((row) => `${row.item},${row.category},${row.quantity},kg,${row.status}`)
      .join("\n");
    const blob = new Blob([header + csvRows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "inventory-export.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const removeRow = (itemName: string) => {
    setRows((current) => current.filter((row) => row.item !== itemName));
  };

  const addRow = () => {
    const name = newItemName.trim();
    const quantity = Number(newQuantity);
    if (!name || Number.isNaN(quantity)) return;
    const status: StockStatus = quantity <= 12 ? "Critical" : quantity <= 35 ? "Low" : "OK";
    setRows((current) => [{ item: name, category: newCategory, quantity, status }, ...current]);
    setOpenNewModal(false);
    setNewItemName("");
    setNewCategory("Produce");
    setNewQuantity("0");
  };

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-900">Inventory Management</h2>
          <p className="mt-2 text-sm text-slate-500">
            Manage your kitchen assets with surgical precision. 12 items require immediate attention.
          </p>
        </div>
        <div className="col-span-4 flex items-end justify-end gap-3">
          <button
            type="button"
            onClick={() => setOnlyAttention((prev) => !prev)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold shadow-sm ${
              onlyAttention
                ? "border-amber-300 bg-amber-50 text-[#855300]"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          >
            Filter
          </button>
          <button
            type="button"
            onClick={exportCsv}
            className="rounded-xl bg-[#F59E0B] px-6 py-2.5 text-sm font-bold text-[#613b00] shadow-lg shadow-amber-200/50"
          >
            Export CSV
          </button>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Value</p>
          <h3 className="font-headline mt-1 text-4xl font-extrabold text-slate-900">$42,890</h3>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Items</p>
          <h3 className="font-headline mt-1 text-4xl font-extrabold text-slate-900">1,248</h3>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Low Stock</p>
          <h3 className="font-headline mt-1 text-4xl font-extrabold text-slate-900">18</h3>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Suppliers</p>
          <h3 className="font-headline mt-1 text-4xl font-extrabold text-slate-900">24</h3>
        </div>
      </section>

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
          <div className="flex gap-4">
            {(["All Stock", "Perishables", "Dry Goods", "Beverages"] as CategoryFilter[]).map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                className={`pb-1 text-sm ${activeCategory === label ? "border-b-2 border-[#F59E0B] font-bold text-slate-900" : "font-medium text-slate-400"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500">Sort by: Last Updated</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/70">
                <th className="px-8 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Item Name</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Category</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">In Stock</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Unit</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-8 py-4" />
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr className="group border-t border-slate-100 hover:bg-slate-50" key={row.item}>
                  <td className="px-8 py-4 font-bold text-slate-900">{row.item}</td>
                  <td className="px-6 py-4 italic text-slate-600">{row.category}</td>
                  <td className="px-6 py-4">
                    <input
                      className="w-20 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-900"
                      type="number"
                      value={row.quantity}
                      onChange={(event) => {
                        const next = Number(event.target.value);
                        setRows((current) =>
                          current.map((entry) => (entry.item === row.item ? { ...entry, quantity: next } : entry)),
                        );
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 text-slate-500">kg</td>
                  <td className="px-6 py-4">
                    <StatusPill status={row.status} />
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => removeRow(row.item)}
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-200"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {visibleRows.length === 0 ? (
                <tr>
                  <td className="px-8 py-6 text-sm text-slate-400" colSpan={6}>
                    No items match this filter.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
      {openNewModal ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-slate-900/35 backdrop-blur-[2px]"
            onClick={() => setOpenNewModal(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="font-headline text-xl font-extrabold text-slate-900">New Inventory Item</h2>
            <p className="mt-1 text-sm text-slate-500">Add a stock item and it will appear in the table immediately.</p>
            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Item name</label>
                <input
                  value={newItemName}
                  onChange={(event) => setNewItemName(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-300"
                  placeholder="e.g. Mozzarella"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Category</label>
                  <select
                    value={newCategory}
                    onChange={(event) => setNewCategory(event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-300"
                  >
                    <option>Protein</option>
                    <option>Dairy</option>
                    <option>Produce</option>
                    <option>Dry Goods</option>
                    <option>Beverages</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Quantity (kg)</label>
                  <input
                    value={newQuantity}
                    type="number"
                    onChange={(event) => setNewQuantity(event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f9f9ff] px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-300"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenNewModal(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={addRow}
                  className="rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-bold text-[#613B00] shadow-sm"
                >
                  Save item
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
