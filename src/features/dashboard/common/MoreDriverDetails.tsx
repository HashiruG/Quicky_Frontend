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
  userDetailsId?: number;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  homeNo?: string;
  streetName?: string;
  city?: string;
  district?: string;
  licenseNumber?: string;
  licenseFrontURL?: string;
  licenseBackURL?: string;
  email?: string;
  mobileNumber?: string;

  registrationDate?: string;
  availability?: boolean;
  stripeId?: string;
  walletBalance?: number;
  rating?: number;
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
            Here's more information about {data.firstName + " " + data.lastName}
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
            <strong>License Number:</strong> {data.licenseNumber}
          </p>
          <p>
            <strong>License Front:</strong>{" "}
            <a
              href={data.licenseFrontURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
          </p>
          <p>
            <strong>License Back:</strong>{" "}
            <a
              href={data.licenseBackURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Image
            </a>
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
          <p>
            <strong>Registration Date:</strong> {data.registrationDate ?? "N/A"}
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            {data.availability !== undefined
              ? data.availability
                ? "Available"
                : "Not Available"
              : "N/A"}
          </p>
          <p>
            <strong>Stripe ID:</strong> {data.stripeId ?? "N/A"}
          </p>
          <p>
            <strong>Wallet Balance:</strong>{" "}
            {data.walletBalance !== undefined
              ? `Rs. ${data.walletBalance.toFixed(2)}`
              : "N/A"}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            {data.rating !== undefined ? data.rating.toFixed(1) : "N/A"}
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
