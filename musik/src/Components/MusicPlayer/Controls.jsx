import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex flex-row-reverse items-center justify-around md:w-36 lg:w-52 2xl:w-80 mb-3">
    <BsArrowRepeat size={20} color={repeat ? '#FACD66' : 'white'} onClick={() => setRepeat((prev) => !prev)} className ="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <span className='w-9 h-9 bg-[#FACD66] rounded-full flex items-center justify-center shadow-[ 0px 0px 18px rgba(255, 255, 255, 0.3)]'>
      <BsFillPauseFill size={30} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      </span>
    ) : (
      <span className='w-9 h-9 bg-[#FACD66] rounded-full flex items-center justify-center shadow-[ 0px 0px 18px rgba(255, 255, 255, 0.3)]'>
      <BsFillPlayFill size={30} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      </span>
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? '#FACD66' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
