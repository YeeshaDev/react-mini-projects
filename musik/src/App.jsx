import {Routes,Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import TopChart from './Pages/TopChart';
import Search from './Pages/Search';
import Searchbar from './Components/Searchbar';
import Collection from './Pages/Collection';
import MusicPlayer from './Components/MusicPlayer';

function App() {

  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex text-white overflow-hidden">
      <Sidebar/>
      <div className='max-w-full h-full '>
        <Searchbar />
      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path="/top-charts" element={<TopChart />} />
        <Route path="/search/:searchTerm" element={<Search />}/>
        <Route path="/collection/:id" element={<Search />}/>
      </Routes>
      </div>
      </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-[-10px] left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#222] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
    
  )
}

export default App
