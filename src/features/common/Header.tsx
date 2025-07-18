import { Truck } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="flex fixed top-0  w-full items-center justify-center lg:justify-between z-40  bg-slate-950">
        <div className="flex flex-2 p-3 justify-center">
          <Truck className="h-8 w-8 stroke-white"></Truck>
          <h1 className="text-xl px-3 text-white">QUICKY</h1>
        </div>
       
    
      </header>
    </div>
  );
};

export default Header;
