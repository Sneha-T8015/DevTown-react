import React from 'react';
import success from './img/success.gif';
export default function PaymentConfirm({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-white relative p-4 rounded-lg w-96">
        <span
          className="absolute top-2 right-4 w-4 h-4 text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &#215;
        </span>
      
        <div className=" flex flex-col items-center justify-center rounded-lg ">
          <img src={success} alt='' className="my-4" />
          <h2 className="text-xl font-semibold">Payment Success..!</h2>

        </div>
      </div>
      </div>

  );
}
