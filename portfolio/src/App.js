import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    
    </div>
  );
}

export default App;
