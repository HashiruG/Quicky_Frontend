import Layout from "@/features/common/Layout";
import { columns } from "@/features/delivery management/DeliveryManagementColumns";
import data from "@/features/delivery management/DeliveryManagementData";
import { DataTableV2 } from "@/features/common/data-table-v2";

const DeliveryRecordsPage = () => {
  return (
    <>
      <Layout
        title="Delivery Records"
        aboveChildren={null}
        children={
          <DataTableV2 columns={columns} data={data} filterableColumnId="id" />
        }
      ></Layout>
    </>
  );
};

export default DeliveryRecordsPage;
