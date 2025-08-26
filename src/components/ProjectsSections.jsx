import FullIDCheckImg from '../assets/images/fullidcheck.webp';
import TradecheckImg from '../assets/images/tradecheck.webp';
import SaratelSolutionsImg from '../assets/images/saratelsolutions.webp';
import AnacaImg from '../assets/images/anaca.webp';
import PCDSImg from '../assets/images/pcds.webp';
import PortfolioImg from '../assets/images/portfolio.webp';
import HelCrisHotelImg from '../assets/images/hillcrest-suites.webp';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article 
      className={`project-card ${isVisible ? 'visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              target="_blank" 
              rel="noopener" 
              href={project.liveUrl} 
              className="project-link"
            >
              <FaExternalLinkAlt/>
            </a>
            <a 
              target="_blank" 
              rel="noopener" 
              href={project.githubUrl || "#"} 
              onClick={project.githubUrl ? undefined : (e) => e.preventDefault()}
              title={project.githubUrl ? "View Code" : "Private Repository"}
              className="project-link"
            >
              <FaGithub/>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: 'Full ID Check',
      description: 'Full ID Check is a global identity verification platform that uses advanced data science to ensure only verified, authentic professionals gain access to secure services.',
      image: FullIDCheckImg,
      liveUrl: 'https://fullidcheck.com/',
      technologies: ['React', 'Laravel', 'Python', 'PHP', 'Face API', 'MySQL', 'Stripe', 'Google Oauth']
    },
    {
      title: 'Trade Check',
      description: 'TradeCheck is a verification platform for the trade industry, using advanced ID checks to authenticate skilled workers, apprentices, and contractors—building a trusted network of verified professionals.',
      image: TradecheckImg,
      liveUrl: 'https://tradecheck.au/',
      technologies: ['React', 'Laravel', 'Python', 'PHP', 'Face API', 'MySQL', 'Stripe', 'Google Oauth']
    },
    {
      title: 'Saratel Solutions',
      description: 'Saratel Solutions is a global outsourcing partner helping businesses achieve growth and expansion goals.',
      image: SaratelSolutionsImg,
      liveUrl: 'https://saratelsolutions.com/',
      technologies: ['Custom WordPress', 'PHP', 'Google Tag Manager', 'Javascript', 'CSS/SCSS', 'Bootstrap']
    },
    {
      title: 'Anaca',
      description: 'We\'re on your side — helping you keep more of what you earn. We tailor our expertise to your business needs and guide you every step toward growth.',
      image: AnacaImg,
      liveUrl: 'https://anaca.com.au/',
      technologies: ['Custom WordPress', 'PHP', 'Google Tag Manager', 'Javascript', 'CSS/SCSS', 'Bootstrap']
    },
    {
      title: 'PCDS LMS',
      description: 'Comprehensive LMS with course & class management, Resource Uploads & Downloads, and attendance tracking.',
      image: PCDSImg,
      liveUrl: 'https://lms.pcds.edu.ph',
      technologies: ['Laravel', 'Javascript', 'MySQL', 'PHP']
    },
    {
      title: 'Personal Portfolio',
      description: 'Responsive portfolio website showcasing projects and skills with modern design.',
      image: PortfolioImg,
      liveUrl: 'https://nelson-gc-portfolio.vercel.app/',
      githubUrl: 'https://github.com/dfe0990ngc/portfolio-2025',
      technologies: ['HTML5', 'CSS3', 'JavaScript','React.js']
    },
    {
      title: 'HILLCREST SUITES',
      description: 'PCDS - HillCrest Suites is a sample hotel booking web application built with React.js and TailwindCSS, designed to train Polytechnic College of Davao del Sur frontliner students in real-world hospitality operations.',
      image: HelCrisHotelImg,
      liveUrl: 'https://www.hillcrest-suites.pcds.edu.ph/',
      githubUrl: 'https://github.com/dfe0990ngc/hillcrest-suites',
      technologies: ['HTML5', 'CSS3','TailwindCSS', 'JavaScript', 'React.js','API Integration']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div 
          className={`section-header ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;