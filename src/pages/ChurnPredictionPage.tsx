import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import { columns,ChurnPredictionColumns } from "@/features/dashboard/churn prediction/ChurnPredictionColumns";
import Layout from "@/features/dashboard/common/Layout";
import { churnPredictionService } from "@/services/churnPrediction/api";
import { useEffect, useState } from "react";
import api from "@/api/api";

const ChurnPredictionPage = () => {
  const [data, setData] = useState<ChurnPredictionColumns>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await churnPredictionService(); 
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
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
};

export default ChurnPredictionPage;
