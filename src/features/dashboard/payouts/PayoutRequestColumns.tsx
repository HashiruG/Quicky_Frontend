import { Button } from "@/components/ui/button";
import {
  acceptPayoutService,
  rejectPayoutService,
} from "@/services/payouts/api";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type PayoutRequest = {
  payoutId: number;
  amount: number;
  requestedAt: string;
  driverName: string;
};

export const columns: ColumnDef<PayoutRequest>[] = [
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "requestedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Requested At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payout = row.original;

      const handleAccept = async () => {
        try {
          await acceptPayoutService(payout.payoutId);
        } catch (error) {
          console.error("Accept failed", error);
        }
      };

      const handleReject = async () => {
        try {
          await rejectPayoutService(payout.payoutId);
        } catch (error) {
          console.error("Reject failed", error);
        }
      };

      return (
        <div className="flex gap-2">
          <Button className="bg-green-500 text-white hover:bg-green-700" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant={"destructive"} onClick={handleReject} className="hover:bg-red-700">
            Reject
          </Button>
        </div>
      );
    },
  },
];
