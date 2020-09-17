import React from 'react';

// Component imports
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import { SectionWrapper } from './components/styles';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionWrapper>
        <Skills/>
      </SectionWrapper>
      <SectionWrapper>
        <Projects/>
      </SectionWrapper>
    </div>
  );
}

export default App;
