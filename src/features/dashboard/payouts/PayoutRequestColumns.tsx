import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type PayoutRequest = {
  payoutId: number;
  amount: number;
  requestedAt: string;
  driverName: string;
};

export const columns = (
  onAccept: (id: number) => void,
  onReject: (id: number) => void
): ColumnDef<PayoutRequest>[] => [
  {
    accessorKey: "payoutId",
    header: "Payout Id",
  },
  {
    accessorKey: "driverName",
    header: "Driver",
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
    accessorKey: "requestedAt",
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
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payout = row.original;

      return (
        <div className="flex gap-2">
          <Button
            className="bg-green-500 text-white hover:bg-green-700"
            onClick={() => onAccept(payout.payoutId)}
          >
            Accept
          </Button>
          <Button
            variant={"destructive"}
            className="hover:bg-red-700"
            onClick={() => onReject(payout.payoutId)}
          >
            Reject
          </Button>
        </div>
      );
    },
  },
];