import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../common/SortButton";
type Delivery = {
  id: string;
  date: string;
  driverName: string;
  pickupLocation: string;
  dropoffLocation: string;
  deliveryValue: number;
  status: string;
  rating: number;
};

export const columns: ColumnDef<Delivery>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortButton column={column} label="Id" />,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <SortButton column={column} label="Date" />,
  },
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "pickupLocation",
    header: "Pickup Location",
  },
  {
    accessorKey: "dropoffLocation",
    header: "Dropoff Location",
  },
  {
    accessorKey: "deliveryValue",
    header: ({ column }) => <SortButton column={column} label="Delivery Value" />,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <SortButton column={column} label="Rating" />,
  },
];