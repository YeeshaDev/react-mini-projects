import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Services from './Pages/Services';
import './App.css';
import CocktailDetails from './Pages/CocktailDetails';
import Error from './Pages/Error';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='/services' element={<Services/>} />
      <Route path='cocktail/:id' element={<CocktailDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </Router>
  );
}

export default App;
