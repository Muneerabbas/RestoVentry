import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { dishProfitRows } from "@/lib/mock-data";

export default function DishProfitPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title text-white">Culinary Economics</h1>
      <Card title="Dish Performance">
        <DataTable
          data={dishProfitRows}
          columns={[
            { key: "dish", header: "Dish name" },
            { key: "cost", header: "Cost" },
            { key: "price", header: "Price" },
            {
              key: "profit",
              header: "Profit",
              render: (value, row) => (
                <span className={row.dish === "Prime Ribeye" ? "text-[#22C55E]" : "text-white"}>{String(value)}</span>
              ),
            },
          ]}
        />
      </Card>
      <Card glow className="max-w-md">
        <p className="text-sm text-gray-400">Top Performer</p>
        <p className="mt-2 text-2xl font-semibold text-[#22C55E]">Prime Ribeye</p>
        <p className="mt-1 text-sm text-gray-300">Highest absolute profit margin this service.</p>
      </Card>
    </div>
  );
}
