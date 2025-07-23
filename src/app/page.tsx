'use client'

import HeroSection from "@/components/HeroSection";
import { motion, useMotionValue, useTransform,} from "framer-motion";
import { MdOutlineAnalytics, MdOutlineEmail, MdOutlinePhone, MdOutlinePictureAsPdf } from "react-icons/md";
import { FaCpanel, FaCss3, FaDatabase, FaDiscord, FaFacebook, FaGit, FaGithub, FaGoodreads, FaHtml5, FaJira, FaJs, FaLaravel, FaLinkedin, FaMicrosoft, FaNodeJs, FaPhp, FaPython, FaReact, FaServer, FaYoutube } from "react-icons/fa";
import ParallaxText from "@/components/ParallaxText";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BsFileExcel } from "react-icons/bs";
import Image from "next/image";
import Avatar from "../../public/images/avatar.webp";

export default function Home() {

    // Create independent motion values for each card
    const useCardMotionValues = () => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-150, 150], [10, -10]);
        const rotateY = useTransform(x, [-150, 150], [-10, 10]);

        const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
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
    <main className="bg-primary">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-primary to-code-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  <Image
                    src={Avatar}
                    alt="Nelson Cañete - Full Stack Web Developer"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-2xl blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <p className="text-lg text-secondary leading-relaxed">
                I am a passionate full stack developer with over <span className="text-accent font-semibold">10 years of experience</span> creating efficient and scalable web solutions. 
                My expertise spans across modern technologies including <span className="text-accent">PHP Laravel</span>, <span className="text-accent">React.js</span>, 
                <span className="text-accent">WordPress</span>, database development, web optimization, and email integrations.
              </p>
              
              <p className="text-lg text-secondary leading-relaxed">
                Throughout my career, I have successfully built and maintained a variety of projects across different industries, 
                from enterprise-level applications to custom automation systems. I thrive in dynamic environments, 
                value clean and maintainable code, and am always eager to learn new technologies.
              </p>

              <p className="text-lg text-secondary leading-relaxed">
                My goal is to contribute to innovative teams and deliver impactful digital experiences that make a difference. 
                Let's collaborate to bring your ideas to life!
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="mailto:dfe0990ngc@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-code-bg text-text px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <MdOutlineEmail />
                  dfe0990ngc@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+639978509514"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-code-bg text-text px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <MdOutlinePhone />
                  +639978509514
                </motion.a>
                <motion.a
                  href="My-New-Resume-2025.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-highlight text-primary px-6 py-3 rounded-full hover:bg-highlight/90 transition-all duration-300 font-semibold"
                >
                  <MdOutlinePictureAsPdf />
                  Download Resume
                </motion.a>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, label: 'LinkedIn' },
                  { href: 'https://facebook.com/nelsongabriel.canete', icon: FaFacebook, label: 'Facebook' },
                  { href: 'https://www.youtube.com/@rosstarr-ngc', icon: FaYoutube, label: 'YouTube' },
                  { href: 'https://github.com/dfe0990ngc', icon: FaGithub, label: 'GitHub' },
                  { href: 'https://discord.com/users/1224870249904738387', icon: FaDiscord, label: 'Discord' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, color: '#38BDF8' }}
                    viewport={{ once: true }}
                    className="text-secondary hover:text-accent transition-colors duration-300 p-2"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Work <span className="text-accent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
                className="flex flex-col justify-center items-center gap-4 bg-code-bg shadow-xl p-6 rounded-xl w-full h-full card-hover border border-secondary/10">
                <h2 className="font-semibold text-white text-xl">Full Stack Developer</h2>
                <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Blockchain Management Corporation Pty Ltd</p>
                <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Mar 2024 - Apr 2025)</p>
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
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
                  className="flex flex-col justify-center items-center gap-4 bg-code-bg shadow-xl p-6 rounded-xl w-full h-full card-hover border border-secondary/10">
                  <h2 className="font-semibold text-white text-xl">Junior IT Specialist</h2>
                  <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Elite Insure Ltd.</p>
                  <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Mar 2023 - Jan 2024)</p>
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
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
                  className="flex flex-col justify-center items-center gap-4 bg-code-bg shadow-xl p-6 rounded-xl w-full h-full card-hover border border-secondary/10">
                  <h2 className="font-semibold text-white text-xl">Web Developer</h2>
                  <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Saratel Solutions Inc.</p>
                  <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Oct 2021 - Jan 2023)</p>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full h-full"
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
                className="flex flex-col justify-center items-center gap-4 bg-code-bg shadow-xl p-6 rounded-xl w-full h-full card-hover border border-secondary/10">
                <h2 className="font-semibold text-white text-xl">Software Developer</h2>
                <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Digilution Inc</p>
                <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Oct 2016 - Sep 2021)</p>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full h-auto"
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
                className="flex flex-col justify-center items-center gap-4 bg-code-bg shadow-xl p-6 rounded-xl w-full h-auto card-hover border border-secondary/10">
                <h2 className="font-semibold text-white text-xl">Full Stack Developer</h2>
                <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Nakayama Technology Corporation</p>
                <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Apr 2013 - Dec 2015)</p>
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
        </div>
      </section>
        
      {/* Education Section */}
      <section id="education" className="py-20 bg-code-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              <span className="text-accent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
                className="flex flex-col justify-center items-center gap-4 bg-primary shadow-xl p-8 rounded-xl w-full h-full card-hover border border-secondary/10">
                <h2 className="font-semibold text-white text-xl">BS in Electrical Engineering</h2>
                <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">University of Mindanao (UM)</p>
                <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Nov 2017 - Mar 2020)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  I am strategically aligning my IT experiences to be applied in the field of factory automation, 
                  aiming to seamlessly integrate and leverage my acquired skills for impactful contributions.
                </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
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
                className="flex flex-col justify-center items-center gap-4 bg-primary shadow-xl p-8 rounded-xl w-full h-full card-hover border border-secondary/10">
                <h2 className="font-semibold text-white text-xl">Diploma in Information Technology</h2>
                <p className="w-full font-semibold text-accent text-sm text-center leading-[125%]">Systems Technology Institute (STI)</p>
                <p className="w-full font-light text-secondary text-xs text-center leading-[125%]">(Jun 2011 - Apr 2013)</p>
                <p className="w-full text-white text-sm leading-[150%]">
                  My academic focus was on IT, specializing in programming and methodology. I honed my skills in basic software application programming and web development, laying the foundation for a robust understanding of these domains.
                </p>
                </motion.div>
              </motion.div>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              My <span className="text-accent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
              { icon: FaCss3, name: "CSS3", color: "#1572B6" },
              { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
              { icon: FaPhp, name: "PHP", color: "#777BB4" },
              { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
              { icon: FaReact, name: "React.js", color: "#61DAFB" },
              { icon: FaNodeJs, name: "Node.js", color: "#339933" },
              { icon: FaPython, name: "Python", color: "#3776AB" },
              { icon: FaDatabase, name: "Databases", color: "#336791" },
              { icon: FaGit, name: "Git", color: "#F05032" },
              { icon: FaGithub, name: "GitHub", color: "#181717" },
              { icon: FaJira, name: "Jira", color: "#0052CC" },
              { icon: FaServer, name: "Servers", color: "#FF6B35" },
              { icon: FaCpanel, name: "CPanel", color: "#FF6C2C" },
              { icon: MdOutlineAnalytics, name: "Analytics", color: "#4285F4" },
              { icon: FaMicrosoft, name: "MS Office", color: "#D83B01" },
              { icon: BiLogoCPlusPlus, name: "C++", color: "#00599C" },
              { icon: BsFileExcel, name: "Excel", color: "#217346" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 bg-code-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary/10 group cursor-pointer"
              >
                <skill.icon 
                  className="w-12 h-12 text-secondary group-hover:text-accent transition-colors duration-300" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-medium text-secondary group-hover:text-text transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-code-bg to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-text mb-6">Let's Connect</h3>
                  <p className="text-secondary leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you need a full-stack developer, want to discuss a project, 
                    or just want to say hello, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:dfe0990ngc@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:bg-code-bg transition-all duration-300 border border-secondary/10"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <MdOutlineEmail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-text font-semibold">Email</h4>
                      <p className="text-secondary">dfe0990ngc@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+639978509514"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:bg-code-bg transition-all duration-300 border border-secondary/10"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <MdOutlinePhone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-text font-semibold">Phone</h4>
                      <p className="text-secondary">+639978509514</p>
                    </div>
                  </motion.a>
                </div>

                <div className="flex gap-4 pt-4">
                  {[
                    { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, label: 'LinkedIn' },
                    { href: 'https://facebook.com/nelsongabriel.canete', icon: FaFacebook, label: 'Facebook' },
                    { href: 'https://www.youtube.com/@rosstarr-ngc', icon: FaYoutube, label: 'YouTube' },
                    { href: 'https://github.com/dfe0990ngc', icon: FaGithub, label: 'GitHub' },
                    { href: 'https://discord.com/users/1224870249904738387', icon: FaDiscord, label: 'Discord' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-code-bg rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/20 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary p-8 rounded-2xl border border-secondary/10"
              >
                <h3 className="text-2xl font-bold text-text mb-6">Quick Stats</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Experience</span>
                    <span className="text-accent font-bold">10+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Projects Completed</span>
                    <span className="text-accent font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Technologies</span>
                    <span className="text-accent font-bold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Response Time</span>
                    <span className="text-accent font-bold">< 24hrs</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-secondary/20">
                  <h4 className="text-lg font-semibold text-text mb-4">Available For</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-secondary text-sm">Full-time positions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-secondary text-sm">Freelance projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-secondary text-sm">Consulting</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Text Elements */}
      <div className="relative overflow-hidden py-8 bg-primary">
        <ParallaxText baseVelocity={-1}>
          <span className="text-secondary/30 text-2xl font-semibold">
            PHP • Laravel • React.js • WordPress • Database Development • Web Optimization • Email Integration •
          </span>
        </ParallaxText>
      </div>
    </main>
  );
}