import React,{useState} from "react";
import reviews from './data';
import { FaChevronLeft, FaChevronRight, 
    FaQuoteRight } from 'react-icons/fa';

export default function Review () {
    const [review,setReview] = useState(0)
  const{name,job,image,text} = reviews[review];

  const people = (number) => {
    if (number > reviews.length - 1) {
        return 0;
    }
    if (number < 0) {
        return reviews.length - 1;
    }
    return number;
  }

  const Prevbtn = () =>{
    setReview((review) => {
        let newPerson = review + 1
        return people(newPerson);

    })
  }

  const Nextbtn = () =>{
    setReview((review) => {
        let newPerson = review - 1
        return people(newPerson);
    })
}

const Randombtn = () =>{
let random = Math.floor(Math.random() * reviews.length)
if (random === review) {
random = review + 1
}
setReview(people(random))    
}
    return (
    <main>
    <section className="image">
        <div className="back--img"></div>
        <span className="quote">
    <FaQuoteRight />
</span>
<img src={image} alt={name} className="review--img"/>

    </section>
    <h3 className="name">{name}</h3>
    <h4 className="job">{job}</h4>
    <p className="text">{text}</p>
    <div className="btns">
    <button className="review--btn" onClick={Prevbtn}>
        <FaChevronLeft/>
    </button>
    <button className="review--btn" onClick={Nextbtn}>
    <FaChevronRight/>
    </button>
    <button className="suprise--btn" onClick={Randombtn}>
        Suprise Me
    </button>
    </div>
    </main>
    );
}