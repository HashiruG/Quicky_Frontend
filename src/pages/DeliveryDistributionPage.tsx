import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import { DataTableV2 } from "@/features/common/data-table-v3";
import { DeliveryDistributionAreaChart } from "@/features/dashboard/dashboard/delivery-distribution/DeliveryDistributionAreaChart";
import {
  columns,
  DeliveryDistributionColumns,
} from "@/features/dashboard/dashboard/delivery-distribution/DeliveryDistributionColumns";
import { getData } from "@/services/dashboard/delivery-distribution/DeliveryDistributionApi";

export default function NewRegistrationsPage() {
  const [data, setData] = useState<DeliveryDistributionColumns[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <Layout
        title="Today Deliveries"
        aboveChildren={
          <DeliveryDistributionAreaChart></DeliveryDistributionAreaChart>
        }
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
}
