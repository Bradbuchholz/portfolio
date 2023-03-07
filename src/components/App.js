import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
