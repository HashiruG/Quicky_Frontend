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
  const [selectedRows] = useState(location.state?.selectedRows || []);

  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedStartDate = startDate?.toISOString().split("T")[0];
    const formattedEndDate = endDate?.toISOString().split("T")[0];

    if (
      !offerTitle ||
      !offerDescription ||
      !discountPercentage ||
      !startDate ||
      !endDate
    ) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (endDate < startDate) {
      setErrorMsg("End date must be after start date.");
      return;
    }

    if (endDate < new Date()) {
      setErrorMsg("End date must be in the future.");
      return;
    }

    const discount = parseFloat(discountPercentage);
    if (isNaN(discount) || discount < 1 || discount > 100) {
      setErrorMsg("Discount must be between 1 and 100.");
      return;
    }

    const offerData = {
      offerTitle,
      offerDescription,
      discountPercentage: discount,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      selectedDrivers: selectedRows,
    };

    try {
      await postOfferService(offerData);
      setOfferTitle("");
      setOfferDescription("");
      setDiscountPercentage("");
      setStartDate(undefined);
      setEndDate(undefined);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Error creating offer.");
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
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Offer Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the offer title"
                value={offerTitle}
                onChange={(e) => {
                  setErrorMsg("");
                  setOfferTitle(e.target.value);
                }}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Offer Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Enter the offer description"
                value={offerDescription}
                onChange={(e) => {
                  setErrorMsg("");
                  setOfferDescription(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
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
                type="number
                placeholder="Enter the discount percentage"
                value={discountPercentage}
                onChange={(e) => {
                  setErrorMsg("");
                  setDiscountPercentage(e.target.value);
                }}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Offer
            </Button>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default NewOfferForm;
