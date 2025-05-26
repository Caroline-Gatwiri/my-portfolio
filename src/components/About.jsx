import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>INTRODUCTION</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Detail-oriented Junior Software Engineer with hands-on experience in mobile application development using Kotlin (Android), Java, and React Native. Proven ability to collaborate in agile environments, troubleshoot technical issues, and contribute to full lifecycle application development. Skilled in UI/UX design, Firebase, SQL, and ERP systems. Passionate about building scalable, user-centered applications that solve real-world problems.
          </p>
        </div>
        <div className="about-photo-container">
          <img
            src="/img/passport.jpeg"
            alt="Caroline Gatwiri"
            className="about-photo"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/Caroline-Gatwiri" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/caroline-gatwiri/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:gatwiri123caroline@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
    
  );
};

export default About;