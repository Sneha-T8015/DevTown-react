import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Transition } from "@headlessui/react";
import cartf from "./img/cartf.svg"
import aboutus from "./img/aboutus.svg"
import contactus from "./img/contactus.svg"
export default function Navbarwithsearch() {
  const [isOpen, setIsOpen] = useState(false);
  
  
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 flex ">
              <Link to="/"> 
                 <div className="flex flex-row">
                 <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                 <span className="font-bold text-xl text-white px-3"> Shoppie</span>
                 </div>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/cart" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <div class="relative inline-block">
  <img src={cartf} alt="" class="w-10 h-10 "/>
  <span class="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xs rounded-full leading-4 px-2">2</span>
</div>


                <span>Cart</span>
                  </div>
                </Link>
                <Link to="/aboutus" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <img src={aboutus} alt=""  className="w-10 h-10"/>

                <span>AboutUs</span>

                  </div>
                </Link>
                <Link to="/contactus" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <img src={contactus} alt=""  className="w-10 h-10"/>

                <span>ContactUs</span>
                
                  </div>
                </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover-text-white hover-bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/cart" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <img src={cartf} alt=""  className="w-10 h-10"/>

                <span>Cart</span>
                  </div>
                </Link>
                <Link to="/aboutus" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <img src={aboutus} alt=""  className="w-10 h-10"/>

                <span>AboutUs</span>

                  </div>
                </Link>
                <Link to="/contactus" className="hover-bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <div className="flex flex-row p-2 items-center justify-start gap-5 text-lg font-semibold">
                  <img src={contactus} alt=""  className="w-10 h-10"/>

                <span>ContactUs</span>
                
                  </div>
                </Link>
                
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
