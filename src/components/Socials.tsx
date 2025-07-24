import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaFacebook } from 'react-icons/fa';

const Socials = () => {
  const socialLinks = [
    {
      href: 'https://github.com/dfe0990ngc',
      icon: FaGithub,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/nelson6c',
      icon: FaLinkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://discord.com/users/1224870249904738387',
      icon: FaDiscord,
      label: 'Discord'
    },
    {
      href: 'https://facebook.com/nelsongabriel.canete',
      icon: FaFacebook,
      label: 'Facebook'
    }
  ];

  return (
    <div className="flex gap-4 social-links">
      {socialLinks.map(social => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;