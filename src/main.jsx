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

import { mockBlogPosts } from './data/mockBlogData.jsx'

function MainApp() {
  const [view, setView] = useState('main'); // 'main' or 'post-detail'
  const [activePostId, setActivePostId] = useState(null);

  const handleOpenPost = (id) => {
    setActivePostId(id);
    setView('post-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('main');
    setActivePostId(null);
  };

  const activePost = mockBlogPosts.find(p => p.id === activePostId) || mockBlogPosts[0];

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
          <PostDetail post={activePost} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
