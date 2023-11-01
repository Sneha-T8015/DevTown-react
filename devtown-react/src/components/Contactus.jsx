import React from 'react'
import { FaLinkedin, FaGithubSquare, FaWhatsapp, FaPhone } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import contact from "./img/Online-bro.svg"
export default function ContactUs() {
  return (
   
     <div id="contactMe" className="    m-1 lg:px-10 p-2 flex flex-col items-center justify-center rounded-lg ">
         {/* Contact Form */}
      <div className='w-full'>
        <h2 className="text-2xl m-2 text-black font-semibold flex items-center justify-center ">Contact US</h2>
       <div className=' flex justify-between px-0 lg:px-10 gap-1 lg:gap-10  w-full items-center lg:flex-row flex-col '>
      
       <img src={contact} alt="rahul" className='h-[350px] lg:h-[500px]' />
       
       <div >
       <form action="#" method="post" className='p-2 flex items-start flex-col '>
          <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
            <label className=" text-gray-600 my-2 font-semibold text-lg ">Your Name</label>
            <input className="w-full  p-2 border border-gray-300 text-black rounded-lg" placeholder="Enter your email" required />
          </div>
          <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
            <label htmlFor="email" className=" text-gray-600 my-2 font-semibold text-lg">Your Email</label>
            <input type="email" placeholder="Enter your email" id="email" name="email" className="w-full text-black p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
            <label htmlFor="message" className="block text-gray-600 my-2 font-semibold text-lg">Your Message</label>
            <textarea id="message" name="message" className="w-full p-2 border border-gray-300 text-black rounded-lg" required></textarea>
          </div>
         <div className=' flex items-center justify-center w-full p-2'>
         <button type="submit" className="bg-black hover:bg-gray-500 text-white p-2 px-7 rounded-full cursor-pointer">Send</button>
         </div>
        </form>
       </div>
       </div>
      </div>
      <div className='flex justify-between items-center flex-row p-2 gap-10'>
     
     <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
       <FaLinkedin size={30} className="mr-2 text-black hover:text-gray-500" />
     </a>

     <a href="https://github.com/Sneha-T8015" target="_blank" rel="noopener noreferrer">
       <FaGithubSquare size={30} className="mr-2 text-black hover:text-gray-500" />
     </a>
     

     <a href="https://wa.me/8056962976" target="_blank" rel="noopener noreferrer">
       <FaWhatsapp size={30} className="mr-2 text-black hover:text-gray-500" />
     </a>
  
     <a href="tel:+918056962976">
       <FaPhone size={25} className="text-black hover:text-gray-700" />
     </a>
     <a href="mailto:snehathangaraj8015@gmail.com" target="_blank" rel="noopener noreferrer">
  <MdEmail size={30} className="text-black hover:text-gray-700" />
</a>






   </div>
      
    </div>
   
  )
}
