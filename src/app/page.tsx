'use client'

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MdOutlineAnalytics, MdOutlineEmail, MdOutlinePhone, MdOutlinePictureAsPdf } from "react-icons/md";
import { FaCpanel, FaCss3, FaDatabase, FaDiscord, FaFacebook, FaGit, FaGithub, FaHtml5, FaJira, FaJs, FaLaravel, FaLinkedin, FaMicrosoft, FaNodeJs, FaPhp, FaPython, FaReact, FaServer, FaYoutube, FaAward, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";
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
      <section id="about" className="py-20 bg-gradient-to-b from-primary to-code-bg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
            >
              <FaCode className="animate-pulse" />
              Get to know me
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md mx-auto lg:mx-0"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  <div className="relative p-2 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-2xl">
                    <Image
                      src={Avatar}
                      alt="Nelson Cañete - Full Stack Web Developer"
                      width={400}
                      height={400}
                      className="rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                </motion.div>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-2xl blur-xl animate-pulse"></div>
                
                {/* Floating Achievement Badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-highlight p-3 rounded-xl shadow-lg"
                >
                  <FaAward className="text-primary" size={20} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-highlight to-accent p-3 rounded-xl shadow-lg"
                >
                  <FaCode className="text-primary" size={20} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <div className="space-y-4">
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
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                {[
                  { number: "10+", label: "Years Experience", icon: FaAward },
                  { number: "50+", label: "Projects Done", icon: FaRocket },
                  { number: "15+", label: "Technologies", icon: FaCode }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-code-bg rounded-xl border border-accent/20"
                  >
                    <stat.icon className="text-accent mx-auto mb-2" size={24} />
                    <div className="text-2xl font-bold text-accent">{stat.number}</div>
                    <div className="text-xs text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="mailto:dfe0990ngc@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-highlight text-primary px-6 py-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 font-semibold"
                >
                  <MdOutlineEmail />
                  dfe0990ngc@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+639978509514"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 bg-code-bg text-text px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 border border-accent/20"
                >
                  <MdOutlinePhone />
                  +639978509514
                </motion.a>
                <motion.a
                  href="/My-New-Resume-2025.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 bg-highlight text-primary px-6 py-3 rounded-full hover:bg-highlight/90 transition-all duration-300 font-semibold"
                >
                  <MdOutlinePictureAsPdf />
                  Download Resume
                </motion.a>
              </div>

              {/* Social Links */}
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
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-code-bg rounded-full flex items-center justify-center text-secondary hover:text-accent transition-all duration-300 border border-secondary/20 hover:border-accent/50"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
            >
              <FaAward className="animate-pulse" />
              Professional Journey
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience Cards with 3D hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-full"
              style={{ perspective: 1000 }}
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
                className="project-card p-8 rounded-2xl w-full h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center">
                    <FaCode className="text-primary" size={24} />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    Current
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  Full Stack Developer
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">Blockchain Management Corporation Pty Ltd</p>
                <p className="text-secondary text-xs mb-4">(Mar 2024 - Apr 2025)</p>
                
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Leading full-stack development initiatives using PHP Laravel, Python, React.js, and modern DevOps practices. 
                  Delivered innovative solutions including AI-powered face recognition systems and multi-portal management platforms.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-text">Key Achievements:</h4>
                  <ul className="space-y-2 text-xs text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Automated deployment workflows reducing manual effort by 80%
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Developed Face Recognition System using Python and Laravel
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Built role-based portals for CEO, Admin, and Country Managers
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Set up in-house infrastructure with MINIO and Jitsi servers
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Additional experience cards with similar structure */}
            <div className="flex flex-col gap-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full h-full"
                style={{ perspective: 1000 }}
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
                  className="project-card p-6 rounded-2xl w-full h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <FaServer className="text-white" size={18} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                    Junior IT Specialist
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-1">Elite Insure Ltd.</p>
                  <p className="text-secondary text-xs mb-3">(Mar 2023 - Jan 2024)</p>
                  
                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    Specialized in internal system development using PHP frameworks, focusing on appointment systems and employee portal enhancements.
                  </p>
                  
                  <ul className="space-y-1 text-xs text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      Built comprehensive Appointment System with Laravel
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      Enhanced employee portal with PDF merger functionality
                    </li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full h-full"
                style={{ perspective: 1000 }}
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
                  className="project-card p-6 rounded-2xl w-full h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaReact className="text-white" size={18} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                    Web Developer
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-1">Saratel Solutions Inc.</p>
                  <p className="text-secondary text-xs mb-3">(Oct 2021 - Jan 2023)</p>
                  
                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    Full-stack development with focus on performance optimization and automated deployment workflows.
                  </p>
                  
                  <ul className="space-y-1 text-xs text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      Optimized website performance using Google PageSpeed insights
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      Automated WordPress deployments with Bitbucket Pipelines
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Continue with remaining experience cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-full"
              style={{ perspective: 1000 }}
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
                className="project-card p-8 rounded-2xl w-full h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <FaDatabase className="text-white" size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  Software Developer
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">Digilution Inc</p>
                <p className="text-secondary text-xs mb-4">(Oct 2016 - Sep 2021)</p>
                
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Specialized in desktop and mobile application development using Delphi, with expertise in factory automation and enterprise solutions.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-text">Major Projects:</h4>
                  <ul className="space-y-2 text-xs text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Flight Information Display System (Desktop + Android + Web)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Employee Portal with biometric integration
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Sales Representative Monitoring System (Android + Desktop)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      Factory Automation Projects
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full h-auto"
              style={{ perspective: 1000 }}
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
                className="project-card p-8 rounded-2xl w-full h-auto group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <FaLaravel className="text-white" size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  Full Stack Developer
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">Nakayama Technology Corporation</p>
                <p className="text-secondary text-xs mb-4">(Apr 2013 - Dec 2015)</p>
                
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Team-based development using VB6, PHP, and MySQL. Delivered critical internal systems for order management and inventory tracking.
                </p>
                
                <ul className="space-y-2 text-xs text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Ordering System (VB6 + MySQL)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Production Cost Accounting System (Web-based)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Enterprise Resource Planner (VB.net)
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
        
      {/* Education Section */}
      <section id="education" className="py-20 bg-code-bg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
            >
              <FaGraduationCap className="animate-pulse" />
              Academic Background
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Education</span>
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
              style={{ perspective: 1000 }}
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
                className="project-card p-8 rounded-2xl w-full h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="text-primary" size={24} />
                  </div>
                  <span className="text-xs font-medium text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/20">
                    Bachelor's
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  BS in Electrical Engineering
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">University of Mindanao (UM)</p>
                <p className="text-secondary text-xs mb-4">(Nov 2017 - Mar 2020)</p>
                
                <p className="text-secondary text-sm leading-relaxed">
                  Strategically aligned my IT experience with electrical engineering principles, focusing on factory automation 
                  and industrial control systems. This unique combination allows me to bridge the gap between software development 
                  and hardware integration.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full h-full"
              style={{ perspective: 1000 }}
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
                className="project-card p-8 rounded-2xl w-full h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-highlight to-accent rounded-xl flex items-center justify-center">
                    <FaCode className="text-primary" size={24} />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    Diploma
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  Diploma in Information Technology
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">Systems Technology Institute (STI)</p>
                <p className="text-secondary text-xs mb-4">(Jun 2011 - Apr 2013)</p>
                
                <p className="text-secondary text-sm leading-relaxed">
                  Comprehensive foundation in programming and web development methodologies. Specialized in software application 
                  development, database design, and web technologies, establishing the core skills that launched my professional career.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
            >
              <FaRocket className="animate-pulse" />
              Technical Expertise
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life and create exceptional digital experiences
            </p>
          </motion.div>

          <div className="skills-grid">
            {[
              { icon: FaHtml5, name: "HTML5", color: "#E34F26", category: "Frontend" },
              { icon: FaCss3, name: "CSS3", color: "#1572B6", category: "Frontend" },
              { icon: FaJs, name: "JavaScript", color: "#F7DF1E", category: "Frontend" },
              { icon: FaPhp, name: "PHP", color: "#777BB4", category: "Backend" },
              { icon: FaLaravel, name: "Laravel", color: "#FF2D20", category: "Backend" },
              { icon: FaReact, name: "React.js", color: "#61DAFB", category: "Frontend" },
              { icon: FaNodeJs, name: "Node.js", color: "#339933", category: "Backend" },
              { icon: FaPython, name: "Python", color: "#3776AB", category: "Backend" },
              { icon: FaDatabase, name: "Databases", color: "#336791", category: "Database" },
              { icon: FaGit, name: "Git", color: "#F05032", category: "Tools" },
              { icon: FaGithub, name: "GitHub", color: "#181717", category: "Tools" },
              { icon: FaJira, name: "Jira", color: "#0052CC", category: "Tools" },
              { icon: FaServer, name: "Servers", color: "#FF6B35", category: "DevOps" },
              { icon: FaCpanel, name: "CPanel", color: "#FF6C2C", category: "DevOps" },
              { icon: MdOutlineAnalytics, name: "Analytics", color: "#4285F4", category: "Tools" },
              { icon: FaMicrosoft, name: "MS Office", color: "#D83B01", category: "Tools" },
              { icon: BiLogoCPlusPlus, name: "C++", color: "#00599C", category: "Backend" },
              { icon: BsFileExcel, name: "Excel", color: "#217346", category: "Tools" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="skill-item group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon 
                    className="w-12 h-12 text-secondary group-hover:text-accent transition-colors duration-300 mx-auto mb-3" 
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <span className="text-sm font-medium text-secondary group-hover:text-text transition-colors duration-300 block mb-1">
                  {skill.name}
                </span>
                <span className="text-xs text-accent/70 group-hover:text-accent transition-colors duration-300">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Frontend", count: "6+", icon: FaCode, color: "from-blue-500 to-cyan-500" },
              { title: "Backend", count: "8+", icon: FaServer, color: "from-green-500 to-teal-500" },
              { title: "Database", count: "5+", icon: FaDatabase, color: "from-purple-500 to-pink-500" },
              { title: "DevOps", count: "4+", icon: FaRocket, color: "from-orange-500 to-red-500" }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-code-bg rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{category.title}</h3>
                <p className="text-2xl font-bold text-accent mb-1">{category.count}</p>
                <p className="text-xs text-secondary">Technologies</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-code-bg to-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
            >
              <FaRocket className="animate-pulse" />
              Let's Connect
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-text mb-6">Let's Build Something Amazing</h3>
                  <p className="text-secondary leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you need a full-stack developer, want to discuss a project, 
                    or just want to say hello, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:dfe0990ngc@gmail.com"
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-6 project-card rounded-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center">
                      <MdOutlineEmail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-text font-semibold text-lg">Email Me</h4>
                      <p className="text-secondary">dfe0990ngc@gmail.com</p>
                      <p className="text-accent text-sm">I'll respond within 24 hours</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+639978509514"
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-6 project-card rounded-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-highlight to-accent rounded-xl flex items-center justify-center">
                      <MdOutlinePhone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-text font-semibold text-lg">Call Me</h4>
                      <p className="text-secondary">+639978509514</p>
                      <p className="text-accent text-sm">Available 9 AM - 6 PM (PHT)</p>
                    </div>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-text mb-4">Connect on Social</h4>
                  <div className="flex gap-4">
                    {[
                      { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, label: 'LinkedIn', color: '#0077B5' },
                      { href: 'https://facebook.com/nelsongabriel.canete', icon: FaFacebook, label: 'Facebook', color: '#1877F2' },
                      { href: 'https://www.youtube.com/@rosstarr-ngc', icon: FaYoutube, label: 'YouTube', color: '#FF0000' },
                      { href: 'https://github.com/dfe0990ngc', icon: FaGithub, label: 'GitHub', color: '#333' },
                      { href: 'https://discord.com/users/1224870249904738387', icon: FaDiscord, label: 'Discord', color: '#5865F2' },
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
                        className="w-12 h-12 bg-code-bg rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/20 transition-all duration-300 border border-secondary/20 hover:border-accent/50"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="project-card p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-text mb-6">Quick Stats & Availability</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
                    <span className="text-secondary">Experience</span>
                    <span className="text-accent font-bold text-lg">10+ Years</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
                    <span className="text-secondary">Projects Completed</span>
                    <span className="text-accent font-bold text-lg">50+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
                    <span className="text-secondary">Technologies</span>
                    <span className="text-accent font-bold text-lg">15+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
                    <span className="text-secondary">Response Time</span>
                    <span className="text-accent font-bold text-lg">< 24hrs</span>
                  </div>
                </div>

                <div className="border-t border-secondary/20 pt-6">
                  <h4 className="text-lg font-semibold text-text mb-4">Available For</h4>
                  <div className="space-y-3">
                    {[
                      "Full-time positions",
                      "Freelance projects", 
                      "Consulting & Code Reviews",
                      "Technical Mentoring"
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-secondary text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'mailto:dfe0990ngc@gmail.com'}
                  className="w-full mt-8 bg-gradient-to-r from-accent to-highlight text-primary px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaRocket />
                  Start a Conversation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Text Elements */}
      <div className="relative overflow-hidden py-8 bg-primary">
        <ParallaxText baseVelocity={-1}>
          <span className="text-secondary/30 text-2xl font-semibold">
            PHP • Laravel • React.js • WordPress • Database Development • Web Optimization • Email Integration • Python • Node.js • 
          </span>
        </ParallaxText>
      </div>
    </main>
  );
}