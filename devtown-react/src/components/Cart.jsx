import React, { useState } from 'react';
import AddForm from './AddForm';

import shoe2 from './img/shoe2.jpg';
import shoe3 from './img/shoe3.jpg';
import shoe4 from './img/shoe4.jpg';
import shoe5 from './img/shoe5.jpg';
import shoe6 from './img/shoe6.jpg';

const initialProducts = [
  {
    id: 1,
    name: 'Lace-Up Shoes with Velcro Fastening',
    image: shoe4,
    price: 1485,
    discount: 3299,
  },
  {
    id: 2,
    name: 'Another Product',
    image: shoe2,
    price: 500,
    discount: 999,
  },
  // Add more products as needed
];

export default function Cart() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="">
      <AddForm CartProducts={initialProducts} handleAddToCart={handleAddToCart} />
    </div>
  );
}

