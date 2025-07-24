// components/ContactSection.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { useNotification } from '../hooks/useNotification';
import Socials from './Socials';

const FormGroup = ({ type, id, name, label, required = false, rows, disabled = false, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') setIsFocused(false);
  };

  const inputProps = {
    id,
    name,
    required,
    disabled,
    value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  };

  return (
    <div className={`form-group ${isFocused || value ? 'focused' : ''}`}>
      {type === 'textarea' ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input type={type} {...inputProps} />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const ContactSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'dfe0990ngc@gmail.com',
      href: 'mailto:dfe0990ngc@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+63 997 850 9514',
      href: 'tel:+639978509514'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Location',
      content: 'Available for remote work worldwide'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
        showNotification("Sending of message feaure will be added soon...", 'info');
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

      e.target.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div 
          className={`section-header ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </div>
        
        <div className="md:flex-row flex-col contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <item.icon className="w-6 h-6"/>
                  <div>
                    <h4>{item.title}</h4>
                    {item.href ? (
                      <a href={item.href}>{item.content}</a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="justify-center sm:justify-start contact-social">
              <Socials />
            </div>
          </div>
          
          <div className="contact-form-container">
            <form 
              className="contact-form" 
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <em className="text-[#ff5555]">
                This form is not yet usable since the personal domain is offline:
              </em>
              
              <FormGroup
                type="text"
                id="name"
                name="name"
                label="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <FormGroup
                type="email"
                id="email"
                name="email"
                label="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <FormGroup
                type="text"
                id="subject"
                name="subject"
                label="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              
              <FormGroup
                type="textarea"
                id="message"
                name="message"
                label="Your Message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              
              <button 
                type="submit" 
                className="flex justify-center w-100 sm:w-60 btn btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;