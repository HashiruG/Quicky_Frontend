import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../common/SortButton";
import MoreDriverDetails from "../../common/MoreDriverDetails";
import React from "react";

export type NewDriversColumns = {
  driverId: string;
  name: string;
  email: string;
  rating: number;
};

export const columns: ColumnDef<NewDriversColumns>[] = [
  {
    accessorKey: "driverId",
    header: ({ column }) => <SortButton column={column} label="driverId" />,
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
    accessorKey: "rating",
    header: ({ column }) => <SortButton column={column} label="Rating" />,
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
          description1={""}
          dataName={undefined}
        />
      );
    },
  },
];
