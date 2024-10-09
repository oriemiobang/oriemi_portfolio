import { VscSmiley } from "react-icons/vsc";
import { GoProject } from "react-icons/go";
import { PiHeadsetFill } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";


// Helper function to count up from 0 to the target number
const countUp = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration * 60); // 60 frames per second
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.innerHTML = target; // Set final number
        clearInterval(interval); // Clear interval once target is reached
      } else {
        element.innerHTML = Math.floor(start); // Set current count
      }
    }, 1000 / 60); // 60 frames per second
  };

function Facts() {
    const clientsRef = useRef(null);
    const projectsRef = useRef(null);
    const hoursRef = useRef(null);
    const workersRef = useRef(null);


     useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8; // Trigger when the element is 80% into view

      // Check if the element is in view and start counting
      const animateCount = (elementRef, targetValue, duration) => {
        const element = elementRef.current;
        if (element && element.getBoundingClientRect().top < triggerHeight && element.innerHTML === "0") {
          countUp(element, targetValue, duration);
        }
      };

      animateCount(clientsRef, 232, 2);
      animateCount(projectsRef, 20, 1.5);
      animateCount(hoursRef, 1453, 2.5);
      animateCount(workersRef, 10, 1.5);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <div className="w-[100%] pb-5" id="fact">
            <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
                <h2 className="text-[#173b6c] font-railway">Facts</h2>
           
                <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
            </div>

            <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">
                I have delighted over 500 users with 10+ successful projects across mobile, web, and desktop app development. With 5,000+ hours of hands-on experience, I ensure efficient and proficient delivery. Collaborating with 10+ teams showcases my strong teamwork and communication skills.
            </p>

            <div className="flex flex-row lg:flex-row justify-evenly ml-8 mr-8 md:mr-14 md:ml-14 mt-14 items-start font-railway">
                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div 
                        className="flex gap-5 items-start"
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <VscSmiley color="#149ddd" size={60} />
                        <div>
                            <h1 ref={clientsRef} className="font-bold text-[35px] md:text-[45px]">0</h1>
                            <h3 className="font-semibold text-[13px]">Happy Clients</h3>
                            <p className="text-[10px] text-gray-600">Happy for the work</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex gap-5 items-start"
                        initial={{ opacity: 0, y: 52 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <GoProject color="#149ddd" size={60} />
                        <div>
                            <h1 ref={projectsRef}className="font-bold text-[35px] md:text-[45px]">0</h1>
                            <h3 className="font-semibold text-[16px]">Projects</h3>
                            <p className="text-[10px]">Completed projects</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div 
                        className="flex gap-5 items-start"
                        initial={{ opacity: 0, y: 53 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <PiHeadsetFill color="#149ddd" size={60} />
                        <div>
                            <h1  ref={hoursRef} className="font-bold text-[35px] md:text-[45px]">0</h1>
                            <h3 className="font-semibold text-[16px]">Hours Of Support</h3>
                            <p className="text-[10px]">Communicating and supporting each other</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex gap-5 items-start"
                        initial={{ opacity: 0, y: 54 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <BsPeople color="#149ddd" size={70} />
                        <div>
                            <h1 ref={workersRef}className="font-bold text-[35px] md:text-[45px]">0</h1>
                            <h3 className="font-semibold text-[16px]">Hard Workers</h3>
                            <p className="text-[10px]">Collaboration team works</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Facts;
