import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { stockCountItems } from "@/lib/mock-data";

export default function StockCountPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title text-white">Stock Count</h1>
      <Card>
        <DataTable
          data={stockCountItems}
          columns={[
            { key: "item", header: "Item" },
            { key: "expected", header: "Expected" },
            { key: "actual", header: "Actual" },
            {
              key: "variance",
              header: "Variance",
              render: (value) => (
                <span className={Number(value) < 0 ? "text-red-400" : "text-[#22C55E]"}>{String(value)}</span>
              ),
            },
          ]}
        />
      </Card>
      <Card title="Summary" className="max-w-md" glow>
        <p className="text-sm text-gray-400">Issues detected</p>
        <p className="mt-1 text-2xl font-semibold text-white">3</p>
        <p className="mt-4 text-sm text-gray-400">Total variance $</p>
        <p className="mt-1 text-2xl font-semibold text-red-400">-$1,240</p>
      </Card>
    </div>
  );
}
