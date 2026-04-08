import { Card } from "@/components/ui/card";
import { alerts } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title text-white">Critical Alerts</h1>
      <section className="grid gap-5 md:grid-cols-2">
        <Card title="Critical alert message" glow>
          <p className="text-lg text-white">Prawns inventory below emergency threshold.</p>
          <p className="mt-2 text-sm text-gray-400">Immediate purchase required before lunch wave.</p>
        </Card>
        <Card title="Market shift alert">
          <p className="text-lg text-white">Olive oil pricing forecast increased by 11%.</p>
          <p className="mt-2 text-sm text-gray-400">Consider supplier lock-in this week.</p>
        </Card>
      </section>
      <Card title="Past 24 hours">
        <ul className="space-y-3">
          {alerts.map((item) => (
            <li className="rounded-xl border border-white/10 bg-[#0B0F0E]/70 p-3 text-sm text-gray-300" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
