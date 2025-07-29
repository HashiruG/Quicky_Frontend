"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { searchDriverLocation } from "@/services/realtime driver status/RealtimeDriverStatusApi";

interface DriverSearchFormProps {
  onLocationFetch: (lat: number, lng: number) => void;
}

const DriverSearchForm: React.FC<DriverSearchFormProps> = ({
  onLocationFetch,
}) => {
  const [driverId, setDriverId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [tempDriverId, setTempDriverId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!driverId) {
      setErrorMsg("Please enter a driver ID.");
      return;
    }

    try {
      const data = await searchDriverLocation(parseInt(driverId));
      console.log("Fetched driver location data:", data);
      if (data && data.length > 0) {
        const { currentLatitude, currentLongitude } = data[0];
        onLocationFetch(currentLatitude, currentLongitude);
      } else {
        setErrorMsg("No location data found for this driver.");
      }
    } catch (error) {
      setErrorMsg("Failed to fetch driver location. Please try again.");
    }

    setTempDriverId(driverId);
    setDriverId("");
  };

  return (
    <>
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
      {tempDriverId != "" && (
        <div className="flex items-center justify-center">
          <div className="pt-8 align-items-center">
            <CardTitle className="text-2xl">
              Location of Driver Id {tempDriverId}
            </CardTitle>
          </div>
        </div>
      )}
    </>
  );
};

export default DriverSearchForm;
