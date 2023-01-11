import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Error from './Error';
import Card from './Card'
import { useGetSongsByCountryQuery } from '../redux/services/Api';

const CountryTracks = () => {
   
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(true)
console.log(country)
    const {activeSong,isPlaying} = useSelector((state) => state.player);
    const {data,isFetching,error} = useGetSongsByCountryQuery(country);
 
    const songs = data?.slice(0,15)
    //Using geo ipify api to get the current location of the user
    useEffect(() => {
axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_7wg0MVffE3a0tvkvoyZXuUJfZbIdq')
.then((res) => setCountry(res?.data?.location?.country))
.catch((error)=> console.log(error))
.finally(() => setIsLoading(false))
    },[country])
    
    if(isFetching && isLoading) return <Loader/>
    if(error && country) return <Error/>
return (
<div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Popular Around You 
      <span className="font-black"> ({country})</span></h2>

      <div className='flex  overflow-x-auto overflow-y-hidden h-[250px] 
        scrollbar-thin scrollbar-thumb-[#1D2123] w-[100%] lg:max-w-6xl'>
        {songs?.map((song, i) => (
          <Card
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
)
}
export default CountryTracks;