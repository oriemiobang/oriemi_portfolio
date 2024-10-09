import { motion } from "framer-motion";

function Resume(){

    
                        
                            

   const  personal_info = ['Gambella Ethiopia', '+251 928 752557', 'oriemiobango@gmail.com' ]

    return (
    <div className="pb-10" id="resume">
        <div className="pt-20 ml-8 mr-8 md:ml-14 text-[32px] font-bold">
        <h2 className="text-[#173b6c] font-railway">Resume</h2>
        
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>
      <p className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">I am a versatile professional skilled in mobile and web development, specializing in Flutter, Dart, HTML, CSS, JavaScript, Firebase, and React. 
        Passionate about creating user-friendly applications and websites, I excel in problem-solving and effective communication. Committed to continuous learning and delivering high-quality results in dynamic environments.</p>
        <div className="md:flex justify-between">
            <motion.div className=" md:w-[50%]" initial={{ opacity: 0, y: 60 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">
            <div>
                <h1 className="font-bold text-2xl pb-4">Sumary</h1>
                <div className="flex gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-5 w-5 bg-[#173b6c] rounded-full flex justify-center items-center"><div className="h-4 w-4 rounded-full bg-white flex justify-center "></div> </div>
                        <div className="w-[2px] bg-[#173b6c] h-full"></div>
                    </div>

                    <div> 
                        <h1 className="font-semibold text-[21px] uppercase pb-1">Oriemi Obang</h1>
                        <p className="italic">Innovative and deadline-driven Flutter developer and web developer with 3+ years of experience creating and developing user-friendly apps and webs.</p>
                        <ul className="list-disc pt-3">
                            {personal_info.map((item, index) => (<li key={index}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <h1 className="font-bold text-2xl pb-4">Education</h1>
                <div className="flex gap-5 ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-5 w-5 bg-[#173b6c] rounded-full flex justify-center items-center"><div className="h-4 w-4 rounded-full bg-white flex justify-center "></div> </div>
                        <div className="w-[2px] bg-[#173b6c] h-full"></div>
                    </div>

                    <div> 
                        <h1 className="font-semibold text-[21px] uppercase">Bachelor degree in software engineering</h1>
                        <div className="bg-slate-300 inline-block p-1"><p>2021 - 2026</p></div>
                        <p className="italic pt-2 pb-2">Haramaya University</p>
                        <p className="italic">Haramaya University, located in Ethiopia, is a distinguished institution known for its excellence in education and research. It offers diverse programs that foster innovation and sustainability.
                             As an alumnus, I have gained invaluable knowledge and skills that have shaped my professional journey.</p>
                        
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <h1 className="font-bold text-2xl pb-4">Language Translation</h1>
                <div className="flex gap-5 ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-5 w-5 bg-[#173b6c] rounded-full flex justify-center items-center"><div className="h-4 w-4 rounded-full bg-white flex justify-center "></div> </div>
                        <div className="w-[2px] bg-[#173b6c] h-full"></div>
                    </div>

                    <div> 
                        <h1 className="font-semibold text-[21px] uppercase">Works as a translator</h1>
                        <div className="bg-slate-300 inline-block p-1"><p>2018 - present</p></div>
                        
                        <p className="italic"> I am also a translator specializing in translating between Dha Anywaa and English. Since 2018, Oriemi has been dedicated to bridging linguistic gaps, offering accurate and meaningful translations in both languages.</p>
                        
                    </div>
                </div>
            </div>
        </div>
            </motion.div>


            <motion.div className="md:w-[50%]" initial={{ opacity: 0, y: 90 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}>
            <div className="ml-8 md:ml-14 mr-8 md:mr-14 mt-4">
            <div>
                <h1 className="font-bold text-2xl pb-4">Professional Experience</h1>
                <div className="flex gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-5 w-5 bg-[#173b6c] rounded-full flex justify-center items-center"><div className="h-4 w-4 rounded-full bg-white flex justify-center "></div> </div>
                        <div className="w-[2px] bg-[#173b6c] h-full"></div>
                    </div>

                    <div> 
                        <h1 className="font-semibold text-[21px] uppercase pb-1">Flutter developer</h1>
                        <div className="bg-slate-300 inline-block p-1"><p>2022 - Present</p></div>
                        <p className="italic pt-2 pb-2">Haramaya University</p>

                        <ul className="list-disc pb-5">
                            <li>Led the design, development, and implementation of various mobile applications using Flutter and Dart.</li>
                            <li>Created a Bible app featuring 10 different versions, enhancing accessibility for diverse users.</li>
                            <li>Developed the Dha Anywaa app to aid people in learning the Anywaa language.</li>
                            <li>Designed and built the Dha Anywaa Quiz app, providing an interactive platform for language practice.</li>
                            <li>Ensured the quality and performance of all apps through rigorous testing and user feedback.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                {/* <h1 className="font-bold text-2xl pb-4">Sumary</h1> */}
                <div className="flex gap-5 ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-5 w-5 bg-[#173b6c] rounded-full flex justify-center items-center"><div className="h-4 w-4 rounded-full bg-white flex justify-center "></div> </div>
                        <div className="w-[2px] bg-[#173b6c] h-full"></div>
                    </div>

                    <div> 
                        <h1 className="font-semibold text-[21px] uppercase">Web developer & desktop app developer</h1>
                        <div className="bg-slate-300 inline-block p-1"><p>2021 - Presenet</p></div>
                        <p className="italic pt-2 pb-2">Haramaya University</p>
                    
                        <ul className="list-disc">
                           <li>Led the design, development, and implementation of various web and desktop applications using HTML, CSS, JavaScript, Python, and Java.</li>
                           <li>Developed a Bingo game and Tic Tac Toe game using Python GUI, enhancing user engagement and experience.</li>
                           <li>Collaborated with my team to create a comprehensive portfolio for Deep and Labs Team, showcasing our projects and expertise.</li>
                           <li>Built a music player application using Java JFS, providing a seamless and interactive user interface.</li>
                           <li>Ensured the quality and functionality of all applications through extensive testing and user feedback.</li>
                           <li>Managed project timelines and coordinated with team members to deliver high-quality results on schedule.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </motion.div>

        </div>

    </div>);

}

export default Resume;