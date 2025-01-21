import React, { useState, useEffect } from 'react';
import ProfilePic from '../assets/profile-img.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaLinkedinIn, FaHome, FaUser, FaFileAlt, FaSuitcase, FaTools } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'fact','skill', 'resume', 'portfolio', 'service', 'contact'];
      let currentSection = '';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const sectionTop = section?.offsetTop || 0;
        const sectionHeight = section?.offsetHeight || 0;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getActiveClass = (section) => {
    return activeSection === section ? 'text-[#149ddd]' : 'text-gray-400';
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
              {/* <a href="#">
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaTwitter />
              </div>
              </a> */}
             <a href='https://www.facebook.com/oriemiobang.oriemi'> 
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaFacebook />
              </div></a>
              <a href='https://www.instagram.com/winynaadhi?igsh=MjFzajhtaXRsNWV2'>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaInstagram />
              </div>
              </a>
              <div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaTelegram />
              </div>
              <a href='https://www.linkedin.com/in/oriemi-obang-oriemi-682b2a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><div className='w-8 cursor-pointer hover:bg-[#149ddd] text-white transition-all duration-500 ease-out delay-75 bg-gray-800 rounded-full h-8 flex items-center justify-center'>
                <FaLinkedinIn />
              </div></a>
            </div>
          </IconContext.Provider>
        </div>
        <div className='flex flex-col gap-5 ml-10'>
          <IconContext.Provider value={{ size: '1em' }}>
            <div onClick={() => scrollToSection('home')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('home')}`}>
              <FaHome /> Home
            </div>
            <div onClick={() => scrollToSection('about')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('about')}`}>
              <FaUser /> About
            </div>
            <div onClick={() => scrollToSection('fact')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('fact')}`}>
              <FaUser /> Fact
            </div>
            <div onClick={() => scrollToSection('skill')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('skill')}`}>
              <FaUser /> Skills
            </div>
            <div onClick={() => scrollToSection('resume')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('resume')}`}>
              <FaFileAlt /> Resume
            </div>
            <div onClick={() => scrollToSection('portfolio')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('portfolio')}`}>
              <FaSuitcase /> Portfolio
            </div>
            <div onClick={() => scrollToSection('service')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('service')}`}>
              <FaTools /> Services
            </div>
            <div onClick={() => scrollToSection('contact')} className={`flex cursor-pointer gap-5 text-[16px] items-center transition-all duration-500 ease-out delay-75 ${getActiveClass('contact')}`}>
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
