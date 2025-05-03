import { useState, useEffect } from 'react';
import dsLogo from '../assets/ds_logo.svg';
import buttonIcon from '../assets/button_icon.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track the active section

  // Update the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects'];
      const scrollY = window.scrollY;
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          // If section is in the viewport (halfway into the view)
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
  
      // Ensure "home" is active when scrolled to the top
      if (scrollY === 0) {
        setActiveSection('home');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 max-w-[1400px] mx-auto px-6">
      <nav className="bg-[#f5f7f9]/[0.85] dark:bg-[#21203d]/80 backdrop-blur-2xl rounded-[130px] flex items-center justify-between py-4 px-6 sm:px-10 shadow-sm">
        
        {/* Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] flex items-center justify-center">
          <img src={dsLogo} alt="DS Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-[50px] text-md font-medium text-gray-800 dark:text-gray-200">
          <li>
            <a
              href="#"
              className={`hover:text-[#1465ff] ${activeSection === 'home' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:text-[#1465ff] ${activeSection === 'services' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:text-[#1465ff] ${activeSection === 'about' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-[#1465ff] ${activeSection === 'projects' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden lg:flex items-center gap-2 bg-[#1465ff] text-white text-lg px-6 py-2 rounded-[100px] font-medium hover:bg-blue-700 transition">
          Contact Me
          <img src={buttonIcon} alt="Arrow Icon" className="w-5 h-5" />
        </button>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <ul
          className={`absolute top-full left-0 w-full bg-white dark:bg-[#21203d] rounded-lg shadow-md p-4 flex flex-col gap-4 text-lg font-medium text-gray-800 dark:text-gray-200 lg:hidden z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-[500px] opacity-100 translate-y-0 mt-2' : 'max-h-0 opacity-0 -translate-y-2 mt-0'
          }`}
        >
          <li>
            <a
              href="#home"
              className={`hover:text-[#1465ff] ${activeSection === 'home' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:text-[#1465ff] ${activeSection === 'services' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:text-[#1465ff] ${activeSection === 'about' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-[#1465ff] ${activeSection === 'projects' ? 'text-[#1465ff]' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <button className="w-full flex items-center justify-center gap-2 bg-[#1465ff] text-white py-2 rounded-full hover:bg-blue-700 transition">
              Contact Me
              <img src={buttonIcon} alt="Arrow Icon" className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
