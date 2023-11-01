import React from 'react'
import AddForm from './AddForm'

import shoe2 from "./img/shoe2.jpg"
import shoe3 from "./img/shoe3.jpg"
import shoe4 from "./img/shoe4.jpg"
import shoe5 from "./img/shoe5.jpg"
import shoe6 from "./img/shoe6.jpg"

const Cartproducts = [
 
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
    image: shoe4,
    price: 485,
    discount: 3299,
  },
 
  {
    id: 1,
    name: 'Lace-Up Shoes with Velcro Fastening',
    image: shoe6,
    price: 1485,
    discount: 3299,
  },
  // Add more products as needed
];



export default function Cart() {
  return (
    <div className=' '>
        
        <AddForm CartProducts={Cartproducts}/>
    </div>
  )
}


