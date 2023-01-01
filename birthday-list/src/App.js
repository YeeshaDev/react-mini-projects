import React, { useState } from 'react';
import Card from './Card';
import data from './data';
import './App.css';

function App() {
  const[list,setList] = useState(data)
  return (
    <main className='App'>
      <h1>{list.length} birthdays today</h1>
      <Card 
      list = {list}/>
      <button className='clear--btn' onClick = {() => setList([])} >Clear All</button>
    </main>
  );
}

export default App;
