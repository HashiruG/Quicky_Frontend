import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import SortButton from "../common/SortButton";


export type ChurnPredictionColumns = {
  driverId: string;
  name: string;
  rating: number;
  mobileNumber: string;
  registrationDate: string;
  totalEarnings: number;
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
    ),},

  {
    accessorKey: "driverId",
    header: "Driver Id",
  },
  {
    accessorKey: "name",
    header: "Driver Name",
  },
  {
    accessorKey: "rating",
    header: "Driver Rating",
  },
  {
    accessorKey: "mobileNumber",
    header: "Driver Mobile",
  },
  {
    accessorKey: "registrationDate",
    header: "Registration Date",
  },
  {
    accessorKey: "totalEarnings",
    header: ({ column }) => <SortButton column={column} label="Earnings" />,
    },
];
