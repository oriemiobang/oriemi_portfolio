import quiz from '../assets/moblie/quiz_1.jpg';
import bible from '../assets/moblie/mob_1.jpg';
import dha from '../assets/moblie/dha_1.jpg';
import deep from '../assets/web/web_1.jpg';
import port from '../assets/web/port_3.png';
import music from '../assets/desktop/music_1.png';
import { useState, useEffect, useRef } from 'react';
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Portfolio() {
    const [allColor, setAllColor] = useState('#149ddd');
    const [appColor, setAppColor] = useState('black');
    const [deskColor, setDeskColor] = useState('black');
    const [webColor, setWebColor] = useState('black');

    const [hideApp, setHideApp] = useState(false);
    const [hideWeb, setHideWeb] = useState(false);
    const [hideDesk, setHideDesk] = useState(false);

    const [appHidden, setAppHidden] = useState(false);
    const [webHidden, setWebHidden] = useState(false);
    const [deskHidden, setDeskHidden] = useState(false);

    // Refs for the images to observe them
    const appImagesRef = useRef(null);
    const webImagesRef = useRef(null);
    const deskImagesRef = useRef(null);

    // UseEffect to observe elements coming into the viewport
    useEffect(() => {
        const animateOnScroll = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-from-bottom');
                    observer.unobserve(entry.target);  // Stop observing once the animation is triggered
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, {
            threshold: 0.3,  // Trigger when 20% of the element is visible
        });

        const images = document.querySelectorAll('.animated');
        images.forEach((img) => observer.observe(img));

        return () => {
            images.forEach((img) => observer.unobserve(img));  // Cleanup observer on component unmount
        };
    }, []);

    const handleAll = () => {
        setAllColor('#149ddd');
        setAppColor('black');
        setDeskColor('black');
        setWebColor('black');

        setHideApp(false);
        setHideDesk(false);
        setHideWeb(false);

        setTimeout(() => {
            setAppHidden(false);
            setWebHidden(false);
            setDeskHidden(false);
        }, 500);
    };

    const handleApp = () => {
        setAllColor('black');
        setAppColor('#149ddd');
        setDeskColor('black');
        setWebColor('black');

        setHideApp(false);
        setHideDesk(true);
        setHideWeb(true);

        setTimeout(() => {
            setAppHidden(false);
            setWebHidden(true);
            setDeskHidden(true);
        }, 500);
    };

    const handleWeb = () => {
        setAllColor('black');
        setAppColor('black');
        setDeskColor('black');
        setWebColor('#149ddd');

        setHideApp(true);
        setHideDesk(true);
        setHideWeb(false);

        setTimeout(() => {
            setAppHidden(true);
            setWebHidden(false);
            setDeskHidden(true);
        }, 500);
    };

    const handleDesk = () => {
        setAllColor('black');
        setAppColor('black');
        setDeskColor('#149ddd');
        setWebColor('black');

        setHideApp(true);
        setHideDesk(false);
        setHideWeb(true);

        setTimeout(() => {
            setAppHidden(true);
            setWebHidden(true);
            setDeskHidden(false);
        }, 500);
    };

    return (
        <div className="w-[100%] bg-[#f5f8fd] pb-16" id='portfolio'>
            <div>
                <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
                    <h2 className="text-[#173b6c] font-railway">Portfolio</h2>
                    <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
                </div>
            </div>
            <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4 pt-5">
                Welcome to my portfolio! Explore my projects in mobile, web, and desktop app development,
                including a multi-version Bible app, the Dha Anywaa language learning app,
                interactive games like Bingo and Tic Tac Toe, and a feature-rich music player.
                Each project showcases my dedication to quality, innovation, and user-centered design.
            </p>
            <motion.div className="flex justify-center mt-10 animated"initial={{ opacity: 0, y: 60 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }} >
                <div className="bg-white flex justify-around w-[300px] h-10 items-center rounded-2xl font-semibold">
                    <div
                        className="cursor-pointer hover:text-[#149ddd] transition-all duration-500 ease-out delay-75"
                        onClick={handleAll}
                        style={{ color: allColor }}
                    >
                        ALL
                    </div>
                    <div
                        className="cursor-pointer hover:text-[#149ddd] transition-all duration-500 ease-out delay-75"
                        onClick={handleApp}
                        style={{ color: appColor }}
                    >
                        APP
                    </div>
                    <div
                        className="cursor-pointer hover:text-[#149ddd] transition-all duration-500 ease-out delay-75"
                        onClick={handleDesk}
                        style={{ color: deskColor }}
                    >
                        DESKTOP
                    </div>
                    <div
                        className="cursor-pointer hover:text-[#149ddd] transition-all duration-500 ease-out delay-75"
                        onClick={handleWeb}
                        style={{ color: webColor }}
                    >
                        WEB
                    </div>
                </div>
            </motion.div>

            <div className="mt-10 ml-8 md:ml-14 mr-8 md:mr-14">
                {/* Mobile */}
                <motion.div
                    className={`flex flex-col md:flex-row gap-5 pb-5 transition-all duration-500 ease-in-out 
                    ${hideApp ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'} 
                    ${hideApp ? 'hidden' : ''}`} initial={{ opacity: 0, y: 60 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                   <div className="mobile animated relative group" ref={appImagesRef}>
                        <img src={quiz} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>

                        <div className="mobile animated relative group" ref={appImagesRef}>
                        <img src={bible} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                        <div className="mobile animated relative group"ref={appImagesRef}>
                        <img src={dha} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                </motion.div>

                {/* Web */}
                <motion.div className="flex flex-col md:flex-row gap-5" initial={{ opacity: 0, y: 60 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
                     <div className={hideWeb? "hidden" : "mobile animated relative group"} ref={appImagesRef}>
                        <img src={port} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                        <div className={hideWeb? "hidden" : "mobile animated relative group"} ref={appImagesRef}>
                        <img src={deep} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>

                    {/* Desktop */}
                      <div className={hideDesk? "hidden" : "mobile animated relative group"}ref={appImagesRef}>
                        <img src={music} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaGithub size={'30px'} />
                            </div>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Portfolio;
