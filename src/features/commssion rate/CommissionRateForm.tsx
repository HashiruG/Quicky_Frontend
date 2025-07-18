import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCommissionRateService, postCommissionRateService } from "@/services/commissionRate/api";

const CommissionRateForm = () => {
  const [commissionRate, setCommissionRate] = useState<string>("");
  const [currentCommissionRate, setCurrentCommissionRate] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await getCommissionRateService(); 
        setCurrentCommissionRate(response.data.commissionRate);
      } catch (error) {
        console.error("Error fetching commission rate:", error);
      }
    };

    fetchRate();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rate = Number(commissionRate);
    if (!commissionRate || isNaN(rate) || rate <= 0 || rate > 100) {
      setErrorMsg("Enter a valid commission rate between 1 and 100.");
      return;
    }
    postCommissionRateService({ commissionRate: rate })
      .then(() => {
        setCurrentCommissionRate(rate);
        setCommissionRate("");
        setErrorMsg("");
      })
      .catch((err) => {
        setErrorMsg("Update failed.");
        console.log(err);
        
      });
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-xl">
      <Card className="p-7 sm:w-[30%]">
        <p className="text-md text-slate-500 mb-2">Ongoing Commission Rate</p>
        <h3 className="text-2xl font-semibold text-slate-800">
          {currentCommissionRate !== null ? currentCommissionRate : "--"} %
        </h3>
      </Card>

      <form className="w-full" onSubmit={handleSubmit}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Change Commission Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="rate">New Commission Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  placeholder="Enter new rate"
                  value={commissionRate}
                  onChange={e => {
                    setErrorMsg("");
                    setCommissionRate(e.target.value);
                  }}
                />
              </div>

              <Button type="submit" className="w-full">
                Update Commission Rate
              </Button>
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CommissionRateForm;
