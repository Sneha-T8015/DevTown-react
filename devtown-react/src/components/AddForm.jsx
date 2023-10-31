import React from 'react';
import plus from './img/plus-circle.svg';

export default function AddForm({ CartProducts }) {
  return (
    <div className='flex flex-col lg:flex-row p-3 justify-between items-start gap-3 '>
      {CartProducts.map((Cartproduct) => (
        <div
          key={Cartproduct.id}
          className='flex flex-col lg:flex-row shadow-lg rounded-xl  bg-blue-300 p-3 justify-between items-center'
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
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
