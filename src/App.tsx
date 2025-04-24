import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OngoingOffersPage from "./pages/OngoingOffersPage";
import DriverStatusPage from "./pages/DriverStatusPage";
import ChurnPredictionPage from "./pages/ChurnPredictionPage";
import AddNewOfferPage from "./pages/AddNewOfferPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DeliveryRecordsPage from "./pages/DeliveryRecordsPage";
import DriverProfilesPage from "./pages/DriverProfilesPage";
import NewRegistrationsPage from "./pages/NewRegistrationsPage";
import TodayBestPage from "./pages/TodayBestPage";
import NewDriversPage from "./pages/NewDriversPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard/dashboard/today-best"
          element={<TodayBestPage />}
        />
        <Route
          path="/dashboard/dashboard/new-drivers"
          element={<NewDriversPage />}
        />
        <Route
          path="/realtime-driver-statuses"
          element={<DriverStatusPage />}
        />
        <Route
          path="/driver-management/driver-profiles"
          element={<DriverProfilesPage />}
        />
        <Route
          path="/driver-management/new-registrations"
          element={<NewRegistrationsPage />}
        />
        <Route path="/delivery-management" element={<DeliveryRecordsPage />} />
        <Route path="/churn-prediction" element={<ChurnPredictionPage />} />
        <Route path="/manage-offers/view" element={<OngoingOffersPage />} />
        <Route path="/manage-offers/add" element={<AddNewOfferPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<NewPasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
