import React from 'react';
import success from './img/success.gif';

export default function PopupComponent({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    
      <div className="fixed inset-0 bg-black opacity-40"></div>

      <div className="relative">
        <div className="bg-gray-100 border border-gray-500 p-4 flex flex-col items-center justify-center rounded-lg w-[400px] h-[300px]">
          <img src={success} alt='' className="my-4" />
          <h2 className="text-xl font-semibold">Item Added to Cart!!</h2>

          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
