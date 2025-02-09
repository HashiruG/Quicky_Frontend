import LoginForm from "@/features/authentication/components/LoginForm";
import { Truck } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-950">
        <Truck className="stroke-white w-1/2 h-1/2 justify-center items-center"></Truck>
        <h1 className="text-white text-5xl">QUICKY</h1>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-xl">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
