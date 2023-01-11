import {FaPlayCircle,FaPauseCircle} from 'react-icons/fa'
const PlayPause = ({isPlaying,activeSong,handlePause,
handlePlay,song}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
  size={35}
  className='text-[#FACD66]'
  onClick={handlePause}
  />
) : (
  <FaPlayCircle
  size={35}
  className='text-[#FACD66]'
  onClick={handlePlay}
  />
)
  
);

export default PlayPause;
