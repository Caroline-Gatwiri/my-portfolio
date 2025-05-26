import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>LET'S WORK TOGETHER</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:gatwiri123caroline@gmail.com">gatwiri123caroline@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+254759845570">+254-759-845570</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin-in"></i>
          <a href="https://www.linkedin.com/in/caroline-gatwiri " target="_blank" rel="noopener noreferrer">linkedin.com/in/caroline-gatwiri</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;