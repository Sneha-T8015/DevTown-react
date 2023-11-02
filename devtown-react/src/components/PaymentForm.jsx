import React, { useState } from 'react';
import PaymentConfirm from './PaymentConfirm';

export default function PaymentForm({ onClose, onPayment, totalPrice }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [isPaymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePay = () => {
    if (!cardNumber || !cardName) {
      alert('Please fill in all payment details.');
      return;
    }

    onPayment();

    setPaymentConfirmed(true);
  };

  if (isPaymentConfirmed) {
    return (
      <PaymentConfirm onClose={onClose} />
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-white relative p-4 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <span
            className="absolute top-2 right-4 w-4 h-4 text-gray-600 cursor-pointer"
            onClick={onClose}
          >
            &#215;
          </span>
          <h2 className="text-xl font-semibold">Payment Details</h2>
        </div>
        <div className="my-2 py-3">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="mb-4 py-3">
            <p className="text-lg font-semibold mb-2">Total Price: ₹{totalPrice}</p>
          </div>
        </div>
        <button
          onClick={handlePay}
          className="bg-blue-500 items-center justify-center flex w-full text-white px-4 py-2 rounded-md"
        >
          Pay
        </button>
      </div>
    </div>
  );
}
