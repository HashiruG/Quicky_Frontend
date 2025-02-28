import { ColumnDef } from "@tanstack/react-table";

export type Delivery = {
  id: string;
  driverName: string;
  pickupLocation: string;
  dropoffLocation: string;
  deliveryValue: number;
  status: "pending" | "completed" | "not completed";
  rating: number;
};

export const columns: ColumnDef<Delivery>[] = [
  {
    accessorKey: "id",
    header: "Delivery Id",
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
    header: "Drop Off Location",
  },
  {
    accessorKey: "deliveryValue",
    header: "Delivery Value",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
];
