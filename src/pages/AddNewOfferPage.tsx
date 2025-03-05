import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";
import NewOfferForm from "@/features/dashboard/offer management/NewOfferForm";

const AddNewofferPage = () => {
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
            <h1 className=" text-4xl font-semibold">Add New Offer</h1>
          </div>
          <div className="flex flex-col justify-center md:flex-row flex-wrap md:justify-start gap-10 mx-5">
          <NewOfferForm ></NewOfferForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewofferPage;
