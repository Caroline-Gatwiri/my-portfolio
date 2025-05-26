import React from 'react';

const projects = [
  {
    title: 'My Portfolio Website',
    description: 'A responsive personal portfolio built with React and deployed on GitHub Pages.',
    link: 'https://your-portfolio-url.com',
  },
  {
    title: 'Mobile Expense Tracker',
    description: 'Android app developed in Kotlin for tracking personal expenses with Firebase backend.',
    link: 'https://github.com/yourusername/expense-tracker',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app using React Native and Socket.IO.',
    link: 'https://github.com/yourusername/chat-app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-list">
        {projects.map(({ title, description, link }, index) => (
          <div key={index} className="project-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
