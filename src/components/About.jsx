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
            src="./src/assets/react.svg" // Replace with your own image or import local photo
            alt="Caroline Gatwiri"
            className="about-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
