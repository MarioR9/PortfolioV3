import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'


function App() {
  return (
    //single page application
    <div className="App">
      <Navigation/>
      <About/>
      {/* <Skills/>
      <Experience/>
      <Portfolio/>  */}
    </div>
  );
}

export default App;

    /* ===================
           NAVIGATION
        =================== */
    /* ===================
           HOME
        =================== */
    /* ===================
           ABOUT
        =================== */
    /* ===================
           SKILLS
        =================== */  
    /* ===================
           EXPERIENCE
        =================== */
    /* ===================
           PORTFOLIO
        =================== */                            