import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../common/SortButton";
export type DeliveryColumns = {
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

export const columns: ColumnDef<DeliveryColumns>[] = [
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
    accessorKey: "Name",
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
    accessorKey: "deliveryStatus",
    header: "Delivery-Status",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <SortButton column={column} label="Rating" />,
  },
];
