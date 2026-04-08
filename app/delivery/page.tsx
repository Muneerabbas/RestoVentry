import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { deliveryItems } from "@/lib/mock-data";

export default function DeliveryPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title text-white">Delivery Reception</h1>
      <Card title="Upload invoice">
        <div className="rounded-2xl border border-dashed border-white/15 bg-[#0B0F0E]/70 p-10 text-center text-sm text-gray-400 transition-colors hover:bg-[#101514]">
          Drag and drop invoice PDF or click to upload
        </div>
      </Card>
      <Card title="Extracted items">
        <DataTable
          data={deliveryItems}
          columns={[
            { key: "item", header: "Item" },
            { key: "qty", header: "Quantity" },
            { key: "unitPrice", header: "Unit Price" },
            { key: "amount", header: "Amount" },
          ]}
        />
      </Card>
      <div className="glass-surface flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 p-4">
        <p className="text-lg text-white">
          Total Amount: <span className="font-semibold">$338.40</span>
        </p>
        <button className="rounded-2xl border border-[#22C55E]/45 bg-gradient-to-r from-[#22C55E]/18 to-[#22C55E]/5 px-4 py-2 text-sm font-medium text-[#22C55E] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#22C55E]/25 hover:to-[#22C55E]/10">
          Confirm delivery
        </button>
      </div>
    </div>
  );
}
