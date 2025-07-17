import Layout from "@/features/common/Layout";
import DriverSearchForm from "@/features/realtime driver status/DriverSearchForm";
import DriverStatus from "@/features/realtime driver status/DriverStatus";

export default function InactiveDriversPagePage() {
  return (
    <>
      <Layout
        title="Driver Locations"
        aboveChildren={<DriverSearchForm></DriverSearchForm>}
        children={<DriverStatus lat={6.9271} lng={79.8612}></DriverStatus>}
      ></Layout>
    </>
  );
}
