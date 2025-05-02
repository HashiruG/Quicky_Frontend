import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import SortButton from "../../common/SortButton";

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
    cell: () => {
      return (
        <Button variant="ghost" className="h-8 w-12 p-0">
          <span>View</span>
        </Button>
      );
    },
  },
];
