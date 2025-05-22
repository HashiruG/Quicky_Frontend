import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OfferImsge from "../../assets/offer.jpg"
import { Button } from "@/components/ui/button";

interface OfferProps {
  title: string;
  description: string;
  discountPercentage: number;
  startDate: string;
  endDate: string;
  deactivate: () => void;
}

const Offer = (props:OfferProps) => {
  return (
    <Card className="md:w-[300px] w-[90%] ">
      <CardHeader className="flex flex-col items-center justify-center">
        <img className="w-3/5" src={OfferImsge} alt="Offer" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center py-2">
          <h2 className="py-1">
            <span className="font-semibold">Title - </span> 
            {props.title}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Offer Description - </span> 
            {props.description}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Discount percentage on commision - </span>
           {props.discountPercentage} %
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">Start date - </span>
           {props.startDate}
          </h2>
          <h2 className="py-1">
            <span className="font-semibold">End date - </span>
           {props.endDate}
          </h2>
        </div>

        <Button onClick={props.deactivate} className="bg-slate-950">Deactivate</Button>
      </CardContent>
    </Card>
  );
};

export default Offer;
