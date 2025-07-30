import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import { DataTableV2 } from "@/features/common/data-table-v3";
import {
  BlacklistColumns,
  columns,
} from "@/features/dashboard/driver-management/blacklist/BlacklistColumns";
import { getData } from "@/services/driverManagement/blacklist/BlacklistApi";

export default function BlacklistPage() {
  const [data, setData] = useState<BlacklistColumns[]>([]);

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
        title="Blacklisted Drivers"
        aboveChildren={null}
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
}
