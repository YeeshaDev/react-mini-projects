import React from 'react';
import './App.css';
import { useGlobalContext } from './context';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';

function App() {
  const {loading} = useGlobalContext();

  if(loading){
    return <h2 className='loading'>Loading...</h2>
  }

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
