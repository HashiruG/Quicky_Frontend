import Layout from "@/features/dashboard/common/Layout";
import { columns } from "@/features/dashboard/payouts/PayoutRequestColumns";
import { PayoutRequestTable } from "@/features/dashboard/payouts/PayOutRequestTable";

const PayoutRequestPage = () => {

    const data = [
        {
        payoutId: "12345",
        driverName: "John Doe",
        amount: 100,
        requestedAt: "2023-10-01",
        },
        {
        payoutId: "67890",
        driverName: "Jane Smith",
        amount: 200,
        requestedAt: "2023-10-02",
        },

    ];

  return (
    <>
      <Layout
        title="Payout Requests"
        aboveChildren={null}
        children={<PayoutRequestTable columns={columns} data={data} />}
      ></Layout>
    </>
  );
};

export default PayoutRequestPage;
