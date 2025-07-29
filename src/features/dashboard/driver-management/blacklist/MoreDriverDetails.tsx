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
import { toast } from "sonner";
import ConfirmActionDialog from "../new-registrations/ConfirmActionDialog";
import { BlacklistColumns } from "./BlacklistColumns";
import { blacklistDriver } from "@/services/driverManagement/blacklist/BlacklistApi";
import LicenseDetails from "./LicenseDetails";
import VehicleDetails from "./VehicleDetails";

type MoreDriverDetailsProps = {
  data: BlacklistColumns;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MoreDriverDetails: React.FC<MoreDriverDetailsProps> = ({
  data,
  open,
  setOpen,
}) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleConfirm = async () => {
    try {
      await blacklistDriver(data.userDetailsId, data);
      toast.error("Driver reactivated", {});
      console.log("Reactivated:", data);
      setTimeout(() => {
        window.location.reload();
      }, 2000);

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
          <Button variant="outline" className="h-8 w-12 p-0">
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
                variant="outline"
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
                variant="outline"
                size="sm"
                onClick={() => setVehicleDialogOpen(true)}
              >
                View
              </Button>
              <VehicleDetails
                data={data}
                open={vehicleDialogOpen}
                setOpen={setVehicleDialogOpen}
              />
            </p>
          </div>
          <DialogFooter className="p-0">
            <div className="flex justify-end items-center w-full gap-2 pr-4 pt-4">
              <Button
                onClick={() => {
                  setAlertOpen(true);
                }}
              >
                Reactivate
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
        title="Confirm Reactivate"
        description={`Are you sure you want to reactivate this driver?`}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default MoreDriverDetails;
