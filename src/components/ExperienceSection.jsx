// components/ExperienceSection.jsx
import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';

const TimelineItem = ({ experience, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div 
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3>{experience.position}</h3>
        <h4>{experience.company}</h4>
        <p className="timeline-date">{experience.period}</p>
        <p>{experience.description}</p>
        {experience.achievements && (
          <ul className="list-disc">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Blockchain Management Corporation Pty Ltd',
      period: 'Mar 2024 - Apr 2025',
      description: 'I worked as Full Stack Developer and delivering projects using Laravel, Python, React, Tailwind, MySQL, Git, and Jira.',
      achievements: [
        'Developed full-stack apps with Laravel and Python, including face recognition, role-based portals, and internal tools like MINIO and Jitsi.',
        'Automated deployments for frontend/backend across platforms like FullIDCheck, DevReg, and TradeCheck.'
      ]
    },
    {
      position: 'Junior IT Specialist',
      company: 'Elite Insure Ltd.',
      period: 'Mar 2023 - Jan 2024',
      description: 'I worked for internal projects using tech stacks: Laravel, CodeIgniter, jQuery, Bootstrap, MySQL, Git, and GitHub.',
      achievements: [
        'Built full appointment system using Laravel',
        'Added features to employee portal (CodeIgniter)',
        'Created PDF merger tool for internal use',
        'Improved magazine generator with SnappyPDF'
      ]
    },
    {
      position: 'Web Developer',
      company: 'Saratel Solutions Inc.',
      period: 'Oct 2021 - Jan 2023',
      description: 'I worked as a Full Stack Web Dev & IT Support using tech stacks: Laravel, React, MySQL, WordPress, GTM, GA, Bootstrap, jQuery, Git, and Bitbucket.',
      achievements: [
        'Improved site speed via GTmetrix & PageSpeed',
        'Used Rollup & CSS purging to boost load times',
        'Automated WordPress deployment with Bitbucket Pipeline',
        'Streamlined release process, less manual work'
      ]
    },
    {
      position: 'Software Developer',
      company: 'Digilution Inc',
      period: 'Oct 2016 - Sep 2021',
      description: 'I worked as Software Developer and delivering projects using tech stacks: Delphi XE8/10, PHP, MySQL, MSSQL, jQuery, and Bootstrap.',
      achievements: [
        'Built hybrid Flight Info Display System',
        'Developed Employee Portal with biometrics',
        'Created custom desktop accounting systems',
        'Built Android app for sales tracking & receipts',
        'Supported factory automation initiatives'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'Nakayama Technology Corporation',
      period: 'Apr 2013 - Dec 2015',
      description: 'I worked in a 4-dev team delivering internal projects using VB6, PHP, jQuery, Bootstrap, and MySQL.',
      achievements: [
        'Built VB6 desktop app for order management',
        'Created web app for inventory & warehouse tracking',
        'Developed VB.net ERP for business process integration'
      ]
    },
    {
      position: 'Diploma in Information Technology',
      company: 'Systems Technology Institute (STI)',
      period: 'Apr 2011 - Apr 2013',
      achievements: [
        'Focused on IT with programming specialization',
        'Studied software application programming basics',
        'Gained skills in web development fundamentals',
        'Built strong foundation in programming methods'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div 
          className={`section-header ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;