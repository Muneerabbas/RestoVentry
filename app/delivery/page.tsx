"use client";

import { useMemo, useState } from "react";
import { Camera, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { deliveryItems } from "@/lib/mock-data";

export default function DeliveryPage() {
  const [rows, setRows] = useState(deliveryItems);
  const total = useMemo(() => rows.reduce((sum, row) => sum + row.amount, 0), [rows]);

  const updateRow = (index: number, key: "qty" | "unitPrice", value: number) => {
    setRows((current) =>
      current.map((row, i) => {
        if (i !== index) return row;
        const updated = { ...row, [key]: value };
        return { ...updated, amount: Number((updated.qty * updated.unitPrice).toFixed(2)) };
      }),
    );
  };

  return (
    <div className="space-y-7">
      <h1 className="page-title text-slate-900">Delivery Reception</h1>
      <Card title="Invoice Scan">
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <div className="mx-auto mb-3 flex w-fit gap-2">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-100">
              <Upload className="mr-1 inline h-4 w-4" />
              Upload invoice
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-100">
              <Camera className="mr-1 inline h-4 w-4" />
              Use camera
            </button>
          </div>
          <p className="text-sm text-slate-500">PDF or photo supported. We auto-extract line items.</p>
        </div>
      </Card>
      <Card title="Extracted items">
        <div className="space-y-2">
          {rows.map((row, index) => (
            <div className="grid grid-cols-[2fr_0.8fr_0.8fr_0.8fr] items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-slate-50" key={row.item}>
              <p className="text-slate-900">{row.item}</p>
              <input
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-900"
                type="number"
                value={row.qty}
                onChange={(event) => updateRow(index, "qty", Number(event.target.value))}
              />
              <input
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-900"
                type="number"
                value={row.unitPrice}
                onChange={(event) => updateRow(index, "unitPrice", Number(event.target.value))}
              />
              <p className="text-slate-600">${row.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Card>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-lg text-slate-900">
          Total Amount: <span className="font-semibold">${total.toFixed(2)}</span>
        </p>
        <button className="rounded-xl bg-[#F59E0B] px-4 py-2 text-sm font-bold text-[#613b00] transition hover:scale-[0.98]">
          Confirm delivery
        </button>
      </div>
    </div>
  );
}
