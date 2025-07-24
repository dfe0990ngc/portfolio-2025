import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';

// AboutSection Component
const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '6+', label: 'Projects Completed' },
    { value: '100%', label: 'Active to work & Team Player' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div 
          className={`section-header fade-in ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="flex lg:flex-row flex-col-reverse about-content">
          <div className="w-100 lg:max-w-[50%] about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in creating scalable web applications 
              and robust backend systems. With a strong foundation in both frontend and backend technologies, 
              I enjoy solving complex problems and bringing ideas to life through code.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="flex justify-center w-full sm:w-60 btn btn-primary">
              Let's Work Together
            </a>
          </div>
          
          <div className="w-100 lg:max-w-[50%] about-image">
            <img 
              src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="About me" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;