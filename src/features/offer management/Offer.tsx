import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OfferImage from "../../assets/discount.png";
import { Button } from "@/components/ui/button";
import React from "react";

interface OfferProps {
  title: string;
  description: string;
  offerType: string;
  discountPercentage: number;
  startDate: string;
  endDate: string;
  deactivate: () => void;
  children?: React.ReactNode;
}

const Offer = ({
  title,
  description,
  offerType,
  discountPercentage,
  startDate,
  endDate,
  deactivate,
  children,
}: OfferProps) => {
  const isOfferExpired = new Date(endDate) < new Date();
  return (
    <Card className="md:w-[300px] w-[90%] flex flex-col">
      <CardHeader className="flex flex-col items-center justify-center">
        <img className="w-3/5" src={OfferImage} alt="Offer" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-between">
        <div className="flex flex-col justify-center py-2">
          <h2 className="py-1">
            <span className="font-semibold">Title - </span>
            {title}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Offer Description - </span>
            {description}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Offer Type - </span>
            {offerType}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">
              Discount percentage on commission -{" "}
            </span>
            {discountPercentage} %
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Start date - </span>
            {startDate}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">End date - </span>
            {endDate}
          </h2>

          {isOfferExpired && (
            <h3 className="text-red-500  font-semibold pb-2">Offer Expired</h3>
          )}
        </div>

        <div className="mt-1 flex flex-row">
          {children}
          <Button onClick={deactivate} className="bg-slate-900 w-full mx-3">
            Deactivate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Offer;
