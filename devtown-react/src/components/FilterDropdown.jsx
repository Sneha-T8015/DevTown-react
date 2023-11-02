import React, { useState } from 'react';

export default function FilterDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='z-50 relative flex justify-between flex-col  gap-4'>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-black min-w-[180px] flex-grow bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center bg-blue-300 hover-bg-blue-600 dark:focus-ring-primary-800"
        type="button"
        onClick={toggleDropdown}
      >
        Filter by category
        <svg
          className={`w-4 h-4 ml-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        
        <div
          id="dropdown"
          className=" absolute top-11 right-0 w-56 p-3 bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-700"
        >
            
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus-ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />

              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Jewels
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus-ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />

              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
               Shoes
              </label>
            </li>

            {/* Add more checkbox items similarly */}
          </ul>
        </div>
      )}
    </div>
  );
}
