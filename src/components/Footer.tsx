'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nelson6c', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://facebook.com/nelsongabriel.canete', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://www.youtube.com/@rosstarr-ngc', icon: FaYoutube, label: 'YouTube' },
    { href: 'https://github.com/dfe0990ngc', icon: FaGithub, label: 'GitHub' },
    { href: 'https://discord.com/users/1224870249904738387', icon: FaDiscord, label: 'Discord' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary border-t border-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-accent">Nelson Cañete</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Full Stack Web Developer passionate about creating efficient and scalable web solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
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
                  className="text-secondary hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
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
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent" size={16} />
                <a
                  href="mailto:dfe0990ngc@gmail.com"
                  className="text-secondary hover:text-accent transition-colors duration-300 text-sm"
                >
                  dfe0990ngc@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accent" size={16} />
                <a
                  href="tel:+639978509514"
                  className="text-secondary hover:text-accent transition-colors duration-300 text-sm"
                >
                  +639978509514
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-accent" size={16} />
                <span className="text-secondary text-sm">Philippines</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text">Services</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>• Full Stack Development</li>
              <li>• Web Application Development</li>
              <li>• Database Design & Optimization</li>
              <li>• API Development & Integration</li>
              <li>• WordPress Development</li>
              <li>• Performance Optimization</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary/20 mt-8 pt-8 text-center"
        >
          <p className="text-secondary text-sm">
            © {currentYear} Nelson Cañete. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}