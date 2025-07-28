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
import InactiveDriversPage from "./pages/InactiveDriversPage";
import { AuthProvider } from "./features/authentication/AuthProvider";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import PayoutRequestPage from "./pages/PayoutRequestPage";
import { Toaster } from "sonner";
import CommissionRatePage from "./pages/CommissionRatePage";
import DeliveryDistributionPage from "./pages/DeliveryDistributionPage";
import BlacklistPage from "./pages/BlacklistPage";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard/dashboard/today-best"
                element={<TodayBestPage />}
              />
              <Route
                path="/dashboard/dashboard/delivery-distribution"
                element={<DeliveryDistributionPage />}
              />
              <Route
                path="/dashboard/dashboard/new-drivers"
                element={<NewDriversPage />}
              />
              <Route
                path="/dashboard/dashboard/inactive-drivers"
                element={<InactiveDriversPage />}
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
              <Route
                path="/driver-management/blacklist"
                element={<BlacklistPage />}
              />
              <Route
                path="/delivery-management"
                element={<DeliveryRecordsPage />}
              />
              <Route
                path="/churn-prediction"
                element={<ChurnPredictionPage />}
              />
              <Route
                path="/manage-offers/view"
                element={<OngoingOffersPage />}
              />
              <Route path="/manage-offers/add" element={<AddNewOfferPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/payout-requests" element={<PayoutRequestPage />} />
              <Route
                path="/commission-rates"
                element={<CommissionRatePage />}
              />
            </Route>
            <Route path="/reset-password" element={<NewPasswordPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
