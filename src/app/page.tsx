'use client'

import Avatar from "../../public/images/avatar.webp";
import Image from "next/image";
import SubBGImage from "../../public/images/sub-bg2-image.webp";
import { motion, useMotionValue, useTransform,} from "framer-motion";
import { MdOutlineAnalytics, MdOutlineEmail, MdOutlinePhone, MdOutlinePictureAsPdf } from "react-icons/md";
import {  FaCpanel, FaCss3, FaDatabase, FaDiscord, FaFacebook, FaGit, FaGithub, FaGoodreads, FaHtml5, FaJira, FaJs, FaLaravel, FaLinkedin, FaMicrosoft, FaNodeJs, FaPhp, FaPython, FaReact, FaServer, FaYoutube } from "react-icons/fa";
import ParallaxText from "@/components/ParallaxText";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BsFileExcel } from "react-icons/bs";

export default function Home() {

    // Create independent motion values for each card
    const useCardMotionValues = () => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-150, 150], [10, -10]);
        const rotateY = useTransform(x, [-150, 150], [-10, 10]);
        
        const handleMouse = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            x.set(event.clientX - rect.left - centerX);
            y.set(event.clientY - rect.top - centerY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return { rotateX, rotateY, handleMouse, handleMouseLeave };
    };

    const card1 = useCardMotionValues();
    const card2 = useCardMotionValues();
    const card3 = useCardMotionValues();
    const card4 = useCardMotionValues();
    const card5 = useCardMotionValues();

    const card7 = useCardMotionValues();
    const card8 = useCardMotionValues();

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 max-w-7xl min-h-screen overflow-hidden">
      <motion.div
        initial={{opacity: 0, x: -1000, scale: 0.1}}
        animate={{opacity: 1, x: 0, scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="w-full"
      >
      <h1 className="w-full font-bold text-slate-800 text-4xl text-left leading-16">My Portfolio</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0, x: -1000, scale: 0.1}}
        animate={{opacity: 1, x: 0, scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="relative flex flex-col justify-center items-center gap-8 p-4 w-full" style={{ 
          backgroundImage: `url(${SubBGImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "1rem",
          padding: "2rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
         }}
      >
        <div id="banner" className="relative flex md:flex-row flex-col md:justify-center items-center gap-8 w-full">
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeInOut", delay: 1}}
            className="z-10 flex flex-col justify-center items-center gap-y-6"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Image
                src={Avatar}
                alt="Avatar"
                width={240}
                height={240}
                className="rounded-full"
              />
            </motion.div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold text-white text-4xl text-center leading-8">Nelson Cañete</h1>
              <h3 className="font-medium text-white text-lg text-center leading-[115%]">Full Stack Web Developer</h3>
            </div>
            <div className="flex sm:flex-row flex-col sm:justify-center items-start sm:items-center gap-2 w-full">
              <a href="mailto:dfe0990ngc@gmail.com" target="_blank" className="flex flex-row items-center gap-x-1 bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                <MdOutlineEmail className="block w-6 h-6"/>
                <span>dfe0990ngc@gmail.com</span>
              </a>
              <a href="tel:+639978509514" target="_blank" className="flex flex-row items-center gap-x-1 bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                <MdOutlinePhone className="block w-6 h-6"/>
                <span>+639978509514</span>
              </a>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <a title="Linked-In" href="https://www.linkedin.com/in/nelson6c" target="_blank" className="flex flex-row gap-x-1 p-1 font-normal text-white text-sm leading-7"><FaLinkedin className="block w-8 h-8"/></a>
              <a title="Facebook" href="https://facebook.com/nelsongabriel.canete" target="_blank" className="flex flex-row gap-x-1 p-1 font-normal text-white text-sm leading-7"><FaFacebook className="block w-8 h-8"/></a>
              <a title="Youtube" href="https://www.youtube.com/@rosstarr-ngc" target="_blank" className="flex flex-row gap-x-1 p-1 font-normal text-white text-sm leading-7"><FaYoutube className="block w-8 h-8"/></a>
              <a title="Github" href="https://github.com/dfe0990ngc" target="_blank" className="flex flex-row gap-x-1 p-1 font-normal text-white text-sm leading-7"><FaGithub className="block w-8 h-8"/></a>
              <a title="Discord" href="https://discord.com/users/1224870249904738387" target="_blank" className="flex flex-row gap-x-1 p-1 font-normal text-white text-sm leading-7"><FaDiscord className="block w-8 h-8"/></a>
            </div>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 1000, scale: 0.1}}
            animate={{opacity: 1, x: 0, scale: 1}}
            transition={{duration: 1.5, ease: "easeInOut", delay: 1.5}}
            className="z-10 flex flex-col justify-center items-center gap-y-6 pt-8 md:pt-0 md:pl-8 border-gray-300 border-t md:border-t-0 border-l-0 md:border-l"
          >
            <h1 className="text-white text-4xl text-left sm:text-center leading-8">About Me</h1>
            <p className="max-w-2xl font-extralight text-white text-lg text-left leading-7">
              I am a full stack developer with a strong passion for creating efficient and scalable web solutions. 
              With expertise in PHP Laravel, React.js, WordPress, database application development, web page optimization, and email integrations.
              I have successfully built and maintained a variety of projects across different industries. 
              I thrive in dynamic environments, value clean and maintainable code, and am always eager to learn new technologies to enhance my skill set. 
              My goal is to contribute to innovative teams and deliver impactful digital experiences.
            </p>

            {/* Add Download my Resume Button */}
            <a href="My-New-Resume-2025.pdf" target="_blank" className="flex flex-row items-center gap-x-2 bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
              <MdOutlinePictureAsPdf className="block w-6 h-6"/>
              <span>Download my Resume</span>
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{opacity: 0, y: 1000, scale: 0.1}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 1.5, ease: "easeInOut", delay: 2}}
          className="flex flex-col justify-center items-center mb-4 pt-8 border-gray-300 border-t w-full">
            <h1 className="mb-4 w-full text-white text-2xl text-left leading-8">Work Experiences</h1>
            <div id="work-experiences" className="justify-center gap-6 grid grid-cols-1 md:grid-cols-2">
              <motion.div
                className="w-full h-full"
                style={{
                  perspective: 1000,
                }}
                onMouseMove={card1.handleMouse}
                onMouseLeave={card1.handleMouseLeave}
              >
                <motion.div 
                  style={{
                      rotateX: card1.rotateX,
                      rotateY: card1.rotateY,
                      transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                className="flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                <h2 className="font-semibold text-white text-xl">Full Stack Developer</h2>
                <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Blockchain Management Corporation Pty Ltd</p>
                <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Mar 2024 - Apr 2025)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  I worked as a Full Stack Developer and successfully delivered various projects using technologies such as 
                  PHP (Laravel), Python, Javascript (React.js), HTML, CSS (Tailwind CSS), MySQL, Git, Github, and Jira.
                </p>
                <p className="w-full font-semibold text-white text-sm text-left leading-7">Key Contributions:</p>
                <ul className="pl-6 w-full text-white text-sm list-disc">
                  <li className="mb-2 font-light text-white leading-[150%]">Automated deployment workflows for both frontend and backend applications, streamlining the release process and minimizing manual effort.</li>
                  <li className="mb-2 font-light text-white leading-[150%]">Developed a Face Recognition System using Python for image processing and PHP (Laravel) for backend management.</li>
                  <li className="mb-2 font-light text-white leading-[150%]">Set up in-house infrastructure, including MINIO for object storage and a Jitsi server for secure internal video conferencing.</li>
                  <li className="mb-2 font-light text-white leading-[150%]">Built multiple role-based portals, including:
                    <ul className="pt-2 pl-6 list-disc">
                      <li className="mb-2 font-light text-white leading-[150%]">CEO Portal</li>
                      <li className="mb-2 font-light text-white leading-[150%]">Admin Portal</li>
                      <li className="mb-2 font-light text-white leading-[150%]">Senior Country Manager Portal</li>
                      <li className="mb-2 font-light text-white leading-[150%]">Country Manager Portal</li>
                    </ul>
                    <p className="pl-3 font-light text-white leading-[150%]">These were developed with Laravel, with clearly defined roles and access permissions tailored to each user level.</p>
                  </li>
                  <li className="mb-2 font-light text-white leading-[150%]">Developed and deployed full-stack applications (frontend and backend) for the following platforms:
                    <ul className="pt-2 pl-6 list-disc">
                      <li className="mb-2 font-light text-white leading-[150%]">fullidcheck</li>
                      <li className="mb-2 font-light text-white leading-[150%]">register.dev</li>
                      <li className="mb-2 font-light text-white leading-[150%]">devreg</li>
                      <li className="mb-2 font-light text-white leading-[150%]">tradecheck</li>
                      <li className="mb-2 font-light text-white leading-[150%]">portals</li>
                    </ul>
                  </li>
                </ul>
                </motion.div>
              </motion.div>
              
              <div className="flex flex-col items-between gap-8 w-full">
                <motion.div
                  className="w-full h-full"
                  style={{
                    perspective: 1000,
                  }}
                  onMouseMove={card2.handleMouse}
                  onMouseLeave={card2.handleMouseLeave}
                >
                  <motion.div 
                    style={{
                        rotateX: card2.rotateX,
                        rotateY: card2.rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  className="flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                  <h2 className="font-semibold text-white text-xl">Junior IT Specialist</h2>
                  <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Elite Insure Ltd.</p>
                  <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Mar 2023 - Jan 2024)</p>
                  <p className="w-full text-white text-sm leading-[150%]">
                    I worked as a Junior IT Specialist/Full Stack Developer, primarily handling internal projects. My tech stack included PHP (Laravel and CodeIgniter), HTML, Javascript (JQuery), CSS (Twitter Bootstrap), MySQL, Git, and GitHub.
                  </p>
                  <p className="w-full font-semibold text-white text-sm text-left leading-7">Key Contributions:</p>
                  <ul className="pl-6 w-full text-white text-sm list-disc">
                    <li className="mb-2 font-light text-white leading-[150%]">Developed an Appointment System using Laravel, delivering a complete end-to-end scheduling solution.</li>
                    <li className="mb-2 font-light text-white leading-[150%]">Enhanced the internal employee portal (CodeIgniter-based) by implementing new features, including a PDF merger tool.</li>
                    <li className="mb-2 font-light text-white leading-[150%]">Optimized the Magazine Generator, used by Financial Manager and reporting teams, by improving performance and PDF output using SnappyPDF and CodeIgniter.</li>
                  </ul>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full h-full"
                  style={{
                    perspective: 1000,
                  }}
                  onMouseMove={card3.handleMouse}
                  onMouseLeave={card3.handleMouseLeave}
                >
                  <motion.div 
                    style={{
                        rotateX: card3.rotateX,
                        rotateY: card3.rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  className="flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                  <h2 className="font-semibold text-white text-xl">Web Developer</h2>
                  <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Saratel Solutions Inc.</p>
                  <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Oct 2021 - Jan 2023)</p>
                  <p className="w-full text-white text-sm leading-[150%]">
                    I worked as a Full Stack Web Developer and IT Support, contributing to both development and technical operations. My tech stack included PHP (Laravel), React.js, MySQL, Git, Jira, WordPress, Confluence, Google Tag Manager, Google Analytics, SAAS, CSS (Twitter Bootstrap), JavaScript (jQuery), and Bitbucket.
                  </p>
                  <p className="w-full font-semibold text-white text-sm text-left leading-7">Key Contributions:</p>
                  <ul className="pl-6 w-full text-white text-sm list-disc">
                    <li className="mb-2 font-light text-white leading-[150%]">Optimized website performance based on Google PageSpeed and GTmetrix insights, using tools like Rollup and CSS purging to enhance load times before deployment.</li>
                    <li className="mb-2 font-light text-white leading-[150%]">Automated WordPress deployments using Bitbucket Pipelines, streamlining release workflows and reducing manual intervention.</li>
                  </ul>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="z-10 w-full h-full"
                style={{
                  perspective: 1000,
                }}
                onMouseMove={card4.handleMouse}
                onMouseLeave={card4.handleMouseLeave}
              >
                <motion.div 
                  style={{
                      rotateX: card4.rotateX,
                      rotateY: card4.rotateY,
                      transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                className="z-10 flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                <h2 className="font-semibold text-white text-xl">Software Developer</h2>
                <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Digilution Inc</p>
                <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Oct 2016 - Sep 2021)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  I worked as a Full Stack Developer and successfully completed a variety of projects using diverse tech stack, including Delphi XE8 and Delphi 10.x (for both desktop and android application development), PHP, MySQL, MSSQL, HTML, JavaScript (jQuery), CSS (Twitter Bootstrap).
                </p>
                <p className="w-full font-semibold text-white text-sm text-left leading-7">Key Projects:</p>
                <ul className="pl-6 w-full text-white text-sm list-disc">
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Flight Information Display System:</i> A hybrid solution comprising a desktop application (data entry and UDP server), an android application (TV display and UDP client), and a web-based display embedded in android devices.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Employee Portal:</i> A desktop/database application designed for internal use integrated with biometrics, featuring employee performance tracking, activity logs, time sheets, and billing reports.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Customized Accounting Systems:</i> Developed desktop applications tailored to specific business accounting requirements.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Sales Representative Monitoring System:</i> Built an Android app for location tracking, digital signature capture, and receipt entry, along with a desktop server and data entry application.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Factory Automation Projects:</i> Contributed to various automation initiatives, enhancing operational efficiency on the production floor.</li>
                </ul>
                </motion.div>
              </motion.div>

              <motion.div
                className="z-10 w-full h-auto"
                style={{
                  perspective: 1000,
                }}
                onMouseMove={card5.handleMouse}
                onMouseLeave={card5.handleMouseLeave}
              >
                <motion.div 
                  style={{
                      rotateX: card5.rotateX,
                      rotateY: card5.rotateY,
                      transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                className="z-10 flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-auto">
                <h2 className="font-semibold text-white text-xl">Full Stack Developer</h2>
                <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Nakayama Technology Corporation</p>
                <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Apr 2013 - Dec 2015)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  I worked as a Full Stack Developer using technologies such as VB6, JavaScript (jQuery), HTML, CSS (Twitter Bootstrap), PHP, and MySQL. Collaborating within a team of four developers, we successfully delivered several internal projects, including:
                </p>
                <ul className="pl-6 w-full text-white text-sm list-disc">
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Ordering System:</i> A desktop application developed with VB6 and MySQL for managing order/requests processing initiated mostly by Japanese Sales Agents to Computer Graphics Operators.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Production Cost Accounting System:</i> A web application for real-time inventory tracking and warehouse management.</li>
                  <li className="mb-2 font-light text-white leading-[150%]"><i>Enterprise Resource Planner (ERP):</i> A desktop solution with VB.net to integrate key business processes across departments.</li>
                </ul>
                </motion.div>
              </motion.div>
            </div>
        </motion.div>
        
        <motion.div
          initial={{opacity: 0, y: 1000, scale: 0.1}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 1.5, ease: "easeInOut", delay: 2}}
          className="flex flex-col justify-center items-center mb-5 pt-8 border-gray-300 border-t w-full">
            <h1 className="mb-4 w-full text-white text-2xl text-left leading-8">Education</h1>
            <div id="education" className="justify-center gap-6 grid grid-cols-1 md:grid-cols-2">
              <motion.div
                className="w-full h-full"
                style={{
                  perspective: 1000,
                }}
                onMouseMove={card7.handleMouse}
                onMouseLeave={card7.handleMouseLeave}
              >
                <motion.div 
                  style={{
                      rotateX: card7.rotateX,
                      rotateY: card7.rotateY,
                      transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                <h2 className="font-semibold text-white text-xl">BS in Electrical Engineering</h2>
                <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">University of Mindanao (UM)</p>
                <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Nov 2017 - Mar 2020)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  I am strategically aligning my IT experiences to be applied in the field of factory automation, 
                  aiming to seamlessly integrate and leverage my acquired skills for impactful contributions.
                </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full h-full"
                style={{
                  perspective: 1000,
                }}
                onMouseMove={card8.handleMouse}
                onMouseLeave={card8.handleMouseLeave}
              >
                <motion.div 
                  style={{
                      rotateX: card8.rotateX,
                      rotateY: card8.rotateY,
                      transformStyle: "preserve-3d"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center gap-2 bg-gray-800 shadow-md p-4 rounded-lg w-full h-full">
                <h2 className="font-semibold text-white text-xl">Diploma in Information Technology</h2>
                <p className="w-full font-semibold text-white text-sm text-left sm:text-center leading-[125%]">Systems Technology Institute (STI)</p>
                <p className="w-full font-light text-white text-xs text-left sm:text-center leading-[125%]">(Jun 2011 - Apr 2013)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  My academic focus was on IT, specializing in programming and methodology. I honed my skills in basic software application programming and web development, laying the foundation for a robust understanding of these domains.
                </p>
                </motion.div>
              </motion.div>
            </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 1000, scale: 0.1}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 1.5, ease: "easeInOut", delay: 2}}
          className="flex flex-col justify-center items-center mb-5 pt-8 border-gray-300 border-t w-full">
            <h1 className="mb-4 w-full text-white text-2xl text-left leading-8">Skills</h1>
            <div id="skills" className="flex flex-row flex-wrap justify-center gap-3 w-full">
              <FaHtml5 className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="HTML5"/>
              <FaGithub className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="GitHub"/>
              <MdOutlineAnalytics className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Analytics"/>
              <FaCss3 className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="CSS3"/>
              <FaNodeJs className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Node.js"/>
              <FaPhp className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="PHP"/>
              <FaGit className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Git"/>
              <FaJira className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Jira"/>
              <FaDatabase className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Databases"/>
              <FaLaravel className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Laravel"/>
              <FaJs className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Javascript"/>
              <FaServer className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Servers"/>
              <FaReact className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="ReactJS"/>
              <FaCpanel className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="CPanel"/>
              <FaPython className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Python"/>
              <FaMicrosoft className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="MS Office"/>
              <FaGoodreads className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Google Docs"/>
              <BiLogoCPlusPlus className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="C++"/>
              <BsFileExcel className="w-16 h-16 text-white hover:scale-[1.1] cursor-pointer" title="Excel"/>
            </div>
        </motion.div>

        <div className="flex flex-col my-5">
          {/* Add Back to top button */}
          <a href="#banner" className="flex justify-center items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full font-semibold text-white text-sm transition-colors duration-300">
            Back to Top
          </a>
        </div>
        
        {/* Parallax Text Elements */}
        <motion.div
          initial={{opacity: 0, y: 20, scale: 0.1}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut", delay: 2.5}}
          className="bottom-10 absolute w-full"
        >
          <div className="bottom-10 z-1 absolute mb-4 w-full h-1 -skew-y-6 transform">
            <ParallaxText baseVelocity={-1}>
              <span className="-z-10 text-stone-700 text-2xl text-left sm:text-center leading-[115%]">
                PHP | Laravel | React.js | WordPress | Database Development | Web Optimization | Email Integration
              </span>
            </ParallaxText>
          </div>
        </motion.div>
        
        <motion.div
          initial={{opacity: 0, y: 20, scale: 0.1}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut", delay: 2.5}}
          className="top-10 absolute w-full"
        >
          <div className="top-10 z-1 absolute mb-4 w-full h-1 -skew-y-6 transform">
            <ParallaxText baseVelocity={1}>
              <span className="-z-10 text-stone-700 text-2xl text-left sm:text-center leading-[115%]">
                PHP | Laravel | React.js | WordPress | Database Development | Web Optimization | Email Integration
              </span>
            </ParallaxText>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}