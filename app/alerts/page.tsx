import { Card } from "@/components/ui/card";
import { groupedAlerts } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <div className="space-y-7">
      <h1 className="page-title text-slate-900">Critical Alerts</h1>
      {Object.entries(groupedAlerts).map(([group, items]) => (
        <Card key={group} title={group}>
          <div className="space-y-2.5">
            {items.map((item) => (
              <div className="rounded-xl bg-slate-50 p-3" key={item.problem}>
                <p className="text-sm font-medium text-slate-900">{item.problem}</p>
                <p className="mt-1 text-sm text-slate-500">{item.why}</p>
                <button className="mt-2 rounded-md bg-white px-2 py-1 text-xs text-slate-700 shadow-sm">{item.action}</button>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
