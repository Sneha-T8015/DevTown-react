import plus from './img/plus-circle.svg';
import PopupComponent from './PopupComponent';
import React, { useState } from 'react';

export default function Cards({ products, handleAddToCart }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="lg:m-3 flex flex-row flex-wrap items-center transition-transform ease-in-out justify-around gap-8">
      {products.map((category) =>
        category.products.map((product) => (
          <div key={product.id} className="flex-wrap w-[350px] border border-blue-300 shadow-lg p-0 lg:p-3 shadow-blue-200 hover:bg-blue-100 hover:shadow-blue-200 h-[430px] rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl m-2 bg-white justify-between items-center">
            <div>
              <img
                src={product.image}
                alt="img"
                className="h-[250px] w-[400px] flex rounded-2xl"
              />
            </div>
            <div className="flex flex-col text-lg font-semibold">
              <div className="items-center my-3 justify-center flex">
                {product.name}
              </div>
              <div className="flex px-2 items-start flex-col text-left">
                <span className="my-">
                  ₹{product.price} <del>₹{product.discount}</del> (
                  {Math.round(((product.discount - product.price) / product.discount) * 100)}% off)
                </span>
                <div className="my-2 flex justify-between w-full items-center">
                <span className="bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 text-red-700 p-3 rounded-md"> {/* Gradient background color */}
                    Offer price ₹{Math.round(product.price * 0.9)}
                  </span>
                  <img
                    src={plus}
                    alt=""
                    onClick={() => openPopup(product)}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {isPopupOpen && (
        <PopupComponent product={selectedProduct} onClose={closePopup} /* pass any required props */ />
      )}
    </div>
  );
}
