import React, { useState } from 'react';
import ProfilePic from '../assets/profile-img.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaLinkedinIn, FaHome, FaUser, FaFileAlt, FaSuitcase, FaTools } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-screen bg-[#040b14] lg:w-[20%] xl:w-[21%] w-72 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}
      >
        <div className='flex flex-col items-center justify-center w-full p-5'>
          <img
            className='flex justify-center rounded-full m-[10px auto] w-[150px] border-[8px] border-solid border-[#2c2f3f]'
            src={ProfilePic}
            alt="my profile picture"
          />
          <h1 className='font-semibold text-[26px] text-white font-railway pt-2 pb-1'>Oriemi Obang</h1>

          <IconContext.Provider value={{ size: '1em' }}>
            <div className='flex justify-around gap-3 mt-4'>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaTwitter />
              </div>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaFacebook />
              </div>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaInstagram />
              </div>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaTelegram />
              </div>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaLinkedinIn />
              </div>
            </div>
          </IconContext.Provider>
        </div>

        <div className='text-gray-400 flex flex-col gap-5 ml-10 mt-3'>
          <IconContext.Provider value={{ size: '1em' }}>
            <div onClick={() => scrollToSection('home')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
              <FaHome /> Home
            </div>
            <div onClick={() => scrollToSection('about')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
              <FaUser /> About
            </div>
            <div onClick={() => scrollToSection('resume')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
              <FaFileAlt /> Resume
            </div>
            <div onClick={() => scrollToSection('portfolio')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
              <FaSuitcase /> Portfolio
            </div>
            <div onClick={() => scrollToSection('service')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
              <FaTools /> Services
            </div>
            <div onClick={() => scrollToSection('contact')}  className='flex cursor-pointer gap-5 text-[16px] items-center hover:text-[#149ddd] transition-all duration-500 ease-out delay-75'>
            <MdOutlineMail /> Contact
            </div>
          </IconContext.Provider>
        </div>
      </div>

      {/* Toggle Button for small screens */}
      <div onClick={() => setIsOpen(!isOpen)} className="z-50 lg:hidden top-10 right-10 fixed rounded-full flex justify-center items-center bg-[#149ddd] h-10 w-10">
        <IoIosMenu color="white" size={30} />
      </div>
    </div>
  );
}

export default SideBar;
