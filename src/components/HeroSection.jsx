// components/HeroSection.jsx
import React, { useEffect } from 'react';
import { FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { MdOutlineJavascript } from 'react-icons/md';
import { useTypewriter, useParallax } from '../hooks/useAnimation';
import Avatar from '../assets/images/avatar.webp';
import Socials from './Socials';

const FloatingCard = ({ icon: Icon, label, delay = 0, offset }) => (
  <div 
    className="floating-card tech-card"
    style={{
      transform: `translateY(${offset}px)`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon className="w-8 h-8 text-primary"/>
    <span>{label}</span>
  </div>
);

const HeroSection = () => {
  const [displayName, isNameComplete] = useTypewriter('Nelson Gabriel Cañete', 100);
  const parallaxOffset = useParallax(0.1);
  const cardOffset1 = useParallax(0.05);
  const cardOffset2 = useParallax(0.07);
  const cardOffset3 = useParallax(0.09);
  const cardOffset4 = useParallax(0.11);

  const techStack = [
    { icon: FaReact, label: 'React', offset: cardOffset1, delay: 0.1 },
    { icon: FaPhp, label: 'PHP', offset: cardOffset2, delay: 0.2 },
    { icon: MdOutlineJavascript, label: 'JavaScript', offset: cardOffset3, delay: 0.3 },
    { icon: FaLaravel, label: 'Laravel', offset: cardOffset4, delay: 0.4 }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="text-highlight">Hello, I'm</span>
              <span className="hero-name">{displayName}</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create exceptional digital experiences through innovative web solutions, 
              specializing in PHP Laravel, React.js, and modern development technologies.
            </p>
            
            <div className="hero-cta">
              <a href="mailto:dfe0990ngc@gmail.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Email Me
              </a>
              <a href="tel:+639978509514" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                Call Me
              </a>
            </div>
            
            <div className="hero-social">
              <Socials />
            </div>
          </div>
          
          <div 
            className="hero-image"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div className="hero-avatar">
              <img src={Avatar} alt="Nelson Gabriel Cañete" />
            </div>
            <div className="floating-elements">
              {techStack.map((tech, index) => (
                <FloatingCard
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  delay={tech.delay}
                  offset={tech.offset}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;