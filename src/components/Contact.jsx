import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

function Contact(){
const templateId = 'template_2qsl1j5';
const serviceId = 'service_16pyqn6';
const publicKey = 'Rlp-utlbJ7t9SebJ_';

    
  function sendEmail(event){
    event.preventDefault();
  
    console.log(
      "button cliked"
    )
    const formData = new FormData(event.target);
    const paramsObj = {
      username: formData.get('username'),
      email:formData.get('email'),
      message: formData.get('message'),
      subject: formData.get('subject'), 
      phone: formData.get('phone')
    };
  
  
  
  
  
    emailjs.send(serviceId, templateId, paramsObj, publicKey)
      .then((response)=>{ 
      document.getElementById('username').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('phone').value = "";
    
        alert("Email sent")
        console.log(response)
      
  
  
      })
      .catch((error)=>{
        console.log(error)
        alert("Couldn't send email check your Network connection ")
      })
  
  
    
  
    
  
  }

    return (
        <div className="pt-10 pb-32">
            <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
        <h2 className="text-[#173b6c] font-railway">Contact</h2>
        
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>

      <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">Feel free to reach out to me for inquiries or collaborations.</p>
      <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4 flex gap-5 flex-col md:flex-row">
        <motion.div className="flex flex-col gap-6 bg-[fff] md:w-[50%] shadow-custom-shadow p-10 mt-10 items-start" initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="flex gap-5 group ">
                <div className="bg-[#dff3fc] w-12 flex text-[#149ddd] h-12 rounded-full justify-center items-center group-hover:text-white group-hover:bg-[#149ddd] transition-all duration-500 ease-out delay-75">
                    <CiLocationOn size={'30px'} />
                </div>
                <div>
                    <h1 className="font-semibold text-xl pb-2 text-[#050d18]">Location:</h1>
                    <p>Gambella, Ethiopia</p>
                </div>
            </div>
            <div className="flex gap-5 group">
                <div className="bg-[#dff3fc] w-12 flex text-[#149ddd] h-12 rounded-full justify-center items-center group-hover:text-white group-hover:bg-[#149ddd] transition-all duration-500 ease-out delay-75">
                    <MdOutlineEmail size={'30px'}  />
                    </div>
                <div>
                    <h1 className="font-semibold text-xl pb-2 text-[#050d18] ">Email:</h1>
                    <p className="text-[14px] md:text-[20px]"> oriemiobango@gmail.com</p>
                </div>
            </div>
            <div className="flex gap-5 group">
                <div className="bg-[#dff3fc] w-12 flex text-[#149ddd] h-12 rounded-full justify-center items-center group-hover:text-white group-hover:bg-[#149ddd] transition-all duration-500 ease-out delay-75">
                    <CiMobile2 />
                </div>
                <div>
                    <h1 className="font-semibold text-xl pb-2 text-[#050d18]">Call:</h1>
                    <p>+2519 287 52557</p>
                </div>
            </div>
        </motion.div>

      <form className="flex flex-col  gap-6 bg-[fff] md:w-[50%] shadow-custom-shadow p-10 mt-10 " id="emailForm" onSubmit={sendEmail}>
        
      <motion.div className="flex flex-col  gap-6"  initial={{ opacity: 0, y: 60 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="flex flex-row items-start justify-between gap-5 ">
                <div className=" w-[50%] flex flex-col gap-3">
                    <h1>Your Name</h1>
                    <input name="username" id="username" type="text" className="border-[1px]  border-gray-400 p-2 w-full focus:border-[#149ddd] focus:outline-none" />
                </div>
                <div className=" w-[50%] flex flex-col gap-3">
                    <h1>Your Email</h1>
                    <input name="email" id="email" type="email" className="border-[1px] border-gray-400 p-2 w-full  focus:border-[#149ddd] focus:outline-none" />
                </div>

            </div>
            <div className=" w-fullflex flex-col gap-3">
                    <h1>Phone number</h1>
                    <input name="phone" id="phone" type="tel" className="border-[1px] border-gray-400 p-2 w-full  focus:border-[#149ddd] focus:outline-none " />
                </div>
                <div className=" w-full flex flex-col gap-3">
                    <h1>subject</h1>
                    <input name="subject" id="subject" type="text" className="border-[1px] border-gray-400 p-2 w-full  focus:border-[#149ddd] focus:outline-none " />
                </div>
                <div className=" w-full flex flex-col gap-3">
                    <h1>Message</h1>
                    <textarea name="message" id="message" type="text" className="border-[1px] h-64 border-gray-400 p-2 w-full  focus:border-[#149ddd] focus:outline-none " />
                </div>

                <div className="flex gap-3 w-full justify-center">
                    <button type="submit" className="bg-[#149ddd] rounded text-white w-40 h-12 text-xl">Send Message</button>
                </div>
      

        </motion.div>
      </form>
      </div>

        </div>
    );
}

export default Contact;