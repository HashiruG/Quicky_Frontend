import React from "react";

interface DriverStatusProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const DriverStatus: React.FC<DriverStatusProps> = ({ lat, lng, zoom = 15 }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="w-full h-[400px]">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        title="Driver Location"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default DriverStatus;
