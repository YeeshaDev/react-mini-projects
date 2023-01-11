import React from 'react';
import Vector from '../assets/Vector.svg';
import whiteHeart from '../assets/whiteHeart.svg';
import Hero from '../assets/hero.png'
function HeroCard() {
    return (
        <div>
           <div className='relative bg-[#609eaf] rounded-[40px] w-[250px] 
           sm:w-[400px] lg:w-[686px]  h-[380px] md:h-[376px] mt-10 overflow-hidden -ml-5 sm:ml-0'>
           <div>
                <img src={Hero} alt='hero' className='absolute w-[350px] top-0 right-0 hidden lg:block z-[999]'/>
            </div>
            <div >
 <img src={Vector}
 className='absolute -top-[4rem] md:-top[7rem] lg:top-[1rem] -right-[4rem] 
 lg:right-0 rotate-[90deg] lg:rotate-0 h-fit '/>
 <div className='max-w-[200px] md:max-w-[400px] ml-5 md:ml-7'>
 <h3 className='mt-3 text-[12px] font-[400]'>Currated Playlist</h3>
 <h1 className=' mt-[40%]  md:mt-[20%] font-[700] text-[35px]'>R & B Hits</h1>
 <p className='text-[10px] md:[14px] font-[400] whitespace-normal md:whitespace-nowrap '>All mine, Lie again, Petty call me everyday,<br/>
Out of time, No love, Bad habit,<br/>
and so much more</p>
<div className='flex flex-col justify-between items-center max-w-[70%] md:max-w-[50%] mt-[40%] md:mt-[20%]'>
<div className='flex ml-3'>
<img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='likes'
className='w-8 h-8 rounded-full -ml-2'
/>
<img src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='likes'
className='w-8 h-8 rounded-full -ml-2'
/>
<img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='likes'
className='w-8 h-8 rounded-full -ml-2'
/>
<img src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='likes'
className='w-8 h-8 rounded-full -ml-2'
/>
<div className='flex items-center justify-between gap-1 md:gap-2'>
    <img src={whiteHeart} alt='likes' className='ml-2 '/>
    <p className='text-sm md:text-lg whitespace-nowrap'>33k likes</p>
</div>
</div>
</div>
 </div>
 </div>
           </div>
           
           <div>
           </div>
           </div>
        
    )
}

export default HeroCard