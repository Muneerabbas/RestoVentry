type Column<T> = {
  key: keyof T;
  header: string;
  /** Right-align for currency and numbers */
  align?: "left" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Array<Column<T>>;
  data: T[];
};

export function DataTable<T extends Record<string, unknown>>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <table className="w-full">
        <thead className="bg-[#f1f3ff]/90">
          <tr>
            {columns.map((column) => {
              const right = column.align === "right";
              return (
                <th
                  key={column.header}
                  className={`px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 ${right ? "text-right" : "text-left"}`}
                >
                  {column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-slate-100 transition-colors duration-150 hover:bg-[#f9f9ff]"
            >
              {columns.map((column) => {
                const value = row[column.key];
                const right = column.align === "right";
                return (
                  <td
                    key={column.header}
                    className={`px-4 py-3.5 text-sm text-slate-800 ${right ? "text-right font-medium tabular-nums" : ""}`}
                  >
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
