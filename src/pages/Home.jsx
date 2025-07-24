import { FaEnvelope, FaExternalLinkAlt, FaFilePdf, FaGithub, FaLaravel, FaMapMarkedAlt, FaPhp, FaReact,FaPhone } from 'react-icons/fa';
import { MdOutlineJavascript } from 'react-icons/md';
import Avatar from '../assets/images/avatar.webp';
import MyResume from '../assets/My-New-Resume-2025.pdf';
import FullIDCheckImg from '../assets/images/fullidcheck.webp';
import TradecheckImg from '../assets/images/tradecheck.webp';
import SaratelSolutionsImg from '../assets/images/saratelsolutions.webp';
import AnacaImg from '../assets/images/anaca.webp';
import PCDSImg from '../assets/images/pcds.webp';
import PortfolioImg from '../assets/images/portfolio.webp';
import '../styles.css';

import Socials from '../components/Socials';

export default function Home(){
    
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div className="nav-container">
                        <div className="nav-logo">
                            <a href="#home">
                                <span className="logo-text">NGC</span>
                            </a>
                        </div>
                        
                        <ul className="items-center nav-menu">
                            <li><a href="#home" className="nav-link">Home</a></li>
                            <li><a href="#about" className="nav-link">About</a></li>
                            <li><a href="#skills" className="nav-link">Skills</a></li>
                            <li><a href="#projects" className="nav-link">Projects</a></li>
                            <li><a href="#experience" className="nav-link">Experience</a></li>
                            <li><a href="#contact" className="nav-link">Contact</a></li>
                            <li>
                                <a target="_blank" download="Nelson-Cañete-Resume.pdf" href={MyResume} className="px-[10px] py-1 btn btn-secondary">
                                    <FaFilePdf></FaFilePdf>
                                    Download My Resume
                                </a>
                            </li>
                        </ul>
                        
                        <div className="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>

            <section id="home" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                <span className="text-highlight">Hello, I'm</span>
                                <span className="hero-name">Nelson Gabriel Cañete</span>
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
                                <Socials/>
                            </div>
                        </div>
                        
                        <div className="hero-image">
                            <div className="hero-avatar">
                                <img src={Avatar} alt="Nelson Gabriel Cañete" />
                            </div>
                            <div className="floating-elements">
                                <div className="floating-card tech-card">
                                    <FaReact className="w-8 h-8 text-primary"/>
                                    <span>React</span>
                                </div>
                                <div className="floating-card tech-card">
                                    <FaPhp className="w-8 h-8 text-primary"/>
                                    <span>PHP</span>
                                </div>
                                <div className="floating-card tech-card">
                                    <MdOutlineJavascript className="w-8 h-8 text-primary"/>
                                    <span>JavaScript</span>
                                </div>
                                <div className="floating-card tech-card">
                                    <FaLaravel className="w-8 h-8 text-primary"/>
                                    <span>Laravel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <div className="section-header">
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
                                <div className="stat-item">
                                    <h3>5+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div className="stat-item">
                                    <h3>6+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="stat-item">
                                    <h3>100%</h3>
                                    <p>Active to work & Team Player</p>
                                </div>
                            </div>
                            
                            <a href="#contact" className="flex justify-center w-full sm:w-60 btn btn-primary">Let's Work Together</a>
                        </div>
                        
                        <div className="w-100 lg:max-w-[50%] about-image">
                            <img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About me" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Skills & Technologies</h2>
                        <p className="section-subtitle">My technical expertise</p>
                    </div>
                    
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <div className="skill-items">
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>HTML5</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '95%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>JavaScript</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '95%'}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>React</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '90%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>CSS (Tailwind & Bootstrap)</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '92%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <div className="skill-items">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>Laravel</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '90%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '90%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>MySQL</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '85%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>Python</span>
                                        <span>30%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '30%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="skill-category">
                            <h3>Tools & Others</h3>
                            <div className="skill-items">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>Git</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '95%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>WordPress</span>
                                        <span>50%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '50%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>CPANEL</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '70%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>Github Actions</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '60%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span>Figma</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="skill-fill" style={{'--width': '85%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Some of my recent work</p>
                    </div>
                    
                    <div className="projects-grid">
                        <article className="project-card">
                            <div className="project-image">
                                <img src={FullIDCheckImg} alt="Full ID Check Platform" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://fullidcheck.com/" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="#" onClick={(e)=>e.preventDefault()} title="Private Repository" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Full ID Check</h3>
                                <p>Full ID Check is a global identity verification platform that uses advanced data science to ensure only verified, authentic professionals gain access to secure services.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Laravel</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">PHP</span>
                                    <span className="tech-tag">Face API</span>
                                    <span className="tech-tag">MySQL</span>
                                    <span className="tech-tag">Stripe</span>
                                    <span className="tech-tag">Google Oauth</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className="project-card">
                            <div className="project-image">
                                <img src={TradecheckImg} alt="Trade ID Check" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://tradecheck.au/" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="#" onClick={(e)=>e.preventDefault()} title="Private Repository" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Trade Check</h3>
                                <p>TradeCheck is a verification platform for the trade industry, using advanced ID checks to authenticate skilled workers, apprentices, and contractors—building a trusted network of verified professionals.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Laravel</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">PHP</span>
                                    <span className="tech-tag">Face API</span>
                                    <span className="tech-tag">MySQL</span>
                                    <span className="tech-tag">Stripe</span>
                                    <span className="tech-tag">Google Oauth</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className="project-card">
                            <div className="project-image">
                                <img src={SaratelSolutionsImg} alt="Saratel Solutions Website" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://saratelsolutions.com/" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="#" onClick={(e)=>e.preventDefault()} title="Private Repository" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Saratel Solutions</h3>
                                <p>Saratel Solutions is a global outsourcing partner helping businesses achieve growth and expansion goals.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Custom WordPress</span>
                                    <span className="tech-tag">PHP</span>
                                    <span className="tech-tag">Google Tag Manager</span>
                                    <span className="tech-tag">Javascript</span>
                                    <span className="tech-tag">CSS/SCSS</span>
                                    <span className="tech-tag">Bootstrap</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className="project-card">
                            <div className="project-image">
                                <img src={AnacaImg} alt="Anaca Website" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://anaca.com.au/" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="#" onClick={(e)=>e.preventDefault()} title="Private Repository" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Anaca</h3>
                                <p>We’re on your side — helping you keep more of what you earn. We tailor our expertise to your business needs and guide you every step toward growth.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Custom WordPress</span>
                                    <span className="tech-tag">PHP</span>
                                    <span className="tech-tag">Google Tag Manager</span>
                                    <span className="tech-tag">Javascript</span>
                                    <span className="tech-tag">CSS/SCSS</span>
                                    <span className="tech-tag">Bootstrap</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className="project-card">
                            <div className="project-image">
                                <img src={PCDSImg} alt="PCDS eLMS" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://lms.pcds.edu.ph" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="#" onClick={(e)=>e.preventDefault()} title="Private Repository" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>PCDS LMS</h3>
                                <p>Comprehensive LMS with course & class management, Resource Uploads & Downloads, and attendance tracking.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Laravel</span>
                                    <span className="tech-tag">Javasript</span>
                                    <span className="tech-tag">MySQL</span>
                                    <span className="tech-tag">PHP</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className="project-card">
                            <div className="project-image">
                                <img src={PortfolioImg} alt="Portfolio Website" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a target="_blank" rel="noopener" href="https://nelson-gc-portfolio.vercel.app/" className="project-link"><FaExternalLinkAlt/></a>
                                        <a target="_blank" rel="noopener" href="https://github.com/dfe0990ngc/portfolio-2025" className="project-link"> <FaGithub/> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Personal Portfolio</h3>
                                <p>Responsive portfolio website showcasing projects and skills with modern design.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">HTML5</span>
                                    <span className="tech-tag">CSS3</span>
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">GSAP</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="experience" className="experience">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Experience & Education</h2>
                        <p className="section-subtitle">My professional journey</p>
                    </div>
                    
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Full Stack Developer</h3>
                                <h4>Blockchain Management Corporation Pty Ltd</h4>
                                <p className="timeline-date">Mar 2024 - Apr 2025</p>
                                <p>I worked as Full Stack Developer and delivering projects using Laravel, Python, React, Tailwind, MySQL, Git, and Jira.</p>
                                <ul className="list-disc">
                                    <li>Developed full-stack apps with Laravel and Python, including face recognition, role-based portals, and internal tools like MINIO and Jitsi.</li>
                                    <li>Automated deployments for frontend/backend across platforms like FullIDCheck, DevReg, and TradeCheck.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Junior IT Specialist</h3>
                                <h4>Elite Insure Ltd.</h4>
                                <p className="timeline-date">Mar 2023 - Jan 2024</p>
                                <p>I worked for internal projects using tech stacks: Laravel, CodeIgniter, jQuery, Bootstrap, MySQL, Git, and GitHub.</p>
                                <ul className="list-disc">
                                    <li>Built full appointment system using Laravel</li>
                                    <li>Added features to employee portal (CodeIgniter)</li>
                                    <li>Created PDF merger tool for internal use</li>
                                    <li>Improved magazine generator with SnappyPDF</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Web Developer</h3>
                                <h4>Saratel Solutions Inc.</h4>
                                <p className="timeline-date">Oct 2021 - Jan 2023</p>
                                <p>I worked as a Full Stack Web Dev & IT Support using tech stacks: Laravel, React, MySQL, WordPress, GTM, GA, Bootstrap, jQuery, Git, and Bitbucket.</p>
                                <ul className="list-disc">
                                    <li>Improved site speed via GTmetrix & PageSpeed</li>
                                    <li>Used Rollup & CSS purging to boost load times</li>
                                    <li>Automated WordPress deployment with Bitbucket Pipeline</li>
                                    <li>Streamlined release process, less manual work</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Software Developer</h3>
                                <h4>Digilution Inc</h4>
                                <p className="timeline-date">Oct 2016 - Sep 2021</p>
                                <p>I worked as Software Developer and delivering projects using tech stacks: Delphi XE8/10, PHP, MySQL, MSSQL, jQuery, and Bootstrap.</p>
                                <ul className="list-disc">
                                    <li>Built hybrid Flight Info Display System</li>
                                    <li>Developed Employee Portal with biometrics</li>
                                    <li>Created custom desktop accounting systems</li>
                                    <li>Built Android app for sales tracking & receipts</li>
                                    <li>Supported factory automation initiatives</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Full Stack Developer</h3>
                                <h4>Nakayama Technology Corporation</h4>
                                <p className="timeline-date">Apr 2013 - Dec 2015</p>
                                <p>I worked in a 4-dev team delivering internal projects using VB6, PHP, jQuery, Bootstrap, and MySQL.</p>
                                <ul className="list-disc">
                                    <li>Built VB6 desktop app for order management</li>
                                    <li>Created web app for inventory & warehouse tracking</li>
                                    <li>Developed VB.net ERP for business process integration</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Diploma in Information Technology</h3>
                                <h4>Systems Technology Institute (STI)</h4>
                                <p className="timeline-date">Apr 2011 - Apr 2013</p>
                                <ul className="list-disc">
                                    <li>Focused on IT with programming specialization</li>
                                    <li>Studied software application programming basics</li>
                                    <li>Gained skills in web development fundamentals</li>
                                    <li>Built strong foundation in programming methods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Let's discuss your next project</p>
                    </div>
                    
                    <div className="md:flex-row flex-col contact-content">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                            
                            <div className="contact-items">
                                <div className="contact-item">
                                    <FaEnvelope className="w-6 h-6"/>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:dfe0990ngc@gmail.com">dfe0990ngc@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <FaPhone className="w-6 h-6"/>
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+639978509514">+63 997 850 9514</a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <FaMapMarkedAlt className="w-6 h-6"/>  
                                    <div>
                                        <h4>Location</h4>
                                        <p>Available for remote work worldwide</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="justify-center sm:justify-start contact-social">
                                <Socials/>
                            </div>
                        </div>
                        
                        <div className="contact-form-container">
                            <form className="opacity-70 contact-form" id="contactForm">
                                <em className="text-[#ff5555]">This form is not yet usable to since the personal domain is offline:</em>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" required disabled />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                                
                                <div className="form-group">
                                    <input type="email" id="email" name="email" required disabled />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" id="subject" name="subject" required disabled />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                                
                                <div className="form-group">
                                    <textarea id="message" name="message" rows="5" required disabled></textarea>
                                    <label htmlFor="message">Your Message</label>
                                </div>
                                
                                <button type="submit" className="flex justify-center w-100 sm:w-60 btn btn-primary" disabled>
                                    <i className="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

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
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Services</h3>
                            <ul className="footer-links">
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Frontend Development</a></li>
                                <li><a href="#">Backend Development</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">Consulting</a></li>
                                <li><a href="#">Maintenance</a></li>
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
        </>
    );
}