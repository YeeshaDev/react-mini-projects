import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import './Header.css';

function Header() {
    const[menu,setMenu] = useState(true);
    
   
    const handleClick = () => {
        setMenu(prev => !prev)
        
        console.log('clicked')
    }
    
    return (
        <header className='header-content'>
          <nav>
            <div>
            <h1 className='nav-logo' onClick={() => alert('lets play')}>
                Yeesha<span >Dev</span></h1>
                </div>
                {(menu &&<div>
            <ul>
                <a href='#'><li>Home</li></a>
                <a href='#'><li onClick={() => alert('lets play')}>About</li></a>
                <a href='#'><li>Projects</li></a>
                <a href='#'><li>Contacts</li></a>
            </ul>
            
            <button className='resume-btn' onClick={() => alert('lets play')}>Resume</button>
            </div>)}
    
                <button className='menu-btn' onClick={handleClick}>
                    {menu ? 'yay' : 'nah'}
                </button>
                  
         
            
            </nav> 

            <hr/> 
        </header>
    )
}

export default Header
