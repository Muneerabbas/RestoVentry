import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { inventoryItems } from "@/lib/mock-data";

export default function InventoryPage() {
  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="page-title text-white">Inventory Shell</h1>
        <button className="rounded-2xl border border-[#22C55E]/45 bg-gradient-to-r from-[#22C55E]/18 to-[#22C55E]/5 px-4 py-2 text-sm font-medium text-[#22C55E] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#22C55E]/25 hover:to-[#22C55E]/10">
          Add Item
        </button>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_310px]">
        <Card>
          <DataTable
            data={inventoryItems}
            columns={[
              { key: "item", header: "Item name" },
              { key: "category", header: "Category" },
              { key: "quantity", header: "Quantity" },
              {
                key: "status",
                header: "Status",
                render: (value) => (
                  <span className={value === "Low" ? "text-red-400" : "text-[#22C55E]"}>{String(value)}</span>
                ),
              },
            ]}
          />
        </Card>
        <Card title="Total inventory value" glow>
          <p className="metric-value text-white">$184,360</p>
          <p className="muted-label mt-2">Par level coverage: 4.8 days</p>
          <div className="mt-4 rounded-xl border border-white/10 bg-[#0b0f0e]/70 px-3 py-2 text-xs text-gray-300">
            High-value proteins: <span className="text-white">$42,910</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
