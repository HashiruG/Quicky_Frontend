import ChurnPredictionTable from "@/features/dashboard/churn prediction/ChurnPredictionTable";
import Layout from "@/features/dashboard/common/Layout";

const ChurnPredictionPage = () => {
  return (
    <Layout title="Churn Predictions">
      <ChurnPredictionTable></ChurnPredictionTable>
    </Layout>
  );
};

export default ChurnPredictionPage;
