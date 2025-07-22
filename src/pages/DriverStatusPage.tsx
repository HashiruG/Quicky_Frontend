"use client";
import { useState } from "react";
import Layout from "@/features/common/Layout";
import DriverSearchForm from "@/features/realtime driver status/DriverSearchForm";
import DriverStatus from "@/features/realtime driver status/DriverStatus";

export default function DriverStatusPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  return (
    <Layout
      title="Driver Locations"
      aboveChildren={
        <DriverSearchForm
          onLocationFetch={(lat, lng) => setLocation({ lat, lng })}
        />
      }
    >
      {location ? (
        <DriverStatus lat={location.lat} lng={location.lng} />
      ) : (
        <p className="text-center text-gray-500">
          Please search for a driver to view their location on the map.
        </p>
      )}
    </Layout>
  );
}
