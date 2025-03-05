import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "../../../../components/ui/column-header";

export type NewRegistrationsColumns = {
  serialNumber: string;
  name: string;
  email: string;
};

export const columns: ColumnDef<NewRegistrationsColumns>[] = [
  {
    accessorKey: "serialNumber",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Serial Number" />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
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
