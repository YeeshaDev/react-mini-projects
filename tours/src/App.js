import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //To delete/remove the tour you are not intrested in
   const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !==id)
setTours(newTours);
   }
//Fetching the tour data to use in this project
  const fetchToursInfo = () =>{
    setLoading(true)
    fetch('https://course-api.com/react-tours-project')
    .then (resp => resp.json())
    .then (data => {
      setLoading(false)
      setTours(data)
    })
  }
  useEffect (() => {
  fetchToursInfo();
  }, []);

  //this displays loading first before displaying the main component
  //so if loading is true display loaing else display the main component
  if (loading){
    return (
    <main>
      <Loading/>
    </main>
  );
    }
    //To refresh the [age if there is no tour left to see]
    if (tours.length === 0){
      return (
        <main className='refresh-info'>
          <h2>No Tours Left</h2>
          <button className="refresh--btn" onClick= {() => fetchToursInfo()}>Refresh</button>
        </main>
      )
    }
      else {
        return ( 
      <main>
        <Tours 
        tours={tours}
        deleteTour = {deleteTour}/>
      </main> 
      )
    }
  }
    


export default App;
