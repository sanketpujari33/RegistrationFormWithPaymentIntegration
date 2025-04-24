import Navbar from "./components/Navbar";
import RegistrationPaymentIntegration from "./page/RegistrationPaymentIntegration";
import RegistrationPaymentIntegrationSecond from "./page/RegistrationPaymentIntegrationSecond";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<RegistrationPaymentIntegration />} /> */}
        <Route path="/" element={<RegistrationPaymentIntegrationSecond />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
