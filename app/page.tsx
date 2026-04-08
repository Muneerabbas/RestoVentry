import { Card } from "@/components/ui/card";
import { dashboardData } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <div>
        <p className="page-kicker">Dashboard</p>
        <h1 className="page-title mt-2 text-white">Morning Service Prep</h1>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
        <Card className="xl:col-span-4" title="Food Cost %" glow>
          <p className="metric-value text-white">{dashboardData.foodCostPercent}%</p>
          <p className="muted-label mt-2">Target &lt; 32.0% for lunch service</p>
          <div className="mt-4 h-2 rounded-full bg-[#1F2A28]">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80]"
              style={{ width: `${dashboardData.foodCostPercent}%` }}
            />
          </div>
        </Card>
        <Card className="xl:col-span-4" title="Revenue / COGS / Waste">
          <div className="space-y-2 text-sm">
            <p className="flex justify-between text-white">
              <span>Revenue</span>
              <span className="font-medium">{dashboardData.revenue}</span>
            </p>
            <p className="flex justify-between text-gray-300">
              <span>COGS</span>
              <span>{dashboardData.cogs}</span>
            </p>
            <p className="flex justify-between text-red-400">
              <span>Waste</span>
              <span>{dashboardData.waste}</span>
            </p>
          </div>
        </Card>
        <Card className="xl:col-span-2" title="Deliveries">
          <p className="metric-value text-white">{dashboardData.deliveriesToday}</p>
          <p className="muted-label mt-2">Expected before 12:00 PM</p>
        </Card>
        <Card className="xl:col-span-2" title="Efficiency %">
          <p className="metric-value text-[#22C55E]">{dashboardData.efficiency}%</p>
          <p className="muted-label mt-2">+2.4% vs yesterday</p>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="Critical Low Stock">
          <ul className="space-y-2.5">
            {dashboardData.lowStock.map((item) => (
              <li key={item} className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1211]/70 px-3 py-2 text-sm text-white">
                <span>{item}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.65)]" />
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Waste Alerts">
          <ul className="space-y-2.5">
            {dashboardData.wasteAlerts.map((alert) => (
              <li className="rounded-xl border border-white/10 bg-[#0B0F0E]/70 p-3 text-sm text-gray-300" key={alert}>
                {alert}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
