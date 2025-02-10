import { Label } from "@/components/ui/label";
import { SidebarInput } from "@/components/ui/sidebar";
import { Search, Truck } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="flex sticky top-0 z-50 w-full items-center justify-between border-b bg-slate-950">
        <div className="flex flex-2 p-3 justify-center">
          <Truck className="h-8 w-8 stroke-white"></Truck>
          <h1 className="text-xl px-3 text-white">QUICKY</h1>
        </div>
        <div className="hidden md:flex p-3">
          <Search className="text-white h-8 w-8 mx-1"></Search>

          <SidebarInput
            id="search"
            placeholder="Search..."
            className="h-8 pl-7"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
