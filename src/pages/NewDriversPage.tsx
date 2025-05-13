import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  NewDriversColumns,
  columns,
} from "@/features/dashboard/dashboard/new-drivers/NewDriversColumns";
import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import { getData } from "@/services/dashboard/newDrivers/NewDriversApi";
import { NewDriversBarChart } from "@/features/dashboard/dashboard/new-drivers/NewDriversBarChart";

export default function NewDriversPagePage() {
  const [data, setData] = useState<NewDriversColumns[]>([]);

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
        title="New Drivers"
        aboveChildren={<NewDriversBarChart></NewDriversBarChart>}
        children={
          <DataTableV2
            columns={columns}
            data={data}
            filterableColumnId="Driver-Id"
          />
        }
      ></Layout>
    </>
  );
}
