import React,{useEffect, useState} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './App.css';

function App() {

  const [people,setPeople] = useState(data);
  const[index,setIndex] = useState(0);

//setting useEffect for the people and index slides
  useEffect (() => {
const lastIndex = people.length - 1;
if (index < 0 ){
  setIndex(lastIndex)
}
if (index > lastIndex) {
  setIndex(0)
}
  },[index,people])

 //setting useeffect for the animated slides
  useEffect (() => {
 let slider = setInterval(() => {
  setIndex(index + 1);
 },5000);
 return () => {
  clearInterval(slider)
 }
  },[index])
  return (
    <div className="App">
      <h1> <span>/</span> Reviews</h1>
      <div className='slider'>
        {people.map((person,personIndex) => {
          const{id,name,image,title,quote} = person;
//setting the classes for the slides using conditional statement
          let activePosition = "nextSlide"

          //if the personIndex is equals to the index of the slide the className 'animatedSlide should be active.
          if (personIndex === index) {
            activePosition ="animatedSlide"
          }

          /*if the personIndex is equal to the last index 
          or the index of the slide is equal to zero and the people's length is at the last index then
          the className 'lastSlide should be active.*/
          if (personIndex === index - 1 || index === 0
             && personIndex=== people.length  - 1)
             {
             activePosition= "lastSlide"
          }
          return(
            <article key={id} className={activePosition}>
              <img src={image} 
              alt={name}
              className='slider--img'
              />
              <div className='slider--text'>
           <h2>{name}</h2>
           <h4>{title}</h4>
           <p>{quote}</p>
           </div>
           <FaQuoteRight className='quote'/>
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
