
import { SiFlutter } from "react-icons/si";
import { CiMobile2 } from "react-icons/ci";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { ImFire } from "react-icons/im";
import { IconContext } from 'react-icons';
import { motion } from "framer-motion";
function Services(){

    return(<div>
        <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
        <h2 className="text-[#173b6c] font-railway">Services</h2>
        
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>
      <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">Offering expertise in mobile, web, and desktop app development,
         including custom solutions using Flutter, Dart, HTML, CSS, JavaScript, 
         Python, and Java. Dedicated to delivering high-quality, user-friendly applications
          tailored to your needs.</p>
<IconContext.Provider value={{ size: '40px' }}>

    <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4 flex flex-col gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            <motion.div className="flex gap-5 flex-row group" initial={{ opacity: 0, y: 60 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="bg-[#149ddd] flex justify-center w-[270px] md:w-56 h-14 border-[#149ddd] text-white rounded-full border-2 group-hover:bg-white items-center group-hover:text-[#149ddd] transition-all duration-500 ease-out delay-75">
            <SiFlutter   /> 
            </div>
            <div>
                <h1 className="font-semibold text-[23px] text-gray-600">Flutter Development</h1>
                <p>I create high-performance, visually stunning mobile apps
                     using Flutter and Dart.
                      From concept to deployment,
                       I deliver innovative, cross-platform 
                       solutions tailored to your needs.
                </p>
            </div>
            </motion.div>
            <motion.div className="flex gap-5 group" initial={{ opacity: 0, y: 70 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="bg-[#149ddd] flex justify-center w-[300px] md:w-56 h-16 border-[#149ddd] text-white rounded-full border-2 group-hover:bg-white items-center group-hover:text-[#149ddd] transition-all duration-500 ease-out delay-75">
            <CiMobile2   />
            </div>
            <div>
                <h1 className="font-semibold text-[23px] text-gray-600">Web Development</h1>
                <p>I specialize in creating responsive and user-friendly websites using HTML,
                     CSS, JavaScript, and React. From design to deployment,
                     I deliver innovative web solutions tailored to your needs.
                </p>
            </div>
            </motion.div>
            <motion.div className="flex gap-5 group" initial={{ opacity: 0, y: 80 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="bg-[#149ddd] flex justify-center w-[270px] md:w-56 h-16 border-[#149ddd] text-white rounded-full border-2 group-hover:bg-white items-center group-hover:text-[#149ddd] transition-all duration-500 ease-out delay-75">
            <TbDeviceDesktopCode   />
            </div>
            <div className="flex gap-3 flex-col">
                <h1 className="font-semibold text-[23px] text-gray-600">Desktop App</h1>
                <p>I develop robust and user-friendly desktop applications using Python and Java. From design to deployment, I deliver customized solutions that meet your specific needs.
                </p>
            </div>
        </motion.div>
        <motion.div className="flex gap-5 group" initial={{ opacity: 0, y: 90 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
     <div className="bg-[#149ddd] flex justify-center w-[320px] md:w-56 h-16 border-[#149ddd] text-white rounded-full border-2 group-hover:bg-white items-center group-hover:text-[#149ddd] transition-all duration-500 ease-out delay-75">
        <ImFire />
    </div>
            <div className="flex gap-3 flex-col">
                <h1 className="font-semibold text-[23px] text-gray-600">Firebase Authentication</h1>
                <p>I provide secure and reliable authentication services for mobile apps 
                    using Firebase. Specializing in user management and authentication,
                     I ensure seamless and secure access for your app users.
                </p>
            </div>
        </motion.div>

     </div>
     
        </div>
        </IconContext.Provider>

    </div>);
}

export default Services;