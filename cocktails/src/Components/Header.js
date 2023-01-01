import React from 'react';
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='navbar-content'>
            <Link to = '/' style={{textDecoration:'none'}}>
          <img src={logo} 
          alt='cocktail db logo' 
          className='logo' />
          </Link>
          <ul className='nav-items'>
            <Link to = '/' style={{textDecoration:'none'}}>
             <li>Home</li>
             </Link>
             <Link to= '/about' style={{textDecoration:'none'}}>
             <li>About</li>
             </Link>
             <Link to='/services' style={{textDecoration:'none'}}>
             <li>Services</li>
             </Link>
            </ul> 
        </div>
    )
}

export default Header
