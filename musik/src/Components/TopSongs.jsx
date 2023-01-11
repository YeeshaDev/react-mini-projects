import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {TopChartsLinks} from '../assets/data/data'
import PlayPause from './PlayPause';



const TopSongs = () => {
  const[isClicked, setIsClicked] = useState ();
  const [like, setLike] = useState([])
  const [data, setData] = useState(TopChartsLinks)
  const [favorite, setFavorite] = useState([]); // <= this state holds the id's of all favorite reciepies

// following function handles the operation of adding fav recipes's id's

  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };

// this one does the exact opposite, it removes the favorite recipe id's
  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp)
  };
  let findfavorite = data.filter(item => favorite.includes(item.id));


    function handleClick(id) {
        if (isClicked === id){
            setIsClicked()
        } else {
            setIsClicked(id)
        }
    }
  
  return (
    <div>
   <h1 className="font-bold text-3xl my-4">Top Charts</h1>
  <div className="flex gap-8">
    <div className="flex md:flex-col gap-3">
    {data.map((item) => {
    const {id,title,subtitle,images,heart,collection,duration} = item;

        return (
          <section key={id} className='flex justify-between bg-[#1A1E1F] w-[323px] h-[233px] md:w-[417px] md:h-[96px]'>
            <div className="flex flex-col md:flex-row gap-2   p-3">
              <img src= {images} alt={title} className="w-[64px]"/>
            
           
           <div>
           <h2>{title}</h2>
           <p>{subtitle}</p>
           <p>{duration}</p>
           </div>
           </div>
           
          <div className="relative"  onClick={() => handleClick(id)}>
            <div className="absolute border border-yellow-500 w-8 h-8 top-2 right-2 rounded-full">
            {isClicked === id ? (
              <img src={heart} alt='heart'
              className="m-2"
              onClick={() =>  addToFavorite(id)}
              />
            ): (<img src={collection} alt='heart'
            className="m-2"
            />)}
            </div>
          </div>
          
          </section>
        )
      })}
    </div>

  </div>
    </div>
    
  )

}

export default TopSongs;
