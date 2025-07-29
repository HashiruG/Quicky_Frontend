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
import { BlacklistColumns } from "./BlacklistColumns";

type LicenseDetailsProps = {
  data: BlacklistColumns;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const LicenseDetails: React.FC<LicenseDetailsProps> = ({
  data,
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
          <DialogDescription>
            Here's license details about {data.firstName + " " + data.lastName}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-1">
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

export default LicenseDetails;
