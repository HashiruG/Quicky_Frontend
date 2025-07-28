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
import {
  acceptDriver,
  rejectDriver,
} from "@/services/driverManagement/newRegistrations/NewRegistrationsApi";
import LicenseDetails from "./LicenseDetails";

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
        await acceptDriver(data.userDetailsId, data);
        toast.success("Driver accepted", {});
        console.log("Accepted:", data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (actionType === "reject") {
        await rejectDriver(data.userDetailsId);
        toast.error("Driver rejected", {});
        console.log("Rejected:", data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      setAlertOpen(false);
      setOpen(false);
    } catch (error) {
      toast.error("Error occurred while processing.");
    }
  };

  const [licenseDialogOpen, setLicenseDialogOpen] = useState(false);
  const [vehicleDialogOpen, setVehicleDialogOpen] = useState(false);

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
              Here's more information about{" "}
              {data.firstName + " " + data.lastName}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1">
            <p>
              <strong>Registration ID:</strong> {data.userDetailsId}
            </p>
            <p>
              <strong>Name:</strong> {data.firstName + " " + data.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {data.dateOfBirth}
            </p>
            <p>
              <strong>Gender:</strong> {data.gender}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {data.homeNo +
                ", " +
                data.streetName +
                ", " +
                data.city +
                ", " +
                data.district}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${data.email}`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {data.email}
              </a>
            </p>
            <p>
              <strong>Mobile Number:</strong>{" "}
              <a
                href={`tel:${data.mobileNumber}`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {data.mobileNumber}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong>License Details:</strong>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLicenseDialogOpen(true)}
              >
                View
              </Button>
              <LicenseDetails
                data={data}
                open={licenseDialogOpen}
                setOpen={setLicenseDialogOpen}
              />
            </p>
            <p className="flex items-center gap-2">
              <strong>Vehicle Details:</strong>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setVehicleDialogOpen(true)}
              >
                View
              </Button>
              <LicenseDetails
                data={data}
                open={vehicleDialogOpen}
                setOpen={setVehicleDialogOpen}
              />
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
