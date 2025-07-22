import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import { DataTableV2 } from "@/features/common/data-table-v3";
import {
  columns,
  DeliveryColumns,
} from "@/features/delivery management/DeliveryManagementColumns";
import { getData } from "@/services/deliveryManagement/DeliveryManagementApi";

export default function DeliveryRecordsPage() {
  const [data, setData] = useState<DeliveryColumns[]>([]);

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
        title="Delivery Orders"
        aboveChildren={null}
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
}
