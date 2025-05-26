import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-section">
      <h2>ABOUT ME</h2>
      <div className="about-content">
        {/* Video */}
        <div className="video-container">
          <video autoPlay muted loop playsInline controls className="about-video">
            <source src="/videos/pitch-in-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content */}
        <div className="about-text">
          <p>
            Hi! I'm Caroline Gatwiri, a passionate Junior Software Engineer based in Nairobi, Kenya. With a background in Computer Science and practical experience in mobile app development, I enjoy creating digital solutions that are both functional and user-friendly.
          </p>
          <p>
            Over the past year, I've worked with Eclectics International as an E-Cohort Member and later as a Junior Software Engineer, contributing to impactful projects like the Consolidated Bank Android App (Kotlin), Internet Banking App (React Native), and Ushuru Sacco Android Application (Java). These experiences have sharpened my skills in cross-functional collaboration, problem-solving, and agile development.
          </p>
          <p>
            I believe in continuous learning, teamwork, and technology that makes a difference. Whether I'm debugging code or mentoring others, I strive to make a positive impact — one line at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;