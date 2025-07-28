import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoute;
