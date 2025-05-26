import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Summary */}
      <div className="summary">
        <p>
          Recent graduate turned Junior Software Engineer, currently building scalable mobile applications at Eclectics International using Kotlin (Android), Java, and React Native. Rapidly gaining experience in agile development, UI/UX design, and collaborative coding practices.
        </p>
      </div>

      {/* Skill Buttons */}
      <div className="skill-buttons">
        <button className="skill-button">MOBILE DEVELOPMENT</button>
        <button className="skill-button">UI/UX DESIGN</button>
        <button className="skill-button">WEB DESIGN</button>
      </div>

      {/* Work Experience Header */}
      <h2>WORK EXPERIENCE</h2>

      {/* Job Listings */}
      <div className="job-listing">
        <div className="job-item">
          <h3>May 2025 – Present</h3>
          <h4>Junior Software Engineer @ Eclectics International Limited, Nairobi, Kenya</h4>
          <ul>
      <li>Contributed to the development of the Internet Banking App using React Native for cross-platform functionality.</li>
      <li>Supported ongoing enhancements and bug fixes for the Ushuru Sacco Android App (Java).</li>
      <li>Collaborated with senior developers and stakeholders to implement new features and optimize performance.</li>
      <li>Utilized Firebase for real-time data synchronization and backend integration.</li>
      <li>Participated in code reviews and followed Agile methodologies during sprint planning and retrospectives.</li>
    </ul>
        </div>
        <div className="job-item">
          <h3>January 2025 – April 2025</h3>
          <h4>E-Cohort Member @ Eclectics International Limited, Nairobi, Kenya</h4>
          <ul>
      <li>Supported testing and deployment of the newly upgraded Consolidated Bank Mobile App (Android / Kotlin).</li>
      <li>Resolved client-reported issues and escalated bugs to the development team for timely resolution.</li>
      <li>Collaborated with developers to improve application functionality and user experience.</li>
      <li>Gained hands-on experience in agile environments and contributed to user feedback analysis.</li>
    </ul>
        </div>
        <div className="job-item">
          <h3>September 2024 – December 2024</h3>
          <h4>Intern @ Eclectics International Limited, Nairobi, Kenya</h4>
          <ul>
      <li>Worked as part of a team to develop a multi-banking mobile application.</li>
      <li>Designed UI/UX components and contributed to front-end development using Java and Android Studio.</li>
      <li>Assisted in API testing using Postman and participated in debugging and issue resolution.</li>
      <li>Engaged in daily standups and learned Agile practices including sprint planning and retrospectives.</li>
    </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;