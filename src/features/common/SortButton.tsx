import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Column } from "@tanstack/react-table";

interface SortButtonProps<TData> {
  column: Column<TData>;
  label: string;
}

const SortButton = <TData,>({ column, label }: SortButtonProps<TData>) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-3 h-8 data-[state=open]:bg-accent"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default SortButton;
