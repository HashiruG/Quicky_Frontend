import React from "react";
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

type DriverData = {
  driverId?: string;
  name?: string;
  email?: string;
  rating?: number;
  dateOfBirth?: string;
  registrationDate?: string;
  address?: string;
  mobileNumber?: string;
  earningToday?: number;
};

type MoreDriverDetailsProps = {
  data: DriverData;
  open: boolean;
  setOpen: (open: boolean) => void;
  description1: String;
  dataName?: keyof DriverData;
};

const MoreDriverDetails: React.FC<MoreDriverDetailsProps> = ({
  data,
  open,
  setOpen,
  description1,
  dataName,
}) => {
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
            Here's more information about {data.name}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-1">
          <p>
            <strong>Driver Id:</strong> {data.driverId}
          </p>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating}
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
          {dataName && (
            <p>
              <strong>{description1}</strong> {data[dataName]}
            </p>
          )}
        </div>
        <DialogFooter className="p-0">
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MoreDriverDetails;
