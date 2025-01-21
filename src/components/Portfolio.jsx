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
import { MdOutlineCancel } from "react-icons/md";

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

    const [showInfo, setShowInfo] = useState(false)
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('')
    const [client, setClient] = useState('')
    const [date, setDate] = useState('')
    const [projectUrl, setProjectUrl] = useState('')
    const [description, setDescription] = useState('')

    const projectList = [
        {
            image: quiz,
            category: 'Mobile App',
            client: 'Anywaa Enlightment',
            date: '1 march 2024',
            projectUrl: 'https://github.com/oriemiobang/dha_anywaa_challange',
            description: 'Dha Anywaa Challenge is an interactive app designed to promote the Anywaa language and culture through fun and engaging challenges. Built with Flutter, it provides features like vocabulary quizzes, trivia games, and leaderboards to make learning enjoyable. The app’s backend is powered by Firebase, enabling real-time data synchronization and user authentication. This project showcases my expertise in mobile app development and cultural preservation.'

        },
        {
            image:bible,
            category: 'Mobile App',
            client: 'Anywaa Community',
            date: '15 jan 2024',
            projectUrl: 'https://github.com/oriemiobang/weel_jwok_audio_bible',
            description: 'Dha Anywaa Bible is a multilingual app developed to make the Bible accessible to the Anywaa-speaking community and beyond. Built with Flutter, the app includes features like audio playback for the Dha Anywaa New Testament, highlights, bookmarks, and support for multiple Bible versions in English and Amharic. The backend is powered by Firebase, ensuring seamless data management and audio streaming. This project reflects my dedication to combining technology with cultural and spiritual enrichment.'
        },{
            image: dha,
            category: 'Mobile App',
            client: 'Anywaa Community',
            date: '10 Dec 2023',
            projectUrl: 'https://github.com/oriemiobang/Dha-Anywaa-application',
            description: 'Dha Anywaa Application is a language learning app designed to help users learn and practice the Dha Anywaa language. Built with Flutter, it provides interactive lessons, vocabulary practice, and cultural insights to make language acquisition engaging and accessible. This project reflects my commitment to promoting the Anywaa language and making it easier for learners to connect with its unique heritage.'
        },
        {
            image: port,
            category: 'Web Design',
            client: 'Myself',
            date: '27 Feb 2024',
            projectUrl: 'https://github.com/oriemiobang/portfolio',
            description: 'My personal portfolio showcasing my skills and experiences as a web developer. Built with React, it features a clean and modern design, with a responsive layout and a smooth scrolling effect. The portfolio also includes a blog section where I write about my experiences, projects, and thoughts.'
        },{
            image: deep,
            category: 'Web Design',
            client: 'Deep & Labs',
            date: '19 Jun 2024',
            projectUrl: 'https://github.com/oriemiobang/invincible_site',
            description:'This project showcases the innovative projects and collective expertise of a dynamic group of developers, designers, and creative thinkers. Dedicated to delivering impactful solutions, the portfolio highlights a diverse range of projects, including mobile apps, web applications, and creative tools, designed to solve real-world problems and enhance user experiences.'
        },
        {
            image:music,
            category: 'Desktop App',
            client: 'Class Project',
            date: '10 march 2023',
            projectUrl: 'https://github.com/MisganaGetachew/BeGena-Player',
            description: 'Begena Player is a desktop music player application designed to provide a seamless and enjoyable music experience. Developed using JavaFX, it offers a clean and intuitive interface for managing and playing music. With features like playlist creation, easy navigation, and smooth playback, Begena Player combines functionality with user-friendly design, showcasing my skills in desktop application development.'
        }
    ]

    const handleCancel = () => {
        setShowInfo(false); 
    }

    const handleShowInfo  = (id) => {
        setImage(projectList[id].image)
        setCategory(projectList[id].category)
        setClient(projectList[id].client)
        setDate(projectList[id].date)
        setProjectUrl(projectList[id].projectUrl)
        setDescription(projectList[id].description)


        setShowInfo(true)
    }

    return (

        showInfo? <div className="flex overflow-y-scroll py-20 md:py-0 px-5 md:px-0 fixed bg-white z-50 items-center justify-center flex-col h-screen w-full">
            <div onClick={handleCancel} className='fixed md:right-96 md:mr-2 top-4 right-5 cursor-pointer  md:top-[24%]'><MdOutlineCancel size={30} /></div>
        <div className='md:h-[50%] md:w-[90%]  md:gap-5 md:flex'>
        <div className='md:w-[90%] pt-32 md:pt-0'>
             <img src={image} alt="Portfolioo" className="object-cover w-full h-full" />
         </div>
         <div>
            <div>
            <div className='shadow-lg mb-5 md:w-[40%] flex flex-col text-gray-700 gap-3 p-2'>
                 <h1 className='text-gray-700 font-semibold pl-2 text-2xl pb-5 border-b-[1px]  border-gray-500'>Project information</h1>
                 <p><b className='text-gray-800'>Category:</b> {category}</p>
                 <p><b className='text-gray-800'>Client:</b> {client}</p>
                 <p><b className='text-gray-800'>Project date:</b> {date}</p>
                 <p><b className='text-gray-800'>Project URL:</b><a className='text-blue-900 font-semibold' href={projectUrl}> Click here</a></p>
             </div>
             <div className='md:w-[40%]'>
                 <h2  className='text-gray-700 font-semibold pl-2 text-2xl pb-5 '>Project description</h2>
                 <p className='text-gray-600'>{description}</p>
             </div>
            </div>
           
         </div>
 
        </div>
     </div> :
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
                            <a href=' https://github.com/oriemiobang/dha_anywaa_challange'><FaGithub size={'30px'} /></a>
                           
                            </div>
                            <div onClick={()=>handleShowInfo(0)} className='text-white w-[50%] cursor-pointer flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                       
                            </div>
                        </div>
                        </div>

                        <div className="mobile animated relative group" ref={appImagesRef}>
                        <img src={bible} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <a href='https://github.com/oriemiobang/dha_anywaa_bible'><FaGithub size={'30px'} /></a>
                          
                            </div>
                            <div onClick={()=>handleShowInfo(1)}  className='text-white w-[50%] cursor-pointer flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                        <div className="mobile animated relative group"ref={appImagesRef}>
                        <img src={dha} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                           <a href='https://github.com/oriemiobang/Dha-Anywaa-application'> <FaGithub size={'30px'} /></a>
                            
                            </div>
                            <div onClick={()=>handleShowInfo(2)}  className='text-white w-[50%] flex cursor-pointer  items-center justify-center'>
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
                            <a href='https://github.com/oriemiobang/oriemi_portfolio'><FaGithub size={'30px'} /></a>
                            
                            </div>
                            <div onClick={()=>handleShowInfo(3)}  className='text-white w-[50%] cursor-pointer flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>
                        <div className={hideWeb? "hidden" : "mobile animated relative group"} ref={appImagesRef}>
                        <img src={deep} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <a href='https://github.com/oriemiobang/invincible_site'><FaGithub size={'30px'} /></a>
                            
                            </div>
                            <div onClick={()=>handleShowInfo(4)}  className='text-white w-[50%] cursor-pointer flex  items-center justify-center'>
                            <FaLink  size={'20px'} />
                            </div>
                        </div>
                        </div>

                    {/* Desktop */}
                      <div className={hideDesk? "hidden" : "mobile animated relative group"}ref={appImagesRef}>
                        <img src={music} alt="dha anywaa quiz icon" className="w-full h-auto" />

                        <div className=' flex absolute bottom-0 left-0 w-full bg-[#149ddd] h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='text-white w-[50%] flex  items-center justify-center'>
                            <a href='https://github.com/MisganaGetachew/BeGena-Player'><FaGithub size={'30px'} /></a>
                            
                            </div>
                            <div onClick={()=>handleShowInfo(5)}  className='text-white w-[50%] cursor-pointer flex  items-center justify-center'>
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
