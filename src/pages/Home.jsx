import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSections';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
// import '../styles/animation.css';
import '../styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <Notification />
    </>
  );
}