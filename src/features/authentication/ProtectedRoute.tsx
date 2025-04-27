import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const ProtectedRoute = () => {
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated);
    

    return isAuthenticated? <Outlet/>: <Navigate to={"/"} replace />

}


export default ProtectedRoute;