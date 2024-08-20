import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isDefaultActive = location.pathname === '/' || location.pathname === '';

  return (
    <>
      <h1 className="mt-28 mb-16 text-custom-dark-blue flex justify-center font-semibold text-5xl">
        What makes ProfitX GST Compliant
      </h1>

      <div className="flex justify-center ">
        <div className="flex justify-center font-semibold flex-col items-center md:flex-row shadow-custom border border-gray-200 rounded-md shadow-custom ">
          {["GSTIN", "HSN-SAC CODES", "INVOICES", "TAXES", "E-WAY BILLS", "DELIVERY CHALLAN"].map((text, index) => {
            const path = `/${text.replace(/ /g, "").toLowerCase()}`;
            const isActive = location.pathname === path || (index === 0 && isDefaultActive);

            return (
              <div
                key={index}
                className={`relative group inline-block text-black  border-r border-r-[1px] border-r-solid border-r-[#f0f0f0]`}
              >
                <Link
                  to={path}
                  className={`relative z-10 px-8 py-7 block ${isActive ? 'text-red-500' : ''}`}
                >
                  {text}
                </Link>
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-red-500 transform ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
