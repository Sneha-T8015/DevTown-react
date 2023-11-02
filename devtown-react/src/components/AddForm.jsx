import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
export default function AddForm({ CartProducts }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
  const handleCheckboxChange = (product) => {
    const selectedIndex = selectedItems.indexOf(product);
    const newSelectedItems = [...selectedItems];
    
    if (selectedIndex === -1) {
      newSelectedItems.push(product);
    } else {
      newSelectedItems.splice(selectedIndex, 1);
    }

    setSelectedItems(newSelectedItems);
    updateTotalPrice(newSelectedItems);
  };

  const updateTotalPrice = (selectedItems) => {
    const newTotalPrice = selectedItems.reduce(
      (total, product) => total + product.price,
      0
    );

    setTotalPrice(newTotalPrice);
  };
  const handlePay = () => {
    if (totalPrice > 0) {
      // Show the payment form only if the total price is greater than 0
      setPaymentFormVisible(true);
    } else {
      alert('Your cart is empty. Add items to the cart before making a payment.');
    }
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row flex-wrap p-3 justify-between items-start gap-3 '>
      {CartProducts.map((Cartproduct) => (
        <div
          key={Cartproduct.id}
          className='flex w-[650px] flex-col lg:flex-row shadow-lg rounded-xl  bg-blue-300 p-3 justify-between items-center'
        >
          <div className=''>
            <img
              src={Cartproduct.image}
              alt='img'
              className='h-[250px] w-[350px] flex rounded-2xl'
            />
          </div>
          <div className='flex flex-col text-lg px-2 font-semibold'>
            <div className='items-center my-3 justify-center flex'>
              {Cartproduct.name}
            </div>
            <div className='flex  lg:px-8 items-start flex-col text-left'>
              <span className='my-2'>
                ₹{Cartproduct.price} <del>₹{Cartproduct.discount}</del> (
                {Math.round(
                  ((Cartproduct.discount - Cartproduct.price) /
                    Cartproduct.discount) *
                    100
                )}
                % off)
              </span>
              <div className='my-2 flex justify-between w-full items-center'>
                <span className='bg-red-200 p-3 rounded-md'>
                  Offer price ₹{Cartproduct.price * 0.9}
                </span>
                <input
                  type='checkbox'
                  className='bg-red-300 w-6 h-6 rounded-md'
                  checked={selectedItems.includes(Cartproduct)}
                  onChange={() => handleCheckboxChange(Cartproduct)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    
    </div>
     <div className='flex justify-between w-full items-center p-3'>
     <div className="text-lg font-semibold">
        Total Price: ₹{totalPrice}
      </div>
      <button onClick={handlePay} className='py-2 px-6 bg-blue-400 rounded-md '>
          Pay
        </button>
      

      
      {isPaymentFormVisible && (
        <PaymentForm
          onClose={() => setPaymentFormVisible(false)}
          onPayment={() => {
            // Handle the payment logic here
            // You can add your payment logic or API calls here
          }}
          totalPrice={totalPrice}
        />
      )}
     </div>
    </div>
  );
}
