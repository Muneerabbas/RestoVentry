type Status = "OK" | "Low" | "Critical";

const tone: Record<Status, string> = {
  OK: "bg-zinc-700/60 text-zinc-200",
  Low: "bg-amber-500/20 text-amber-300",
  Critical: "bg-red-500/20 text-red-300",
};

export function StatusPill({ status }: { status: Status }) {
  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${tone[status]}`}>{status}</span>;
}
