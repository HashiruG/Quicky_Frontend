import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import SortButton from "../../common/SortButton";

export type NewRegistrationsColumns = {
  serialNumber: string;
  name: string;
  email: string;
};

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
    cell: () => {
      return (
        <Button variant="ghost" className="h-8 w-12 p-0">
          <span>View</span>
        </Button>
      );
    },
  },
];
