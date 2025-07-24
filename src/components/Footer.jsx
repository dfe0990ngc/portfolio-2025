// components/Footer.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import Socials from './Socials';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'UI/UX Design',
    'Consulting',
    'Maintenance'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nelson Gabriel Cañete</h3>
            <p>Full Stack Developer passionate about creating innovative web solutions and exceptional user experiences.</p>
            <div className="justify-center sm:justify-start footer-social">
              <Socials/>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              {services.map(service => (
                <li key={service}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="md:block flex flex-col justify-center items-center footer-contact">
              <p><FaEnvelope/> dfe0990ngc@gmail.com</p>
              <p><FaPhone/> +63 997 850 9514</p>
              <p><FaMapMarkedAlt/> Available Worldwide</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Nelson Gabriel Cañete. All rights reserved.</p>
          <p>Designed & Developed with <span className="heart">❤</span> React.js + Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;