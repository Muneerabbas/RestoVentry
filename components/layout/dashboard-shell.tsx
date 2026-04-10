import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { VoiceFab } from "@/components/ui/voice-fab";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#f9f9ff]">
      <Sidebar />
      <div className="relative md:ml-64">
        <Topbar />
        <main className="min-h-screen px-8 pb-12 pt-24">{children}</main>
      </div>
      <VoiceFab />
    </div>
  );
}
