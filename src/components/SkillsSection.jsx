// components/SkillsSection.jsx
import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimation';

const SkillItem = ({ name, percentage }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-fill" 
          style={{
            '--width': `${percentage}%`,
            width: isVisible ? `${percentage}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div 
      className={`skill-category ${isVisible ? 'visible' : ''}`} 
      ref={ref}
    >
      <h3>{title}</h3>
      <div className="skill-items">
        {skills.map(skill => (
          <SkillItem 
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', percentage: 95 },
        { name: 'JavaScript', percentage: 95 },
        { name: 'React', percentage: 90 },
        { name: 'CSS (Tailwind & Bootstrap)', percentage: 92 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', percentage: 90 },
        { name: 'PHP', percentage: 90 },
        { name: 'MySQL', percentage: 85 },
        { name: 'Python', percentage: 30 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', percentage: 95 },
        { name: 'WordPress', percentage: 50 },
        { name: 'CPANEL', percentage: 70 },
        { name: 'Github Actions', percentage: 60 },
        { name: 'Figma', percentage: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div 
          className={`section-header ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map(category => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;