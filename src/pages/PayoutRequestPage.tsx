import Layout from "@/features/common/Layout";
import { columns, PayoutRequest } from "@/features/payouts/PayoutRequestColumns";
import { PayoutRequestTable } from "@/features/payouts/PayOutRequestTable";
import { getPayoutsService } from "@/services/payouts/api";
import { useEffect, useState } from "react";

const PayoutRequestPage = () => {
  const [data, setData] = useState<PayoutRequest[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPayoutsService();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Layout
        title="Payout Requests"
        aboveChildren={null}
        children={<PayoutRequestTable columns={columns()} data={data} />}
      ></Layout>
    </>
  );
};

export default PayoutRequestPage;