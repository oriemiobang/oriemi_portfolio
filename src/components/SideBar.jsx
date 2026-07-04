import { useEffect, useState } from 'react';
import ProfilePic from '../assets/profile-img.jpg';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedinIn, FaHome, FaUser, FaFileAlt, FaSuitcase, FaTools } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'fact', label: 'Fact', icon: FaUser },
    { id: 'skill', label: 'Skills', icon: FaUser },
    { id: 'resume', label: 'Resume', icon: FaFileAlt },
    { id: 'portfolio', label: 'Portfolio', icon: FaSuitcase },
    { id: 'service', label: 'Services', icon: FaTools },
    { id: 'contact', label: 'Contact', icon: MdOutlineMail },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3;
      });

      if (current?.id) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavIcon = ({ icon: Icon }) => <Icon className="shrink-0" />;

  const sidebarWidthClass = isCollapsed ? 'w-[84px] lg:w-[84px]' : 'w-72 lg:w-[260px]';

  return (
    <>
      <aside className={`fixed left-0 top-0 z-50 h-screen ${sidebarWidthClass} bg-[#0c1017] text-[#e9ecf1] transition-all duration-300 ease-in-out`}>
        <button
          type="button"
          onClick={() => setIsCollapsed((value) => !value)}
          className="absolute right-[-18px] top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[#149ddd] text-white shadow-lg transition-transform duration-300 hover:scale-105"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <IoIosArrowForward size={24} /> : <IoIosArrowBack size={24} />}
        </button>

        <div className={`flex h-full flex-col ${isCollapsed ? 'items-center px-3 py-10 text-center' : 'items-center px-7 py-10 text-center'}`}>
          <div className="mb-4 rounded-full bg-[conic-gradient(from_200deg,#d6a85c,#4aa79b,#d6a85c)] p-[3px]">
            <img src={ProfilePic} alt="Oriemi Obang profile" className={`${isCollapsed ? 'h-[56px] w-[56px]' : 'h-[120px] w-[120px]'} rounded-full border-[3px] border-[#0c1017] object-cover transition-all duration-300`} />
          </div>

          {!isCollapsed ? (
            <>
              <h1 className="mb-1 font-[Fraunces] text-[22px] font-semibold tracking-[0.2px] text-[#e9ecf1]">
                Oriemi Obang
              </h1>
              <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.08em] text-[#d6a85c]">
                Full-Stack Developer
              </div>
            </>
          ) : null}

          <IconContext.Provider value={{ size: '1em' }}>
            <div className={`mb-9 flex gap-2.5 ${isCollapsed ? 'flex-col' : ''}`}>
              <a href="https://www.facebook.com/oriemiobang.oriemi" aria-label="Facebook" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[#10151d] text-[#8b93a5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:text-[#d6a85c]">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/winynaadhi?igsh=MjFzajhtaXRsNWV2" aria-label="Instagram" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[#10151d] text-[#8b93a5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:text-[#d6a85c]">
                <FaInstagram />
              </a>
              <a href="https://t.me/" aria-label="Telegram" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[#10151d] text-[#8b93a5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:text-[#d6a85c]">
                <FaTelegram />
              </a>
              <a href="https://www.linkedin.com/in/oriemi-obang-oriemi-682b2a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[#10151d] text-[#8b93a5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6a85c] hover:text-[#d6a85c]">
                <FaLinkedinIn />
              </a>
            </div>
          </IconContext.Provider>

          <nav className={`w-full text-left ${isCollapsed ? 'mt-2' : ''}`}>
            {sections.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`relative mb-[2px] flex w-full items-center rounded-[8px] py-[11px] text-[14.5px] font-medium transition-all duration-150 ${isCollapsed ? 'justify-center gap-0 px-0' : 'gap-3 px-[14px]'} ${isActive ? 'bg-[#10151d] text-[#e9ecf1]' : 'text-[#8b93a5] hover:bg-[#10151d] hover:text-[#e9ecf1]'}`}
                  title={label}
                >
                  <span className={`h-[5px] w-[5px] rounded-full ${isActive ? 'bg-[#d6a85c] shadow-[0_0_8px_#d6a85c]' : 'bg-[#5b6272]'}`} />
                  <NavIcon icon={Icon} />
                  {!isCollapsed ? <span>{label}</span> : null}
                  {isActive ? <span className="absolute left-[-28px] top-0 bottom-0 w-[3px] rounded-[2px] bg-[#d6a85c]" /> : null}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

    </>
  );
}

export default SideBar;
