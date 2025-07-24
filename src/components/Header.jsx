// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useScroll } from '../hooks/useScroll';
import MyResume from '../assets/My-New-Resume-2025.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, activeSection, scrollToSection } = useScroll();

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const headerStyle = {
    background: scrollY > 100 
      ? 'rgba(15, 23, 42, 0.98)' 
      : 'rgba(15, 23, 42, 0.95)'
  };

  return (
    <header className="header" style={headerStyle}>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <span className="logo-text">NGC</span>
            </a>
          </div>
          
          <ul className={`items-center nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navigationItems.map(item => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                target="_blank" 
                download="Nelson-Cañete-Resume.pdf" 
                href={MyResume} 
                className="px-[10px] py-1 btn btn-secondary"
              >
                <FaFilePdf />
                Download My Resume
              </a>
            </li>
          </ul>
          
          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;