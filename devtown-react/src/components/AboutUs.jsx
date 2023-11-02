import React from 'react';
import abt from './img/abt.jpg';

export default function AboutUs() {
  return (
    <div className='p-4 rounded-lg'>

      <section className="about bg-gradient-to-b from-green-100 to-green-300 p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="font-bold">Our's is a leading platform...</p>
        <div className="flex items-center flex-col lg:flex-row justify-between gap-6 text-center lg:text-left p-8">
          <div className="flex items-center flex-col justify-center">
           
            <img src={abt} alt="Geeksforgeeks" className="p-5  rounded-full" />
          </div>
          <div className="">
            <p className="text-xl font-normal lg:font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
             more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="bg-green-600 text-white rounded-md p-2 mt-8 w-40">Read More...</button>
          </div>
        </div>
      </section>

      <section className="team p-6 text-center">
        <h1 className="text-3xl mb-4">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center gap-6">
          
          <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform transition-shadow w-64 hover:transform hover:translate-y-2 hover:shadow-lg">
            <div className="">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Jane</h2>
              <p className="text-gray-600 mb-1">CEO and Founder</p>
              <p className="text-gray-500">jane@example.com</p>
              <button className="bg-green-600 text-white rounded-md px-5 py-3 mt-2 w-36">Contact</button>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform transition-shadow w-64  hover:transform hover:translate-y-2 hover:shadow-lg">
            <div className="">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" alt="User 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Miller</h2>
              <p className="text-gray-600 mb-1">Co-Founder</p>
              <p className="text-gray-500">Miller@example.com</p>
              <button className="bg-green-600 text-white rounded-md px-5 py-3 mt-2 w-36">Contact</button>
            </div>
          </div>

   
          <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform transition-shadow w-64  hover:transform hover:translate-y-2 hover:shadow-lg">
            <div className="">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Joe</h2>
              <p className="text-gray-600 mb-1">Co-Founder</p>
              <p className="text-gray-500">Joe@example.com</p>
              <button className="bg-green-600 text-white rounded-md px-5 py-3 mt-2 w-36">Contact</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2023 SnehaT8015. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
