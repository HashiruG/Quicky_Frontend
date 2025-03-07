import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface ColumnFilterInputProps<TData> {
  table: Table<TData>;
  columnId: string;
  placeholder?: string;
}

const ColumnFilterInput = <TData,>({
  table,
  columnId,
  placeholder = "Search...",
}: ColumnFilterInputProps<TData>) => {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(columnId)?.setFilterValue(event.target.value)
      }
      className="max-w-xs"
    />
  );
};

export default ColumnFilterInput;
