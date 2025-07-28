import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewRegistrationsColumns } from "./types";

type VehicleDetailsProps = {
  data: NewRegistrationsColumns;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const VehicleDetails: React.FC<VehicleDetailsProps> = ({
  data,
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Vehicle Details</DialogTitle>
          <DialogDescription>
            Here's vehicle details about {data.firstName + " " + data.lastName}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <p>
            <strong>Vehicle ID:</strong> {data.vehicleId}
          </p>
          <p>
            <strong>Number Plate:</strong> {data.numberPlate}
          </p>
          <p>
            <strong>Vehicle Type:</strong> {data.vehicleType}
          </p>
          <p>
            <strong>Front Image:</strong>{" "}
            <a
              href={data.vehicleFrontURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
          <p>
            <strong>Back Image:</strong>{" "}
            <a
              href={data.vehicleBackURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
          <p>
            <strong>Side Image:</strong>{" "}
            <a
              href={data.vehicleSideURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
          <p>
            <strong>Revenue License:</strong>{" "}
            <a
              href={data.vehicleRevenueLicenseURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
          <p>
            <strong>Vehicle Book:</strong>{" "}
            <a
              href={data.vehicleBookURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
        </div>
        <DialogFooter className="p-0">
          <div className="flex justify-end w-full pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetails;
