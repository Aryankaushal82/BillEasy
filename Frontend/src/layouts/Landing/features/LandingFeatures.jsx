import React, { useState } from 'react';
import GSTIN from './GSTIN';
import CODES from './HSN-SAC CODES';
import INVOICES from './INVOICES';
import TAXES from './TAXES';
import BILLS from './E-WAY BILLS';
import DELIVERYCHALLAN from './DELIVERY CHALLAN';
import Navbar from './navbar';

const LandingFeatures = () => {
  const [activeContent, setActiveContent] = useState(0);

  const renderContent = () => {
    switch (activeContent) {
      case 0:
        return <GSTIN />;
      case 1:
        return <CODES />;
      case 2:
        return <INVOICES />;
      case 3:
        return <TAXES />;
      case 4:
        return <BILLS/>
      case 5:
        return <DELIVERYCHALLAN />;
      default:
        return <GSTIN />;
    }
  };
  return (
    <>
      <Navbar setActiveContent={setActiveContent} />
      <div className="content-container">
        {renderContent()}
      </div>
    </>
  );
};

export default LandingFeatures;