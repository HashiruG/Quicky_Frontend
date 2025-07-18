import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/common/Header";
import SideBarComponent from "@/features/common/SideBarComponent";
import React from "react";

const Layout: React.FC<{
  aboveChildren: React.ReactNode;
  children: React.ReactNode;
  title: string;
}> = ({ aboveChildren, children, title }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div>
          <SidebarProvider>
            <SideBarComponent />
            <SidebarTrigger className="mt-4 mx-2 lg:hidden z-50" />
          </SidebarProvider>
        </div>
        <div className="flex flex-col mt-16 w-full">
          <div className="mx-7">{aboveChildren}</div>
          <div className="flex justify-center lg:justify-start p-8">
            <h1 className="text-4xl font-semibold">{title}</h1>
          </div>
          <div className="flex mx-7">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
