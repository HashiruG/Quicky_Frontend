// RegisteredAdminsColumns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {Trash2} from "lucide-react";

export type RegisteredAdminsColumns = {
  name: string;
  username: string;
  role: string;
};

export function getAdminColumns(
  onRemove: (username: string) => void
): ColumnDef<RegisteredAdminsColumns>[] {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          variant={"secondary"}
          size="sm"
          onClick={() => onRemove(row.original.username)}
        >
          <Trash2 size={16} />
          
        </Button>
      ),
    },
  ];
}
