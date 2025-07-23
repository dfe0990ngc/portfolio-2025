'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Avatar from '../../public/images/avatar.webp';
import { FaEnvelope, FaPhone, FaDownload, FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-code-bg"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2338BDF8" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                  Nelson
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-medium mb-6">
                Full Stack Web Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl"
            >
              I create efficient and scalable web solutions using modern technologies like 
              <span className="text-accent font-semibold"> PHP Laravel</span>, 
              <span className="text-accent font-semibold"> React.js</span>, and 
              <span className="text-accent font-semibold"> WordPress</span>. 
              Let's build something amazing together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="mailto:dfe0990ngc@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(56, 189, 248, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                <FaEnvelope />
                Email Me
              </motion.a>
              
              <motion.a
                href="tel:+639978509514"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FaPhone />
                Call Me
              </motion.a>

              <motion.a
                href="My-New-Resume-2025.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-highlight text-primary px-8 py-4 rounded-full font-semibold hover:bg-highlight/90 transition-all duration-300"
              >
                <FaDownload />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-secondary">Technologies</div>
              </div>
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
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-highlight/20 rounded-full blur-xl"
              ></motion.div>

              {/* Avatar Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 p-2 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full"
              >
                <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-accent to-highlight p-1">
                  <Image
                    src={Avatar}
                    alt="Nelson Cañete - Full Stack Web Developer"
                    width={400}
                    height={400}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute -top-8 left-1/2 w-12 h-12 bg-code-bg rounded-lg flex items-center justify-center text-accent font-bold text-sm shadow-lg">
                  PHP
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-code-bg rounded-lg flex items-center justify-center text-accent font-bold text-sm shadow-lg">
                  JS
                </div>
                <div className="absolute -bottom-8 left-1/2 w-12 h-12 bg-code-bg rounded-lg flex items-center justify-center text-accent font-bold text-sm shadow-lg">
                  SQL
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-code-bg rounded-lg flex items-center justify-center text-accent font-bold text-sm shadow-lg">
                  CSS
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm">Scroll Down</span>
            <FaArrowDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
  );
}