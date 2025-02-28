import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";
import DeliveryTable from "@/features/delivery management/DeliveryTable";

const DeliveryRecordsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div>
          <SidebarProvider>
            <SideBarComponent />
            <SidebarTrigger className="p-5 md:hidden" />
          </SidebarProvider>
        </div>

        <div className="flex flex-col mt-16 w-full">
          <div className="flex p-8">
            <h1 className="text-4xl font-semibold">Delivery Records</h1>
          </div>
          <div className="flex mx-7">
           <DeliveryTable ></DeliveryTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryRecordsPage;
