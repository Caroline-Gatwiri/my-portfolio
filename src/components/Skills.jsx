import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>TECH SKILLS</h2>
      <div className="skill-categories">
        {/* Mobile Development */}
        <div className="skill-category">
          <h3>MOBILE DEVELOPMENT</h3>
          <ul>
            <li>KOTLIN</li>
            <li>JAVA</li>
            <li>REACT NATIVE</li>
          </ul>
        </div>

        {/* UI/UX Design */}
        <div className="skill-category">
          <h3>UI/UX DESIGN</h3>
          <ul>
            <li>FIGMA</li>
            <li>WIREFRAMING & PROTOTYPING</li>
            <li>USER-CENTERED DESIGN</li>
          </ul>
        </div>

        {/* Backend & Databases */}
        <div className="skill-category">
          <h3>BACKEND & DATABASES</h3>
          <ul>
            <li>FIREBASE</li>
            <li>RESTFUL APIS</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;