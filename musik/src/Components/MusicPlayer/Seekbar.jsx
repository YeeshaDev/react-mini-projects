import React from 'react';

const Seekbar = ({ value, min, max, onInput, appTime }) => {
  
  
  return (
    
      <div className='hidden md:block relative w-full h-1 rounded bg-[#ffffff1a]'>
      <input
        
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="opacity-0 absolute md:block w-full h-1"
      />
      <div
      className='bg-[#facd66] w-full h-1 rounded-full ' 
      style={{width:appTime + '%'}}>
        <div
      className='absolute border border-white w-[1.1rem] h-[1.1rem] 
      rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[0.129rem]' 
      style={{left:appTime + '%'}}>
        <div
      
      className='bg-[#facd66] w-[0.7rem] h-[0.7rem] rounded-full' 
      ></div>
        </div>
        </div>
      </div>

      
     
      
  
  );
};

export default Seekbar;
