import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import data from "@/features/dashboard/churn prediction/ChurnPredictionData";
import { columns } from "@/features/dashboard/churn prediction/ChurnPredictionColumns";
import Layout from "@/features/dashboard/common/Layout";

const ChurnPredictionPage = () => {
  return (
    <>
      <Layout
        title="Churn Predictions"
        aboveChildren={null}
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
};

export default ChurnPredictionPage;
