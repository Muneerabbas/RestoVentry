import { Card } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title text-white">Kitchen Intelligence</h1>
      <section className="grid gap-5 md:grid-cols-3">
        <Card title="Food cost %">
          <p className="text-3xl font-semibold text-white">32.8%</p>
        </Card>
        <Card title="Measured waste $">
          <p className="text-3xl font-semibold text-red-400">$628</p>
        </Card>
        <Card title="Variance %">
          <p className="text-3xl font-semibold text-[#22C55E]">+1.9%</p>
        </Card>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <Card title="Cost Trend (placeholder)">
          <div className="h-56 rounded-xl border border-dashed border-white/15 bg-gradient-to-br from-[#0B0F0E] to-[#121917]" />
        </Card>
        <Card title="Waste Trend (placeholder)">
          <div className="h-56 rounded-xl border border-dashed border-white/15 bg-gradient-to-br from-[#0B0F0E] to-[#121917]" />
        </Card>
      </section>
    </div>
  );
}
