import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0B0F0E]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_88%_4%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(15,23,42,0.45),transparent_36%)]" />
      <Sidebar />
      <div className="relative md:ml-72">
        <Topbar />
        <main className="px-4 pb-10 pt-28 md:px-9 md:pt-30">{children}</main>
      </div>
    </div>
  );
}
