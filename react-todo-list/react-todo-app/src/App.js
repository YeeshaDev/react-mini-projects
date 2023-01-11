import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

function App() {

  return (
    
    <div className="container">
      <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/main" element={<Main />} />
      </Routes>
    </div>
  

  );
}

export default App;
