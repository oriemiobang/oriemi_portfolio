import { ReactTyped } from "react-typed";

function HomePage(){

    return (<>
    <div className="w-[100%] h-screen bg-blue-950 bg-[url('src/assets/profile-img.jpg')] bg-center md:bg-top bg-fixed bg-cover ">
        <div className="h-screen w-[100%] bg-black bg-opacity-40 flex flex-col  items-center justify-center">
            
        <div className="flex items-center justify-center text-[50px] md:text-[70px] font-extrabold text-white font-railway mt-96 md:mt-0"><h1>Oriemi Obang</h1></div>
        <div className="flex text-[30px] text-gray-200">
        <p>I am &nbsp;</p>
        <p className="md:text-[30px] text-[25px] text-gray-200 underline underline-offset-8 decoration-[#149ddd]"> <ReactTyped strings ={["freelancer", "mobile app developer", "web developer"]} loop typeSpeed={60} backSpeed={70} /></p> 
        </div>
        </div>
    </div>
    </>)
}

export default HomePage;