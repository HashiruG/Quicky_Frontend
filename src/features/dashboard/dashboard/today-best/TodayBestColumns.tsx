import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../../common/SortButton";
import React from "react";
import MoreDriverDetails from "../../common/MoreDriverDetails";

export type TodayBestColumns = {
  id: string;
  name: string;
  email: string;
  earningToday: number;
};

export const columns: ColumnDef<TodayBestColumns>[] = [
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
    accessorKey: "earningToday",
    header: ({ column }) => <SortButton column={column} label="earning" />,
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
          dataName={"earningToday"}
        />
      );
    },
  },
];
