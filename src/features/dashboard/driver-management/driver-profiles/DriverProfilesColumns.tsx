"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../../common/SortButton";
import React from "react";
import MoreDriverRegistrationDetails from "./MoreDriverRegistrationDetails";

export type DriverProfilesColumns = {
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
};

export const columns: ColumnDef<DriverProfilesColumns>[] = [
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
    accessorKey: "Name",
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
        <MoreDriverRegistrationDetails
          data={data}
          open={open}
          setOpen={setOpen}
        />
      );
    },
  },
];
