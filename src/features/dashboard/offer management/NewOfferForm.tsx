import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DateRangePicker } from "./DateRangePicker";

const NewOfferForm = () => {
  const [offerInput, setOfferInput] = useState({
    offerTitle: "",
    offerDescription: "",
    offerType: "",
    offerValue: "",
  });

  const handleTypeChange = (value) => {
    setOfferInput((prevValue) => {
      return { ...prevValue, offerType: value };
    });
  };

  const handleTitleChange = (e) => {
    setOfferInput((prevValue) => {
      return { ...prevValue, offerTitle: e.target.value };
    });
  };

  const handleDescriptionChange = (e) => {
    setOfferInput((prevValue) => {
      return { ...prevValue, offerDescription: e.target.value };
    });
  };

  const handleValueChange = (e) => {
    setOfferInput((prevValue) => {
      return { ...prevValue, offerValue: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(offerInput);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-2xl">Enter offer details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8">
              <div className="grid gap-2">
                <Label htmlFor="title">Offer Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter the offer title here"
                  required
                  onChange={handleTitleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Offer Description</Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Enter the offer description here"
                  required
                  onChange={handleDescriptionChange}
                />
              </div>

              <div className="grid gap-2">
                <Label>Offer Validity Range</Label>
                <DateRangePicker></DateRangePicker>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="value">Offer Value</Label>
                <Input
                  id="value"
                  type="number"
                  placeholder="Enter the offer value here"
                  required
                  onChange={handleValueChange}
                />
              </div>

              <Button type="submit" className="w-full">
                Add Offer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default NewOfferForm;
