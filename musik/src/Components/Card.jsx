import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import Image from '../assets/Rectangle 14.png'
import {playPause,setActiveSong} from '../redux/features/playerSlice'
import { useState } from "react";



const Card = ({song,index,data,isPlaying,activeSong}) => {

  const [defaultImage,setDefaultImage] = useState('../assets/Rectangle 14.png')
const dispatch = useDispatch();

const handlePauseBtn = () => {
dispatch(playPause(false))
}

const handlePlayBtn = () => {
dispatch(setActiveSong({song,index,data}));
dispatch(playPause(true))
}


  return (
  <div className="flex flex-col w-[150px] h-[150px] lg:h-[250px] p-4 
  animate-slideup backdrop-blur-sm
  cursor-pointer hover:scale-[1.05] transition-all shrink-0">
    
  <div className="relative w-full h-56 group">
    <div className={`absolute right-[0] bottom-[0] bg-opacity-50 group-hover:flex ${activeSong?.title ===song.title ? 'flex bg-opacity-70' : 'hidden'}`}>
 <PlayPause
 song={song}
 handlePause={handlePauseBtn}
 handlePlay={handlePlayBtn}
 isPlaying={isPlaying}
activeSong={activeSong}
 />
    </div> {/*{movies.map(
          (movie) =>
            movie.backdrop_path !== null && */}
<img src={song.images?.coverarthq  }
alt='song covers'
className='rounded-[1.56rem] w-[153px] h-[153px]'
/>
  </div>
  <div className="mt-4 flex flex-col">
    <p className="font-bold text-lg truncate">
      
      {song.title}
      
    </p>
    <p className=" text-sm text-gray-300 truncate">

      {song.subtitle}
      
    </p>

  </div>
    </div>
  )
  };

export default Card;
