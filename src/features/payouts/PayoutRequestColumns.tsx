import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export type PayoutRequest = {
  payoutId: string;
  requestDate: string;
  driverName: string;
  amount: number;
  status: string;
  driverMobile: string;
  transactionId: string;
};

export const columns = (): ColumnDef<PayoutRequest>[] => [
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
    enableGlobalFilter: false,
  },
  {
    accessorKey: "driverMobile",
    header: "Driver Mobile",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
    cell: ({ getValue }) => {
      const id = getValue();
      if (!id) return null;
      const url = `https://dashboard.stripe.com/test/connect/transfers/${id}`; 
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-800 underline"
        >
          {String(id)}
        </a>
      );
    },
  },
   {
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => {
    const status = row.getValue("status") as string;

    return (
      <Badge
        variant={status === "Failed" ? "destructive" : "default"}
        className={status === "Failed" ? "bg-red-500 text-white" : "bg-green-500 text-white"}
      >
        {status}
      </Badge>
    );
  },
}
];
