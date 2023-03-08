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
      <main className='text-gray-400 bg-gray-900 body-font'>
        <Navbar />
        <About />
        <Certificates />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
