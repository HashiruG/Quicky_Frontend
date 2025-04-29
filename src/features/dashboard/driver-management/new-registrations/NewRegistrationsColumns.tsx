import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import SortButton from "../../common/SortButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";

export type NewRegistrationsColumns = {
  serialNumber: string;
  name: string;
  email: string;
  dateOfBirth: string;
  registrationDate: string;
  address: string;
  mobileNumber: string;
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
    cell: ({ row }) => {
      const [open, setOpen] = React.useState(false);
      const data = row.original;

      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="h-8 w-12 p-0">
              <span>View</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Details</DialogTitle>
              <DialogDescription>
                Here's more information about this row...
              </DialogDescription>
            </DialogHeader>
            <div>
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Date of birth:</strong> {data.dateOfBirth}
              </p>
              <p>
                <strong>Registration Date:</strong> {data.email}
              </p>
              <p>
                <strong>Address:</strong> {data.address}
              </p>
              <p>
                <strong>Mobile Number:</strong> {data.mobileNumber}
              </p>
            </div>
            <DialogFooter className="p-0">
              <div className="flex justify-between items-center w-full gap-2">
                <Button type="submit">Accept</Button>
                <Button type="submit" variant="secondary">
                  Reject
                </Button>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
