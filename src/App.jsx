import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
