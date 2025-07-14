import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DriverSearchForm = () => {
  const [driverId, setDriverId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!driverId) {
      setErrorMsg("Please enter a driver ID.");
      return;
    }

    console.log("Searching location for Driver ID:", driverId);

    setDriverId("");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Search Driver Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="driver-id">Driver ID</Label>
              <Input
                id="driver-id"
                type="text"
                placeholder="Enter the driver ID"
                value={driverId}
                onChange={(e) => {
                  setErrorMsg("");
                  setDriverId(e.target.value);
                }}
              />
            </div>

            <Button type="submit" className="w-full">
              Search Location
            </Button>

            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default DriverSearchForm;
