'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaMobile, FaGlobe, FaRocket, FaUsers, FaCog, FaChartLine } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Face Recognition System",
      description: "Advanced biometric authentication system using Python for image processing and PHP Laravel for backend management. Features real-time face detection and secure user authentication.",
      technologies: ["Python", "PHP Laravel", "OpenCV", "MySQL", "React.js"],
      features: ["Real-time Detection", "Secure Authentication", "Admin Dashboard", "API Integration"],
      icon: FaUsers,
      gradient: "from-blue-500 to-purple-600",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Multi-Portal Management System",
      description: "Comprehensive role-based portal system with distinct interfaces for CEO, Admin, Senior Country Manager, and Country Manager roles. Built with Laravel and advanced permission management.",
      technologies: ["PHP Laravel", "MySQL", "JavaScript", "Bootstrap", "Redis"],
      features: ["Role-based Access", "Real-time Analytics", "Document Management", "Audit Trails"],
      icon: FaCog,
      gradient: "from-green-500 to-teal-600",
      category: "Enterprise"
    },
    {
      id: 3,
      title: "Flight Information Display System",
      description: "Hybrid solution combining desktop application for data entry, Android app for TV displays, and web-based interface. Features UDP communication and real-time updates.",
      technologies: ["Delphi", "Android", "PHP", "MySQL", "UDP Protocol"],
      features: ["Real-time Updates", "Multi-platform", "UDP Communication", "TV Display"],
      icon: FaRocket,
      gradient: "from-orange-500 to-red-600",
      category: "IoT/Hardware"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard. Optimized for performance and scalability.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "AWS"],
      features: ["Payment Processing", "Inventory Management", "Analytics", "Mobile Responsive"],
      icon: FaGlobe,
      gradient: "from-pink-500 to-rose-600",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Employee Performance Tracker",
      description: "Comprehensive HR management system with biometric integration, performance tracking, time sheets, and detailed reporting capabilities.",
      technologies: ["Delphi", "MSSQL", "Biometric SDK", "Crystal Reports"],
      features: ["Biometric Integration", "Performance Analytics", "Time Tracking", "Custom Reports"],
      icon: FaChartLine,
      gradient: "from-indigo-500 to-blue-600",
      category: "HR Management"
    },
    {
      id: 6,
      title: "Mobile Sales Tracking App",
      description: "Android application for sales representatives with GPS tracking, digital signatures, receipt management, and real-time synchronization with desktop server.",
      technologies: ["Android", "Java", "SQLite", "GPS API", "Delphi"],
      features: ["GPS Tracking", "Digital Signatures", "Offline Mode", "Real-time Sync"],
      icon: FaMobile,
      gradient: "from-cyan-500 to-blue-600",
      category: "Mobile"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary to-code-bg relative overflow-hidden">
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
            Featured Projects
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A showcase of innovative solutions I've built across different industries and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="project-card rounded-2xl p-6 h-full flex flex-col group cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  <project.icon size={24} />
                </motion.div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-secondary">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-code-bg text-accent px-2 py-1 rounded-md border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-3 pt-4 border-t border-secondary/20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/20 transition-all duration-300 border border-accent/20"
                >
                  <FaExternalLinkAlt size={12} />
                  View Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-code-bg text-secondary px-4 py-2 rounded-lg text-sm font-medium hover:text-accent hover:bg-secondary/10 transition-all duration-300 border border-secondary/20"
                >
                  <FaGithub size={12} />
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-highlight/5 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary mb-6">
            Interested in working together or want to see more projects?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-highlight text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            <FaRocket />
            Let's Build Something Amazing
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}