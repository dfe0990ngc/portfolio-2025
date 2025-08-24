// components/ContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useAnimation';
import { useNotification } from '../hooks/useNotification';
import Socials from './Socials';
import { sendEmail as mailSend } from '../api/api';

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

  const sendEmail = async (e) => {

    e.preventDefault();

    if(name.trim().length < 2 || email.trim().length < 5 || subject.trim().length < 2 || message.trim().length < 2){
      showNotification("All input fields are required!", 'warning');
      return;
    }

    setIsSubmitting(true);
    try{
      const { data } = await mailSend({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      showNotification(data?.message || "Message has been sent successfully!", 'success');

      e.target.reset();

      resetForm();
    }catch(error){
      console.log(error);
      showNotification(error?.response?.data?.message || 'Failed to send your message! Mail Sever is not accessible at the moment.','error');
    }finally{      
      setIsSubmitting(false);
    }
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

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
              onSubmit={sendEmail}
            >              
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
              
              <div className="flex justify-between gap-x-6">
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

                <button 
                  type="reset" 
                  onClick={resetForm}
                  className="flex justify-center w-100 sm:w-60 btn btn-secondary" 
                  disabled={isSubmitting}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;