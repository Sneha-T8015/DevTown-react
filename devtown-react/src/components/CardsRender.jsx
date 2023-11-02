import React ,{useState} from 'react'
import shoe2 from "./img/shoe2.jpg"
import shoe3 from "./img/shoe3.jpg"


import jewel5 from "./img/jewel5.jpg"
import jewel2 from "./img/jewel3.jpg"
import girly3 from "./img/girly3.jpg"
import girly2 from "./img/girly2.jpg"
import headphone2 from "./img/headphone2.jpg"
import headphone3 from "./img/headphone3.jpg"


import Cards from './Cards'
import FilterDropdown from './FilterDropdown'

const products = [
  {
    category: 'jewel',
    products: [
      {
        id: 1,
        name: 'Lace-Up Shoes with Velcro Fastening',
        image: jewel5,
        price: 1485,
        discount: 3299,
      },
      {
        id: 2,
        name: 'Another Jewel Product',
        image: jewel2,
        price: 1599,
        discount: 3499,
      },
      // Add more jewel products as needed
    ],
  },
  {
    category: 'shoe',
    products: [
      {
        id: 3,
        name: 'Casual Sneakers',
        image: shoe2,
        price: 999,
        discount: 2499,
      },
      {
        id: 4,
        name: 'Running Shoes',
        image: shoe3,
        price: 1299,
        discount: 2999,
      },
    ]  
    },
 
  {
    category: 'headphone',
    products: [
      {
        id: 5,
        name: 'Wireless Headphones',
        image: headphone2,
        price: 599,
        discount: 1599,
      },
      {
        id: 6,
        name: 'Over-Ear Headphones',
        image: headphone3,
        price: 799,
        discount: 1999,
      },
    ]  // Add more headphone products as needed
    },
 
  {
    category: 'dress',
    products: [
      {
        id: 7,
        name: 'Elegant Dress',
        image: girly2,
        price: 1499,
        discount: 2999,
      },
      {
        id: 8,
        name: 'Casual Dress',
        image: girly3,
        price: 1199,
        discount: 2499,
      },
       ]   
    },
  
 
];


export default function CardsRender() {
  

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // const filteredProducts = products
  //   .map((category) => ({
  //     category: category.category,
  //     products: category.products.filter((product) =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     ),
  //   }))
  //   .filter((category) => category.products.length > 0);

  return (
    <div className=' '>
      <div className='p-4'>
       <div className='flex flex-col lg:flex-row justify-between gap-3 items-center'>
       <form className="flex items-center w-full flex-grow p-2">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search by product name..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </form>
       <FilterDropdown/>
       </div>
      </div>
      <Cards products={products}  />
    </div>
  );
}