export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Inventory Analytics
        </h1>
        <p className="mt-2 max-w-3xl text-base text-slate-500 md:text-lg">
          Real-time health check of your kitchen stock and financial performance.
        </p>
      </header>

      <section className="grid grid-cols-12 gap-6">
        <div className="relative col-span-12 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-8">
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500">Current Portfolio Value</p>
            <p className="font-headline mt-1 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              $142,850.40
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div className="flex gap-6 md:gap-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active SKU Count</p>
                  <p className="text-2xl font-extrabold text-slate-900">1,204</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Turnover Rate</p>
                  <p className="text-2xl font-extrabold text-slate-900">4.2x</p>
                </div>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-[#855300] md:text-sm">
                +12.5% vs Last Month
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-600">
              %
            </div>
            <span className="rounded-lg bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">Critical</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Monthly Wastage</p>
          <p className="font-headline mt-1 text-3xl font-extrabold text-slate-900 md:text-4xl">$3,412.00</p>
          <p className="mt-4 text-sm font-medium text-[#004966]">8% reduction target in progress</p>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-5">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 md:text-xl">Category Distribution</h3>
            <button type="button" className="text-sm font-bold text-[#855300] hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-5">
            {[
              ["Fresh Produce", "$42.4k", "w-[75%]", "bg-[#f59e0b]"],
              ["Premium Meats", "$38.1k", "w-[65%]", "bg-[#855300]"],
              ["Dairy & Poultry", "$22.9k", "w-[45%]", "bg-[#ffcb8f]"],
              ["Dry Goods", "$18.2k", "w-[35%]", "bg-[#ffd89f]"],
            ].map(([name, value, width, tone]) => (
              <div key={name}>
                <div className="mb-1.5 flex justify-between text-sm font-bold text-slate-900">
                  <span>{name}</span>
                  <span>{value}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#f1f3ff]">
                  <div className={`h-full rounded-full ${width} ${tone}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-extrabold text-slate-900 md:text-xl">Stock Priority Alerts</h3>
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Today</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-[#855300]">This Week</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["Organic Cage-Free Eggs", "supplier: Valley Farm", "12 Units", "text-red-600"],
              ["White Truffle Oil (Premium)", "supplier: Gourmet Import Co.", "2 Units", "text-[#855300]"],
              ["Arborio Risotto Rice", "supplier: Pasta King", "85 Units", "text-[#004966]"],
            ].map(([item, vendor, stock, tone]) => (
              <div className="flex items-center justify-between rounded-xl bg-[#f9f9ff] p-3" key={item}>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item}</p>
                  <p className="text-xs text-slate-400">{vendor}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Stock</p>
                  <p className={`text-base font-bold ${tone}`}>{stock}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-xl border-2 border-dashed border-slate-200 py-2.5 text-sm font-bold text-slate-400"
          >
            Generate Restock List
          </button>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-4">
          <h3 className="text-lg font-extrabold text-slate-900 md:text-xl">Supplier Reliability</h3>
          <p className="mt-2 text-sm text-slate-500">98% on-time delivery across 12 partners.</p>
        </div>
        <div className="col-span-12 rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-8">
          <h3 className="text-lg font-extrabold text-slate-900 md:text-xl">Inventory Prediction</h3>
          <p className="mt-2 text-sm text-slate-500">Demand forecast aligned for upcoming service period.</p>
        </div>
      </section>
    </div>
  );
}
