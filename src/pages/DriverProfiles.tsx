import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  DriverProfilesColumns,
  columns,
} from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesColumns";
import { DataTableV2 } from "@/components/ui/data-table-v2";
import { getData } from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesDataSet";

export default function DriverProfiles() {
  const [data, setData] = useState<DriverProfilesColumns[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <Layout title="Driver Profiles">
      <DataTableV2 columns={columns} data={data} filterableColumnId="id" />
    </Layout>
  );
}
