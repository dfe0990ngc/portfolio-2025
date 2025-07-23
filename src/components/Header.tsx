'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaGraduationCap, FaCog, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: FaHome },
    { href: '#about', label: 'About', icon: FaUser },
    { href: '#experience', label: 'Experience', icon: FaBriefcase },
    { href: '#projects', label: 'Projects', icon: FaProjectDiagram },
    { href: '#education', label: 'Education', icon: FaGraduationCap },
    { href: '#skills', label: 'Skills', icon: FaCog },
    { href: '#contact', label: 'Contact', icon: FaEnvelope },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-2xl border-b border-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <span className="text-accent">Nelson</span>
            <span className="text-text ml-1">Cañete</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent bg-accent/10'
                    : 'text-text hover:text-accent hover:bg-accent/5'
                }`}
              >
                <item.icon size={16} />
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-accent/10 rounded-full border border-accent/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-accent to-highlight text-primary px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            <FaEnvelope size={16} />
            Get In Touch
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-text hover:text-accent transition-colors duration-300 p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-code-bg/95 backdrop-blur-md rounded-2xl overflow-hidden border border-accent/20"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full text-left px-6 py-3 transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-accent bg-accent/10 border-r-2 border-accent'
                        : 'text-text hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => scrollToSection('#contact')}
                  className="flex items-center gap-3 w-full text-left px-6 py-3 bg-gradient-to-r from-accent to-highlight text-primary rounded-lg mx-4 mt-4 font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <FaEnvelope size={18} />
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}