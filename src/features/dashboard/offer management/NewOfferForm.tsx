import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "./DatePicker";
import { postOfferService } from "@/services/offerManangement/api";

const NewOfferForm = () => {
  const location = useLocation();
  const selectedIds = location.state?.selectedIds || [];

  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedStartDate = startDate?.toISOString().split("T")[0];
    const formattedEndDate = endDate?.toISOString().split("T")[0];

    const offerData = {
      offerTitle,
      offerDescription,
      discountPercentage,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      selectedIds,
    };

    try {
      postOfferService(offerData);

      setOfferTitle("");
      setOfferDescription("");
      setDiscountPercentage("");
      setStartDate(undefined);
      setEndDate(undefined);
    } catch (error) {
      console.error("Error creating offer:", error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Enter Offer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            <div className="grid gap-2">
              <Label htmlFor="title">Offer Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the offer title"
                value={offerTitle}
                onChange={(e) => setOfferTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Offer Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Enter the offer description"
                value={offerDescription}
                onChange={(e) => setOfferDescription(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-10">
              <div className="grid gap-2">
                <Label>Start Date</Label>
                <DatePicker date={startDate} setDate={setStartDate} />
              </div>
              <div className="grid gap-2">
                <Label>End Date</Label>
                <DatePicker date={endDate} setDate={setEndDate} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="value">Discount (%) on Commission</Label>
              <Input
                id="value"
                type="number"
                placeholder="Enter the discount percentage"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Add Offer
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default NewOfferForm;
