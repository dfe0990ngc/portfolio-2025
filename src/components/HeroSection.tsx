'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Avatar from '../../public/images/avatar.webp';
import { FaEnvelope, FaPhone, FaDownload, FaArrowDown, FaLinkedin, FaGithub, FaCode, FaRocket } from 'react-icons/fa';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Code Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-accent/30 text-6xl font-mono"
      >
        {'</>'}
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-highlight/30 text-4xl font-mono"
      >
        {'{}'}
      </motion.div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20"
              >
                <FaRocket className="animate-bounce" />
                Welcome to my digital world
              </motion.span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-accent animate-pulse">
                    Nelson
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-highlight"
                  />
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-medium mb-2">
                  Full Stack Web Developer
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
                  <FaCode className="animate-pulse" />
                  <span className="text-sm font-mono">10+ Years of Experience</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl"
            >
              I craft efficient and scalable web solutions using cutting-edge technologies like 
              <span className="text-accent font-semibold"> PHP Laravel</span>, 
              <span className="text-accent font-semibold"> React.js</span>, and 
              <span className="text-accent font-semibold"> WordPress</span>. 
              Let's transform your ideas into digital reality!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="mailto:dfe0990ngc@gmail.com"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-highlight text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                <FaEnvelope />
                Email Me
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
              
              <motion.a
                href="tel:+639978509514"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FaPhone />
                Call Me
              </motion.a>

              <motion.a
                href="/My-New-Resume-2025.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-code-bg border border-secondary/30 text-text px-8 py-4 rounded-full font-semibold hover:bg-secondary/20 hover:border-accent/50 transition-all duration-300"
              >
                <FaDownload />
                Resume
              </motion.a>
            </motion.div>

            {/* Quick Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <span className="text-secondary text-sm">Connect with me:</span>
              {[
                { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, color: '#0077B5' },
                { href: 'https://github.com/dfe0990ngc', icon: FaGithub, color: '#333' },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-code-bg rounded-full flex items-center justify-center text-secondary hover:text-accent border border-secondary/20 hover:border-accent/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "15+", label: "Technologies" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-xs text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                {[
                  { text: "PHP", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-8" },
                  { text: "JS", position: "top-1/2 -right-8 -translate-y-1/2" },
                  { text: "SQL", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-8" },
                  { text: "CSS", position: "top-1/2 -left-8 -translate-y-1/2" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.text}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + index * 0.2, type: "spring", stiffness: 200 }}
                    className={`absolute ${tech.position} w-14 h-14 bg-gradient-to-br from-code-bg to-primary rounded-xl flex items-center justify-center text-accent font-bold text-sm shadow-lg border border-accent/20 animate-float`}
                    style={{ animationDelay: `${index * 1.5}s` }}
                  >
                    {tech.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* Avatar Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <div className="relative p-2 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full">
                  <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-accent to-highlight p-1">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={Avatar}
                        alt="Nelson Cañete - Full Stack Web Developer"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Discover More</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300"
            >
              <FaArrowDown size={14} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}