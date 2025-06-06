import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            About us
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact Us
          </a>
        </li>
        <li>
        <a href="#projects"  onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
          Projects
        </a>
        </li>
        <li>
        <a href="/cv/Caroline Gatwiri CV.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;