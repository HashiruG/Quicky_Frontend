import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  DriverProfilesColumns,
  columns,
} from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesColumns";
import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import { getData } from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesApi";

export default function DriverProfilesPage() {
  const [data, setData] = useState<DriverProfilesColumns[]>([]);

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
        title="Driver Profiles"
        aboveChildren={null}
        children={
          <DataTableV2
            columns={columns}
            data={data}
            filterableColumnId="driverId"
          />
        }
      ></Layout>
    </>
  );
}
