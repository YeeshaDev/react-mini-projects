import React from 'react';
import './App.css';
import Home from './Components/Home';
import Modal from './Components/Modal';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Home/>
      <Modal />
      <Sidebar/>
    </div>
  );
}

export default App;
