import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  NewRegistrationsColumns,
  columns,
} from "@/features/dashboard/driver-management/new-registrations/NewRegistrationsColumns";
import { DataTableV2 } from "@/features/dashboard/common/data-table-v2";
import { getData } from "@/features/dashboard/driver-management/new-registrations/NewRegistrationsDataSet";

export default function NewRegistrationsPage() {
  const [data, setData] = useState<NewRegistrationsColumns[]>([]);

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
        title="New Registarations"
        aboveChildren={null}
        children={
          <DataTableV2
            columns={columns}
            data={data}
            filterableColumnId="email"
          />
        }
      ></Layout>
    </>
  );
}
