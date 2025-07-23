'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode, FaRocket } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Full Stack Development',
    'Web Application Development',
    'Database Design & Optimization',
    'API Development & Integration',
    'WordPress Development',
    'Performance Optimization',
    'Mobile App Development',
    'DevOps & Deployment'
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, label: 'LinkedIn', color: '#0077B5' },
    { href: 'https://facebook.com/nelsongabriel.canete', icon: FaFacebook, label: 'Facebook', color: '#1877F2' },
    { href: 'https://www.youtube.com/@rosstarr-ngc', icon: FaYoutube, label: 'YouTube', color: '#FF0000' },
    { href: 'https://github.com/dfe0990ngc', icon: FaGithub, label: 'GitHub', color: '#333' },
    { href: 'https://discord.com/users/1224870249904738387', icon: FaDiscord, label: 'Discord', color: '#5865F2' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-code-bg border-t border-accent/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-2"
              >
                <span className="text-accent">Nelson</span>
                <span className="text-text ml-1">Cañete</span>
              </motion.h3>
              <p className="text-highlight text-sm font-medium mb-4">Full Stack Web Developer</p>
            </div>
            
            <p className="text-secondary text-sm leading-relaxed">
              Passionate about creating efficient and scalable web solutions that make a difference. 
              Let's build something amazing together!
            </p>
            
            <div className="flex items-center gap-2 text-accent text-sm">
              <FaCode className="animate-pulse" />
              <span>10+ Years of Excellence</span>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -2,
                    boxShadow: `0 5px 15px ${social.color}40`
                  }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-code-bg rounded-full flex items-center justify-center text-secondary hover:text-accent transition-all duration-300 border border-secondary/20 hover:border-accent/50"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-text flex items-center gap-2">
              <FaRocket className="text-accent" size={16} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5, color: '#38BDF8' }}
                    className="text-secondary hover:text-accent transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 8 }}
                      className="h-0.5 bg-accent"
                    />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-text flex items-center gap-2">
              <FaCode className="text-accent" size={16} />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm text-secondary flex items-center gap-2 group hover:text-accent transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-1.5 h-1.5 bg-accent rounded-full group-hover:bg-highlight"
                  />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-text flex items-center gap-2">
              <FaEnvelope className="text-accent" size={16} />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:dfe0990ngc@gmail.com"
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center space-x-3 text-secondary hover:text-accent transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaEnvelope className="text-accent" size={14} />
                </div>
                <div>
                  <div className="text-xs text-secondary/70">Email</div>
                  <div className="text-sm">dfe0990ngc@gmail.com</div>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+639978509514"
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center space-x-3 text-secondary hover:text-accent transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FaPhone className="text-accent" size={14} />
                </div>
                <div>
                  <div className="text-xs text-secondary/70">Phone</div>
                  <div className="text-sm">+639978509514</div>
                </div>
              </motion.a>
              
              <div className="flex items-center space-x-3 text-secondary">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-accent" size={14} />
                </div>
                <div>
                  <div className="text-xs text-secondary/70">Location</div>
                  <div className="text-sm">Philippines</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-accent to-highlight text-primary px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaRocket size={14} />
              Start a Project
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-accent/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-secondary text-sm flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Nelson Cañete. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart size={12} />
              </motion.span>
              and lots of ☕
            </motion.p>
            
            <div className="flex items-center gap-4 text-xs text-secondary">
              <span className="flex items-center gap-1">
                <FaCode className="text-accent" />
                Built with Next.js & Tailwind CSS
              </span>
              <span className="hidden md:block">•</span>
              <span>Optimized for Performance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}