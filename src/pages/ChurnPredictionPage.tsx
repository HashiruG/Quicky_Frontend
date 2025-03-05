import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ChurnPredictionTable from "@/features/dashboard/churn prediction/ChurnPredictionTable";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";


const ChurnPredictionPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div>
          <SidebarProvider>
            <SideBarComponent />
            <SidebarTrigger className="mt-4 mx-2 md:hidden z-50" />
          </SidebarProvider>
        </div>

        <div className="flex flex-col mt-16 w-full">
          <div className="flex justify-center md:justify-start p-8">
            <h1 className="text-4xl font-semibold">Churn Predictions</h1>
          </div>
          <div className="flex mx-7">
            <ChurnPredictionTable></ChurnPredictionTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurnPredictionPage;
