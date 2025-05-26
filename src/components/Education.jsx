import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>EDUCATION</h2>
      <div className="education-grid">
        {/* 2024 - 2025 */}
        <div className="education-item">
          <div className="timeline">2024 – 2025</div>
          <div className="institution">
            <strong>African Leadership University (ALX)</strong>
            <p>Professional Foundations and Front End Development</p>
          </div>
        </div>

        {/* 2023 - 2024 */}
        <div className="education-item">
          <div className="timeline">2023 – 2024</div>
          <div className="institution">
            <strong>The Visiola Foundation</strong>
            <p>Data Analytics Using Python and SQL</p>
          </div>
        </div>

        {/* 2019 - 2023 */}
        <div className="education-item">
          <div className="timeline">2019 – 2023</div>
          <div className="institution">
            <strong>Meru University of Science and Technology</strong>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;