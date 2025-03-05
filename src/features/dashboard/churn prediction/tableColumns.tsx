import { ColumnDef } from "@tanstack/react-table";

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
