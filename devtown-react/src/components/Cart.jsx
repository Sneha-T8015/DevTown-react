import React, { useState } from 'react';
import AddForm from './AddForm';

import shoe2 from './img/shoe2.jpg';

import shoe4 from './img/shoe4.jpg';

const initialProducts = [
  {
    id: 1,
    name: 'Lace-Up Shoes with Velcro Fastening',
    image: shoe4,
    price: 1485,
    discount: 3299,
  },
  {
    id: 1,
    name: 'Lace-Up Shoes with Velcro Fastening',
    image: shoe2,
    price: 1985,
    discount: 4399,
  },
 

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

