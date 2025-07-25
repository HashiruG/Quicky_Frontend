import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge"


export type ChurnPredictionColumns = {
  predictionId: number;
  driverDetailsId: number;
  driverName: string;
  gender: string;
  city: string;
  status: string;
};

export const columns: ColumnDef<ChurnPredictionColumns>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
   {
    accessorKey: "predictionId",
    header: "Prediction Id",
  },
  {
    accessorKey: "driverDetailsId",
    header: "Driver Id",
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "city",
    header: "Based city",
  },
  {
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => {
    const status = row.getValue("status") as string;

    return (
      <Badge
        variant={status === "Not Incentivized" ? "destructive" : "default"}
        className={status === "Not Incentivized" ? "bg-red-500 text-white" : "bg-green-500 text-white"}
      >
        {status}
      </Badge>
    );
  },
}
];
