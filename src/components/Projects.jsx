import React from 'react';

const projects = [
  {
    title: 'Multibanking App – Android',
    description: 'A scalable mobile banking solution built with Kotlin and Jetpack Compose.',
    video: '/videos/project-video.mp4', // Update this path with your actual video location
    features: [
      'User-Centric Design: Intuitive UI/UX for easy navigation and user-friendly experience.',
      'Real-Time Data Sync: Integrated Firebase for real-time data synchronization and backend services.',
      'Scalable Architecture: Designed to handle growing user bases and future enhancements.',
    ],
  },
  // Add more projects here as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Project Portfolio Header */}
      <div className="project-portfolio-header">
        <h2>PROJECT PORTFOLIO</h2>
        <p>
          Explore my journey as a Junior Software Engineer through impactful projects that demonstrate my skills in mobile and web development, UI/UX design, and collaborative problem-solving.
        </p>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content-wrapper">
              {/* Video Section */}
              {project.video && (
                <div className="project-video-wrapper">
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="project-video"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Text Content Section */}
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Features List */}
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;