import React,{useState} from 'react';
import data from './data'
import './App.css';

function App() {
  const [textCount, setTextCount] = useState (0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(textCount);
    if (textCount <= 0){
      alert("Number cannot be less than 1")
      amount = 1;
      setTextCount(1);
    }
    if(textCount > 8) {
      alert("There are only 8 paragraphs available")
      amount = 8;
      setTextCount(8)
    }
    setText(data.slice(0, amount))
  }
  return (
    <div className="App">
    <h2>Tired of boring lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Paragraphs:</label>
      <input type="number" 
      name='amount'
      id='amount'
      value={textCount}
      onChange={(e) => setTextCount(e.target.value)}
      />
      <button>Generate Text</button>
      </form>  
      <section className='text--content'>
     {text.map((data,index) => {
      return <p key={index}>{data}</p>
     })}
      </section>
    </div>
  );
}

export default App;
