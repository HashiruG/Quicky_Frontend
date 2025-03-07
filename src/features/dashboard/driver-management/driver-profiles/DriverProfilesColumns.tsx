import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import SortButton from "../../common/SortButton";

export type DriverProfilesColumns = {
  id: string;
  name: string;
  email: string;
  rating: number;
};

export const columns: ColumnDef<DriverProfilesColumns>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortButton column={column} label="Id" />,
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
    cell: () => {
      return (
        <Button variant="ghost" className="h-8 w-12 p-0">
          <span>View</span>
        </Button>
      );
    },
  },
];
