import Layout from "@/features/dashboard/common/Layout";
import { columns } from "@/features/delivery management/DeliveryManagementColumns";
import data from "@/features/delivery management/DeliveryManagementData";
import { DataTableV2 } from "@/components/ui/data-table-v2";
 
const DeliveryRecordsPage = () => {
  return (
    <Layout title="Delivery Records">
      <DataTableV2 columns={columns} data={data} filterableColumnId="id" />
    </Layout>
  );
};

export default DeliveryRecordsPage;
