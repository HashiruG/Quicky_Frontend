import SortButton from "@/features/common/SortButton";
import { ColumnDef } from "@tanstack/react-table";

export type DeliveryDistributionColumns = {
  lastName: string;
  firstName: string;
  id: string;
  date: string;
  pickupLocation: string;
  dropoffLocation: string;
  deliveryValue: number;
  status: string;
  rating: number;
};

export const columns: ColumnDef<DeliveryDistributionColumns>[] = [
  {
    accessorKey: "deliveryId",
    header: ({ column }) => <SortButton column={column} label="Delivery-Id" />,
  },
  {
    accessorKey: "deliveryDate",
    header: ({ column }) => <SortButton column={column} label="Date" />,
  },
  {
    header: "Name",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    id: "fullName",
    cell: (info) => {
      const row = info.row.original;
      return `${row.firstName} ${row.lastName}`;
    },
  },
  {
    accessorKey: "pickupLocation",
    header: "Pickup Location",
  },
  {
    accessorKey: "dropOffLocation",
    header: "Dropoff Location",
  },
  {
    accessorKey: "deliveryFee",
    header: ({ column }) => <SortButton column={column} label="DeliveryFee" />,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <SortButton column={column} label="Rating" />,
  },
  {
    accessorKey: "deliveryStatus",
    header: "Delivery-Status",
  },
];
