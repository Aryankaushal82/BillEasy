import React from 'react';
import Header from './components/Header';
import Row from './components/Row';
import { invoiceData } from './data/data.js';

const Invoice = () => {
    const len = invoiceData.length;
  return (
    <div className="mt-5 rounded-md px-12 py-5 w-full h-screen bg-white flex flex-col gap-3">
      <Header len = {len} />
      <div className="mt-5 rounded-md px-12 py-5 w-full h-screen bg-white flex flex-col gap-4 overflow-y-scroll">
        {invoiceData.map((invoice, index) => (
          <Row
            key={index}
            invoiceId={invoice.invoice_id}
            date={invoice.date}
            nameOfCustomer={invoice.nameofcustomer}
            amount={invoice.amount}
            status={invoice.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Invoice;
