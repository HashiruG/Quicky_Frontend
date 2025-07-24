import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../../common/SortButton";
import React from "react";
import { NewRegistrationsColumns } from "./types";
import MoreDriverRegistrationDetails from "./MoreDriverRegistrationDetails";

export const columns: ColumnDef<NewRegistrationsColumns>[] = [
  {
    accessorKey: "userDetailsId",
    header: ({ column }) => (
      <SortButton column={column} label="Registration-Id" />
    ),
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
