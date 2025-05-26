import React from 'react';

const PersonalSkills = () => {
  return (
    <section id="personal-skills" className="personal-skills-section">
      <h2>PERSONAL SKILLS</h2>
      <div className="personal-skills-content">
        <div className="skills-text">
          <ul>
            <li>PROBLEM-SOLVING</li>
            <li>ADAPTABILITY</li>
            <li>TIME MANAGEMENT</li>
            <li>GROWTH MINDSET</li>
            <li>ATTENTION TO DETAIL</li>
          </ul>
        </div>
        <div className="profile-photo-container">
          <img
            src="/img/personality.jpeg"
            alt="Caroline Gatwiri"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;