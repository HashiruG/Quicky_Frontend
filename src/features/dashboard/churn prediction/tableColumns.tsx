import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"


export type ChurnPrediction = {
  id: string;
  driverId: string;
  driverName: string;
  driverMobile:string;
  earnings: number;
  status: "rewarded" |"not rewarded";

};

export const columns: ColumnDef<ChurnPrediction>[] = [
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
    ),},
  {
    accessorKey: "id",
    header: "Prediction Id",
  },
  {
    accessorKey: "driverId",
    header: "Driver Id",
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "mobileNumber",
    header: "Driver Mobile",
  },
  {
    accessorKey: "earnings",
    header: "Earnings",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
