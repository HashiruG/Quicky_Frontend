import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConfirmActionDialog from "./ConfirmActionDialog";
import { toast } from "sonner";
import { NewRegistrationsColumns } from "./types";
import { acceptDriver, rejectDriver } from "./NewRegistrationsApi";

type MoreDriverRegistrationDetailsProps = {
  data: NewRegistrationsColumns;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MoreDriverRegistrationDetails: React.FC<
  MoreDriverRegistrationDetailsProps
> = ({ data, open, setOpen }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [actionType, setActionType] = useState<"accept" | "reject" | null>(
    null
  );

  const handleConfirm = async () => {
    if (!actionType) return;

    try {
      if (actionType === "accept") {
        await acceptDriver(data.serialNumber, data);
        toast.success("Driver accepted", {});
        console.log("Accepted:", data);
      } else if (actionType === "reject") {
        await rejectDriver(data.serialNumber);
        toast.error("Driver rejected", {});
        console.log("Rejected:", data);
      }

      setAlertOpen(false);
      setOpen(false);
    } catch (error) {
      toast.error("Error occurred while processing.");
    }
  };

  return (
    <>
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
              Here's more information about {data.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1">
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
              <strong>Registration Date:</strong> {data.registrationDate}
            </p>
            <p>
              <strong>Address:</strong> {data.address}
            </p>
            <p>
              <strong>Mobile Number:</strong> {data.mobileNumber}
            </p>
          </div>
          <DialogFooter className="p-0">
            <div className="flex justify-between items-center w-full gap-2 pt-4">
              <Button
                onClick={() => {
                  setActionType("accept");
                  setAlertOpen(true);
                }}
              >
                Accept
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setActionType("reject");
                  setAlertOpen(true);
                }}
              >
                Reject
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ConfirmActionDialog
        open={alertOpen}
        onOpenChange={setAlertOpen}
        title={
          actionType === "accept" ? "Confirm Acceptance" : "Confirm Rejection"
        }
        description={`Are you sure you want to ${actionType} this registration?`}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default MoreDriverRegistrationDetails;
