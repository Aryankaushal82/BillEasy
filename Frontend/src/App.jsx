import HeroPage from "./component/HeroPage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/LandingPage/features/navbar.jsx';
import Gstin from './component/LandingPage/features/GSTIN.jsx';
import Hsnsaccodes from './component/LandingPage/features/HSN-SAC CODES.jsx';
import Invoices from './component/LandingPage/features/INVOICES.jsx';
import Taxes from './component/LandingPage/features/TAXES.jsx';
import EWAYBILLS from './component/LandingPage/features/E-WAY BILLS.jsx'
import DELIVERYCHALLAN from './component/LandingPage/features/DELIVERY CHALLAN.jsx';

function App() {
  return (
    <>
      <HeroPage />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gstin />} />
          <Route path="/gstin" element={<Gstin />} />
          <Route path="/hsn-saccodes" element={<Hsnsaccodes />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/e-waybills" element={<EWAYBILLS />} />
          <Route path="/deliverychallan" element={<DELIVERYCHALLAN />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
