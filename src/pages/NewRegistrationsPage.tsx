import Layout from "@/features/common/Layout";
import { useEffect, useState } from "react";
import { columns } from "@/features/dashboard/driver-management/new-registrations/NewRegistrationsColumns";
import { DataTableV2 } from "@/features/common/data-table-v3";
import { NewRegistrationsColumns } from "@/features/dashboard/driver-management/new-registrations/types";
import { getData } from "@/services/driverManagement/newRegistrations/NewRegistrationsApi";

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
        title="New Registrations"
        aboveChildren={null}
        children={<DataTableV2 columns={columns} data={data} />}
      ></Layout>
    </>
  );
}
