import React, { useState } from 'react';
import Info from './Info';
import data from './data';
import './App.css';

function App() {
  const[question,setQuestion] = useState(data);
  return (
  <div className="App">
    <h1>Questions and Answers About Login</h1>
  <section className='question'>
    {question.map((questions) => {
return <Info key={questions.id} {...questions} />
    })}
  </section>
    </div>
    );
}

export default App;
