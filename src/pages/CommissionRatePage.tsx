import Layout from "@/features/common/Layout";
import CommissionRateForm from "@/features/commssion rate/CommissionRateForm";

const CommissionRatePage = () => {
  return (
    <Layout
      title="Commission Rate"
      aboveChildren={null}
      children={<CommissionRateForm />}
    />
  );
};

export default CommissionRatePage;
