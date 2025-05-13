import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  TodayBestColumns,
  columns,
} from "@/features/dashboard/dashboard/today-best/TodayBestColumns";
import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import { getData } from "@/services/dashboard/todayBest/EarningsApi";
import { TodayBestAreaChart } from "@/features/dashboard/dashboard/today-best/TodayBestAreaChart";

export default function NewRegistrationsPage() {
  const [data, setData] = useState<TodayBestColumns[]>([]);

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
        title="Today best"
        aboveChildren={<TodayBestAreaChart></TodayBestAreaChart>}
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
