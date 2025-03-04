import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";
import Offer from "@/features/dashboard/offer management/Offer";

const OngoingOffersPage = () => {
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

        <div className="flex flex-col mt-16">
          <div className="flex justify-center md:justify-start p-8">
            <h1 className=" text-4xl font-semibold">Ongoing Offers</h1>
          </div>
          <div className="flex flex-wrap justify-start gap-10 mx-7">
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingOffersPage;
