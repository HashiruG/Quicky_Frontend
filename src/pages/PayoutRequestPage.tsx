import Layout from "@/features/dashboard/common/Layout";
import { columns, PayoutRequest} from "@/features/dashboard/payouts/PayoutRequestColumns";
import { PayoutRequestTable} from "@/features/dashboard/payouts/PayOutRequestTable";
import { acceptPayoutService, getPayoutsService, rejectPayoutService } from "@/services/payouts/api";
import { useEffect, useState } from "react";

const PayoutRequestPage = () => {
  const [data, setData] = useState<PayoutRequest[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPayoutsService()
        setData(response.data);
        console.log("Response data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

   const handleAccept = async (payoutId: number) => {
    try {
      await acceptPayoutService(payoutId);
      setData((prev) => prev.filter((p) => p.payoutId !== payoutId));
    } catch (error) {
      console.error("Accept failed", error);
    }
  };

  const handleReject = async (payoutId: number) => {
    try {
      await rejectPayoutService(payoutId);
      setData((prev) => prev.filter((p) => p.payoutId !== payoutId));
    } catch (error) {
      console.error("Reject failed", error);
    }
  };

  return (
    <>
      <Layout
        title="Payout Requests"
        aboveChildren={null}
        children={<PayoutRequestTable columns={columns(handleAccept,handleReject)} data={data} />}
      ></Layout>
    </>
  );
};

export default PayoutRequestPage;
