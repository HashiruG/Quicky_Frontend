import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

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
  },
];
