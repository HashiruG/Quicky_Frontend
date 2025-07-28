import Layout from "@/features/common/Layout";
import {
  getAdminColumns,
  RegisteredAdminsColumns,
} from "@/features/authentication/RegisteredAdminsColumns";
import { RegisteredAdminsTable } from "@/features/authentication/RegisteredAdminsTable";
import { getAdminsService,removeAdminService } from "@/services/authentication/api";
import { useEffect, useState } from "react";

const RegisteredAdminsPage = () => {
  const [data, setData] = useState<RegisteredAdminsColumns[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAdminsService();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  async function handleRemove(username: string) {
    try {
      await removeAdminService(username); 
      setData((old) => old.filter((admin) => admin.username !== username));
    } catch (error) {
      console.log(error);

    }
  }


  const columns = getAdminColumns(handleRemove);

  return (
    <Layout
      title="Registered Admins"
      aboveChildren={null}
      children={<RegisteredAdminsTable columns={columns} data={data} />}
    />
  );
};

export default RegisteredAdminsPage;
