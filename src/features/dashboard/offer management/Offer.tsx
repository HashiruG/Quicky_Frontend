import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OfferImsge from "../../../assets/offer.jpg";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <Card className="w-1/5">
      <CardHeader>
        <img src={OfferImsge}></img>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center py-2">
          <h2 className="py-1">
            <span className="font-semibold">Description</span> - 15% off on
            commision for each ride
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Eligibility</span> - All drivers
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Duration</span> - 01/02/25 -
            01/03/25
          </h2>
        </div>

        <Button className="bg-slate-950">Deactivate</Button>
      </CardContent>
    </Card>
  );
};

export default Offer;
