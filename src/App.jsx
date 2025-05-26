import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import PersonalSkills from './components/PersonalSkills';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <AboutMe />
        <Education />
        <Skills />
        <PersonalSkills />
        <Experience />
        <Projects />
      </main>
      <Contact />
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="scroll-top"
>
<i className="fas fa-chevron-up"></i> Back to Top
</button>
    </>
  );
}

export default App;
