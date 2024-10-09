import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";

function Skills(){

    const [isVisible, setIsVisible] = useState(false);
    const skillBarRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Once the bar is visible, stop observing
          }
        },
        { threshold: 0.6 } // Trigger when 60% of the element is visible
      );
  
      if (skillBarRef.current) {
        observer.observe(skillBarRef.current);
      }
  
      return () => {
        if (skillBarRef.current) {
          observer.unobserve(skillBarRef.current);
        }
      };
    }, []);
    return (
        <div className=" w-[100%] bg-[#f5f8fd] pb-16" id="skill">
            <div className="pt-20 ml-8 md:ml-14 text-[32px] mr-10 font-bold">
        <h2 className="text-[#173b6c] font-railway">Skills</h2>
        
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
        
      </div>
      <p className="mt-5 ml-8 md:ml-14 mr-8 md:mr-14">I am a versatile and dedicated professional with a diverse skill set encompassing both creative and technical domains. My passion for my craft drives me to continuously hone my skills and stay ahead of industry trends. My expertise includes:</p>

      <div className="flex flex-col md:flex-row md:gap-5  mt-7 ml-8 mr-8 md:ml-14 md:mr-14 md:justify-between">



        <motion.div className="flex flex-col gap-5 md:w-[50%]"  initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
             <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
      <div className="flex justify-between font-semibold">
        <h1>HTML</h1>
        <h1>99%</h1>
      </div>
      <div className="w-[100%] h-[13px] bg-[#dce8f8]">
        <div
          className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[99%]" : "w-10"
          } transition-all duration-1000`}
        ></div>
      </div>
    </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Tailwind css</h1> <h1>90%</h1></div>
                <div className="w-w-[100%] h-[13px] bg-[#dce8f8]"><div className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[90%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Javascript</h1> <h1>88%</h1></div>
                <div className="w-[100%] h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[88%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Dart & Flutter</h1> <h1>95%</h1></div>
                <div className="w-[100%] h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[95%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
        </motion.div>


        <motion.div className="flex flex-col gap-5 md:w-[50%]"  initial={{ opacity: 0, y: 90 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Python</h1> <h1>97%</h1></div>
                <div className="w-[100%] h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[95%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Firebase</h1> <h1>85%</h1></div>
                <div className="w-[100%] h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[85%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>React</h1> <h1>90%</h1></div>
                <div className="w-[100%] h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[90%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
            <div className="flex flex-col gap-1 w-[100%]" ref={skillBarRef}>
                <div className="flex justify-between font-semibold"><h1>Java</h1> <h1>90%</h1></div>
                <div className="w-[100%]  h-[13px] bg-[#dce8f8]"><div  className={`h-[13px] bg-[#149ddd] ${
            isVisible ? "w-[90%]" : "w-10"
          } transition-all duration-1000`}></div></div>
            </div>
        </motion.div>

      </div>

        </div>
    )
}

export default Skills;