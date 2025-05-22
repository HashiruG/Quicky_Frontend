import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import {
  InactiveDriversColumns,
  columns,
} from "@/features/dashboard/dashboard/inactive-drivers/InactiveDriversColumns";
import { DataTableV2 } from "@/features/common/data-table-v2";
import { getData } from "@/features/dashboard/dashboard/inactive-drivers/InactiveDriversDataSet";
import { InactiveDriversPieChart } from "@/features/dashboard/dashboard/inactive-drivers/InactiveDriversPieChart";

export default function InactiveDriversPagePage() {
  const [data, setData] = useState<InactiveDriversColumns[]>([]);

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
        title="Inactive Drivers"
        aboveChildren={<InactiveDriversPieChart></InactiveDriversPieChart>}
        children={
          <DataTableV2 columns={columns} data={data} filterableColumnId="id" />
        }
      ></Layout>
    </>
  );
}
