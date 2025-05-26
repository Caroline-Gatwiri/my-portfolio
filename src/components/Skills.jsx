import React from 'react';

const Skills = () => {
  const skills = [
    'Mobile Application Development (Kotlin, Android Studio, Java, React Native)',
    'UI/UX Design, Git, Firebase, SQL, NoSQL, API Testing (Postman)',
    'Agile Methodology, ERP Systems (SAP, Oracle, Microsoft Dynamics, NetSuite)',
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>TECH SKILLS</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
