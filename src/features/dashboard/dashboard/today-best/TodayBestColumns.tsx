import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../../common/SortButton";
import React from "react";
import MoreDriverDetails from "../../../common/MoreDriverDetails";

export type TodayBestColumns = {
  userDetailsId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  homeNo: string;
  streetName: string;
  city: string;
  district: string;
  licenseNumber: string;
  licenseFrontURL: string;
  licenseBackURL: string;
  email: string;
  mobileNumber: string;

  registrationDate: string;
  availability: boolean;
  stripeId: string;
  walletBalance: number;
  rating: number;
  earnings: number;

  // Vehicle fields
  vehicleId: number;
  numberPlate: string;
  vehicleType: string;
  vehicleFrontURL: string;
  vehicleBackURL: string;
  vehicleSideURL: string;
  vehicleRevenueLicenseURL: string;
  vehicleBookURL: string;
};

export const columns: ColumnDef<TodayBestColumns>[] = [
  {
    accessorKey: "userDetailsId",
    header: ({ column }) => <SortButton column={column} label="Driver-Id" />,
    cell: (info) => {
      const row = info.row.original;
      return `${row.userDetailsId}`;
    },
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <SortButton column={column} label="Rating" />,
  },
  {
    accessorKey: "earnings",
    header: ({ column }) => <SortButton column={column} label="Earnings" />,
  },
  {
    accessorKey: "mobileNumber",
    header: "MobileNumber",
  },
  {
    accessorKey: "dateOfBirth",
    header: "DateOfBirth",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const [open, setOpen] = React.useState(false);
      const data = row.original;

      return (
        <MoreDriverDetails
          data={data}
          open={open}
          setOpen={setOpen}
          description1={"Today Earnings:"}
          dataName={"earnings"}
        />
      );
    },
  },
];
