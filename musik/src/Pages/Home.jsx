import React from 'react';
import HeroCard from '../Components/HeroCard';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import TopSongs from '../Components/TopSongs';
import CountryTracks from '../Components/Trending';
import Error from '../Components/Error';
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from '../redux/services/Api';

function Home() {
    const {genreListId} = useSelector((state) => state.player)
    const {activeSong,isPlaying} = useSelector((state) => state.player)
    const {data,isFetching,error} = useGetTopChartsQuery();
    
    let topsongs = data?.slice(0,15)
    
    if(isFetching) {
      return (
        <Loader/>
      )
    }

    
    return (
        <div>
        
         <div className='flex flex-col lg:flex-row lg:items-center ml-3 gap-5 '>
           <HeroCard/>
          
           <div className='flex overflow-x-auto overflow-y-hidden h-[250px] md:h-[100%] 
        scrollbar-thin scrollbar-thumb-[#1A1E1F] w-[100%] '>
           <TopSongs/>
          
           </div>
        </div>
        <div className='m-3 md:m-7 h-[100%]'>
        <h1 className=' font-bold text-2xl ml-3'>Trending</h1>
        <div className='flex  overflow-x-auto overflow-y-hidden h-[250px] 
        scrollbar-thin scrollbar-thumb-[#1D2123] w-[100%] lg:max-w-6xl '>
          
     {topsongs?.map((song,index) => {
  return (
    <Card
    key={song.key}
    song={song}
    index={index}
    data={data}
    isPlaying={isPlaying}
  activeSong={activeSong}
    />
  )
     })}
        </div>
        </div>
        <div className='m-3 md:m-7 h-[100%]'>
        <h1 className=' font-bold text-2xl ml-3'>Trending</h1>
        <div className='flex  overflow-x-auto overflow-y-hidden h-[250px] 
        scrollbar-thin scrollbar-thumb-[#1D2123] w-[100%] lg:max-w-6xl'>
          
     {topsongs?.map((song,index) => {
  return (
    <Card
    key={song.key}
    song={song}
    index={index}
    data={data}
    isPlaying={isPlaying}
  activeSong={activeSong}
    />
  )
     })}
        </div>
        </div>
     <CountryTracks/>
    
        
      
        </div>
        
    )
}

export default Home
