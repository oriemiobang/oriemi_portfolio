import { StrictMode, useState } from 'react'
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
import AIAssistant from './components/AIAssistant.jsx'
import Blog from './components/Blog.jsx'
import PostDetail from './components/PostDetail.jsx'
import Contact from './components/Contact.jsx'
import AdminApp from './components/admin/AdminApp.jsx'

function MainApp() {
  const [view, setView] = useState('main'); // 'main' or 'post-detail'
  const [activePostSlug, setActivePostSlug] = useState(null);

  const handleOpenPost = (slug) => {
    setActivePostSlug(slug);
    setView('post-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('main');
    setActivePostSlug(null);
  };

  return (
    <div className='flex font-open'>
      <SideBar />
      <div className='flex flex-col w-[100%] lg:w-[80%] xl:w-[79%] xl:ml-[21%] lg:ml-[20%]'>
        {view === 'main' ? (
          <>
            <HomePage />
            <About />
            <Facts />
            <Skills />
            <Resume />
            <Portfolio />
            <Services />
            <AIAssistant />
            <Blog onOpenPost={handleOpenPost} />
            <Contact />
          </>
        ) : (
          <PostDetail slug={activePostSlug} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}

function Root() {
  if (window.location.pathname.startsWith('/admin')) {
    return <AdminApp />;
  }
  return <MainApp />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
