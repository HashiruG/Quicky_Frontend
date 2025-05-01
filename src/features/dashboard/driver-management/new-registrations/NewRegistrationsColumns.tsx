import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../common/SortButton";
import React from "react";
import { NewRegistrationsColumns } from "./types";
import MoreDriverRegistrationDetails from "./MoreDriverRegistrationDetails";

export const columns: ColumnDef<NewRegistrationsColumns>[] = [
  {
    accessorKey: "serialNumber",
    header: ({ column }) => (
      <SortButton column={column} label="Serial number" />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
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
