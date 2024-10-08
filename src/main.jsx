import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideBar from './components/SideBar.jsx'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Facts from './components/Facts.jsx'
import Resume from './components/Resume.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex font-open'>
    <SideBar/>
   <div className='flex flex-col w-[100%] lg:w-[80%] xl:w-[79%] xl:ml-[21%]  lg:ml-[20%]'>
   <HomePage/>
   <About/>
   <Facts/>
   <Skills/>
   <Resume/>
   <Portfolio/>
   <Services/>
   <Contact/>
   
   </div>
    </div>
   

    
  </StrictMode>,
)
