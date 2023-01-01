import React from 'react';
import Review from './Review';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Our Reviews</h1>
        <div className='underline'></div>
      </header>
      <Review />
    </div>
  );
}

export default App;
