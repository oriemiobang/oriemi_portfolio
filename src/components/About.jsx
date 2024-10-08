import ProfileImage from '../assets/profile-img.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [animate, setAnimate] = useState(false);
  const boxContainerRef = useRef(null); // Reference to the container

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (boxContainerRef.current) {
      observer.observe(boxContainerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (boxContainerRef.current) {
        observer.unobserve(boxContainerRef.current);
      }
    };
  }, []);

  return (
    <div className=" w-[100%] ">
      <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
        <h2 className="text-[#173b6c] font-railway">About</h2>
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>
      <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">
        I'm Creative, web and mobile application developer from Ethiopia Gambella.
        I enjoy turning complex probelms into simple, beautiful and intuitive designs.
        I am currently a third-year student of software engineering, in Haramaya University.
      </p>

      <div className='flex flex-col lg:flex-row ml-8 md:ml-14 mr-8 md:mr-14 gap-5 mt-5 md:gap-10' ref={boxContainerRef}>
        <img
          className={`lg:w-[30%] ${animate ? 'animate-slide-in-left' : 'opacity-0'}`} 
          src={ProfileImage} 
          alt="profile image" 
        />
        <div className={`${animate ? 'animate-slide-in-right' : 'opacity-0'} `}>
          <h1 className='text-[#173b6c] font-bold lg:text-[25px] text-[20px] md:text-[28px] font-railway'>
            Mobile app developer & Web Developer.
          </h1>
          <p className='italic'>
            My job is to build your website or app so that it is functional and user-friendly and at the same time attractive.
            Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use.
            My aim is to bring across your message and identity in the most creative way.
          </p>

          <div className='flex flex-col md:flex-row lg:flex-row gap-5 md:gap-8 lg:gap-8 mt-4 '>
            <IconContext.Provider value={{ color: "#149ddd", className: "global-class-name" }}>
              <div className='flex flex-col gap-5 text-gray'>
                {/* <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>Birthday :&nbsp;</p> <p>19 May 2001</p></div> */}
                <div className='flex items-center whitespace-nowrap'><IoIosArrowForward/> <p className='text-gray font-semibold'>Website :&nbsp;</p> <p>oriemiobango.netlify.app</p></div>
                {/* <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>Phone :&nbsp;</p> <p>+251 928 752557</p></div> */}
                <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>City :&nbsp;</p> <p>Gambella, Ethiopia</p></div>
                <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>Age :&nbsp;</p> <p>23</p></div>
            
              </div>

              <div className='flex flex-col gap-5'>
                
                <div className='flex items-center whitespace-nowrap'><IoIosArrowForward/> <p className='text-gray font-semibold'>Email :&nbsp;</p> <p>oriemiobango@gmail.com</p></div>
                <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>Freelance :&nbsp;</p> <p>Available</p></div>
                <div className='flex items-center'><IoIosArrowForward/> <p className='text-gray font-semibold'>Degree :&nbsp;</p> <p>Bachelor</p></div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
