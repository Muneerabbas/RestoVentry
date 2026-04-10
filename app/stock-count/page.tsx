import { Card } from "@/components/ui/card";
import { AiExplanation } from "@/components/ui/ai-explanation";
import { stockCountItems } from "@/lib/mock-data";

export default function StockCountPage() {
  return (
    <div className="space-y-7">
      <h1 className="page-title text-slate-900">Monthly Reconciliation</h1>
      <Card className="p-0">
        <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1.2fr] border-b border-slate-100 px-4 py-3 text-xs uppercase tracking-[0.08em] text-slate-500">
          <p>Item</p>
          <p>Expected</p>
          <p>Actual</p>
          <p>Variance</p>
          <p />
        </div>
        <div className="divide-y divide-slate-100">
          {stockCountItems.map((row) => (
            <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1.2fr] items-center gap-2 px-4 py-3 text-sm hover:bg-slate-50" key={row.item}>
              <p className="text-slate-900">{row.item}</p>
              <p className="text-slate-600">{row.expected}</p>
              <p className="text-slate-600">{row.actual}</p>
              <p className={row.variance < 0 ? "text-red-600" : "text-emerald-600"}>{row.variance}</p>
              <button className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Explain difference</button>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Likely reasons">
        <AiExplanation>
          Most mismatches match a pattern: waste not logged on prep station, overuse in rush periods, or unrecorded staff meal usage.
        </AiExplanation>
      </Card>
    </div>
  );
}
