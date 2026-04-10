export default function ActionCenterPage() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="relative col-span-2 flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">Critical Priority</span>
            </div>
            <h1 className="font-headline mb-2 text-4xl font-extrabold tracking-tight text-slate-900">Prime Rib Stock Depleted</h1>
            <p className="max-w-md font-medium text-slate-600">
              Projected shortage for weekend service due to delayed supplier shipment from Northeast Hub.
            </p>
          </div>
          <div className="relative z-10 mt-6 flex gap-3">
            <button className="rounded-xl bg-[#F59E0B] px-6 py-3 text-sm font-bold text-[#613b00] shadow-sm transition-transform hover:scale-[0.99]">
              Redirect Order
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
              Notify Manager
            </button>
          </div>
          <span className="pointer-events-none absolute -bottom-10 -right-10 text-[180px] text-amber-100">!</span>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <div>
            <div className="mb-4 flex items-center gap-2 text-red-500">
              <span className="text-xs font-bold uppercase tracking-wider">Storage Alert</span>
            </div>
            <h3 className="text-2xl font-bold leading-tight text-slate-900">Walk-in Cooler #3 Temperature Fluctuation</h3>
            <p className="mt-2 text-sm text-slate-500">Sensors detected +4°F above threshold for 45 minutes.</p>
          </div>
          <button className="mt-6 w-full rounded-xl border-2 border-red-500 py-3 text-sm font-bold text-red-500 hover:bg-red-50">
            Emergency Protocol
          </button>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex items-center justify-between px-8 py-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Action Center</h2>
            <p className="text-sm text-slate-500">Resolve pending inventory and kitchen logistics issues</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg bg-[#f1f3ff] px-4 py-2 text-sm font-semibold text-slate-600">All Issues</button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 hover:bg-[#f1f3ff]">Resolved</button>
          </div>
        </div>

        <div className="grid grid-cols-12 border-b border-slate-100 px-8 py-4 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
          <div className="col-span-4">Problem Description</div>
          <div className="col-span-4">Primary Reason</div>
          <div className="col-span-2 text-center">Severity</div>
          <div className="col-span-2 text-right">Recommended Action</div>
        </div>

        {[
          ["Organic Basil Spoilage Risk", "High humidity in Prep Station 2", "Critical", "Relocate", "bg-red-100 text-red-700", "bg-red-500"],
          ["Truffle Oil Low Variance", "Unrecorded waste during Saturday rush", "Warning", "Audit", "bg-amber-100 text-amber-700", "bg-[#F59E0B]"],
          ["Dishwashing Detergent Reorder", "Auto-trigger threshold reached (15%)", "Standard", "Approve", "bg-blue-100 text-blue-700", "bg-blue-500"],
          ["Wine Cellar 2 Humidity Drop", "Possible seal failure on Main Entrance", "Critical", "Inspect", "bg-red-100 text-red-700", "bg-red-500"],
          ["Heirloom Tomato Quality Alert", "Supplier batch consistency below Grade A", "Warning", "Dispute", "bg-amber-100 text-amber-700", "bg-[#F59E0B]"],
        ].map(([problem, reason, severity, action, badgeTone, dotTone], i) => (
          <div className={`grid grid-cols-12 items-center px-8 py-5 transition-colors hover:bg-[#f59e0b]/5 ${i % 2 === 1 ? "bg-[#f1f3ff]" : ""}`} key={problem}>
            <div className="col-span-4 flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${dotTone}`} />
              <span className="text-sm font-bold text-slate-900">{problem}</span>
            </div>
            <div className="col-span-4 text-sm italic text-slate-600">{reason}</div>
            <div className="col-span-2 flex justify-center">
              <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${badgeTone}`}>{severity}</span>
            </div>
            <div className="col-span-2 text-right">
              <button className="ml-auto flex items-center gap-1 text-sm font-bold text-[#855300] hover:underline">{action}</button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-3">
          <h3 className="mb-4 text-lg font-bold">Predictive Inventory Insights</h3>
          <div className="flex h-32 w-full items-end gap-2 px-2">
            {[60, 40, 85, 55, 70, 30, 90, 45].map((h, idx) => (
              <div
                key={idx}
                className={`flex-1 rounded-t-lg transition-colors duration-200 ${idx === 3 ? "bg-[#f59e0b]/30 hover:bg-[#f59e0b]/45" : "bg-[#f1f3ff] hover:bg-[#f59e0b]/25"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Historical data suggests a 15% increase in poultry requirements for next Wednesday&apos;s gala.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10 text-[#855300]">✓</div>
            <h4 className="font-bold text-slate-900">Kitchen Efficiency</h4>
            <p className="mt-1 text-3xl font-black text-[#855300]">94%</p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Top 5% of Region</p>
            <button className="mt-4 text-xs font-bold text-[#855300] underline">View Full Analytics</button>
          </div>
        </div>
      </section>
    </div>
  );
}
