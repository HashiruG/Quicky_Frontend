import { ChurnPredictionTable } from "@/features/churn prediction/ChurnPredictionTable";
import {
  columns,
  ChurnPredictionColumns,
} from "@/features/churn prediction/ChurnPredictionColumns";
import Layout from "@/features/common/Layout";
import { fetchChurnDriverService } from "@/services/churnPrediction/api";
import { useEffect, useState } from "react";

const ChurnPredictionPage = () => {
  const [data, setData] = useState<ChurnPredictionColumns[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchChurnDriverService();
        setData(response.data);
        console.log("Response data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Layout
        title="Churn Predictions"
        aboveChildren={null}
        children={<ChurnPredictionTable columns={columns} data={data} />}
      ></Layout>
    </>
  );
};

export default ChurnPredictionPage;
