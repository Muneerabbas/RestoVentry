type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Array<Column<T>>;
  data: T[];
};

export function DataTable<T extends Record<string, unknown>>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1413]/70">
      <table className="w-full">
        <thead className="bg-[#0B0F0E]/90">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-white/10 bg-[#111615]/85 transition-colors duration-200 hover:bg-[#161d1c]"
            >
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td key={column.header} className="px-4 py-3.5 text-sm text-white">
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
