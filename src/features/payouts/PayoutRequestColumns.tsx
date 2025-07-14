import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type PayoutRequest = {
  payoutId: number;
  requestDate: string;
  driverName: string;
  amount: number;
  status: string;
  driverMobile: string;
  transactionId: string;
};

export const columns = (
): ColumnDef<PayoutRequest>[] => [
  {
    accessorKey: "payoutId",
    header: "Payout Id",
  },
    {
    accessorKey: "requestDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Requested At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
   {
    accessorKey: "driverMobile",
    header: "Driver Mobile",
  },
   {
    accessorKey: "transactionId",
    header: "Transaction ID",
  }
];