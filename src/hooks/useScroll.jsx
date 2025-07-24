// hooks/useScroll.js
import { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section
      const sections = document.querySelectorAll('section');
      let current = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const headerHeight = 80;
        
        if (window.scrollY >= (sectionTop - headerHeight - 100)) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      const headerHeight = 80;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{
      scrollY,
      activeSection,
      scrollToSection
    }}>
      {children}
    </ScrollContext.Provider>
  );
};