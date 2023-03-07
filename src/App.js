import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
