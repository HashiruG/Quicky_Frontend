import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OngoingOffersPage from "./pages/OngoingOffersPage";
import RegisterPage from "./pages/RegisterPage";
import DeliveryRecordsPage from "./pages/DeliveryRecordsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/offers" element={<OngoingOffersPage />} />
        <Route path="/deliveryRecords" element={ <DeliveryRecordsPage /> } />
      </Routes>
    </Router>
  );

}

export default App;